import React, { useState } from 'react';
import './Contact.css';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message sent! Thank you for reaching out.");
    
  };

  return (
    <div className="contact-container">

      <div className="contact-right">
        <h2>Contact Me</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Name:</label>
            <input
              type="text"
              name="name"
              placeholder="Your name"
              value={formData.name}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label>Email:</label>
            <input
              type="email"
              name="email"
              placeholder="Your email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label>Message:</label>
            <textarea
              name="message"
              rows="4"
              placeholder="Your message"
              value={formData.message}
              onChange={handleChange}
            ></textarea>
          </div>
          <button type="submit" className="submit-button">
            Send Message
          </button>
        </form>
        <div><h2>Contact Details</h2>
        <p>
          <strong>Name:</strong> ADITHYA K.M
        </p>
        <p>
          <strong>Email:</strong> adithyakmanoj@gmail.com
        </p>
        <p>
          <strong>Phone:</strong> +91 ............
        </p></div>
      </div>
    </div>
  );
}

export default Contact;
