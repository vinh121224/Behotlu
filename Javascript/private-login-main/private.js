function privateRedirect() {
  const loginState = localStorage.getItem('login');
  if (!loginState) {
    location.replace('./login.html');
  }
}

privateRedirect();
