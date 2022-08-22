// On clicking remove button the item should be removed from DOM as well as localstorage.
var arr = JSON.parse(localstorage.getItem("Ordered")) || [];
var total = 0;
check();
function check(){
    
    var div2 = document.getElementById("show");
    arr.map(function(item){
        var div = document.createElement("div");
        
        var img = document.createElement("img");
        img.setAttribute("src", item.image);

        var title = document.createElement("p");
        title.innerHTML = item.title;

        var price = document.createElement("p");
        price.innerHTML = item.price;

        var remove = document.createElement("button");
        remove.innerText = "Remove";
        remove.addEventListener("click" , deleteIt);

        div.append(img, title, price);
        div2.append(div);
        total += item.price;
    })
    document.getElementById("total").innerText = total;
}

function deleteIt(){
    event.target.parentNode.remove();
}
