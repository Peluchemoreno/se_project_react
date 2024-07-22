import "./ItemCard.css";



export default function ItemCard({ item, onCardClick, onCardLike, isLoggedIn }) {



  function handleCardClick() {
     onCardClick(item);
  }

  function handleLike(e){
    e.stopPropagation();
    onCardLike(item)
  }

  return (
    <li onClick={handleCardClick} className="card">
      <div className="card__header">
        <h2 className="card__title">{item.name}</h2>
        {isLoggedIn ? <button type="button" className={item.likes.length > 0 ? "card__heart card__heart_active" : "card__heart"} onClick={handleLike}></button> : <></>}
      </div>
        <img src={item.imageUrl} alt={item.name} className="card__image" />
    </li>
  );
}
