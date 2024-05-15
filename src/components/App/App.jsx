import { act, useEffect, useState } from 'react'
import './App.css'
import Header from '../Header/Header.jsx'
import Main from '../Main/Main.jsx'
import Footer from '../Footer/Footer.jsx'
import ModalWithForm from '../ModalWithForm/ModalWithForm.jsx'
import ItemModal from '../ItemModal/ItemModal.jsx'
import { getWeather } from '../../utils/weatherApi.js'


function App() {

  useEffect(()=>{
    getWeather().then(data => {
      setWeatherData(data)
    })
  }, [])
  
  const [weatherData, setWeatherData] = useState({
    weather: `cold`,
    cityName: '',
    currentTemp: {
      F: 99,
      C: 99,
    }
  })

  const [activeModal, setActiveModal] = useState('')

  const [activeMobileModal, setMobileModal] = useState('')

  const [selectedCard, setSelectedCard] = useState({})

  function handleCardClick(card){
    setActiveModal('preview')
    setSelectedCard(card)
  }

  function closeModal(){
    setActiveModal('')
  }
  
  function closeMobileModal(){
    setMobileModal('')
  }



  return (
    <>
      <div className='app'>
        <div className="app__content">
          <Header onAddGarmentClick={setActiveModal} handleMobileMenuClick={setMobileModal} currentActiveMobileModal={activeMobileModal} handleCloseModal={closeMobileModal}/>
          <Main weatherData={weatherData} handleCardClick={handleCardClick} />
          <Footer />
        </div>
        <ModalWithForm title='New garment' buttonText='Add garment' activeModal={activeModal} handleCloseModal={closeModal} handleCloseMobileModal={closeMobileModal}>
        <label htmlFor="name" className="form__label">
          <p className="form__label-text form__label-text_name">Name</p>
          <input id='name' type="text" className="form__input form__input_name" placeholder='Name' required minLength='2' maxLength='40'/>
        </label>
        <label htmlFor="image" className="form__label form__label_image">
          <p className="form__label-text form__label-text_image">Image</p>
          <input id='image' type="url" className="form__input form__input_image" placeholder='Image URL' required/>
        </label>
        <div className="form__weather-select">
          <div className="form__weather-select-header">Select the weather type:</div>
          <div className='form__weather-select-option'>
            <input type="radio" id='hot' value="hot" name='weather-type' className="form__weather-select-input form__weather-select-input_hot" />
            <label htmlFor="hot" className="form__weather-select-label">Hot</label>
          </div>
          <div className='form__weather-select-option'>
            <input type="radio" id='warm' value="warm" name='weather-type' className="form__weather-select-input form__weather-select-input_warm" />
            <label htmlFor="warm" className="form__weather-select-label">Warm</label>
          </div>
          <div className='form__weather-select-option'>
            <input type="radio" id='cold' value="cold" name='weather-type' className="form__weather-select-input form__weather-select-input_cold" />
            <label htmlFor="cold" className="form__weather-select-label">Cold</label>
          </div>
        </div>
        </ModalWithForm>
        <ItemModal activeModal={activeModal} card={selectedCard} handleCloseModal={closeModal}/>
      </div>
    </>
  )
}

export default App
