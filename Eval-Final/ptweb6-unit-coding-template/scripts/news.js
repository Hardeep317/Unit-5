// Ude Import export (MANDATORY)
data();
async function data(){
    try{
        const res = await fetch(`https://masai-api.herokuapp.com/news?q=twitter`)
    var res2 = await res.json();
    // return res2;
    console.log(res2);
        var detailed_news = document.getElementById("detailed_news");
    res2.articles.forEach(el => {
        detailed_news.innerHTML = "";
        var image = document.createElement("img");
        image.setAttribute("src", `${el.urlToImage}`);

        var title = document.createElement("h1");
        title.innerText = `${el.title}`;

        var content = document.createElement("h3");
        content.innerText = `${el.description}`;

        detailed_news.append(image, title, content);
    });
    }catch(err){
        console.log(err);
    }
}

/*author
: 
"Chris Stokel-Walker"
content
: 
"Such social media battles may be unusual when considering a takeover of a massive business, but Musk is himself unusual, says Cary Cooper, a business professor at Manchester Business School. Hes not … [+4004 chars]"
description
: 
"His weeks-long pursuit of the company has resulted in a $44 billion deal. But how did it happen, and what the hell comes next?"
publishedAt
: 
"2022-04-25T19:41:32Z"
source
: 
{id: 'wired', name: 'Wired'}
title
: 
"How Elon Musk Won Twitter"
url
: 
"https://www.wired.com/story/elon-musk-buys-twitter-deal/"
urlToImage
: 
"https://media.wired.com/photos/6266f8d9f2e5a2b3f2ddf24f/191:100/w_1280,c_limit/Elon_twitter_musk_GettyImages-1233956115.jpg"*/