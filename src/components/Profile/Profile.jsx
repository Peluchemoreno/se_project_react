import './Profile.css'
import SideBar from '../SideBar/SideBar'
import ClothesSection from '../ClothesSection/ClothesSection'

export default function Profile({handleCardClick, onAddGarmentClick}){
  return (
    <div className="profile">
      <SideBar></SideBar>
      <ClothesSection handleCardClick={handleCardClick} onAddGarmentClick={onAddGarmentClick}/>
    </div>
  )
}