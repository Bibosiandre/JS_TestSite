const COORDS_LS = 'coords';
const API_WEATHER = 'c04fad8e5e16ffab2117b8474d754dc5';
const weatherContainer = document.querySelector('.js_weather');

function getWeather(lat, lng){
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_WEATHER}&units=metric`)
        .then(function(response){
            return response.json();
        })
        .then(function(json){
            const temperature = json.main.temp;
            const locate = json.name;
            weatherContainer.innerText = `${temperature}°C ${locate}`;
        }); 
}

function saveCoords(positionObj) {
    localStorage.setItem(COORDS_LS, JSON.stringify(positionObj));
}

function GeoSucccessHandler(position){
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    const positionObj = {
        latitude: latitude,
        longitude: longitude
    }
    saveCoords(positionObj);
    getWeather(latitude, longitude);
}

function GeoErrorHandler(){
    console.log('Ошибка получения координат');
}

function askForCoords(){
    navigator.geolocation.getCurrentPosition(GeoSucccessHandler, GeoErrorHandler);
}

function getCoords(){
    const coords = localStorage.getItem(COORDS_LS);
    if (coords === null){
        askForCoords();
    }else {
        const loadCoords =  JSON.parse(coords);
        getWeather(loadCoords.latitude, loadCoords.longitude);
    }
}

function init() {
    getCoords();
}

init();