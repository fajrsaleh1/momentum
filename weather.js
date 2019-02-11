
function weatherSucc(response){
   
    const weather = response.data.weather[0].main;
    const temp = response.data.main.temp;
    const description = response.data.weather[0].description;
    if(weather === 'Clouds'){
    $('body').append(`<h2>☁️ ${temp}</h2>`);
    $('body').append(`<h2>${description}</h2>`);
    }
    else if(weather === 'Thunderstorm'){
        $('body').append(`<h2>🌧️ ${temp}</h2>`);
        $('body').append(`<h2>${description}</h2>`); 
    }

    else if(weather === 'Mist'){
        $('body').append(`<h2>⛈️ ${temp}</h2>`);
        $('body').append(`<h2>${description}</h2>`); 
    }
    else {
        $('body').append(`<h2>☀️ ${temp}</h2>`);
        $('body').append(`<h2>${description}</h2>`);    
    }
    $('body').append(`<h1> Hello Fajr 👽</h1>`);

    console.log(response.data)
}

function weatherFail(error){
    console.log(error);

}
axios ({
    method:'get',
    url:'http://api.openweathermap.org/data/2.5/weather?q=Riyadh&units=metric&appid=4317239d9a394ce353c52bb7a273d875',
}).then(weatherSucc).catch(weatherFail);


