// Each ticket will cost 100 Rupees
// If wallet amount is insufficient show alert "Insufficient Balance!";
// Else show "Booking successfull!" and adjust the wallet amount in real time
var total = JSON.parse(localStorage.getItem("Balance")) || 0;
function showBal(){
    var bal = document.getElementById("wallet");
    bal.innerText = total;
}
var title = JSON.parse(localStorage.getItem("title"));
async function checkOut(){
    var show = document.getElementById("movie");
    show.innerHTML = "";
    var url = "http://www.omdbapi.com/?apikey=c707947d&s="+title;
    const res = await fetch(url);
    const res2 = await res.json();

    var div = document.createElement("div");
    div.innerHTML = `
    <img src="${res2.Poster}" id="image">
    <p>${res2.Title} </p>`
}

function payment(){
    var tickets = document.getElementById("ticket").value;
    tickets = Number(tickets*100);
    console.log(tickets);
    if(tickets > total){
        alert("Insufficient Balance")
    }else{
        total -= tickets;
        localStorage.setItem("Balance", JSON.stringify(total));
        alert("Booking successfull")
    }
}