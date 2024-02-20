// Imports
export interface IConfig {
  logoPathLoading: string;
  logoPath: string;
  buttons: ButtonProps[];
}

export interface ButtonProps {
  name: string;
  mode?: ButtonMode;
  type: ButtonType;
  hidden?: boolean | "OnlyTurn";
}

export enum ButtonType {
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
  Waiting = "Waiting"
}

export enum ButtonMode {
  StartScreen,
  GameScreen,
}

export const config: IConfig = {
  logoPathLoading: "TheEinsteinsCrime_logo_recortado.png",
  logoPath: "TheEinsteinsCrime_logo_recortado_beige_sinFondo.png",
  buttons: [
    { name: "Inicio", type: ButtonType.Home, mode: ButtonMode.StartScreen },
    { name: "Ajustes", type: ButtonType.Settings, mode: ButtonMode.StartScreen },
    { name: "Crear sala", type: ButtonType.Create, mode: ButtonMode.StartScreen },
    { name: "Unirse a sala", type: ButtonType.Join, mode: ButtonMode.StartScreen },
    { name: "Tablero", type: ButtonType.Board, mode: ButtonMode.GameScreen },
    { name: "Tarjetas", type: ButtonType.Cards, mode: ButtonMode.GameScreen },
    { name: "Peticiones", type: ButtonType.Request, mode: ButtonMode.GameScreen, hidden: true },
    { name: "Solucion", type: ButtonType.Solution, mode: ButtonMode.GameScreen, hidden: "OnlyTurn" },
    { name: "Salir", type: ButtonType.Exit, mode: ButtonMode.GameScreen },
    { name: "Sala de espera", type: ButtonType.Waiting,mode: ButtonMode.GameScreen, hidden: true }
  ],
};
