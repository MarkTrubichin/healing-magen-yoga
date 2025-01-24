import React from 'react';
import '/Users/marktrubichin/work/python/healing-magen-yoga/frontend/src/styles/header.css';
import logo from '../images/healing-magen-yoga-logo.png';




function Header() {
  return (
    <header className="header">
        <span>
            <a href='/'><img src={logo} alt='logo' height={60} width={60} className='logo'></img></a>
        </span>
        <ul>
            <li><a href='/'>Home</a></li>
            <li><a href='/'>Curses</a></li>
            <li><a href='/'>Contact us</a></li>
        </ul>
    </header>
  );
}

export default Header;
