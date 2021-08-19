function login() {
    event.preventDefault();
    const emailInput=document.getElementById('email');
    const passwordInput=document.getElementById('password');
    const AccountPlayList=localStorage.getItem('acccounts');
    const jsonAccountPlayList=JSON.parse(AccountPlayList);
    const findIndexUser=jsonAccountPlayList.findIndex(function (account) {
      return account.email==emailInput.value;
    });
    if (findIndexUser===-1){
      const errorMessage=document.getElementById('error');
      errorMessage.style.display='inline';
      errorMessage.style.color='red';
      errorMessage.innerHTML='Email not exist!';
    } else{
      if (jsonAccountPlayList[findIndexUser].password === passwordInput.value) {
        localStorage.setItem('login', JSON.stringify(true));
        location.replace('index.html');
      } else{
        const errorMessage=document.getElementById('error');
        errorMessage.style.display='inline';
        errorMessage.style.color='red';
        errorMessage.innerHTML='Password not match!';
      }
    }
  }
  
  const loginBtn = document.getElementById('login-btn');
  
  loginBtn.addEventListener('click', login);
  