// const url = "www.themealdb.com/api/json/v1/1/search.php?s="

import {navbar} from './navbar.js'
document.getElementById('navbar').innerHTML = navbar();
document.getElementById('btn').addEventListener('click', SearchDish);
async function SearchDish(){
    const search = document.getElementById("search").value;
    const currUser = document.getElementById("Userdetails");
    currUser.innerHTML = ``
    try{
        const res = await fetch(`https://themealdb.com/api/json/v1/1/search.php?s=${search}`);
        const res2 = await res.json();
        console.log(res2, "res2");
        const contentByname = document.getElementById("contentByname");
        const div = document.createElement("div");
        div.setAttribute("id" , "ByName");
        contentByname.innerHTML = "";
        res2.meals.forEach(function(el){
            div.innerHTML += `
            <img src="${el.strMealThumb}">
            <h3>Name : ${el.strMeal}</h3>
            <h3>Area : ${el.strArea}</h3>
            <p> Ingredients : ${el.strIngredient1}, ${el.strIngredient2}, ${el.strIngredient3}, ${el.strIngredient4}, ${el.strIngredient5}, ${el.strIngredient6}, ${el.strIngredient7}</p>
            <p> Instructions : ${el.strInstructions}</p>
            <h3> Category :  ${el.strTags} </h3>
            <h3> <a href="${el.strYoutube}"> Make this sweet Dish by watching video </a></h3>
            `
            contentByname.append(div);
        })
    }
    catch (err) {
        console.log(err , "err");
    }
}


ShowDetails();
function ShowDetails(){
    var user = JSON.parse(localStorage.getItem('currUser'));
    const Details = document.getElementById("Userdetails");
    Details.innerHTML = `
    <h3>${user.Name}</h3>
    <h3>${user.Email}</h3>
    <h3>${user.Mobile}</h3>
    `
}

// Email: "hardeep41016@gmail.com"
// Mobile: "9050741016"
// Name: "Hardeep "
// Password: "hs@41016"
// random recepie