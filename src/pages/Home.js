import React from 'react';
import { Link } from "react-router-dom";

import './Home.scss';
import bg from '../assets/bg1.jpg';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';

const Home = () => {

  return (
    <section className="Home">
      <Header />
      <div>
        <h2>Welcome to the Star Wars ships catalog</h2>
        <br />
        <p>On this web you can view the specifications of all the Star Wars starships.</p>
        <p>To see the starships list you must to be registered.</p>
        <br />
        <p>If you are not registered you can do it by clicking on the button <Link className='header__login--button' to="/signup">SIGN UP</Link> in the header.</p>
        <p>Otherwise if you registered previously click on the button <Link className='header__login--button' to="/login">LOG IN</Link> to access to your account.</p>
      </div>
      <img className='bottomImage' src={bg} alt='bg' />
      <Footer />
    </section>
  );
}

export default Home;
