import React from 'react';
import { useCart } from '../context/CartContext';

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
  const { addToCart } = useCart();

  return (
    <section>
      <img
        src="https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=1470&auto=format&fit=crop"
        alt="Pizza"
        className="w-full h-56 object-cover rounded-lg shadow-lg"
      />
      <div className="mt-8">
        <h2 className="text-3xl font-bold text-amber-400 border-b-2 border-amber-400 pb-2 mb-6">Carte pizzas :</h2>
        <ul className="space-y-6">
          {pizzaData.map((pizza) => (
            <li key={pizza.name} className="border-b border-gray-700 pb-4">
              <div className="flex justify-between items-start flex-wrap">
                <div>
                  <p className="font-bold uppercase">{pizza.name}</p>
                  <p className="text-sm italic text-gray-400">{pizza.ingredients}</p>
                </div>
                <div className="flex gap-2 mt-2">
                  <button
                    onClick={() => addToCart({ name: pizza.name, price: pizza.priceSm, size: '26CM' })}
                    className="bg-yellow-400 text-black px-2 py-1 rounded hover:bg-yellow-300"
                  >
                    26CM - {pizza.priceSm}€
                  </button>
                  <button
                    onClick={() => addToCart({ name: pizza.name, price: pizza.priceLg, size: '31CM' })}
                    className="bg-yellow-400 text-black px-2 py-1 rounded hover:bg-yellow-300"
                  >
                    31CM - {pizza.priceLg}€
                  </button>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Pizzas;
