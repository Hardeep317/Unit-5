// const url = "www.themealdb.com/api/json/v1/1/search.php?s="

import {navbar} from './navbar.js'
document.getElementById('navbar').innerHTML = navbar();
document.getElementById('btn').addEventListener('click', SearchDish);
async function SearchDish(){
    const search = document.getElementById("search").value;
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


// random recepie