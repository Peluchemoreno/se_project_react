import WeatherCard from "../WeatherCard/WeatherCard";
import ItemCard from "../ItemCard/ItemCard";
import { defaultClothingItems } from "../../utils/constants";
import randomizeImage from '../../assets/randomize-logo.svg'
import '../Main/Main.css'

export default function Main({ weatherData, handleCardClick }){
  return (
    <>
      <main>
        <WeatherCard weatherData={weatherData}/>
        <section className="cards">
          <p className="cards__text">Today is {weatherData.currentTemp.F} &deg; F / You may want to wear:</p>
          <ul className="cards__list">
            {defaultClothingItems
            .filter(item =>{
              return item.weather === weatherData.weather
            })
            .map((item, index) => {
              return (
                <ItemCard key={index} item={item} onCardClick={handleCardClick}/>
              )
            })}
          </ul>
        </section>
        <section className="randomize">
          <button type='button' className="randomize__button">
            <img src={randomizeImage} alt="randomize" className="randomize__logo" />
            <p className="randomize__text">Randomize</p>
          </button>
        </section>
      </main>
    </>
  )
}