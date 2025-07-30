import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import logo from '../assets/logo.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const scrollToSection = (id) => {
    setIsOpen(false); // fermer le menu mobile si ouvert
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) element.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      const element = document.getElementById(id);
      if (element) element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="sticky top-0 z-50 bg-black text-white p-4 flex justify-between items-center">
      <div className="flex items-center">
        <Link to="/" onClick={() => setIsOpen(false)}>
          <img src={logo} alt="Logo Le Temps D'Honoré" className="h-12 mr-4" />
        </Link>
        <div>
          <p className="font-bold">01 30 28 93 32</p>
          <p className="text-sm text-gray-400">Rue François Truffaut, 60230 Chambly</p>
        </div>
      </div>

      {/* Bouton hamburger visible sur petits écrans */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden focus:outline-none"
        aria-label="Toggle menu"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          {isOpen ? (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          ) : (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          )}
        </svg>
      </button>

      {/* Menu desktop */}
      <div className="hidden md:flex items-center space-x-6">
        {location.pathname === '/menu' ? (
          <Link to="/" className="hover:text-yellow-400">Accueil</Link>
        ) : (
          <Link to="/menu" className="hover:text-yellow-400">Menu</Link>
        )}
        <button
          onClick={() => scrollToSection('apropos')}
          className="hover:text-yellow-400 bg-transparent border-none cursor-pointer"
        >
          À Propos
        </button>
        <button
          onClick={() => scrollToSection('temoignages')}
          className="hover:text-yellow-400 bg-transparent border-none cursor-pointer"
        >
          Témoignages
        </button>
        <button
          onClick={() => scrollToSection('contact')}
          className="hover:text-yellow-400 bg-transparent border-none cursor-pointer"
        >
          Contact
        </button>
      </div>

      {/* Menu mobile */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-black text-white flex flex-col items-center space-y-4 py-4 md:hidden">
          {location.pathname === '/menu' ? (
            <Link to="/" onClick={() => setIsOpen(false)} className="hover:text-yellow-400">
              Accueil
            </Link>
          ) : (
            <Link to="/menu" onClick={() => setIsOpen(false)} className="hover:text-yellow-400">
              Menu
            </Link>
          )}
          <button
            onClick={() => scrollToSection('apropos')}
            className="hover:text-yellow-400 bg-transparent border-none cursor-pointer"
          >
            À Propos
          </button>
          <button
            onClick={() => scrollToSection('temoignages')}
            className="hover:text-yellow-400 bg-transparent border-none cursor-pointer"
          >
            Témoignages
          </button>
          <button
            onClick={() => scrollToSection('contact')}
            className="hover:text-yellow-400 bg-transparent border-none cursor-pointer"
          >
            Contact
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
