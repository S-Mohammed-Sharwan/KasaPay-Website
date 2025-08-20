import React from 'react'
import './navbar.css'

const navbar = () => {
  return (
    <nav className='container'>
         <div class="nav-brand">
          <div className='logo'>
            <span><a href='#'>KasaPay</a></span>
          </div>  
          </div>
        <ul>
            <li>Home</li>
            <li>About us</li>
            <li>Features</li>
            <li>Download</li>
            <li><button className='btn'>Contact us</button></li>
        </ul>
    </nav>
  )
}

export default navbar
