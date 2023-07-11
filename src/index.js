let weather = {
  paris: {
    temp: 19.7,
    humidity: 80
  },
  tokyo: {
    temp: 17.3,
    humidity: 50
  },
  lisbon: {
    temp: 30.2,
    humidity: 20
  },
  "san francisco": {
    temp: 20.9,
    humidity: 100
  },
  moscow: {
    temp: -5,
    humidity: 20
  }
};

let cityWeather = {
  Paris: { temperature: 20, humidity: 80 },
  London: { temperature: 17, humidity: 75 },
  NewYork: { temperature: 26, humidity: 65 }
};

let city = prompt("Enter a city");

if (cityWeather.hasOwnProperty(city)) {
  let temperature = Math.round(cityWeather[city].temperature);
  let humidity = Math.round(cityWeather[city].humidity);

  let alertMessage = `It is currently ${temperature}°C (${Math.round(
    (temperature * 9) / 5 + 32
  )}°F) in ${city} with a humidity of ${humidity}%`;

  alert(alertMessage);
} else {
  let googleWeatherLink = "https://www.google.com/search?q=weather+" + city;
  let alertMessage = `Sorry, we don't know the weather for this city. Try going to ${googleWeatherLink}`;

  alert(alertMessage);
}
