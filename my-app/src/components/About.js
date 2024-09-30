import React from 'react';
import './About.css'; // Import the new CSS file

const About = () => {
  return (
    <div className="about-us-container p-5">
      <div className="row align-items-center mb-5 text-center">
        <div className="col-md-6 mx-auto">
          <h1 className="display-4 font-weight-bold">Welcome to ImmuniLink</h1>
          <p className="lead">Manage and track your child's vaccinations online with ease</p>
        </div>
      </div>

      <div className="card-container">
        <div className="card">
          <img src="./target.png" className="card-img-top" alt="Our Mission" />
          <div className="card-body">
            <h4 className="card-title">Our Mission</h4>
            <p className="card-text">
              At ImmuniLink, we believe that every child deserves to grow up healthy and strong. That's why we created a web-based platform to help parents keep their child's immunization records up-to-date and easily accessible, anywhere, anytime.
            </p>
            <ul>
              <li><i className="fas fa-check-circle"></i> Track your child's vaccination schedule online</li>
              <li><i className="fas fa-check-circle"></i> Receive reminders for upcoming vaccinations via email or SMS</li>
              <li><i className="fas fa-check-circle"></i> Access your child's immunization records from any device</li>
              <li><i className="fas fa-check-circle"></i> Get personalized vaccination recommendations based on age and region</li>
            </ul>
          </div>
        </div>

        <div className="card">
          <img src="./works.jpg" className="card-img-top" alt="How it Works" />
          <div className="card-body">
            <h4 className="card-title">How it Works</h4>
            <p className="card-text">
              Simply create an account on our website and start tracking your child's vaccinations. ImmuniLink will guide you through managing vaccination schedules and provide timely reminders to ensure your child stays up to date.
            </p>
            <ul>
              <li><i className="fas fa-check-circle"></i> User-friendly interface with secure login</li>
              <li><i className="fas fa-check-circle"></i> Encrypted and confidential storage of immunization records</li>
              <li><i className="fas fa-check-circle"></i> Accessible across multiple devices – desktop, tablet, or smartphone</li>
            </ul>
          </div>
        </div>

        <div className="card">
          <img src="./why.jpg" className="card-img-top" alt="Why Choose Us" />
          <div className="card-body">
            <h4 className="card-title">Why Choose ImmuniLink?</h4>
            <p className="card-text">By using ImmuniLink's web platform, you can:</p>
            <ul>
              <li><i className="fas fa-check-circle"></i> Ensure your child receives all the necessary vaccinations</li>
              <li><i className="fas fa-check-circle"></i> Reduce the risk of vaccine-preventable diseases</li>
              <li><i className="fas fa-check-circle"></i> Have peace of mind knowing your child's immunization records are up-to-date and accessible whenever you need them</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="row text-center">
        <div className="col">
          <button className="btn btn-primary btn-lg mb-3">
            Sign Up Now
          </button>
          <p className="lead">
            Start managing your child's vaccinations today with ImmuniLink, and ensure they get the protection they need.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
