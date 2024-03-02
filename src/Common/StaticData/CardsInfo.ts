import { IDropdownOption } from "@fluentui/react";
import { ICard } from "../../Firebase/Models/ICard";

export const ALL_CARDS: ICard[] = [
  {
    name: "Sala de maquinas",
    type: "Room",
    id: 0,
    userId: -1,
  },
  {
    name: "Biblioteca",
    type: "Room",
    id: 1,
    userId: -1,
  },
  {
    name: "Clase",
    type: "Room",
    id: 2,
    userId: -1,
  },
  {
    name: "Taller",
    type: "Room",
    id: 3,
    userId: -1,
  },
  {
    name: "Laboratorio",
    type: "Room",
    id: 4,
    userId: -1,
  },
  {
    name: "Observatorio",
    type: "Room",
    id: 5,
    userId: -1,
  },
  {
    name: "Premio nobel",
    type: "Weapon",
    id: 6,
    userId: -1,
  },
  {
    name: "Pistola",
    type: "Weapon",
    id: 7,
    userId: -1,
  },
  {
    name: "Manzana envenenada",
    type: "Weapon",
    id: 8,
    userId: -1,
  },
  {
    name: "Martillo",
    type: "Weapon",
    id: 9,
    userId: -1,
  },
  {
    name: "Uranio",
    type: "Weapon",
    id: 10,
    userId: -1,
  },
  {
    name: "Arma de rayos",
    type: "Weapon",
    id: 11,
    userId: -1,
  },
  {
    name: "Marie Curie",
    type: "Suspect",
    id: 12,
    userId: -1,
  },
  {
    name: "Nikola tesla",
    type: "Suspect",
    id: 13,
    userId: -1,
  },
  {
    name: "Leonardo Da Vinci",
    type: "Suspect",
    id: 14,
    userId: -1,
  },
  {
    name: "Rosalind Franklin",
    type: "Suspect",
    id: 15,
    userId: -1,
  },
  {
    name: "Isaac Newton",
    type: "Suspect",
    id: 16,
    userId: -1,
  },
  {
    name: "Margarita Salas",
    type: "Suspect",
    id: 17,
    userId: -1,
  },
];
export const fakeOption: IDropdownOption = { key: "", text: "" };

export const SUSPECTS_CARDS = ALL_CARDS.filter((cards) => cards.type === "Suspect");
export const WEAPON_CARDS = ALL_CARDS.filter((cards) => cards.type === "Weapon");
export const ROOM_CARDS = ALL_CARDS.filter((cards) => cards.type === "Room");
export const SUSPECT_OPTIONS = [
  fakeOption,
  ...SUSPECTS_CARDS.map((x) => {
    return { key: x.id, text: x.name };
  }),
];
export const WEAPON_OPTIONS = [
  fakeOption,
  ...WEAPON_CARDS.map((x) => {
    return { key: x.id, text: x.name };
  }),
];
export const ROOM_OPTIONS = [
  fakeOption,
  ...ROOM_CARDS.map((x) => {
    return { key: x.id, text: x.name };
  }),
];

export interface ICardImages {
  id: number;
  url: string;
} 

export const CARDS_IMAGES: ICardImages[] = [
  { id: 0,
      url: 'https://i.imgur.com/QhcZUwg.png'
  },
  { id: 1,
      url: 'https://i.imgur.com/ATrEvyG.png'
  },
  { id: 2,
      url: 'https://i.imgur.com/1pefaJQ.png'
  },
  { id: 3,
      url: 'https://i.imgur.com/aUBiQR8.png'
  },
  { id: 4,
      url: 'https://i.imgur.com/FmR9aFi.png'
  },
  { id: 5,
      url: 'https://i.imgur.com/GGx3T88.png'
  },
  { id: 6,
      url: 'https://i.imgur.com/tAHAzZ4.png'
  },
  { id: 7,
      url: 'https://i.imgur.com/5otv55M.png'
  },
  { id: 8,
      url: 'https://i.imgur.com/KnKocOw.jpeg'
  },
  { id: 9,
      url: 'https://i.imgur.com/91mYo8X.png'
  },
  { id: 10,
      url: 'https://i.imgur.com/kiEBtiE.png'
  },
  { id: 11,
      url: 'https://i.imgur.com/AymqEP7.png'
  },
  { id: 12,
      url: 'https://i.imgur.com/LyzoJck.png'
  },
  { id: 13,
      url: 'https://i.imgur.com/pH8edpF.png'
  },
  { id: 14,
      url: 'https://i.imgur.com/stWihHo.png'
  },
  { id: 15,
      url: 'https://i.imgur.com/TGInXBq.png'
  },
  { id: 16,
      url: 'https://i.imgur.com/RLafArE.png'
  },
  { id: 17,
      url: 'https://i.imgur.com/bQwcH8T.png'
  },
 
]

