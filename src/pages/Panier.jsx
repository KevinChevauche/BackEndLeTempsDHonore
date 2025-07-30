// src/pages/Panier.js

import React from 'react';
import { useCart } from '../context/CartContext';

const Panier = () => {
  const { cart, getTotal, removeFromCart } = useCart();

  const handleCheckout = async () => {
    try {
      const response = await fetch('http://localhost:8000/api/create-checkout-session/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          items: cart.map(item => ({
            name: `${item.name} (${item.size})`, // pour afficher la taille aussi
            price: item.price,
            quantity: item.quantity
          }))
        })
      });

      const data = await response.json();

      if (data.url) {
        window.location.href = data.url; // redirection vers Stripe Checkout
      } else {
        alert("Erreur lors de la création de la session Stripe.");
      }

    } catch (error) {
      console.error("Erreur Stripe :", error);
      alert("Une erreur est survenue. Vérifiez la console.");
    }
  };

  return (
    <div className="bg-white text-black p-6 max-w-3xl mx-auto min-h-screen">
      <h1 className="text-2xl font-bold mb-6">🛒 Récapitulatif de mon panier</h1>

      {cart.length === 0 ? (
        <p>Votre panier est vide.</p>
      ) : (
        <>
          {cart.map((item, i) => (
            <div key={i} className="mb-4 border-b pb-2 flex justify-between items-center">
              <div>
                <p className="font-semibold">{item.name} ({item.size})</p>
                <p>Quantité : {item.quantity}</p>
                <p>Prix unitaire : {item.price}€</p>
              </div>
              <button
                onClick={() => removeFromCart(i)}
                className="text-red-600 hover:underline text-sm"
              >
                Supprimer
              </button>
            </div>
          ))}

          <div className="mt-4 font-bold text-xl">
            Total : {getTotal()} €
          </div>

          <button
            onClick={handleCheckout}
            className="mt-4 bg-black text-white px-6 py-2 rounded hover:bg-gray-800"
          >
            VALIDER MA COMMANDE
          </button>

          <div className="mt-6 text-sm text-gray-700">
            <p>Une question ? Contactez-nous au 01 30 28 93 32</p>
            <p className="mt-2">Paiement ultra sécurisé avec :</p>
            <img src="" alt="Méthodes de paiement" />
          </div>
        </>
      )}
    </div>
  );
};

export default Panier;
