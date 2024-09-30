import React, { useState, useEffect, useRef } from 'react';
import './Homepage.css';

const testimonialsData = [
  {
    description: "ImmuniLink has made managing my child’s vaccinations so much easier! I love the timely reminders.",
    author: "Sarah, Mother of 2"
  },
  {
    description: "The best part is that all my child's medical records are in one place, and it's so easy to access them.",
    author: "John, Father of a 4-year-old"
  },
  {
    description: "Highly recommend ImmuniLink for all parents. It saves me so much time and keeps my mind at ease.",
    author: "Emily, First-time Parent"
  },
  {
    description: "No more worrying about lost paperwork. Everything is digital and safe, and I get reminders on time!",
    author: "Michael, Father of 3"
  }
];

const Homepage = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const featureRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
        }
      });
    }, { threshold: 0.2 });

    featureRef.current.forEach((item) => observer.observe(item));

    return () => {
      featureRef.current.forEach((item) => observer.unobserve(item));
    };
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prevIndex) => (prevIndex + 1) % testimonialsData.length);
    }, 5000); // Change testimonials every 5 seconds
    return () => clearInterval(timer);
  }, []);

  const nextTestimonial = () => {
    setCurrentTestimonial((prevIndex) => (prevIndex + 1) % testimonialsData.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prevIndex) => (prevIndex - 1 + testimonialsData.length) % testimonialsData.length);
  };

  return (
    <div className="homepage">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>Welcome to ImmuniLink</h1>
          <p>Manage your child’s vaccination schedule with ease, and never miss an important appointment.</p>
          <button className="cta-button">Get Started</button>
        </div>
        <div className="hero-image">
          <img src="./vaccine-web.png" alt="Vaccination Illustration" />
        </div>
      </section>

      {/* Why ImmuniLink Section */}
      <section className="why-immunilink">
        <h2>Why Choose ImmuniLink?</h2>
        <div className="features">
  <div className="feature-item" ref={(el) => featureRef.current[0] = el}>
    <img src="./calendar.jpg" alt="Track Vaccinations" className="feature-icon" />
    <div>
      <h3>Easily Track Vaccinations</h3>
      <div className="feature-description">
        <p>With ImmuniLink, keeping track of your child’s vaccination history has never been simpler. Our intuitive interface allows you to easily log and monitor past and upcoming vaccinations, ensuring you’re always informed about your child's health milestones.</p>
      </div>
    </div>
  </div>
  <div className="feature-item" ref={(el) => featureRef.current[1] = el}>
    <img src="./alarm.png" alt="Timely Notifications" className="feature-icon" />
    <div>
      <h3>Timely Notifications</h3>
      <div className="feature-description">
        <p>Receive timely alerts for upcoming vaccinations, ensuring your child stays on schedule. Our system will send you reminders days before each appointment, so you can plan ahead with peace of mind.</p>
      </div>
    </div>
  </div>
  <div className="feature-item" ref={(el) => featureRef.current[2] = el}>
    <img src="./file.png" alt="Secure Records" className="feature-icon" />
    <div>
      <h3>Secure Record Storage</h3>
      <div className="feature-description">
        <p>Store all your child’s vaccination records securely in one place. ImmuniLink uses top-tier encryption to keep sensitive information safe, while still making it easy for you to access anytime, anywhere.</p>
      </div>
    </div>
  </div>
</div>

      </section>

      {/* Testimonials Section */}
      <section className="testimonials">
        <h2>What Parents Are Saying</h2>
        <div className="testimonial-slider">
          <button className="slider-button left" onClick={prevTestimonial}>
            &#8249;
          </button>
          <div className="testimonial-card">
            <p>{testimonialsData[currentTestimonial].description}</p>
            <span>{testimonialsData[currentTestimonial].author}</span>
          </div>
          <button className="slider-button right" onClick={nextTestimonial}>
            &#8250;
          </button>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="cta-section">
        <h2>Ready to Simplify Your Vaccination Management?</h2>
        <p>Join thousands of parents who trust ImmuniLink to keep their children safe and healthy.</p>
        <button className="cta-button">Sign Up Now</button>
      </section>
    </div>
  );
};

export default Homepage;
