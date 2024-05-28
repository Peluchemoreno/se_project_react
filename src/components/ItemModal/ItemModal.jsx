import "./ItemModal.css"

export default function ItemModal({activeModal, card, handleCloseModal}){
  return (
    <div className={`modal ${activeModal === 'preview' && 'modal_visible'}`}>
      <div className="modal__content modal__content_type_preview">
      <button onClick={handleCloseModal} type='button' className="modal__close-button"></button>
        <img className="modal__image" src={card.link} alt={card.name} />
        <div className="modal__content-details">
          <p className="modal__content-title">{card.name}</p>
          <p className="modal__content-weather-type">Weather: {card.weather}</p>
        </div>
      </div>
     </div>
  )
}