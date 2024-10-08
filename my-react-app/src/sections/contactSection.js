import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import '../stylesheets/contact.css'; // Import the CSS

const ContactMe = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // I should use env here but uh O_O
    const serviceID = 'service_9lqgrki';
    const templateID = 'template_z4y3ff8';
    const userID = 'Vh3Wba2jot7y220lo';

    emailjs.send(serviceID, templateID, formData, userID)
      .then((response) => {
        alert('Thank you for the message!');
      })
      .catch((err) => {
        alert('Failed to send message. Please try again later.');
      });

    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div>
      <div className="subtitle">Contact Me</div>
      <div className="sub">General tips / bugs / improvements to the website are also appreciated!</div>
      <form className="contact-me" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name (Optional):</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Email (Optional):</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Send Message</button>
      </form>
    </div>
  );
};

export default ContactMe;