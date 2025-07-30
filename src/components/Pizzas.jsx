// src/components/Pizzas.js

import React from 'react';

// Données des pizzas extraites du menu
const pizzaData = [
    { name: 'LA MARGUERITA', ingredients: 'tomate, mozzarella, olives, origan', priceSm: '6,50€', priceLg: '8,50€' },
    { name: 'LA REINE', ingredients: 'tomate, mozzarella, jambon, champignons, origan', priceSm: '6,50€', priceLg: '8,50€' },
    { name: 'LA KEBAB', ingredients: 'tomate, mozzarella, poulet, poivrons, oignons, tomates cerise', priceSm: '6,50€', priceLg: '8,50€' },
    { name: 'LA PEPPERONI', ingredients: 'tomate, mozzarella, pepperoni, olives, origan', priceSm: '6,50€', priceLg: '8,50€' },
    { name: 'LA QUATRE SAISONS', ingredients: 'tomate, mozzarella, jambon, champignons, artichauts, poivrons, olives, origan', priceSm: '6,50€', priceLg: '8,50€' },
    { name: 'LA CAMPIONE', ingredients: 'tomate, mozzarella, viande hachée, champignons, oeuf, olives, origan', priceSm: '6,50€', priceLg: '8,50€' },
    { name: 'L\'ORIENTALE', ingredients: 'tomate, mozzarella, merguez, poivrons, oeuf, olives, origan', priceSm: '6,50€', priceLg: '8,50€' },
    { name: 'LA VÉGÉTARIENNE', ingredients: 'tomate, mozzarella, poivrons grillés, champignons, olives, origan', priceSm: '6,50€', priceLg: '8,50€' },
    { name: 'LA CHÈVRE MIEL', ingredients: 'crème fraîche, mozzarella, chèvre frais, lardons, miel', priceSm: '6,50€', priceLg: '8,50€' },
    { name: 'LA CAMBLIZARDE', ingredients: 'crème fraîche, mozzarella, champignons, pommes de terre, viande hachée, oignons, tomate cerise, olives', priceSm: '6,50€', priceLg: '8,50€' },
    { name: 'LA CANI-BALL', ingredients: 'tomate, mozzarella, poulet, boulettes de boeuf, merguez, oignons, persil', priceSm: '6,50€', priceLg: '8,50€' },
    { name: 'L\'INDIENNE', ingredients: 'crème fraîche, mozzarella, poulet fumé, pommes de terre, origan', priceSm: '6,50€', priceLg: '8,50€' },
    { name: 'LA QUATRE FROMAGES', ingredients: 'tomate, mozzarella, reblochon, bleu, chèvre, olives', priceSm: '6,50€', priceLg: '8,50€' },
    { name: 'LA SAVOYARDE', ingredients: 'tomate, mozzarella, lardons, oignons, reblochon, crème', priceSm: '6,50€', priceLg: '8,50€' },
    { name: 'LA NORDIQUE', ingredients: 'crème fraîche, mozzarella, saumon fumé, aneth', priceSm: '6,50€', priceLg: '8,50€' },
    { name: 'LA PIZZA DU PÊCHEUR', ingredients: 'tomate, mozzarella, thon, oeuf, olives, origan', priceSm: '6,50€', priceLg: '8,50€' },
];


const Pizzas = () => {
  return (
    <section>
      {/* Image d'en-tête pour la section pizza */}
      <img
        src="https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=1470&auto=format&fit=crop"
        alt="Pizza Margherita"
        className="w-full h-56 object-cover rounded-lg shadow-lg"
      />
      <div className="mt-8">
        {/* En-tête de la carte des pizzas */}
        <div className="flex justify-between items-center border-b-2 border-amber-400 pb-2 mb-6">
          <h2 className="text-3xl font-bold text-amber-400">Carte pizzas:</h2>
          <div className="text-right">
            <p className="font-semibold tracking-widest text-lg">26CM &nbsp; 31CM</p>
          </div>
        </div>

        {/* Liste des pizzas générée dynamiquement */}
        <ul className="list-none p-0">
          {pizzaData.map((pizza) => (
            <li key={pizza.name} className="flex items-baseline py-4 border-b border-gray-800">
              {/* Côté gauche: Nom et ingrédients */}
              <div>
                <p className="font-bold uppercase tracking-wider text-lg">{pizza.name}</p>
                <p className="text-sm italic text-gray-400 max-w-xs md:max-w-md">{pizza.ingredients}</p>
              </div>

              {/* Ligne pointillée qui s'adapte à l'espace disponible */}
              <div className="flex-grow mx-4 border-b-2 border-dotted border-gray-600"></div>

              {/* Côté droit: Prix */}
              <div className="flex space-x-8 font-bold text-lg flex-shrink-0">
                <span>{pizza.priceSm}</span>
                <span>{pizza.priceLg}</span>
              </div>
            </li>
          ))}
        </ul>

        {/* Section pour l'ingrédient supplémentaire */}
        <div className="mt-8 text-center bg-gray-900 p-4 rounded-lg">
          <p className="font-bold uppercase tracking-wider text-amber-400">Ingrédient supplémentaire:</p>
          <p className="text-gray-300 mt-1">26 CM: 1,00€ / 31 CM: 1,50€</p>
        </div>
      </div>
    </section>
  );
};

export default Pizzas;