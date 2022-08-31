function navbar (){
    return`<div id="div1">
        <img src="https://www.themealdb.com/images/logo-small.png" alt="">
    </div>
    <div id="items">
    <h3><a href="./index.html">Search</a></h3>
    <h3><a href="./recepie.html">Recepie of the day</a></h3>
    <h3><a href="./randomrecepie.html">Random recepie</a></h3>
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

export {navbar , navbar2}