import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
import './contacts.css';

const Contacts = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_oh6am3s',     // Replace with EmailJS Service ID
      'template_nxk8mah',    // Replace with EmailJS Template ID
      form.current,
      'i0S6yv2wrrsg9G3Ut'      // Replace with EmailJS Public Key
    )
    .then((result) => {
        alert("✅ Your query has been sent. We’ll connect with you soon!");
        e.target.reset();
    }, (error) => {
        alert("❌ Failed to send message. Try again later.");
    });
  };

  return (
    <div>
      <div className="title" id="contact">
        <div className="title">
          <h3>Contact Us</h3>
          <h2>Get in Touch</h2>
        </div>
      </div>

      <div className='contact'>
        <div className="contact-col">
          <h3>Send us a message</h3>
          <p>
            Feel free to reach out through contact form or find our contact information below.
          </p>
          <ul className="contact-info">
            <li><i className="fas fa-envelope"></i> support@swachpay.com</li>
            {/*<li><i className="fas fa-phone"></i> +91 --------</li>*/}
            <li><i className="fas fa-map-marker-alt"></i> Mangalore, Karnataka, India</li>
          </ul>
        </div>

        <div className="contact-col">
          <form ref={form} onSubmit={sendEmail}>
            <label>Your Name</label>
            <input type="text" name="name" placeholder="Enter your name" required />
            <label>Email</label>
            <input type="email" name="email" placeholder="Enter your email address" required />
            <label>Write your Message here</label>
            <textarea name="message" rows="6" placeholder="Type your message here" required></textarea>
            <button type="submit" className="btn dark-btn">Submit</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contacts;
