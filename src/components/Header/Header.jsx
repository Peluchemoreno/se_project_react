import "./Header.css";
import logo from "../../assets/wtwr-logo.svg";
import profilePicture from "../../assets/profile-pic.png";
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";
import { Link } from "react-router-dom";

export default function Header({
  onAddGarmentClick,
  handleMobileMenuClick,
  currentActiveMobileModal,
  handleCloseModal,
  weatherData,
}) {
  const currentDate = new Date().toLocaleString("default", {
    month: "long",
    day: "numeric",
  });

  function handleAddClothesButtonClick() {
    onAddGarmentClick("add-garment");
    handleCloseModal();
  }

  return (
    <header className="header">
      <Link className="header__logo-link" to="/">
        <img src={logo} alt="logo" className="header__logo" />
      </Link>
      <p className="header__date-and-location">
        {currentDate}, {weatherData.cityName}
      </p>

      <button
        type="button"
        className="header__mobile-menu-button"
        onClick={() => {
          handleMobileMenuClick("mobile-menu");
        }}
      ></button>
      <div
        className={`header__user-container ${
          currentActiveMobileModal === "mobile-menu" &&
          "header__user-container_visible"
        }`}
      >
        <button
          type="button"
          className="header__mobile-menu-close-button"
          onClick={handleCloseModal}
        ></button>
        <ToggleSwitch />
        <button
          onClick={handleAddClothesButtonClick}
          className="header__add-clothes-button"
        >
          + Add clothes
        </button>
        <Link className="header__link" to="/profile">
          <div className="header__profile">
            <p className="header__profile_name">Justin McDonald</p>
            <img
              src={profilePicture}
              alt="profile picture"
              className="header__profile_image"
            />
          </div>
        </Link>
      </div>
    </header>
  );
}
