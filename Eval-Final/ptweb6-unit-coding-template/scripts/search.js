// Ude Import export (MANDATORY)
// Onclicking store the news in local storage with key "news" so that you can access that on news.html page


function gotIt(){
    const getData = async() => {
        var country = document.getElementById("serach_input").value; 
        try{
            const res = await fetch(`https://masai-api.herokuapp.com/news/top-headlines?country=${country}`)
        var res2 = await res.json();
        // return res2;
        console.log(res2);
        }catch(err){
            console.log(err);
        }
    
        var container = document.getElementById("results");
        container.innerHTML = "";
        res2.articles.forEach(el => {
            var div = document.createElement('div');
            div.setAttribute("class" , "news");
            
            var image = document.createElement("img");
            image.setAttribute("src" , `${el.urlToImage}`)
    
            var title = document.createElement("h2");
            title.innerText = `${el.title}`;
    
            var description = document.createElement("p");
            description.innerText = `${el.description}`;
    
            var author = document.createElement("h3");
            author.innerText = `${el.author}`;
    
            div.append(image, title, description, author);
            div.addEventListener("click", function(e) {
               return details(`${el.source.id}`)
            });
    
            container.append(div);
        });
        
        
    }
    getData();
}
    
    
    function details(id){
        var id2 = id;
        localStorage.setItem("news-key", JSON.stringify(id2));
        window.location.href = "news.html";
    }
    