import React, { useState, useContext } from 'react';
import { useNavigate } from "react-router-dom";

import './Login.scss';
import bg from '../assets/bg3.webp';
import { AuthenticationContext } from '../App';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import { isAuthenticated, setAuthenticatedUser } from '../utils/authentication';

const Login = () => {

  const authenticationContext = useContext(AuthenticationContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState(false);

  let navigate = useNavigate();

  const loginHandler = (e) => {
    console.log('email y pass', email, password);
    if (!email || !password) return;
    const isAuthenticatedSuccesfully = isAuthenticated(email, password);
    if (isAuthenticatedSuccesfully) {
      authenticationContext.setIsAuthenticated(true);
      authenticationContext.setUser(email);
      setAuthenticatedUser(email);
      navigate('/starships');
    } else {
      authenticationContext.setIsAuthenticated(false);
      authenticationContext.setUser(null);
      setAuthenticatedUser(null);
      setLoginError(true);
    }
  }

  return (
    <section>
      <Header />
      <div className="login">
        <h2>Log In to your account</h2>
        <br />
        <p>On this web you can view the specifications of all the Star Wars starships.</p>
        <p>To see the starships list you must to be logged in.</p>
        <div className='login__login-form'>
          <input type='email' placeholder='Email' onChange={(e) => setEmail(e.target.value)}/>
          <input type='password' placeholder='Password' onChange={(e) => setPassword(e.target.value)} />
          <button onClick={() => loginHandler()}>Log In</button>
          {loginError && (
            <p style={{color:'red'}}>The account does not exist or the password or email isn't correct.</p>
          )}
        </div>
        <div>If you don't have an account you can create one by clicking on the button "Sign Up".</div>
        <button onClick={() => navigate('/signup')}>Sign Up</button>
      </div>
      <img className='bottomImage' src={bg} alt='bg' />
      <Footer />
    </section>
  );

}

export default Login;