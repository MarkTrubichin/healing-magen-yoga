import React from 'react';
import '../styles/header.css';
import logo from '../images/healing-magen-yoga-logo.png';




function Header() {
  return (
    <header className="header">
        <span>
            <a href='/'><img src={logo} alt='logo' height={60} width={60} className='logo'></img></a>
        </span>
        <ul>
            <li><a href='/'>Home</a></li>
            <li><a href='/courses'>Courses</a></li>
            <li><a href='/contactus'>Contact us</a></li>
        </ul>
    </header>
  );
}

export default Header;
