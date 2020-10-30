import React from 'react';
import './App.css';
import { Link } from 'react-router-dom';
import facebook from './img/facebook.png';
import LinkedIn from './img/linkedin.png';
import youtube from './img/youtube.png';
import twitter from './img/twitter.png';
import footerlogo from './img/g-s logo compact.png';

function Footer() {
  return (
    <div className='footer-container'>
      
      <div class='footer-links'>
        <div className='footer-link-wrapper'>
        <div class='footer-logo'>
            <Link to='/' className='footer-logo'>
            <img src={footerlogo} alt='logo'/>
            </Link>
          </div>
          <div class='footer-link-items'>
          
            <Link to='/'>ABOUT</Link>
          </div>
          <div class='footer-link-items'>
            
            <Link to='/'>MARKETS</Link>
          </div>
        </div>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            
            <Link to='/'>SERVICES</Link>
          </div>
          <div class='footer-link-items'>
            
            <Link to='/'>PROJECTS</Link>
          </div>
          <div class='footer-link-items'>
            
            <Link to='/'>CAREERS</Link>
          </div>
          <div class='footer-link-items'>
            
            <Link to='/'>NEWS</Link>
          </div>
          <div class='footer-link-items'>
            
            <Link to='/'>CONTACT US</Link>
          </div>
         

        </div>
       
       
          <div class='social-icons'>
        <Link to='/' className='footer-logo'>
            <img src={facebook} alt='logo'/>
            </Link>
          </div>
          <div class='social-icons'>
        <Link to='/' className='footer-logo'>
            <img src={LinkedIn} alt='logo'/>
            </Link>
            
          </div>
          <div class='social-icons'>
        <Link to='/' className='footer-logo'>
            <img src={youtube} alt='logo'/>
            </Link>
            
           
          </div>

           <div class='social-icons'>
        <Link to='/' className='footer-logo'>
            <img src={twitter} alt='logo'/>
            </Link>
            
          
          </div>
       

      </div>
      <section class='social-media'>
        <div class='social-media-wrap'>
        
          <small class='website-rights'>legal Terms & Conditions  Private Policy
               2019 G&S Engineering Servies. All rights reserved</small>
         
        </div>
        
      </section>
    </div>
  );
}

export default Footer;
