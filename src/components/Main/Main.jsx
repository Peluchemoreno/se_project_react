import WeatherCard from "../WeatherCard/WeatherCard";
import ItemCard from "../ItemCard/ItemCard";
import { defaultClothingItems } from "../../utils/constants";
import '../Main/Main.css'

export default function Main({ weatherData }){
  return (
    <>
      <main>
        <WeatherCard isDay={weatherData.isDay}/>
        <section className="cards">
          <p className="cards__text">Today is 75 &deg; F / You may want to wear:</p>
          <ul className="cards__list">
            {defaultClothingItems
            // .filter(item =>{
            //   return item.weather === weatherData.weather
            // })
            .map((item, index) => {
              return (
                <ItemCard key={index} item={item} />
              )
            })}
          </ul>
        </section>
      </main>
    </>
  )
}