import React from "react";
// import "./Header.css";

function Header() {
  return (
    <header className="header">
        <a href="#about" className="logo">
            <span className="logo-icon">M</span>
            Mrunali Mahamunkar
        </a>
      
      <nav>
        <a href="#about">About</a>
        <a href="#projects">Projects</a>
        <a href="#skills">Skills</a>
        <a href="#resume">Resume</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>
  );
}

export default Header;