const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': 'd0c2547bccmsh60dd5a716c21420p14501bjsn586ffd69a078',
    'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
  }
};

const getWeather = (city) => {
  cityName.innerHTML = city;//assigns welcome to cityName
  
  fetch(`https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=${city}`, options)//city name as input
    .then(response => response.json())
    .then(response => {
      console.log(response);

      // Assigning values to HTML elements
     // cloud_pct.innerHTML = response.cloud_pct;
      temp1.innerHTML = response.temp;
      temp2.innerHTML = response.temp;
      feels_like.innerHTML = response.feels_like;
      humidity1.innerHTML = response.humidity;
      humidity2.innerHTML = response.humidity;
      min_temp.innerHTML = response.min_temp;
      max_temp.innerHTML = response.max_temp;
      wind_speed1.innerHTML = response.wind_speed;
      wind_speed2.innerHTML = response.wind_speed;
     wind_degrees.innerHTML = response.wind_degrees;
      //sunrise.innerHTML = response.sunrise;
     // sunset.innerHTML = response.sunset;
    })
    .catch(err => {
      console.error(err);
    });
};

submit.addEventListener("click", (e) => {
  e.preventDefault();//to prevent reload value
  getWeather(city.value);
});
getWeather("Delhi")
const get = (city, tempId, feelsLikeId, humidityId, minTempId, maxTempId, windSpeedId, windDegreesId) => {
  fetch(`https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=${city}`, options)
      .then(response => response.json())
      .then(response => {
          document.getElementById(tempId).textContent = response.temp;
          document.getElementById(feelsLikeId).textContent = response.feels_like;
          document.getElementById(humidityId).textContent = response.humidity;
          document.getElementById(minTempId).textContent = response.min_temp;
          document.getElementById(maxTempId).textContent = response.max_temp;
          document.getElementById(windSpeedId).textContent = response.wind_speed;
          document.getElementById(windDegreesId).textContent = response.wind_degrees;
      })
      .catch(err => {
          console.error(err);
      });
};

// Get weather data for popular cities
get("Texas", "temp_texas", "feels_like_texas", "humidity_texas", "min_temp_texas", "max_temp_texas", "wind_speed_texas", "wind_degrees_texas");
get("Tokyo", "temp_tokyo", "feels_like_tokyo", "humidity_tokyo", "min_temp_tokyo", "max_temp_tokyo", "wind_speed_tokyo", "wind_degrees_tokyo");
get("California", "temp_california", "feels_like_california", "humidity_california", "min_temp_california", "max_temp_california", "wind_speed_california", "wind_degrees_california");