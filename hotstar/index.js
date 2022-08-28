
    document.getElementById("btn").addEventListener("click", Data);

    var noFounderror = "https://i.makeagif.com/media/11-04-2015/mfnzwt.gif";

    var printmovie = debounce(Data, 1000)

    function debounce(fn, delay) {
        let timerId;
        return function () {
            clearTimeout(timerId);
            timerId = setTimeout(function () {
                fn();
            }, delay);

        }
    }

    async function Data() {
        var container = document.getElementById("container");

        var inp = document.getElementById("input").value;

        var url = "https://www.omdbapi.com/?apikey=d1b963e1&s=" + inp;


        document.getElementById("searchIt").style.display = "block";
        document.getElementById("searchIt").innerHTML = "";
        
        try {
            var res = await fetch(url);
            var res1 = await res.json();
            res1.Search.map(function (e) {
                var div = document.createElement('div');

                div.addEventListener('click', function () {
                    searchbox(e.Title);
                })

                var image = document.createElement('img');
                image.setAttribute('src', e.Poster);

                var p = document.createElement('p');
                p.innerHTML = e.Title;

                div.append(image, p);

                document.getElementById("searchIt").append(div);
            });
        }
        catch (err) {
            console.log(err, "error");
            container.innerHTML = `<img src="${noFounderror}" alt="" id="notfound">`
            document.getElementById("searchIt").style.display = "none";
        }
    }

    async function searchbox(title) {
        document.getElementById("searchIt").style.display = "none";

        var url = "https://www.omdbapi.com/?apikey=d1b963e1&t=" + title;

        var res = await fetch(url);
        var res1 = await res.json();

        var container = document.getElementById("container");

        container.innerHTML = `
        <div>
            <img src="${res1.Poster}" alt="">
        </div>
        <div>
            <h1>Title: ${res1.Title}</h1>
            <p>${res1.Plot}</p>
            <p>${res1.Released}</p>
            <p>${res1.imdbRating}</p>
            <p>${res1.Actors}</p>
        </div>
    `
    }