
 document.getElementById("btn").addEventListener("click", Data);
 function Data() {
    var searched = document.getElementById("search").value;
fetch(`http://www.omdbapi.com/?apikey=60f82508&s=${searched}`).then(function(res){
    console.log(res , "res");
    return res.json();
}).then(function(res2){
    console.log(res2 , "res2");
    // var image = document.createElement("img");
    var content = document.getElementById("container");
    content.innerHTML = ""; 
    res2.Search.forEach(function(element){
        var div = document.createElement("div");
        // title.innerText = element.Title;
        div.innerHTML += `
        <img src=${element.Poster} id="img" alt="preview">`
        
        var title = document.createElement("p");
        title.innerText = element.Title;
        
        var year = document.createElement("p");
        year.innerText = element.Year;
        div.append(title , year);
        content.append(div);
    })
}).catch(function(err){
    var content = document.getElementById("container");
    var div = document.createElement("div");
    div.innerHTML += `
    <img src=${"https://cdn.dribbble.com/users/1000837/screenshots/3857924/loader_failed_01.gif"} id="img" alt="preview">`
    var title = document.createElement("p");
    title.innerText ="No movie found";

    div.style.height = "300px";
    div.append(title);
    content.append(div);

})

}
