import React from 'react'
import './footer.css'

const footer = () => {
  return (
    <div>
      <footer class="footer">
        <div class="container">
            <div class="footer-content">
                <div class="footer-section">
                    <h3>SwachPay</h3>
                    <p>Mangalore's trusted payment solution for waste collection teams.</p>
                    <div class="social-links">
                        <a href="#"><i class="fab fa-facebook"></i></a>
                        <a href="#"><i class="fab fa-twitter"></i></a>
                        <a href="#"><i class="fab fa-linkedin"></i></a>
                        <a href="#"><i class="fab fa-instagram"></i></a>
                    </div>
                </div>
                <div class="footer-section">
                    <h4>Quick Links</h4>
                    <ul>
                        <li><a href="#home">Home</a></li>
                        <li><a href="#about">About</a></li>
                        <li><a href="#features">Features</a></li>
                        <li><a href="#download">Download</a></li>
                    </ul>
                </div>
                <div class="footer-section">
                    <h4>Support</h4>
                    <ul>
                        <li><a href="#contact">Help Center</a></li>
                        <li><a href="#contact">FAQs</a></li>
                        <li><a href="#contact">Contact Us</a></li>
                        <li><a href="#footer">Privacy Policy</a></li>
                    </ul>
                </div>
                <div class="footer-section">
                    <h4>Contact Info</h4>
                    <p>Mangalore, Karnataka, India</p>
                    <p>support@swachpay.com</p>
                    {/*<p>+91 ---------</p>*/}
                </div>
            </div> 
            <div class="footer-bottom">
                <p>&copy; 2025 SwachPay. All rights reserved. | Designed for waste collection teams in India</p>
            </div>             
        </div>
    </footer>
    </div>
  )
}

export default footer
    