import React, { useContext } from 'react';
import { Link, useNavigate } from "react-router-dom";

import './Header.scss';
import AppLink from '../AppLink/AppLink';
import { AuthenticationContext } from '../../App';
import { setAuthenticatedUser } from '../../utils/authentication';

const Header = () => {

  const authenticationContext = useContext(AuthenticationContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    authenticationContext.setIsAuthenticated(false);
    authenticationContext.setUser(null);
    setAuthenticatedUser(null);
    navigate('/');
  }

  return <header className="header">
    <div className="header__top">
      <h1 className="header__title">STAR<br/>WARS</h1>
      <nav className="header__login">
        {authenticationContext.isAuthenticated ? (
          <>
            <button onClick={() => handleLogout()}>{authenticationContext.user} LOGOUT</button>
          </>
        ) : (
          <>
            <Link className="header__login--button" to="/login">LOG IN</Link>
            {"//"}
            <Link className="header__login--button" to="/signup">SIGN UP</Link>
          </>
        )}

      </nav>
    </div>
    <div className="header__bottom">
      <nav className='header__menu'>
        <AppLink activeClass='header__link--selected' className="header__link" to="/">HOME</AppLink>
        <AppLink activeClass='header__link--selected' className="header__link" to="/starships">STARSHIPS</AppLink>
      </nav>      
    </div>
  </header>
}
export default Header;