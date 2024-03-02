import { ALL_CARDS } from "../../StaticData/CardsInfo";
import { Card } from "./Model/Card";
import styles from "./CarrouselCards.module.scss";

export interface ICarrouselProps {
  indexArr: number[];
}

export const Carrousel = (props: ICarrouselProps) => {
    const cards = props?.indexArr?.filter(n => n>=0);
    const justifyContent = cards?.length > 3 ? 'space-between' : 'space-arround';
  return (
    <div className={styles.carrousel} style={{justifyContent}}>
      {props?.indexArr &&
        props?.indexArr?.length > 0 &&
        props?.indexArr.map((index) => {
          if (index >= 0) return Card(ALL_CARDS[index]);
        })}
    </div>
  );
};
