import { useState } from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import "./RegisterModal.css";

export default function RegisterModal({
  activeModal,
  handleCloseModal,
  closeMobileModal,
}) {

  const [email, setEmail] = useState("")

  function handleSubmit(e){
    e.preventDefault();
  }

  function handleEmailChange(e){
    setEmail(e.target.value)
  }

  return (
    <ModalWithForm
      title="Sign Up"
      buttonText="Sign Up"
      activeModal={activeModal}
      handleCloseModal={handleCloseModal}
      handleCloseMobileModal={closeMobileModal}
      handleSubmit={handleSubmit}
    >
      <label htmlFor="email">
      <p className="form__label-text">Email</p>
      <input 
      onChange={handleEmailChange}
      type="email"
      id="email"
      className="form__input"
      placeholder="Email"
      required
      value={email}
       />
      </label>
    </ModalWithForm>
  );
}
