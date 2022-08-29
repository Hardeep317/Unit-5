var arr = JSON.parse(localStorage.getItem("Products")) || [];

display();

function display() {
    arr.map(function (elem){

        var div = document.createElement("div");
        var name = document.createElement("p");
        name.setAttribute("id" , "name");
        name.innerText = elem.name;

        var category = document.createElement("p");
        name.setAttribute("id" , "category");
        category.innerText = elem.category;

        var image = document.createElement("img")
        image.setAttribute("src", elem.image);

        var price = document.createElement("p");
        price.setAttribute("id" , "price");
        price.innerText = "$" + elem.price ;

        var gender = document.createElement("p");
        gender.setAttribute("id" , "gender");
        gender.innerText = elem.gender;

        var sold = document.createElement("button");
        sold.setAttribute("class" , "sold");
        sold.innerText = elem.sold;
        sold.addEventListener("click" , function(){
            changeColor(elem.sold);
        })

        var remove = document.createElement("button");
        remove.setAttribute("id" , "remove");
        remove.innerText = "Remove";
        remove.addEventListener("click" , deleteIt)


        if(sold.innerText === "True"){
            sold.style.backgroundColor = "green";
        }else{
            sold.style.backgroundColor = "red";
        }

        div.append(image ,name, category ,  price , gender , sold , remove);
        document.querySelector("#container").append(div);
    })
}


function deleteIt(){
    event.target.parentNode.remove();
}

function changeColor(){
    var sold = document.querySelector(".sold");
    if(sold.innerText === "True"){
        sold.innerText = "False";
        setColor();
    }else if(sold.innerText === "False"){ 
        sold.innerText = "True";
        setColor();
    }
    console.log("hiii there");
}

function setColor(){
    var sold = document.querySelector(".sold");
    if(sold.innerText === "False"){
        sold.style.backgroundColor = "red"
    }else if(sold.innerText === "True"){
        sold.style.backgroundColor = "green";
    }
}