// Imports
export interface IConfig {
  logoPathLoading: string;
  logoPath: string;
  dialogComponents: ButtonProps[];
}

export interface ButtonProps {
  name: string;
  mode?: ButtonMode;
  type: DialogComponent;
  hidden?: boolean | "OnlyTurn";
}

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
  CardsByUser = "CardsByUser"
}

export enum ButtonMode {
  StartScreen,
  GameScreen,
}

export const config: IConfig = {
  logoPathLoading: "TheEinsteinsCrime_logo_recortado.png",
  logoPath: "TheEinsteinsCrime_logo_recortado_beige_sinFondo.png",
  dialogComponents: [
    { name: "Inicio", type: DialogComponent.Home, mode: ButtonMode.StartScreen },
    { name: "Ajustes", type: DialogComponent.Settings, mode: ButtonMode.StartScreen },
    { name: "Crear sala", type: DialogComponent.Create, mode: ButtonMode.StartScreen },
    { name: "Unirse a sala", type: DialogComponent.Join, mode: ButtonMode.StartScreen },
    { name: "Tablero", type: DialogComponent.Board, mode: ButtonMode.GameScreen },
    { name: "Tarjetas", type: DialogComponent.Cards, mode: ButtonMode.GameScreen },
    { name: "Peticiones", type: DialogComponent.Request, mode: ButtonMode.GameScreen, hidden: true },
    { name: "Solucion", type: DialogComponent.Solution, mode: ButtonMode.GameScreen, hidden: true },
    { name: "Cartas del usuario eliminado", type: DialogComponent.CardsByUser, mode: ButtonMode.GameScreen, hidden: true },
    { name: "Salir", type: DialogComponent.Exit, mode: ButtonMode.GameScreen },
    { name: "Sala de espera", type: DialogComponent.Waiting,mode: ButtonMode.GameScreen, hidden: true }
  ],
};
