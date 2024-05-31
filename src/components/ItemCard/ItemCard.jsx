import './ItemCard.css'

export default function ItemCard({item, onCardClick}){

  function handleCardClick(){
    onCardClick(item)  }
  return (
    <li onClick={handleCardClick} className="card">
        <h2 className="card__title">{item.name}</h2>
      <img src={item.imageUrl} alt={item.name} className="card__image" />
    </li>
  )
}