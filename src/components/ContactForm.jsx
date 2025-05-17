import React, { useState } from 'react';

const ContactForm = () => {
  const [form, setForm] = useState({ name: '', email: '', company: '', type: '', message: '' });

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Form submitted!');
  };

  return (
    <section className="py-5" id="contact">
      <div className="container" id="container-form">
        <h2 className="text-center mb-4">Get In Touch</h2>
        <form onSubmit={handleSubmit} className="row g-3">
          <div className="col-md-6">
            <input name="name" className="form-control" placeholder="Name" required onChange={handleChange} />
          </div>
          <div className="col-md-6">
            <input name="email" type="email" className="form-control" placeholder="Email" required onChange={handleChange} />
          </div>
          <div className="col-md-6">
            <input name="company" className="form-control" placeholder="Company" onChange={handleChange} />
          </div>
          <div className="col-md-6">
            <select name="type" className="form-select" required onChange={handleChange}>
              <option value="">Select License Type</option>
              <option>Antivirus</option>
              <option>Office Suite</option>
              <option>OS</option>
            </select>
          </div>
          <div className="col-12">
            <textarea name="message" className="form-control" rows="4" placeholder="Message" required onChange={handleChange}></textarea>
          </div>
          <div className="col-12 text-center">
            <button className="btn btn-primary px-5" type="submit">Send Message</button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
