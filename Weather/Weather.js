
async function getWeather(){
  try{
        const city = document.getElementById("city").value;
        const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=9c97c6b217ae25662a3a8b669e117fb5&units=metric`);
        const res2 = await res.json();
        
        const ambd_map = document.getElementById('ambd_map');
    var content = document.getElementById("container");
    const card = `
    <h1 id="cityName">${res2.name}</h1>
    <div id="mintemp"><h2>${res2.main.temp} <sup>o</sup>C</h2></div>
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
  
  
  function getPost(){
 async function success(pos) {
    const crd = pos.coords;
  
    console.log('Your current position is:');
    console.log(`Latitude : ${crd.latitude}`);
    console.log(`Longitude: ${crd.longitude}`);
    console.log(`More or less ${crd.accuracy} meters.`);
    const res = await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${crd.latitude}&lon=${crd.longitude}&exclude=hourly,minutely&appid=a77df68bcd9e098229cb3c8e6441dfbc`)
    const res2 = await res.json();
    // showData()
    console.log(res2);

    const ambd_map = document.getElementById('ambd_map');
    var content = document.getElementById("container");
    const card = `
    <h1 id="cityName">${res2.name}</h1>
    <div id="mintemp"><h2>${res2.main.temp} <sup>o</sup>C</h2></div>
    <div id="sub-container">
    <div id="wind">Wind :${res2.wind.speed}</div>
    <div id="clouds">${res2.weather[0].description}</div>
    <div id="sunrise"><img src ="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRToJLrK802TlZUGt0u_ov-XeJjdn3BSpZo8w&usqp=CAU" id="rise"> : ${res2.sys.sunrise}</div>
    <div id="sunset"> <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREHMV978M0onnSMyPL9N8uso84x_jlYDw7HQ&usqp=CAU" id="set"> :${res2.sys.sunset}</div>
    <div id="humidity"> Humidity :${res2.main.humidity}</div>
    </div>`
    content.innerHTML =  card;
    ambd_map.src = `https://maps.google.com/maps?q=${city}&t=&z=13&ie=UTF8&iwloc=&output=embed`
  }
  navigator.geolocation.getCurrentPosition(success);
  
}

 function showData(){
  async function success(pos) {
    const crd = pos.coords;
  
    // console.log('Your current position is:');
    // console.log(`Latitude : ${crd.latitude}`);
    // console.log(`Longitude: ${crd.longitude}`);
    // console.log(`More or less ${crd.accuracy} meters.`);
    const sdays = document.getElementById("sday");
    const res = await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${crd.latitude}&lon=${crd.longitude}&exclude=hourly,minutely&appid=a77df68bcd9e098229cb3c8e6441dfbc&units=metric`)
    const res2 = await res.json();
    
    console.log(res2.daily);
    sdays.innerHTML = "";
    res2.daily.forEach(el => {
      sdays.innerHTML +=`
      <div id="sub">
      <p> ${el.temp.max}<sup>o</sup>C</p>
      <p> ${el.temp.min}<sup>o</sup>C</p>
      </div>`
    });
  }
  navigator.geolocation.getCurrentPosition(success);
}


// https://api.openweathermap.org/data/2.5/onecall?lat=${crd.latitude}&lon=${crd.longitude}&exclude=hourly,minutely&appid=9c97c6b217ae25662a3a8b669e117fb5
// https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=hourly,minutely&appid=a77df68bcd9e098229cb3c8e6441dfbc