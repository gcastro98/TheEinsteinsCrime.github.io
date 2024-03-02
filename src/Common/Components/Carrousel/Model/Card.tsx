import styles from "../CarrouselCards.module.scss";
import { ICard } from "../../../../Firebase/Models/ICard";
import { CARDS_IMAGES } from "../../../StaticData/CardsInfo";

function getImageById(id: number, type: string) {
  if (id >= 0) {
    return CARDS_IMAGES[id]?.url;
  } else {
    return getImageUrlFromType(type);
  }
}

function getStyleFromType(type: string) {
  switch (type) {
    case "Suspect":
    case "Weapon":
      return "Arma";
    case "Room":
      return "Habitación";
  }
}

function getColorByType(type: string) {
  switch (type) {
    case "Suspect":
      return "#f0fff0bd";
    case "Weapon":
      return "#ffd6d6";
    case "Room":
      return "#d6efff";
  }
}

function getLabelFromType(type: string) {
  switch (type) {
    case "Suspect":
      return "Sospechoso";
    case "Weapon":
      return "Arma";
    case "Room":
      return "Habitación";
  }
}

function getImageUrlFromType(type: string) {
  switch (type) {
    case "Suspect":
      return "./assets/cardIcons/Suspect.png";
    case "Weapon":
      return "./assets/cardIcons/Weapon.png";
    case "Room":
      return "./assets/cardIcons/Room.png";
  }
}

export function Card(card: ICard) {
  return (
    <div
      className={styles.card}
      key={"card" + card?.id}
      style={{ backgroundColor: getColorByType(card?.type) }}
    >
      <div>
        <img src={getImageById(card?.id, card?.type)} alt={card.name} className={styles.img} 
            
         />
      </div>
      <div className={styles.textColumn}>
        {/* <span className="type">{getLabelFromType(card.type)}</span> */}
        <span className={styles.label}>{card.name}</span>
      </div>
    </div>
  );
}
