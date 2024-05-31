import "./ClothesSection.css";
import ItemCard from "../ItemCard/ItemCard";

export default function ClothesSection({
  clothingItems,
  handleCardClick,
  onAddGarmentClick,
}) {
  return (
    <section className="clothes-section">
      <div className="clothes-section__header">
        <h3 className="clothes-section__title">Your items</h3>
        <button
          onClick={() => {
            onAddGarmentClick("add-garment");
          }}
          type="button"
          className="clothes-section__add-button"
        >
          + Add new
        </button>
      </div>
      <ul className="clothes-section__container">
        {clothingItems.map((item) => {
          return (
            <ItemCard
              key={item._id}
              item={item}
              onCardClick={handleCardClick}
            />
          );
        })}
      </ul>
    </section>
  );
}
