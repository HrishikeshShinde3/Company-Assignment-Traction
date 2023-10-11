import React,{useState} from 'react';
import { Link } from 'react-router-dom';


import './Header.css'


function Header() {
  
  return (
    <section className="nav">
      <h1>TRACTION SHASTRA</h1>
      <h3 className="span loader">
        <span className="m">B</span>
        <span className="m">E</span>
        <span className="m">N</span>
        <span className="m">E</span>
        <span className="m">F</span>
        <span className="m">I</span>
        <span className="m">T</span>
        <span className="m">S</span>
        <span className="m">&nbsp;</span>
        <span className="m">o</span>
        <span className="m">f</span>
        <span className="m">&nbsp;</span>
        <span className="m">T</span>
        <span className="m">E</span>
        <span className="m">C</span>
        <span className="m">H</span>
        <span className="m">N</span>
        <span className="m">O</span>
        <span className="m">L</span>
        <span className="m">O</span>
        <span className="m">G</span>
        <span className="m">I</span>
        <span className="m">E</span>
        <span className="m">S</span>
      </h3>
      <div className="nav-container">
        <a className="nav-tab" href="Home">Home</a>
        <a className="nav-tab" href="About us">About us</a>
        <a className="nav-tab"  href="Services">Services</a>
        <a className="nav-tab" href="Our work">Our work</a>
        <a className="nav-tab" href="contact-us">Contact us</a>
        <span className="nav-tab-slider"></span>

        
      </div>
    </section>
  );
}

export default Header;
