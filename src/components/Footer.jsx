import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-black text-white text-center p-6">
      <p>&copy; {new Date().getFullYear()} Le Temps D'Honoré. Tous droits réservés.</p>
      <p className="text-sm text-gray-400 mt-2">Site web conçu avec ❤️</p>
    </footer>
  );
};

export default Footer;