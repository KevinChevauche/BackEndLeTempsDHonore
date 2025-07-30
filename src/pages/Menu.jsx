// src/pages/Menu.js

import React from 'react';
import Pains from '../components/Pains';
import Pizzas from '../components/Pizzas';

const Menu = () => {
  return (
    // Conteneur principal avec fond noir, texte blanc et un peu de padding
    <div className="bg-black text-white min-h-screen font-sans p-4 sm:p-6 md:p-8">
      <div className="max-w-4xl mx-auto">
        <Pains />
        <Pizzas />
      </div>
    </div>
  );
};

export default Menu;