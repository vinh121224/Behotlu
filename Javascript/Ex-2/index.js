const Username = prompt ("Input Username");
const Password = prompt ("Input Password");

const user={
    username: "Vinh",
    password: "12345"
}

function Login (username,password,validation){
    Validation(username,password,validation)
}
Login(Username,Password,Validation)
function Validation(){
    if(Username===user.username)
    console.log ("Right Username")
    else
    console.log("Wrong Username")
    if(Password===user.password)
    console.log("Right Password")
    else
    console.log("Wrong Password")
}