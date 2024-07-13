import "./EditProfileModal.css"
import ModalWithForm from "../ModalWithForm/ModalWithForm"
import { useContext, useState } from "react"
import CurrentUserContext from "../../contexts/CurrentUserContext/CurrentUserContext"

export default function EditProfileModal({
  closeModal,
  isOpen,
}){

  const currentUser = useContext(CurrentUserContext)
  
  const [name, setName] = useState(currentUser.name)
  const [url, setAvatarUrl] = useState(currentUser.avatar)



  function isButtonDisabled(){
    return !name || !url
  }

  function handleNameChange(e){
    setName(e.target.value)
  }

  function handleAvatarUrlChange(e){
    setAvatarUrl(e.target.value)
  }

  return (
    <ModalWithForm 
    title="Change profile data"
    buttonText="Save changes"
    isOpen={isOpen}
    isButtonDisabled={isButtonDisabled()}
    handleCloseModal={closeModal}
    >
      <label htmlFor="name" className="form__label">
        <p className="form__label-text">Name *</p>
        <input type="text" className="form__input" value={name} onChange={handleNameChange}/>
      </label>
      <label htmlFor="avatar" className="form__label">
        <p className="form__label-text">Avatar *</p>
        <input type="url" className="form__input" value={url} onChange={handleAvatarUrlChange}/>
      </label>

    </ModalWithForm>
  )
}