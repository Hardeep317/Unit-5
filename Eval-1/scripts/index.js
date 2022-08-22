// document.querySelector("button").addEventListener("click", cart);
// function cart(){
//     console.log("hii there");
// }
// Add the coffee to local storage with key "coffee"
addCoffee();
// document.getElementById("btn").addEventListener("onclick" , data);
var arr = JSON.parse(localStorage.getItem("Orderd")) || [];
console.log(arr);
async function addCoffee(){
        const res = await fetch(`https://masai-api.herokuapp.com/coffee/menu`).then(function(res){
            return res.json();
        }).then(function(res2){
            console.log(res2);
            var content = document.getElementById("sub-container");
            // content.innerHTML =
            res2.menu.data.forEach(function(element){
                var div = document.createElement("div");

                var img = document.createElement("img");
                img.setAttribute("src", element.image);

                var title = document.createElement("p");
                title.innerHTML = element.title;

                var price = document.createElement("p");
                price.innerHTML = element.price;

                // document.getElementById("btn").addEventListener("click" , data);

                // function data(){
                   
                // }
                var button = document.createElement("button");
                button.innerHTML ="Add to Bucket";
                button.onclick = function(res2) {
                    var img = document.createElement("img");
                    img.setAttribute("src", res2.image);
    
                    var title = document.createElement("p");
                    title.innerHTML = res2.title;
    
                    var price = document.createElement("p");
                    price.innerHTML = res2.price;
    
                    var Oobj = {
                        title: title, price: price, image: img
                    }
    
                    arr.push(Oobj);
                    localStorage.setItem("Ordered" , JSON.stringify(arr));
                }

                div.append(img,title, price , button);
                content.append(div);
                
            });
        })
    }

    
    