import './ItemCard.css'

export default function ItemCard({item}){
  return (
    <li className="card">
        <h2 className="card__title">{item.name}</h2>
      <img src={item.link} alt={item.name} className="card__image" />
    </li>
  )
}