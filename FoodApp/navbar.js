function navbar (){
    return`<div id="div1">
        <img src="https://www.themealdb.com/images/logo-small.png" alt="">
    </div>
    <div id="items">
    <h3><a href="./index.html">Search</a></h3>
    <h3><a href="./recepie.html">Recepie of the day</a></h3>
    <h3><a href="./randomrecepie.html">Random recepie</a></h3>
    <h3><a href="./signUp.html"> Sign Up </a> </h3>
</div>
    <div id="searchIt">
        <input type="text" id="search" placeholder="Search">
        <button id="btn""> Search </button>
    </div>`
}

function navbar2(){
    return `<div id="div1">
    <img src="https://www.themealdb.com/images/logo-small.png" alt="">
</div>
<div id="items">
<h3><a href="./index.html">Search</a></h3>
<h3><a href="./recepie.html">Recepie of the day</a></h3>
<h3><a href="./randomrecepie.html">Random recepie</a></h3>
</div>`
}

// From 
function form(){
    return `<h1>Sign Up</h1>
    <form action="">
        <label for="">Name</label>
        <input type="text" id="name" placeholder="Enter your name" required="required">

        <label for="">Email</label>
        <input type="email" id="email" placeholder="Enter your Email" required="required">
        
        <label for="">Mobile</label>
        <input type="number" id="number" placeholder="Enter your Mobile Number" required="required">
        
        <label for="">Password</label>
        <input type="password" id="password" placeholder="Enter your password" required="required">
        <button id="SignBtn">Submit</button>
    </form>
    <p>Already have an account<a href="./Login.html" id="login">Login</a></p>`
}


// SignUp functionality

export {navbar , navbar2, form}