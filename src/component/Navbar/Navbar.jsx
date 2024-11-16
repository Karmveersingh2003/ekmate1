import React, { useState, useEffect } from 'react';
import "./navbar.css";
import { FaRegMoon } from "react-icons/fa";
import { FaSun } from "react-icons/fa6";
import menubtn from "../Home/img/menu-btn.png";
import logo from "../Home/img/ekmate_logo.png";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [theme, setTheme] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleThemeToggle = () => {
    setTheme(!theme);
  };

  useEffect(() => {
    if (theme) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [theme]);

  return (
    <>
      <nav className="navbar glass" style={{ height: '70px' }}>
        {/* Logo */}
        <span>
          <a href="#home" style={{ display: 'flex', alignItems: 'center' }}>
            <img
              className="img2"
              src={logo}
              width="40"
              style={{ margin: '-25px -10px -25px -20px' }}
              alt="Logo"
            />
            <h1 className="logo">&nbsp;EkMate</h1>
          </a>
        </span>

        {/* Desktop Nav Links */}
        <ul className={`nav-links ${isMenuOpen ? "active" : ""}`}>
          <li><a href="/" className="active cir_border">Home</a></li>
          <li><a href="#events" className="cir_border">About</a></li>
          <li><a href="/contact" className="cir_border">Contact-Us</a></li>
          <li><a href="#tours" className="cir_border">Get Started</a></li>
          <li>
            <div>
              <button onClick={handleThemeToggle}>
                {theme ? <FaRegMoon /> : <FaSun />}
              </button>
            </div>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <img
          height={20}
          src={menubtn}
          alt="Menu Button"
          className="menu-btn"
          onClick={toggleMenu}
        />
      </nav>
    </>
  );
}
