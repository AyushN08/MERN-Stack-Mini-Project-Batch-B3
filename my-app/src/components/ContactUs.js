import React, { useState } from 'react';
import './ContactUs.css';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send formData to your server
    alert('Thank you for your message!');
    setFormData({ name: '', email: '', message: '' }); // Reset form
  };

  return (
    <div className="contact-us">
      <h2>Contact Us</h2>
      <p>If you have any questions or feedback, feel free to reach out to us!</p>
      <p>We’re here to help you with any concerns regarding our services, and we value your feedback!</p>
      <form onSubmit={handleSubmit} className="contact-form">
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="input-field"
          />
        </label>
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="input-field"
          />
        </label>
        <label>
          Message:
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            className="input-field"
          />
        </label>
        <button type="submit" className="cta-button">Send Message</button>
      </form>
    </div>
  );
};

export default ContactUs;
