import React from 'react';

const About = () => {
  return (
    <div className="container-fluid about-us-container p-5 bg-light">
      <div className="row align-items-center mb-5 text-center">
        <div className="col-md-6 mx-auto">
          <h1 className="display-4 font-weight-bold">Welcome to Immunilink</h1>
          <p className="lead">Manage and track your child's vaccinations online with ease</p>
        </div>
      </div>
      
      <div className="row mb-4">
        <div className="col">
          <div className="card shadow-sm border-0">
            <div className="card-body">
              <h4 className="card-title">Our Mission</h4>
              <p className="card-text">
                At Immunilink, we believe that every child deserves to grow up healthy and strong. That's why we created a web-based platform to help parents keep their child's immunization records up-to-date and easily accessible, anywhere, anytime.
              </p>
              <ul>
                <li>Track your child's vaccination schedule online</li>
                <li>Receive reminders for upcoming vaccinations via email or SMS</li>
                <li>Access your child's immunization records from any device</li>
                <li>Get personalized vaccination recommendations based on age and region</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="row mb-4">
        <div className="col">
          <div className="card shadow-sm border-0">
            <div className="card-body">
              <h4 className="card-title">How it Works</h4>
              <p className="card-text">
                Simply create an account on our website and start tracking your child's vaccinations. Immunilink will guide you through managing vaccination schedules and provide timely reminders to ensure your child stays up to date.
              </p>
              <ul>
                <li>User-friendly interface with secure login</li>
                <li>Encrypted and confidential storage of immunization records</li>
                <li>Accessible across multiple devices – desktop, tablet, or smartphone</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="row mb-4">
        <div className="col">
          <div className="card shadow-sm border-0">
            <div className="card-body">
              <h4 className="card-title">Why Choose Immunilink?</h4>
              <p className="card-text">By using Immunilink's web platform, you can:</p>
              <ul>
                <li>Ensure your child receives all the necessary vaccinations</li>
                <li>Reduce the risk of vaccine-preventable diseases</li>
                <li>Have peace of mind knowing your child's immunization records are up-to-date and accessible whenever you need them</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="row text-center">
        <div className="col">
          <button className="btn btn-primary btn-lg mb-3">
            Sign Up Now
          </button>
          <p className="lead">
            Start managing your child's vaccinations today with Immunilink, and ensure they get the protection they need.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
