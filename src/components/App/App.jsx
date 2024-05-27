import { useEffect, useState } from 'react'
import './App.css'
import Header from '../Header/Header.jsx'
import Main from '../Main/Main.jsx'
import Footer from '../Footer/Footer.jsx'
import ModalWithForm from '../ModalWithForm/ModalWithForm.jsx'
import ItemModal from '../ItemModal/ItemModal.jsx'
import { getWeather } from '../../utils/weatherApi.js'
import { getGeoLocationWeather } from '../../utils/weatherApi.js'
import CurrentTemperatureUnitContext from '../../contexts/CurrentTemperatureUnitContext/CurrentTemperatureUnitContext.js'
import { Routes, Route } from 'react-router-dom'
import Profile from '../Profile/Profile.jsx'


function App() {

  const [weatherData, setWeatherData] = useState({
    weather: ``,
    cityName: '',
    currentTemp: {
      F: 0,
      C: 0,
    }
  })


  useEffect(()=>{
    navigator.geolocation.getCurrentPosition((success)=>{
      getGeoLocationWeather(success).then(data => {
        setWeatherData(data)
      }).catch(err => {
        console.error(err)
      })
    },()=>{
      getWeather().then(data => {
        setWeatherData(data)
      }).catch(err => {
        console.error(err)
      })
    })
  }, [])
  
 

  const [activeModal, setActiveModal] = useState('')

  const [activeMobileModal, setMobileModal] = useState('')

  const [selectedCard, setSelectedCard] = useState({})

  const [currentTemperatureUnit, setCurrentTemperatureUnit] = useState('F')

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

  function handleTemperatureSwitchToggle(){
    currentTemperatureUnit === 'F' ? setCurrentTemperatureUnit('C') : setCurrentTemperatureUnit('F')
  }



  return (
    <>
      <div className='app'>
        <CurrentTemperatureUnitContext.Provider value={{currentTemperatureUnit, handleTemperatureSwitchToggle}}>
          <div className="app__content">
            <Header onAddGarmentClick={setActiveModal} handleMobileMenuClick={setMobileModal} currentActiveMobileModal={activeMobileModal} handleCloseModal={closeMobileModal} weatherData={weatherData}/>
            <Routes>
              <Route path='/se_project_react' element={<Main weatherData={weatherData} handleCardClick={handleCardClick} handleCloseModal={closeMobileModal}/>}></Route>
              <Route path='/profile' element={<Profile weatherData={weatherData} handleCardClick={handleCardClick} handleCloseModal={closeModal} handleCloseMobileModal={closeMobileModal} activeModal={activeModal} />}></Route>
            </Routes>
            
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
        </CurrentTemperatureUnitContext.Provider>
      </div>
    </>
  )
}

export default App
