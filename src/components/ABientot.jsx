import React from 'react';

const ABientot = () => {
  return (
    <div
      id="contact"
      className="h-[80vh] px-4 md:px-10 grid md:grid-cols-2 gap-12"
    >
      {/* Partie gauche : image pleine hauteur/largeur sans débordement */}
      <div className="w-full h-full overflow-hidden">
        <img
          src="./src/assets/pains.png"
          alt="Pain artisanal"
          className="shadow-lg object-cover w-full h-full"
        />
      </div>

      {/* Partie droite : texte aligné à gauche, centré verticalement */}
      <div className="flex items-center justify-center h-full text-left py-5 text-3xl">
        <div className="max-w-md flex flex-col h-full justify-around">
          {/* Espace en haut avec margin */}
          <h2 className="text-6xl font-bold">À bientôt !</h2>

          {/* Espacement vertical entre les blocs */}
          <div className="flex flex-col justify-around h-[500px]">
            <div>
              <h5 className="font-semi-bold text-4xl mb-2">Numéro de téléphone:</h5>
              <p className="text-gray-700">01 30 28 93 32</p>
            </div>
            <div>
              <h5 className="font-semi-bold text-4xl mb-2">HORAIRES:</h5>
              <p className="text-gray-700">
                Lundi-samedi 07h00 – 19h30<br />
                (ou 20h00 selon jour) – Dimanche fermé
              </p>
            </div>
            <div>
              <h5 className="font-semi-bold text-4xl mb-2">RESTAURANT:</h5>
              <p className="text-gray-700">Rue François Truffaut, 60230 Chambly</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ABientot;
