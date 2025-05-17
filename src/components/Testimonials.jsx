import React from 'react';

const testimonials = [
  { name: 'Jane Doe', role: 'IT Manager', company: 'TechCorp', text: 'SoftSell helped us recover value from unused software.' },
  { name: 'John Smith', role: 'Procurement Lead', company: 'BizWare', text: 'Quick, easy, and trustworthy platform!' }
];

const Testimonials = () => {
  return (
    <section className="py-5 bg-body-secondary">
      <div className="container text-center">
        <h2 className="mb-4">Customer Testimonials</h2>
        <div className="row justify-content-center">
          {testimonials.map((t, index) => (
            <div key={index} className="col-md-5 mb-3">
              <div className="card">
                <div className="card-body">
                  <blockquote className="blockquote mb-3">“{t.text}”</blockquote>
                  <footer className="blockquote-footer">
                    {t.name}, {t.role} at <cite>{t.company}</cite>
                  </footer>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
