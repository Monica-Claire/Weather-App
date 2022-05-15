//pulls lat & lon data
function getLocation() {
   const locationURL = `http://api.openweathermap.org/geo/1.0/direct?q=Detroit&limit=5&appid=e94085e052392b6296e34ce275bbed6d`
   fetch(locationURL)
   .then(function(response){
       return response.json()
    })
    .then(function(data){
        console.log(data)
        getWeatherData(data[0])
    })
}
getLocation()

//pulls weather data for various cities
const getWeatherData = function(city) {
    var lat = city.lat
    var lon = city.lon

    const apiURL = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=minutely,hourly&appid=e94085e052392b6296e34ce275bbed6d`;

    //add variables for lat,lon?
    fetch(apiURL)
    .then(function(response) {
        console.log(response)
        response.json().then(function(data){
            console.log(data);
        });
    });
};

//event listener for search bar
element.addEventListener("search", getLocation(){ alert("Hello World!"); });
//stores data locally

//displays data on page