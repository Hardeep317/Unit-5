document.getElementById("confirm").addEventListener("click" , confirm);

// first();
// second();
// third();
// forth();
// fifth();
function confirm(){
    first();
    function first(){
        setTimeout(function(){
            alert("Your order is accepted");
        } , 0)
        second();
    }

    function second(){
        setTimeout(function(){
            alert("Your order is being prepared")
        } , 3000)
        third();
    }
    function third(){
        setTimeout(function(){
            alert("Your order is being packed")
        } , 8000)
        forth();
    }
    function forth(){
        setTimeout(function(){
            alert("Your order is out for delivery")
        } , 10000)
        fifth();
    }
    function fifth(){
        setTimeout(function(){
            alert("Order delivered")
        } , 12000)
    }
}