import React from 'react';

const Temoignages = () => {
  return (
    <div id="temoignages" className="py-20 px-4 md:px-10 text-center h-[60vh] justify-center items-center">
      <h2 className="text-3xl lg:text-6xl font-bold mb-12 text-center max-w-3xl mx-auto">
        Témoignages d'amour pour la baguette
      </h2>
      
      <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-x-20 gap-y-10 mt-16">
        {/* Témoignage 1 */}
        <div className="relative">
          <span className="absolute -top-4 -left-4 text-6xl text-gray-700 font-serif">“</span>
          <h3 className="font-bold mb-2">Morad Twenti (Google)</h3>
          <p className="text-gray-400">
            Très bonne accueil je suis passé aujourd'hui l'hôtesse Laetitia m'a accueilli avec un sourire et un professionnalisme. Franchement je me suis sentie comme a la maison. Je recommande le pain et les viennoiseries sont délicieuses. Je pense que je reviendrai plus souvent. Merci a cette hôtesse elle a ensoleillée ma journée.
          </p>
        </div>

        {/* Témoignage 2 */}
        <div className="relative">
          <span className="absolute -top-4 -left-4 text-6xl text-gray-700 font-serif">“</span>
          <h3 className="font-bold mb-2">FREDERIC OGE (Google)</h3>
          <p className="text-gray-400">
            Ambiance très sympa et ambiance au top mais la dame qui coupe les champignons pour les pizzas fait énormément de bruit ! On a l'impression qu'elle utilise une tronçonneuse alors que c'est un couteau ! De plus, on dirait qu'elle prépare des champignons pour 10 000 pizzas ! Mais sinon tout bien !
          </p>
        </div>
      </div>
    </div>
  );
};

export default Temoignages;
