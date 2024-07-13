import "./Profile.css";
import SideBar from "../SideBar/SideBar.jsx";
import ClothesSection from "../ClothesSection/ClothesSection";


export default function Profile({
  clothingItems,
  handleCardClick,
  onAddGarmentClick,
  signout,
  onChangeProfileClick
}) {

  return (
    <div className="profile">
      <SideBar signout={signout} onChangeProfileClick={onChangeProfileClick}></SideBar>
      <ClothesSection
        clothingItems={clothingItems}
        handleCardClick={handleCardClick}
        onAddGarmentClick={onAddGarmentClick}
      />
    </div>
  );
}
