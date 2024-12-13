import React from 'react';
import '../styles/Navbar.css';

const Navbar: React.FC = () => {
  return (
    <nav className="navbar">
      <div className="container navbar-container">
        <div className="navbar-brand">Meu Portfólio</div>
        <ul className="navbar-links">
          <li><a href="#home" className="navbar-link">Home</a></li>
          <li><a href="#about" className="navbar-link">Sobre</a></li>
          <li><a href="#projects" className="navbar-link">Projetos</a></li>
          <li><a href="#contact" className="navbar-link">Contato</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
