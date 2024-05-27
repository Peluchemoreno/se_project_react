import './ClothesSection.css'
import ItemCard from '../ItemCard/ItemCard'
import { defaultClothingItems } from '../../utils/constants'

export default function ClothesSection({weatherData, handleCardClick, handleCloseModal}){
  return (
    <section className="clothes-section">
      <div className="clothes-section__header">
        <h3 className="clothes-section__title">Your items</h3>
        <button type='button' className="clothes-section__add-button">+ Add new</button>
      </div>
      <ul className="clothes-section__container">
            {defaultClothingItems
            // .filter(item =>{
            //   return item.weather === weatherData.weather
            // })
            .map((item) => {
              return (
                <ItemCard key={item._id} item={item} onCardClick={handleCardClick} handleCloseModal={handleCloseModal}/>
              )
            })}
          </ul>
    </section>
  )
}