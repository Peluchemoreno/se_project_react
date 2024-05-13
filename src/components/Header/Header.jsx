import './Header.css';
import logo from '../../assets/wtwr-logo.svg'
import profilePicture from '../../assets/profile-pic.png'
export default function Header(){
  const currentDate = new Date().toDateString('default', {
    month: 'long',
    day: 'numeric'
  })

  return (
    <header className='header'>
      <img src={logo} alt="logo" className="header__logo" />
      <p className="header__date-and-location">{currentDate}, Location</p>

      <div className="header__user-container">
      <button className="header__add-clothes-button">+ Add clothes</button>
        <p className="header__profile_name">Justin McDonald</p>
        <img src={profilePicture} alt="profile picture" className="header__profile_image" />
      </div>

    </header>
  )
}