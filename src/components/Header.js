import React from "react";

function Header() {
  return (
    <ul className="menu" style={{ marginTop: "10px" }}>
      <a href="/" className="logo">
        <img src="/assets/images/main_logo.png" alt="SUMS logo" width="10%" />
      </a>

      <li className="dropdown">
        <span className="dropbtn">get in touch</span>
        <div className="dropdown-content">
          <a href="https://www.instagram.com/sumsatucsd/">instagram</a>
          <a href="https://discord.gg/XVVeGHXGTt">discord</a>
          <a href="http://eepurl.com/cJMmqf">newsletter</a>
          <a href="https://www.tiktok.com/@sums.at.ucsd">
            tiktok
          </a>
        </div>
      </li>

      <li><a href="/get-involved">get involved</a></li>
      <li><a href="/events">events</a></li>
      <li><a href="/board">board</a></li>
      <li><a href="/about">about</a></li>
    </ul>
  );
}

export default Header;