import React from 'react';
import { Link } from 'react-router-dom';

const ServicesEtSpecialites = () => {
  return (
    <div id="menu" className="py-20 px-4 md:px-10 grid md:grid-cols-2 gap-12 items-center h-screen">
      <div className="flex flex-row justify-around">
        <img src="./src/assets/plateau.png" alt="Café et croissant" className="rounded-lg shadow-lg object-cover w-[500px] h-[400px] relative bottom-20" />
        <img src="./src/assets/intérieur.png" alt="Vitrine de la boulangerie" className="rounded-lg shadow-lg object-cover w-[300px] h-[400px] relative top-20" />
      </div>
      <div className="max-w-md">
        <h2 className="text-6xl font-bold mb-6">🥐 Nos Services et Spécialités</h2>
        <ul className="space-y-4 text-gray-700 list-disc list-inside text-3xl">
          <li>
            Boulangerie artisanale proposant pains traditionnels, baguettes croustillantes, brioches, pâtisseries maison, pizzas, sandwichs préparés sur place.
          </li>
          <li>
            Formules déjeuner (sandwich + dessert + boisson) à prix raisonnables (environ 7€ à 8,20€).
          </li>
          <li>
            Service sur place & à emporter, accessible en fauteuil roulant, avec parking PMR.
          </li>
        </ul>

        {/* BOUTON REDIRECTION VERS /menu */}
        <Link to="/menu">
          <button className="mt-8 px-8 py-3 bg-black text-white font-semibold rounded hover:bg-gray-800 transition">
            MENU
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ServicesEtSpecialites;
