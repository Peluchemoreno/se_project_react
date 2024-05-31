import './Profile.css'
import SideBar from '../SideBar/SideBar.jsx'
import ClothesSection from '../ClothesSection/ClothesSection'

export default function Profile({clothingItems, handleCardClick, onAddGarmentClick}){
  return (
    <div className="profile">
      <SideBar></SideBar>
      <ClothesSection clothingItems={clothingItems} handleCardClick={handleCardClick} onAddGarmentClick={onAddGarmentClick}/>
    </div>
  )
}