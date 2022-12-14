import React from 'react';
import { socialLinks } from './data/SocialLinks';
import '../stylesheets/contact.css';

const Contact = () => (
  <div className="contact-section">
    <h2 className="contact-page-title">
      Contact Me.
    </h2>
    <p className="contact-page-description">
      I am open to job opportunities and side projects. Connect with me via WhatsApp:
      <span className="contact-page-description-white"> +260964754040 </span>
      or email me
      <span className="contact-page-description-white"> tobinchilongojnr@gmail.com </span>
    </p>
    <form action="">
      <input className="contact-form-input" type="text" name="name" placeholder="Your Name *" maxLength="50" required />
      <input className="contact-form-input" type="email" name="email" placeholder="Your Email *" maxLength="50" required />
      <input className="contact-form-input" type="text" name="subject" placeholder="Write a Subject *" maxLength="50" required />
      <textarea className="contact-form-input" name="message" placeholder="Your Message *" id="" rows="10" required />
      <button type="submit" className="contact-form-submit-button">Submit</button>
    </form>
    <div className="footer-social-links">
      <h3 className="footer-icon">TobinCoding</h3>
      <ul className="footer-social-links-container">
        {
          socialLinks.map((link) => (
            <li key={link.id}>
              <a href={link.link}>
                <link.icon className="social-icon" />
              </a>
            </li>
          ))
        }
      </ul>
      <p className="footer-license-description">Copyright © 2022 Tobin Chilongo Jnr. All Rights Reserved.</p>
    </div>
  </div>
);

export default Contact;
