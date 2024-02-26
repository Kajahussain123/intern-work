import React from 'react';
import './Header.scss'; // Make sure to import your CSS file

function Header() {
  return (
    <header className="header">
      <div className="search-bar">
      <i class="fa-solid fa-magnifying-glass text-black"></i>
        <input type="text"/>
      </div>
      <nav className="nav-links">
        <a href="#home">Categories</a>
        <a href="#contact">Website Builders</a>
        <a href="#about">Todays Deal</a>
      </nav>
    </header>
  );
}

export default Header;
