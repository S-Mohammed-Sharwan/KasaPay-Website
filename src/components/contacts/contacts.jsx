import React from 'react'
import './contacts.css'
import msgicon from '../../assets/msg-icon.png'
import mailicon from "../../assets/mail-icon.png";
import phoneicon from "../../assets/phone-icon.png";
import locationicon from "../../assets/location-icon.png";
import whitearrow from "../../assets/white-arrow.png"; 
const contacts = () => {
  return (
    <div className="contact">
      <div className="contact-col">
        <h3>
          Send us a meassage <img src={msgicon} alt="" />
        </h3>
        <p>Have questions or need support? We're here to help!</p>
        <ul>
          <li>
            <img src={mailicon} alt="" />
            support@kasapay.com
          </li>
          <li>
            <img src={phoneicon} alt="" />
            +91 74835 35850
          </li>
          <li>
            <img src={locationicon} alt="" />
            Mangalore, Karnataka, India
          </li>
        </ul>
      </div>
      <div className="contact-col">
        <form>
          <label>Your name</label>
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            required
          />

          <label>Phone Number</label>
          <input
            type="tel"
            name="phone"
            placeholder="Enter your mobile number"
            required
          />

          <label>Write your messages here</label>
          <textarea name="message"  rows="6" placeholder='Enter your message' required ></textarea>
          <button type='submit' className='btn dark-btn'>Submit now <img src={whitearrow} alt="" /></button>
        </form>
        <span></span>
      </div>
    </div>
  );
}

export default contacts
