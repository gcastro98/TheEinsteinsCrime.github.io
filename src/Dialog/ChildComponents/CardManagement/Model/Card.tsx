import { ICard } from "../../../../Services/DataModels";
import "./Card.css";
export function Card(card: ICard){
    return <div className="card">
        <div className="imageColumn"> 
        <img src={getImageUrlFromType(card.type)} alt={card.name} />
        </div>
        <div className="textColumn">
        <span className="type">{getLabelFromType(card.type)}</span>
        <span className="label">{card.name}</span>
        
        </div>
    </div>
    
}

function getImageUrlFromType(type:string){
    switch(type){
        case "Suspect":
            return "./assets/cardIcons/Suspect.png";
        case "Weapon":
            return "./assets/cardIcons/Weapon.png";
        case "Room":
            return "./assets/cardIcons/Room.png";
    }
}

function getLabelFromType(type:string){
    switch(type){
        case "Suspect":
            return "Sospechoso";
        case "Weapon":
            return "Arma";
        case "Room":
            return "Habitación";
    }
}