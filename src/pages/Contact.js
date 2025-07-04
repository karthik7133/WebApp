// pages/Contact.js
import React, { useState } from "react";
import "./Contact.css";

function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Form validation
    const { name, email, subject, message } = form;
    if (!name || !email || !subject || !message) {
      alert("Please fill out all fields.");
      return;
    }

    alert("Your message has been sent! Thank you.");
    setForm({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <div className="contact-container">
      <h2>Contact Us</h2>

      <div className="contact-content">
        <form className="contact-form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={form.name}
            onChange={handleChange}
          />
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={form.email}
            onChange={handleChange}
          />
          <input
            type="text"
            name="subject"
            placeholder="Subject"
            value={form.subject}
            onChange={handleChange}
          />
          <textarea
            name="message"
            placeholder="Your Message"
            rows="5"
            value={form.message}
            onChange={handleChange}
          />
          <button type="submit">Send Message</button>
        </form>

        <div className="contact-info">
          <h3>Get in Touch</h3>
          <p><strong>Address:</strong> 123 Main Street, Hyderabad, India</p>
          <p><strong>Phone:</strong> +91 98765 43210</p>
          <p><strong>Email:</strong> support@rentmyride.com</p>

          
        </div>
      </div>
    </div>
  );
}

export default Contact;
