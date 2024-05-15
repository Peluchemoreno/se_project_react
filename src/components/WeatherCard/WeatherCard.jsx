import './WeatherCard.css'
import sunny from '../../assets/sunny-day.svg'
export default function WeatherCard({weatherData}){
  return (
    <section className='weather-card'>
      <p className="weather-card__temperature">{weatherData.currentTemp.F}&deg;F</p>
      <img src={sunny} alt="sunny day" className="weather-card__image" />
    </section>
  )
}