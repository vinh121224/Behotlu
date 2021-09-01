function saveAccountToLocalStorage(email,password){
    const AccountPlayList=localStorage.getItem('accounts');
    if (AccountPlayList===null) {
      const newAccountPlayList =[
        {
          email: email,
          password: password,
        },
      ];
      localStorage.setItem('accounts', JSON.stringify(newAccountPlayList));
      location.replace('login.html');
    } else {
      const newAccountPlayList = JSON.parse(AccountPlayList);
      const findAccountIndex = newAccountPlayList.findIndex(function (account) {
        return account.email === email;
        
      });
      if (findAccountIndex === -1) {
        newAccountPlayList.push({
          email: email,
          password: password,
        });
        localStorage.setItem('accounts', JSON.stringify(newAccountPlayList));
        location.replace('login.html');
      } else {
        const existed = document.getElementById('confirm');
        existed.innerHTML = 'Email existed!';
        existed.style.display = 'inline';
        existed.style.color = 'red';
      }
    }
}
function register(){
    event.preventDefault();
    const emailInput=document.getElementById('email');
    const passwordInput=document.getElementById('password');
    const confirmpasswordInput=document.getElementById('confirmpassword');
    if(passwordInput.value==confirmpasswordInput.value){
        const success=document.getElementById('confirm');
        success.innerHTML='Register Success';
        success.style.display='inline';
        success.style.color='green';
        saveAccountToLocalStorage(emailInput.value,passwordInput.value);
    }else{
        const unsuccess=document.getElementById('confirm');
        unsuccess.innerHTML='Password or Confirm Password wrong';
        unsuccess.style.display='inline';
        unsuccess.style.color='red';
    }
}
    const registerButton=document.getElementById('re-btn')
    registerButton.addEventListener('click',register);