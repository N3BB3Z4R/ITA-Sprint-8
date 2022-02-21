import React from 'react';
import './Starships.scss';
import ShipList from '../components/ShipList/ShipList';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';

const Starships = () => {

  return (
    <section className="Starships">
      <Header />
      <ShipList />
      <Footer />
    </section>
  );
}

export default Starships;
