import { ButtonMode, ButtonType } from "../Menu/NavMenu";

export const config: any = {
    logoPath: "TheEinsteinsCrime_logo_recortado.png",
    buttons: [
        { name: "Inicio", type: ButtonType.Home, mode: ButtonMode.StartScreen },
        { name: "Ajustes",  type: ButtonType.Settings, mode: ButtonMode.StartScreen   },
        { name: "Crear sala",  type: ButtonType.Create, mode: ButtonMode.StartScreen   },
        { name: "Unirse a sala", type: ButtonType.Join, mode: ButtonMode.StartScreen   },
        { name: "Tablero",  type: ButtonType.Board, mode: ButtonMode.GameScreen  },
        { name: "Tarjetas",  type: ButtonType.Cards, mode: ButtonMode.GameScreen  },
        { name: "Peticiones",  type: ButtonType.Request, mode: ButtonMode.GameScreen},
        { name: "Dados",  type: ButtonType.Dices, mode: ButtonMode.GameScreen  },
        { name: "Salir",  type: ButtonType.Exit, mode: ButtonMode.GameScreen  }
      ]
}