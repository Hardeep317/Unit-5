import {navbar} from './navbar.js'
document.getElementById('navbar').innerHTML = navbar();


const arr = JSON.parse(localStorage.getItem("Food-SignUp")) || [];
document.getElementById("LoginBtn").addEventListener("click", showUser);
function showUser(){
    event.preventDefault();
    arr.map(function (el){
        var Email = document.getElementById("logemail").value;
    var Password = document.getElementById("logpassword").value;

    if(Email === el.Email && Password === el.Password){
        var OObj = {Name : el.Name, Email : el.Email, Mobile : el.Mobile}
        localStorage.setItem("currUser" , JSON.stringify(OObj));
    }
})
    
}