import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
        <div className="footer-content">
            <div className="footer-content-left">
                <div className="footer-logo-container">
                <img src={assets.logo} alt="" className='footer-logo'/>
                </div>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui, ea molestiae? Voluptas laudantium, sed debitis sapiente dicta incidunt itaque quam, aut ipsam magnam voluptatum, excepturi aliquid dolor. Maiores, amet magnam?</p>
                <div className="footer-social-icons">
                    <img src={assets.facebook_icon} alt="" />
                    <img src={assets.twitter_icon} alt="" />
                    <img src={assets.linkedin_icon} alt="" />
                </div>
            </div>
            <div className="footer-content-center">
                <h2>COMPANY</h2>
                <ul>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Delivery</li>
                    <li>Privacy Policy</li>
                </ul>
            </div>
            <div className="footer-content-right">
                <h2>GET IN TOUCH</h2>
                <ul>
                    <li>Phone: +1 234 567 890</li>
                    <li>Email: contact@eatscape.com</li>
                </ul>
            </div>
        </div>
        <hr />
        <p className='footer-copyright'>
            Copyright © 2024 Eatscape.com - All rights reserved.
        </p>      
    </div>
  )
}

export default Footer
