import React from 'react'
import './contacts.css'

const contacts = () => {
  return (
    <div className='contact'>
      <div className="contact-col">
        <h3>Send us a message</h3>
        <p>Feel free to reach out through contact form or find our contact information below. Your feedback, questions, and suggestions are important to us as we strive to provide exceptional service to our customers.</p>
       <ul class="contact-info">
         <li><i class="fas fa-envelope"></i> support@kasapay.com</li>
         <li><i class="fas fa-phone"></i> +91 7483536650</li>
         <li><i class="fas fa-map-marker-alt"></i> Mangalore, Karnataka, India</li>
       </ul>
      </div>
      <div className="contact-col">
        <form >
            <label>Your Name</label>
            <input type="text" name='name' placeholder='Enter your name' required />
            <label>Email</label>
            <input type="email" name='email' placeholder='Enter your email address' required/>
            <label>Write your Message here</label>
            <textarea name="message" rows="6" placeholder='Type your message here' required></textarea>
            <button type='submit' className='btn dark-btn'>Submit</button>
        </form>
        </div>
    </div>
  )
}

export default contacts