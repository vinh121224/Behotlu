function login() {
  event.preventDefault();
  const emailInput = document.getElementById('email');
  const passwordInput = document.getElementById('password');
  const arrayUsers = localStorage.getItem('users');
  const jsonArrayUsers = JSON.parse(arrayUsers);
  const findIndexUser = jsonArrayUsers.findIndex(function (user) {
    return user.email == emailInput.value;
  });
  if (findIndexUser === -1) {
    const errorMessage = document.getElementById('error');
    errorMessage.style.display = 'inline';
    errorMessage.style.color = 'red';
    errorMessage.innerHTML = 'Email not exist!';
  } else {
    if (jsonArrayUsers[findIndexUser].password === passwordInput.value) {
      localStorage.setItem('login', JSON.stringify(true));
      location.replace('index.html');
    } else {
      const errorMessage = document.getElementById('error');
      errorMessage.style.display = 'inline';
      errorMessage.style.color = 'red';
      errorMessage.innerHTML = 'Password not match!';
    }
  }
}

const loginBtn = document.getElementById('login-btn');

loginBtn.addEventListener('click', login);
