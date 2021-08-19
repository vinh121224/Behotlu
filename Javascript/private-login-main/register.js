function saveUserToLocalstorage(email, password) {
  const arrayUser = localStorage.getItem('users');
  if (arrayUser === null) {
    const newArrayUsers = [
      {
        email: email,
        password: password,
      },
    ];
    localStorage.setItem('users', JSON.stringify(newArrayUsers));
    location.replace('login.html');
  } else {
    const newArrayUsers = JSON.parse(arrayUser);
    const findUserIndex = newArrayUsers.findIndex(function (user) {
      return user.email === email;
      
    });
    if (findUserIndex === -1) {
      newArrayUsers.push({
        email: email,
        password: password,
      });
      localStorage.setItem('users', JSON.stringify(newArrayUsers));
      location.replace('login.html');
    } else {
      const validText = document.getElementById('valid-text');
      validText.innerHTML = 'Email existed!';
      validText.style.display = 'inline';
      validText.style.color = 'red';
    }
  }
}

function register() {
  event.preventDefault();
  const emailInput = document.getElementById('email');
  const passwordInput = document.getElementById('password');
  const rePasswordInput = document.getElementById('re-password');
  if (passwordInput.value == rePasswordInput.value) {
    const validText = document.getElementById('valid-text');
    validText.innerHTML = 'Validation';
    validText.style.display = 'inline';
    validText.style.color = 'green';
    saveUserToLocalstorage(emailInput.value, passwordInput.value);
  } else {
    const validText = document.getElementById('valid-text');
    validText.innerHTML = 'Password and re-password not match';
    validText.style.display = 'inline';
    validText.style.color = 'red';
    console.log('non-Valid');
  }
}

const registerBtn = document.getElementById('register-btn');

registerBtn.addEventListener('click', register);
