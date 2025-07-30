// src/components/Pains.js

import React from 'react';

const Pains = () => {
  return (
    <section className="mb-12">
      {/* Image d'en-tête pour la section des pains */}
      <img
        src="https://images.unsplash.com/photo-1598373182133-52452f7691ef?q=80&w=1470&auto=format&fit=crop"
        alt="Assortiment de pains"
        className="w-full h-48 object-cover rounded-lg shadow-lg"
      />
      <div className="mt-6">
        <h2 className="text-3xl font-bold text-amber-400 mb-4">
          🥖 Carte des pains:
        </h2>
        {/* Placeholder car le contenu n'est pas visible sur l'image */}
        <p className="text-gray-400 italic">
          La liste de nos pains artisanaux sera bientôt disponible ici.
        </p>
      </div>
    </section>
  );
};

export default Pains;