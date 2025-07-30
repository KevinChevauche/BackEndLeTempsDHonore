import React from 'react';

const APropos = () => {
  return (
    <div
      id="apropos"
      className="h-[80vh] py-20 px-4 md:px-10 grid md:grid-cols-2 items-center bg-gray-50"
    >
      <div className="max-w-md">
        <h2 className="lg:text-8xl font-bold mb-6">À propos</h2>
        <p className="text-2xl text-gray-700 leading-relaxed">
          Installée au cœur de Chambly, rue François Truffaut, Le Temps D’Honoré est une boulangerie artisanale fondée avec passion. Notre mission ? Offrir chaque jour des pains traditionnels savoureux, des viennoiseries dorées, des sandwichs et pizzas préparés devant vous, le tout dans une ambiance conviviale et accessible à tous.
        </p>
      </div>
      <div className="overflow-hidden shadow-lg">
        <img
          src="src/assets/intérieur2.png"
          alt="Façade de la boulangerie"
          className="w-[100vh] max-h-[80vh] object-cover"
        />
      </div>
    </div>
  );
};

export default APropos;
