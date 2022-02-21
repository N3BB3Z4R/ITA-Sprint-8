export const createAccount = (email, password) => {
  
  if (!localStorage.getItem('accounts')) {
    localStorage.setItem('accounts', JSON.stringify({}));
  }
  const accounts = JSON.parse(localStorage.getItem('accounts'));

  const newAccount = { email, password };

  if (accounts[email]) {
    return false;
  }
  const newAccounts = { ...accounts, [email]: newAccount };
  localStorage.setItem('accounts', JSON.stringify(newAccounts));
  return true;
}

export const isAuthenticated = (email, password) => {
  if (!localStorage.getItem('accounts')) {
    localStorage.setItem('accounts', JSON.stringify({}));
  }
  const accounts = JSON.parse(localStorage.getItem('accounts'));
  if (!accounts[email]) {
    return false;
  }
  const account = accounts[email];
  if (account.password !== password) {
    return false;
  }
  return true;
}

export const setAuthenticatedUser = (email) => {
  if (email) {
    localStorage.setItem('authenticatedUser', email);
  } else {
    localStorage.removeItem('authenticatedUser');
  }
}

export const getAuthenticatedUser = () => {
  return localStorage.getItem('authenticatedUser');
}