function displayLoginBtn() {
  const loginBtn = document.getElementById('login-btn');
  const logoutBtn = document.getElementById('logout-btn');
  const loginState = localStorage.getItem('login');
  if (loginState) {
    loginBtn.style.display = 'none';
    logoutBtn.style.display = 'inline';
  } else {
    loginBtn.style.display = 'inline';
    logoutBtn.style.display = 'none';
  }
}

displayLoginBtn()