
export interface ICard {
  name: string;
  type: "Suspect" | "Weapon" | "Room";
  id: number;
  userId: number | string;
}
