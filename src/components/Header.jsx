import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header 
      className="relative h-screen bg-cover bg-center flex items-center justify-center text-white" 
      style={{ backgroundImage: "url('src/assets/intérieur.png')" }}
    >
      {/* Superposition sombre pour la lisibilité du texte */}
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative z-10 text-center justify-center align-center">
        <h1 className="text-6xl md:text-8xl lg:text-[150px] font-bold tracking-wider lg:w-4xl" style={{ fontFamily: 'serif' }}>
          LE TEMPS D'HONORÉ
        </h1>
        <Link to="/menu">
          <button className="mt-8 mb-20 text-4xl px-30 py-13 bg-white text-black font-semibold rounded hover:bg-gray-200 transition transition-duration-500">
            Commandez ici
          </button>
        </Link>
        
      </div>
    </header>
  );
};

export default Header;