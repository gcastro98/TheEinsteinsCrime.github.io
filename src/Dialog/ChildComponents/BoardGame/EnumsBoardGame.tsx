
import styles from './BoardGame.module.scss';


export enum BoardKey {
  Characters = "Personajes",
  Weapons = "Armas",
  Rooms = "Habitaciones",
}
export enum CharactersKey {
  Tesla = "Tesla",
  Curie = "Curie",
  DaVinci = "Da Vinci",
  Franklin = "Franklin",
  Galileo = "Galileo",
  Newton = "Newton",
}
export enum WweaponsKey {
  Manzana = "Manzana",
  Martillo = "Martillo",
  Pistola = "Pistola",
  Catalejo = "Catalejo",
  Veneno = "Veneno",
  Cuchillo = "Cuchillo",
}
export enum RoomsKey {
  Observatorio = "Observatorio",
  Clase = "Clase",
  Taller = "Taller",
  Laboratorio = "Laboratorio",
  Biblioteca = "Biblioteca",
  Electricidad = "Electricidad",
  MaquinaDelTiempo = "Maquina del tiempo",
}
export enum FieldType {
  Label = "Label",
  Icon = "Icon",
  Empty = "Empty",
}

export enum IconsType {
  Empty = "",
  Check = "SkypeCircleCheck",
  Fail = "StatusErrorFull",
  Unknown = "UnknownSolid",
}

