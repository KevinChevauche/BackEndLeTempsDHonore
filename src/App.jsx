// src/App.jsx

import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Menu from './pages/Menu';

const App = () => {
  return (
    <BrowserRouter>
      {/* Navbar globale visible sur toutes les pages */}
      <Navbar />

      {/* Routes : contenu dynamique en fonction de l'URL */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        {/* Ajoute d'autres routes si besoin */}
        {/* <Route path="/contact" element={<Contact />} /> */}
      </Routes>
    </BrowserRouter>
  );
};

export default App;
