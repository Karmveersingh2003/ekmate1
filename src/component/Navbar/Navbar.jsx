import React, { useState,useEffect } from 'react';
import "./navbar.css"
import { FaRegMoon } from "react-icons/fa";
import { FaSun } from "react-icons/fa6";
import menubtn from "../Home/img/menu-btn.png"


export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const [theme,setTheme]=useState(false);
  

  const handleClick=()=>{
      setTheme(!theme)
  }
  useEffect(()=>{
      if(theme==true){
          document.body.classList.add("dark");
      }else{
          document.body.classList.remove("dark");
      }
      
  })
  
  return (
  <>
   {/* Navbar */}
   <nav className="navbar glass" style={{ height: '70px' }}>
        <span>
          <a href="#home" style={{ display: 'flex', alignItems: 'center' }}>
            <img
              className="img2"
              src=""
              width="40"
              style={{ margin: '-25px -10px -25px -20px' }}
              alt="Logo"
            />
            <h1 className="logo">&nbsp;EkMate</h1>
          </a>
        </span>
        <ul className="nav-links">
          <li>
            <a href="/"  className="active cir_border">
              Home

            </a>
          </li>
          <li>
            <a href="#events"  className="cir_border">
             About
            </a>
          </li>
          <li>
            <a href="/contact"  className="cir_border">
              Contact-Us
            </a>
          </li>
          <li>
            <a href="#tours"  className="cir_border">
            Get Started
            </a>
          </li>
          
          <li>
            <div>
              <input type="checkbox" className="checkbox dark" id="checkbox" />
              <label htmlFor="checkbox" className="label">
              <button onClick={handleClick}>{theme? <FaRegMoon/>:<FaSun/>}</button>
                <i className="fa fa-moon-o"><FaRegMoon/></i>
                <i className="fa fa-sun-o"><FaSun/></i>
                <div className="ball"></div>
              </label>
            </div>
          </li>
        </ul>
        
         <img
        src={menubtn}
        alt="Menu Button"
        className="menu-btn"
        onClick={toggleMenu}
      />

<ul className={`nav-links ${isMenuOpen ? "active" : ""}`}>
        <li><a href="/">Home</a></li>
        <li><a href="/contact">Contact</a></li>
        <li><a href="/login">login</a></li>
        <li><a href="#quad">Section 4</a></li>
        <li><a href="#quint">Section 5</a></li>
        <li><a href="#hex">Section 6</a></li>
        <li><a href="#hept">Section 7</a></li>
      </ul>
      </nav>

  </>
  )
}
