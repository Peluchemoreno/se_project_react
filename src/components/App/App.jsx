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

function App() {
  const api = new Api("http://localhost:4000/");
  const [clothingItems, setClothingItems] = useState([]);

  useEffect(() => {
    api
      .fetchData()
      .then((data) => {
        setClothingItems(data);
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

  const [activeModal, setActiveModal] = useState("");

  const [activeMobileModal, setMobileModal] = useState("");

  const [selectedCard, setSelectedCard] = useState({});

  const [currentTemperatureUnit, setCurrentTemperatureUnit] = useState("F");

  const [isLoggedIn, setIsLoggedIn] = useState(true);

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

  function onAddItem(clothingData, onDone) {
    api
      .addGarment(clothingData)
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
    api
      .deleteGarment(cardId)
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
          <div className="app__content">
            <Header
              onAddGarmentClick={setActiveModal}
              handleMobileMenuClick={setMobileModal}
              currentActiveMobileModal={activeMobileModal}
              handleCloseModal={closeMobileModal}
              weatherData={weatherData}
              isLoggedIn={isLoggedIn}
              onSignUpClick={setActiveModal}
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
                  <Profile
                    clothingItems={clothingItems}
                    handleCardClick={handleCardClick}
                    onAddGarmentClick={setActiveModal}
                  />
                }
              ></Route>
            </Routes>

            <Footer />
          </div>
          <AddItemModal
            activeModal={activeModal}
            closeModal={closeModal}
            closeMobileModal={closeMobileModal}
            onAddItem={onAddItem}
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
          />
        </IsLoggedInContext.Provider>
      </CurrentTemperatureUnitContext.Provider>
    </div>
  );
}

export default App;
