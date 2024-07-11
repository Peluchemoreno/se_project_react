import { useState } from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import "./RegisterModal.css";

export default function RegisterModal({
  activeModal,
  handleCloseModal,
  closeMobileModal,
  isOpen,
  handleLogin,
  navigateToLogin
}) {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [name, setName] = useState("")
  const [url, setAvatarUrl] = useState("")

  function resetInputs(){
    setEmail('')
    setPassword('')
    setName('')
    setAvatarUrl('')
  }

  function handleSubmit(e){
    e.preventDefault();
    resetInputs()
  }

  function handleEmailChange(e){
    setEmail(e.target.value)
  }

  function handlePasswordChange(e){
    setPassword(e.target.value)
  }

  function handleNameChange(e){
    setName(e.target.value)
  }

  function handleAvatarUrlChange(e){
    setAvatarUrl(e.target.value)
  }

  function isButtonDisabled(){
    return !name || !url || !password || !email
  }

  return (
    <ModalWithForm
      title="Sign Up"
      buttonText="Sign Up"
      activeModal={activeModal}
      handleCloseModal={handleCloseModal}
      handleCloseMobileModal={closeMobileModal}
      handleSubmit={handleSubmit}
      isOpen={isOpen}
      alternateButton={true}
      alternateButtonText="or Log In"
      handleLogin={handleLogin}
      isButtonDisabled={isButtonDisabled()}
      navigateToLogin={navigateToLogin}
    >
      <label htmlFor="email" className="form__label">
      <p className="form__label-text">Email *</p>
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
      <label htmlFor="password" className="form__label">
        <p className="form__label-text">Password *</p>
        <input id="password" type="password" className="form__input" placeholder="Password" required value={password} onChange={handlePasswordChange}/>
      </label>
      <label htmlFor="user's name" className="form__label">
        <p className="form__label-text">Name *</p>
        <input id="user's name" type="text" className="form__input" placeholder="Name" required value={name} onChange={handleNameChange}/>
      </label>
      <label htmlFor="url" className="form__label">
        <p className="form__label-text">Avatar URL *</p>
        <input id="url" type="text" className="form__input" placeholder="Avatar URL" required value={url} onChange={handleAvatarUrlChange}/>
      </label>
      
    </ModalWithForm>
  );
}
