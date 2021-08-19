function logout() {
  localStorage.removeItem('login');
  location.replace('index.html');
}

logout();
