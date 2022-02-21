import React, { useState, useContext } from 'react';

import './SignUp.scss';
import bg from '../assets/bg2.jpg';
import { useNavigate } from "react-router-dom";
import { AuthenticationContext } from '../App';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import { createAccount, setAuthenticatedUser } from '../utils/authentication';

const SignUp = () => {

  const authenticationContext = useContext(AuthenticationContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [accountExistError, setAccountExistError] = useState(false);

  let navigate = useNavigate();

  const signUpHandler = (e) => {
    console.log('email y pass', email, password);
    if (!email || !password) return;
    const createdSuccesfully = createAccount(email, password);
    if (createdSuccesfully) {
      authenticationContext.setIsAuthenticated(true);
      authenticationContext.setUser(email);
      setAuthenticatedUser(email);
      navigate('/starships');
    } else {
      authenticationContext.setIsAuthenticated(false);
      authenticationContext.setUser(null);
      setAuthenticatedUser(null);
      setAccountExistError(true);
    }
  }

  return (
    <section>
      <Header />
      <div className="signup">
        <h2>Sign Up your new account</h2>
        <br />
        <p>On this web you can view the specifications of all the Star Wars starships.</p>
        <p>To see the starships list you must to be registered.</p>
        <div className='signup__signup-form'>
          <input type='email' placeholder='Email' onChange={(e) => setEmail(e.target.value)}/>
          <input type='password' placeholder='Password' onChange={(e) => setPassword(e.target.value)} />
          <button onClick={() => signUpHandler()}>Sign Up</button>
          {accountExistError && (
            <p>The account already exist</p>
          )}
        </div>
      </div>
      <img className='bottomImage' src={bg} alt='bg' />
      <Footer />
    </section>
  );
}

export default SignUp;