import React, { useState } from "react";
import "../styles/components/header.css";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    setIsDropdownOpen(false);
  };

  const toggleDropdown = (e) => {
    e.preventDefault();
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <header className={`header ${isMenuOpen ? "menu-open" : ""}`}>
      <a href="/" className="logo">
        <img src="/assets/images/main_logo.png" alt="SUMS logo" />
      </a>

      <div className="menu-icon" onClick={toggleMenu}>
        <span className="navicon"></span>
        <span className="navicon"></span>
        <span className="navicon"></span>
      </div>

      <ul className="menu">
        <li>
          <a href="/about" onClick={closeMenu}>
            about
          </a>
        </li>
        <li>
          <a href="/board" onClick={closeMenu}>
            board
          </a>
        </li>
        <li>
          <a href="/events" onClick={closeMenu}>
            events
          </a>
        </li>
        <li>
          <a href="/get-involved" onClick={closeMenu}>
            get involved
          </a>
        </li>
        <li className={`dropdown ${isDropdownOpen ? "dropdown-open" : ""}`}>
          <button className="dropbtn" onClick={toggleDropdown}>
            get in touch
            {isMenuOpen && <span className="arrow">{isDropdownOpen ? "▲" : "▼"}</span>}
          </button>
          <div className="dropdown-content">
            <a
              href="https://www.instagram.com/sumsatucsd/"
              onClick={closeMenu}
              target="_blank"
              rel="noopener noreferrer"
            >
              instagram
            </a>
            <a
              href="https://discord.gg/XVVeGHXGTt"
              onClick={closeMenu}
              target="_blank"
              rel="noopener noreferrer"
            >
              discord
            </a>
            <a
              href="http://eepurl.com/cJMmqf"
              onClick={closeMenu}
              target="_blank"
              rel="noopener noreferrer"
            >
              newsletter
            </a>
            <a
              href="https://www.tiktok.com/@sums.at.ucsd"
              onClick={closeMenu}
              target="_blank"
              rel="noopener noreferrer"
            >
              tiktok
            </a>
          </div>
        </li>
      </ul>
    </header>
  );
}

export default Header;