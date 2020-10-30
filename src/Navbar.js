import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import dra from './img/dra-logo.png';
import logo from './img/full g-s logo.png';


function NavBar() {
    const [click, setClick] = useState(false);
    const handleClick = () =>setClick(!click);
    const closeMobilemenu = () =>setClick(false);

    return (
        <>
        
     
    
        <nav className='navbar'>
        <div>  <img src={dra} alt='dra'  class="rounded float-right"/></div>
        <div className='navbar-container'>
        <Link to='/' className='navbar-logo'>
        <img src={logo} alt='logo'/>
        </Link>
        <div className='menu-icon' onClick={handleClick}>
        <i className={click ? 'fas fa-times' : 'fas fa-bars'} ></i>
        </div>
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
            <Link to='/' className='nav-links' onClick={closeMobilemenu}>
            Home
            </Link>
            </li>
            <li className='nav-item'>
            <Link to='/about' className='nav-links' onClick={closeMobilemenu}>
            About
            </Link>
            </li>
            <li className='nav-item'>
            <Link to='/markets' className='nav-links' onClick={closeMobilemenu}>
            Markets
            </Link>
            </li>
            <li className='nav-item'>
            <Link to='/services' className='nav-links' onClick={closeMobilemenu}>
            Services
            </Link>
            </li>
            <li className='nav-item'>
            <Link to='/projects' className='nav-links' onClick={closeMobilemenu}>
           Projects
            </Link>
            </li>
            <li className='nav-item'>
            <Link to='/careers' className='nav-links' onClick={closeMobilemenu}>
            Careers
            </Link>
            </li>
            <li className='nav-item'>
            <Link to='/news' className='nav-links' onClick={closeMobilemenu}>
            News
            </Link>
            </li>
            <li className='nav-item'>
            <Link to='/contactUs' className='nav-links' onClick={closeMobilemenu}>
            Contact Us
            </Link>
            </li>
        </ul>
        
        </div>
        </nav>
        </>
    )
}

export default NavBar