import React, { useState, useEffect } from "react";
import "./navbar.css";
import { FaRegMoon } from "react-icons/fa";
import { FaSun } from "react-icons/fa6";
import menubtn from "../Home/img/menu-btn.png";
import logo from "../Home/img/ekmate_logo.png";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [theme, setTheme] = useState(false);
  const [activeLink, setActiveLink] = useState("Home"); // Track active link

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

  // Function to handle link click
  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

  return (
    <>
      <nav className="navbar glass" style={{ height: "70px" }}>
        {/* Logo */}
        <span>
          <a href="#home" style={{ display: "flex", alignItems: "center" }}>
            <img
              className="img2"
              src={logo}
              width="40"
              style={{ margin: "-25px -10px -25px -20px" }}
              alt="Logo"
            />
            <h1 className="logo">&nbsp;EkMate</h1>
          </a>
        </span>

        {/* Desktop Nav Links */}
        <ul className={`nav-links ${isMenuOpen ? "active" : ""}`}>
          <li>
            <a
              href="/"
              className={`cir_border ${activeLink === "Home" ? "active" : ""}`}
              onClick={() => handleLinkClick("Home")}
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#events"
              className={`cir_border ${activeLink === "About" ? "active" : ""}`}
              onClick={() => handleLinkClick("About")}
            >
              About
            </a>
          </li>
          <li>
            <a
              href="/contact"
              className={`cir_border ${
                activeLink === "Contact-Us" ? "active" : ""
              }`}
              onClick={() => handleLinkClick("Contact-Us")}
            >
              Contact-Us
            </a>
          </li>
          <li>
            <a
              href="/login"
              className={`cir_border ${
                activeLink === "GetStarted" ? "active" : ""
              }`}
              onClick={() => handleLinkClick("GetStarted")}
            >
              Get Started
            </a>
          </li>
          <li>
            {/* Toggle Switch for Dark/Light Mode */}
            <div className="toggle-container">
              <input
                type="checkbox"
                id="theme-toggle"
                className="toggle-input"
                checked={theme}
                onChange={handleThemeToggle}
              />
              <label htmlFor="theme-toggle" className="toggle-label">
                {theme ? <FaRegMoon /> : <FaSun />}
              </label>
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
