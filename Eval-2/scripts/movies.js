// Implement debouncing for network request
// On clicking book now store the selected movie in localstorage as key "movie"
// so that you can retrive it on checkout.html page
var total = JSON.parse(localStorage.getItem("Balance")) || 0;
function showBal(){
    var bal = document.getElementById("wallet");
    bal.innerText = total;
}

async function getData() {
    var res = await fetch("https://api.themoviedb.org/3/movie/popular?api_key=be08383c1f4230e2f648e303b9bf5612");
    var res1 = await res.json();
    console.log(res1.results, "test1");
    display(res1.results)
}
getData()

function display(data) {
    var display = document.getElementById("movies");

    data.map(function (e) {
        var div = document.createElement("div");
        var div2 = document.createElement("div");

        div.innerHTML = 
        `
        <img src = "https://image.tmdb.org/t/p/w300${e.poster_path}">
        <h3>${e.title}</h3>
           `
        var button = document.createElement("button");
        button.innerText = "Book Now";
        div.append(<a href="./checkout">button</a>);
        display.append(div);
    })
}