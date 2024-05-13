import './Header.css';
import logo from '../../assets/wtwr-logo.svg'
import profilePicture from '../../assets/profile-pic.png'
export default function Header({onAddGarmentClick, handleMobileMenuClick, currentActiveMobileModal, handleCloseModal}){
  const currentDate = new Date().toLocaleString('default', {
    month: 'long',
    day: 'numeric'
  })

  return (
    <header className='header'>
      <img src={logo} alt="logo" className="header__logo" />
      <p className="header__date-and-location">{currentDate}, Location</p>

      <button type='button' className="header__mobile-menu-button" onClick={()=>{
        handleMobileMenuClick('mobile-menu')
      }}></button>
      <div className={`header__user-container ${currentActiveMobileModal === 'mobile-menu' && 'header__user-container_visible'}`}>
      <button type='button' className="header__mobile-menu-close-button" onClick={handleCloseModal}></button>
      <button onClick={()=>{
        onAddGarmentClick('add-garment')
        handleCloseModal()
      }} className="header__add-clothes-button">+ Add clothes</button>
      <div className='header__profile'>
        <p className="header__profile_name">Justin McDonald</p>
        <img src={profilePicture} alt="profile picture" className="header__profile_image" />
      </div>
      </div>

    </header>
  )
}