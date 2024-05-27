import './Profile.css'
import Sidebar from '../Sidebar/Sidebar'
import ClothesSection from '../ClothesSection/ClothesSection'

export default function Profile({weatherData, handleCardClick, handleCloseModal, handleCloseMobileModal, activeModal}){
  return (
    <div className="profile">
      <Sidebar></Sidebar>
      <ClothesSection weatherData={weatherData} handleCardClick={handleCardClick} handleCloseModal={handleCloseModal} handleCloseMobileModal={handleCloseMobileModal} activeModal={activeModal}></ClothesSection>
    </div>
  )
}