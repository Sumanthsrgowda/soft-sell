import React from 'react';

const features = [
  { icon: '✅', text: 'Trusted Reseller Network' },
  { icon: '⚡', text: 'Instant Valuations' },
  { icon: '🔒', text: 'Secure Transactions' },
  { icon: '💸', text: 'No Hidden Fees' }
];

const WhyChooseUs = () => {
  return (
    <section className="py-5">
      <div className="container text-center">
        <h2 className="mb-4">Why Choose Us</h2>
        <div className="row">
          {features.map((feature, index) => (
            <div key={index} className="col-md-6 mb-4">
              <div className="card h-100">
                <div className="card-body">
                  <div className="fs-2 mb-2">{feature.icon}</div>
                  <p className="card-text">{feature.text}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
