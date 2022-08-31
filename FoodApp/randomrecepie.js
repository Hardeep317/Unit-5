
import {navbar2} from "./navbar.js"
document.getElementById("navbar").innerHTML = navbar2();


random();
async function random(){
    try {
            const data = await fetch(`https://themealdb.com/api/json/v1/1/categories.php`)
            const data2 = await data.json();
            console.log(data2);
            const container = document.getElementById("container");
            const div = document.createElement("div");
            div.setAttribute("class" , "sub-random-container");
            container.innerHTML = "";
            data2.categories.forEach(el =>{
                div.innerHTML += `<div class="sub-sub-container">
                <div>
                <img src="${el.strCategoryThumb}">
                </div>
                <div>
                <h3> ${el.strCategory}</h3>
                </div>
                </div>
                `
                container.appendChild(div)
            })
    } catch (error) {
        console.log(error);
    }
    
    }



//     idCategory: "1"
// strCategory: "Beef"
// strCategoryDescription: "Beef is the culinary name for meat from cattle, particularly skeletal muscle. Humans have been eating beef since prehistoric times.[1] Beef is a source of high-quality protein and essential nutrients.[2]"
// strCategoryThumb: "https://www.themealdb.com/images/category/beef.png"