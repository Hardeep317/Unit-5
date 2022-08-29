// Store the wallet amount to your local storage with key "amount"
var total = JSON.parse(localStorage.getItem("Balance")) || 0;
function addMoney(){
    event.preventDefault();
    var entMoney = document.getElementById("amount").value;
    var bal = document.getElementById("wallet");
    bal.innerText = total;
    total += Number (entMoney);
    
    localStorage.setItem("Balance" , JSON.stringify(total));
}
