async function getWeather(){
    try{
        const city = document.getElementById("city").value;
        const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=9c97c6b217ae25662a3a8b669e117fb5&units=metric`);
        const res2 = await res.json();
        const ambd_map = document.getElementById('ambd_map');
        console.log(res2);
        var content = document.getElementById("container");
        const card = `
        <h1 id="cityName">${city}</h1>
        <div id="mintemp"><h2>${res2.main.temp_min} <sup>o</sup>C</h2></div>
        <div id="sub-container">
        <div id="wind">Wind :${res2.wind.speed}</div>
        <div id="clouds">${res2.weather[0].description}</div>
        <div id="sunrise"><img src ="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRToJLrK802TlZUGt0u_ov-XeJjdn3BSpZo8w&usqp=CAU" id="rise"> : ${res2.sys.sunrise}</div>
        <div id="sunset"> <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREHMV978M0onnSMyPL9N8uso84x_jlYDw7HQ&usqp=CAU" id="set"> :${res2.sys.sunset}</div>
        <div id="humidity"> Humidity :${res2.main.humidity}</div>
        </div>`
        content.innerHTML =  card;
        ambd_map.src = `https://maps.google.com/maps?q=${city}&t=&z=13&ie=UTF8&iwloc=&output=embed`
    }catch(err){
        console.log(err , 'err');
    }
}