// testing a button click event in a login page with Testing Libraries using fireEvent

import React from 'react';
import './Login.scss';
import '@testing-library/jest-dom/extend-expect';
import { render, screen, fireEvent } from '@testing-library/react';
import Login from './Login';


describe('<Login />', () => {
  

  beforeEach(() => {
    login.cleanup();
  })

  let { login } = render(
    <Login />
  );

  test('renders .Login', () => {
    expect(login.container.querySelector('.Login')).toBeDefined();
  })

  test('renders content using screen', () => {

    const username = screen.getByTestId('Login__Username');
    expect(username).toBeInTheDocument();

    const password = screen.getByTestId('Login__Password');
    expect(password).toBeInTheDocument();

    const loginButton = screen.getByTestId('Login__LoginButton');
    expect(loginButton).toBeInTheDocument();

    const signupLink = screen.getByTestId('Login__SignupLink');
    expect(signupLink).toBeInTheDocument();
  })

  test('renders content using fireEvent', () => {
    const username = screen.getByTestId('Login__Username');
    fireEvent.change(username, { target: { value: 'test' } });

    const password = screen.getByTestId('Login__Password');
    fireEvent.change(password, { target: { value: 'test' } });

    const loginButton = screen.getByLabelText('Log In');
    fireEvent.click(loginButton);
  })
})