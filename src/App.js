import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import './App.scss';
import Home from './pages/Home';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Starships from './pages/Starships';
import ShipProfile from './pages/ShipProfile';
import { getAuthenticatedUser } from './utils/authentication';
import AuthProtectedRoute from './components/AuthProtectedRouter/AuthProtectedRoute';

export const AuthenticationContext = React.createContext({
  isAuthenticated: false,
  setIsAuthenticated: () => { },
  user: null,
  setUser: () => { },
});

function App() {

  const [isAuthenticated, setIsAuthenticated] = useState(!!getAuthenticatedUser());
  const [user, setUser] = useState(getAuthenticatedUser());
  const authenticationContextValue = {
    isAuthenticated,
    setIsAuthenticated,
    user,
    setUser,
   };

  return (
    <AuthenticationContext.Provider value={authenticationContextValue}>
      <Router>
        <div className="App">
          <Routes>
            <Route index path="/" element={<Home />} />
            <Route path="/" element={<AuthProtectedRoute redirectPath='/login' />}>
              <Route path="/starships" element={<Starships />} />
              <Route exact={true} path="/shipprofile/:id" element={<ShipProfile />} />
            </Route>
            <Route path="/signup" element={<SignUp />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </div>
      </Router>
    </AuthenticationContext.Provider>
  );
}

export default App;