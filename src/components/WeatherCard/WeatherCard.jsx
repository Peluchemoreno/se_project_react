import './WeatherCard.css'
import {weatherOptions, defaultWeatherOptions} from '../../utils/constants.js'
export default function WeatherCard({weatherData}){

 let weatherOption;

 const filteredOption = weatherOptions.find(option => {
  return option.day === weatherData.isDay && option.condition === weatherData.weatherDescription
})

  const defaultWeatherOption = defaultWeatherOptions.find(option => {
    return option.day === weatherData.isDay;
  })

  if (filteredOption === undefined){
    weatherOption = defaultWeatherOption
  } else {
    weatherOption = filteredOption
  }


  return (
    <section className='weather-card'>
      <p className="weather-card__temperature">{weatherData.currentTemp.F}&deg;F</p>
      <img src={weatherOption?.url} alt={weatherData.weatherDescription} className="weather-card__image" />
    </section>
  )
}