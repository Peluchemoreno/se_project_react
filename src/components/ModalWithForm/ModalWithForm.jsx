import "./ModalWithForm.css";

export default function ModalWithForm({
  children,
  buttonText,
  title,
  activeModal,
  handleCloseModal,
  handleSubmit,
}) {

  console.log(activeModal)
  // currently upon clicking the button to open a modal, both modals open, the one for signing up and the one for adding a new clothing item NEED TO FIX
  return (
    <div className={`modal ${activeModal === 'add-garment' && "modal_visible"}`}>
      <form onSubmit={handleSubmit} className="form">
        <button
          onClick={handleCloseModal}
          type="button"
          className="form__close-button"
        ></button>
        <h3 className="form__title">{title}</h3>
        {children}
        <button type="submit" className="form__submit-button">
          {buttonText}
        </button>
      </form>
    </div>
  );
}
