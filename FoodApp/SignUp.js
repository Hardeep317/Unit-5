import {form} from './navbar.js'
document.getElementById("SignUp").innerHTML = form();

var arr = JSON.parse(localStorage.getItem("Food-SignUp")) || [];
document.getElementById("SignBtn").addEventListener("click", signUp);
function signUp(){
    event.preventDefault();
    var Name = document.getElementById("name").value;
    var Email = document.getElementById("email").value;
    var Mobile = document.getElementById("number").value;
    var Password = document.getElementById("password").value;

    var Oobj = {
        Name: Name, Email : Email, Mobile: Mobile, Password: Password
    }

    arr.push(Oobj);
    localStorage.setItem("Food-SignUp" , JSON.stringify(arr));
}