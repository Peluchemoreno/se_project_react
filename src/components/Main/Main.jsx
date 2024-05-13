import WeatherCard from "../WeatherCard/WeatherCard";
import '../Main/Main.css'

export default function Main(){
  return (
    <>
      <main>
        <WeatherCard />
        <section className="cards">
          <p className="cards__text">Today is 75 &deg; F / You may want to wear:</p>
        </section>
      </main>
    </>
  )
}