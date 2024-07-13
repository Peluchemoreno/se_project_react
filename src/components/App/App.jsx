import { useEffect, useState } from "react";
import "./App.css";
import Header from "../Header/Header.jsx";
import Main from "../Main/Main.jsx";
import Footer from "../Footer/Footer.jsx";
import ItemModal from "../ItemModal/ItemModal.jsx";
import { getWeather } from "../../utils/weatherApi.js";
import { getGeoLocationWeather } from "../../utils/weatherApi.js";
import CurrentTemperatureUnitContext from "../../contexts/CurrentTemperatureUnitContext/CurrentTemperatureUnitContext.js";
import { Routes, Route } from "react-router-dom";
import Profile from "../Profile/Profile.jsx";
import AddItemModal from "../AddItemModal/AddItemModal.jsx";
import Api from "../../utils/api.js";
import RegisterModal from "../RegisterModal/RegisterModal.jsx";
import IsLoggedInContext from "../../contexts/IsLoggedInContext/IsLoggedInContext.js";
import LoginModal from "../LoginModal/LoginModal.jsx";
import { register, signin, getUser } from "../../utils/auth.js";
import ProtectedRoute from "../ProtectedRoute.jsx";
import CurrentUserContext from "../../contexts/CurrentUserContext/CurrentUserContext.js";

function App() {
  const api = new Api("http://localhost:4000/");
  const [clothingItems, setClothingItems] = useState([]);
  const [activeModal, setActiveModal] = useState("");

  const [activeMobileModal, setMobileModal] = useState("");

  const [selectedCard, setSelectedCard] = useState({});

  const [currentTemperatureUnit, setCurrentTemperatureUnit] = useState("F");

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const [currentUser, setCurrentUser] = useState({})

  useEffect(() => {
    api
      .fetchData()
      .then((clothingItems) => {
        setClothingItems(clothingItems.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);
  


  const [weatherData, setWeatherData] = useState({
    weather: ``,
    cityName: "",
    currentTemp: {
      F: 0,
      C: 0,
    },
  });

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (success) => {
        getGeoLocationWeather(success)
          .then((data) => {
            setWeatherData(data);
          })
          .catch((err) => {
            console.error(err);
          });
      },
      () => {
        getWeather()
          .then((data) => {
            setWeatherData(data);
          })
          .catch((err) => {
            console.error(err);
          });
      }
    );
  }, []);

  useEffect(()=>{
    const token = localStorage.getItem('jwt')
    if (!token){
      return
    }
    getUser(token)
    .then(user => {
      console.log(user)
      setIsLoggedIn(true)
      setCurrentUser(user)
    })

  }, [])



  function handleCardClick(card) {
    setActiveModal("preview");
    setSelectedCard(card);
  }

  function closeModal() {
    setActiveModal("");
  }

  function closeMobileModal() {
    setMobileModal("");
  }

  function handleToggleSwitchChange() {
    setCurrentTemperatureUnit(currentTemperatureUnit === "F" ? "C" : "F");
  }

  function navigateToLogin(){
    setActiveModal("log-in")
  }

  function handleLogin(email, password){
    signin(email, password)
    .then((data)=>{
      console.log(data)
      getUser(data.token)
      .then((user)=>{
        setIsLoggedIn(true)
        setCurrentUser(user)
        closeModal()
      })
    })
  }

  function navigateToSignUp(){
    setActiveModal('sign-up')
  }

  function handleSignUp(email, password, name, url){
    register(email, password, name, url)
    .then(()=>{
      handleLogin(email, password)
    })
  }

  function onAddItem(clothingData, onDone) {
    const token = localStorage.getItem('jwt')
    api
      .addGarment(clothingData, token)
      .then((item) => {
        setClothingItems([item, ...clothingItems]);
      })
      .then(() => {
        onDone();
      })
      .catch((err) => {
        console.error(err);
      });
  }
  function handleDeleteClick(cardId) {
    const token = localStorage.getItem('jwt')
    api
      .deleteGarment(cardId, token)
      .then(() => {
        const newFilteredArray = clothingItems.filter((item) => {
          return item._id !== cardId._id;
        });
        setClothingItems(newFilteredArray);
        closeModal();
      })
      .catch((err) => {
        console.error(err);
      });
  }

  return (
    <div className="app">
      <CurrentTemperatureUnitContext.Provider
        value={{ currentTemperatureUnit, handleToggleSwitchChange }}
      >
        <IsLoggedInContext.Provider value={{isLoggedIn, setIsLoggedIn}}>
          <CurrentUserContext.Provider value={currentUser}>
          <div className="app__content">
            <Header
              onAddGarmentClick={setActiveModal}
              handleMobileMenuClick={setMobileModal}
              currentActiveMobileModal={activeMobileModal}
              handleCloseModal={closeMobileModal}
              weatherData={weatherData}
              isLoggedIn={isLoggedIn}
              onSignUpClick={setActiveModal}
              onLogInClick={setActiveModal}
            />
            <Routes>
              <Route
                path="/"
                element={
                  <Main
                    clothingItems={clothingItems}
                    weatherData={weatherData}
                    handleCardClick={handleCardClick}
                    handleCloseModal={closeMobileModal}
                  />
                }
              ></Route>
              <Route
                path="/profile"
                element={
                  <ProtectedRoute>
                    <Profile
                      clothingItems={clothingItems}
                      handleCardClick={handleCardClick}
                      onAddGarmentClick={setActiveModal}
                      />
                  </ProtectedRoute>
                }
              />
            </Routes>

            <Footer />
          </div>
          <AddItemModal
            activeModal={activeModal}
            isOpen={activeModal === "add-garment"}
            closeModal={closeModal}
            closeMobileModal={closeMobileModal}
            onAddItem={onAddItem}
            isLoggedIn={isLoggedIn}
          />
          <ItemModal
            activeModal={activeModal}
            card={selectedCard}
            handleCloseModal={closeModal}
            handleDeleteClick={handleDeleteClick}
          />
          <RegisterModal
            activeModal={activeModal}
            handleCloseModal={closeModal}
            isLoggedIn={isLoggedIn}
            isOpen={activeModal === 'sign-up'}
            handleSignUp={handleSignUp}
            navigateToLogin={navigateToLogin}
          />
          <LoginModal 
          activeModal={activeModal}
          handleCloseModal={closeModal}
          isLoggedIn={isLoggedIn}
          isOpen={activeModal === 'log-in'}
          handleLogin={handleLogin}
          closeModal={closeModal}
          navigateToSignUp={navigateToSignUp}
          />
          </CurrentUserContext.Provider>
        </IsLoggedInContext.Provider>
      </CurrentTemperatureUnitContext.Provider>
    </div>
  );
}

export default App;
