import { apiKey } from "./constants";
import { coordinates } from "./constants";

export function getWeather(){
  return fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${coordinates.latitude}&lon=${coordinates.longitude}&units=imperial&appid=${apiKey}`).then(res => res.ok ? res.json() : Promise.reject(error => {
    console.error(error)
  })).then(data => {
    const temperature = Math.floor(data.main.temp);
    const weatherData = {
      cityName: data.name,
      currentTemp: {
        F: temperature,
        C: Math.floor(((temperature - 32) * (5/9)))
      }
    }

    if (temperature > 86){
      weatherData['weather'] = 'hot'
    } else if (temperature >= 66 && temperature < 86){
      weatherData['weather'] = 'warm'
    } else {
      weatherData['weather'] = 'cold'
    }
    return weatherData
  })
}

