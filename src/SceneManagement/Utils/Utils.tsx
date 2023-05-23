import { Davinci } from "../Models/Characters/Pieces/Davinci";
import { Tesla } from "../Models/Characters/Pieces/Tesla";

export const piecesByName = (type: string): (props: any) => JSX.Element => {
    switch (type) {
        case "Tesla":
            return (props: any) => Tesla(props);
        case "Davinci":
            return (props: any) => Davinci(props); 
        default:
            return (props: any) => Tesla(props);;
    }

}