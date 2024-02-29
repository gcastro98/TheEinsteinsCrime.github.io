
export interface IDialogConfigProps {
  type: DialogComponent;
  props?: any;
}

export enum DialogComponent {
  None = "None",
  Home = "Inicio",
  Settings = "Ajustes",
  Create = "Crear sala",
  Join = "Unirse a sala",
  Board = "Tablero",
  Cards = "Cartas",
  Dices = "Dados",
  Exit = "Exit",
  Request = "Request",
  Solution = "Solution",
  Waiting = "Waiting",
  CardsByUser = "CardsByUser",
  Landing = "Landing",
  EndGame = "EndGame"
}
