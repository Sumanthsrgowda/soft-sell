import React from 'react';

const steps = [
  { icon: '📤', title: 'Upload License' },
  { icon: '💰', title: 'Get Valuation' },
  { icon: '🏦', title: 'Get Paid' }
];

const HowItWorks = () => {
  return (
    <section className="py-5 bg-body-secondary">
      <div className="container text-center">
        <h2 className="mb-4">How It Works</h2>
        <div className="row">
          {steps.map((step, index) => (
            <div key={index} className="col-md-4 mb-3">
              <div className="fs-1 mb-2">{step.icon}</div>
              <h5>{step.title}</h5>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
