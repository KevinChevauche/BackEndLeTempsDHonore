import React from 'react';
import Navbar from '../components/Navbar';
import Header from '../components/Header';
import ServicesEtSpecialites from '../components/ServicesEtSpecialites';
import Temoignages from '../components/Temoignages';
import APropos from '../components/APropos';
import ABientot from '../components/ABientot';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div className="bg-white">
      <Header />
      <ServicesEtSpecialites />
      <div className="bg-black text-white">
        <Temoignages />
      </div>
      <APropos/>
      <ABientot />
      <Footer />
    </div>
  );
};

export default Home;