import { Loader, useProgress } from "@react-three/drei";
import React, { Suspense, createContext, useCallback, useEffect, useReducer, useRef, useState } from "react";
import { BoardGame } from "./Dialog/ChildComponents/BoardGame/BoardGame";
import { DialogBoard } from "./Dialog/Dialog";
import NavMenu from "./Menu/NavMenu";
import { GameScene } from "./SceneManagement/GameScene";
import { ButtonMode, DialogComponent, IDialogConfigProps, config,  } from "./Common/Config";
import { getGameIdFromPath } from "./Common/Utils";
import { GameContext, gameReference, useGame } from "./Services/DataServices";
import { useDataByPath } from "./Services/DataServices";
import { ICard, IGame, IGameContext, IStatusGame, IUser } from "./Services/DataModels";
import { WaitingRoom } from "./Dialog/ChildComponents/GameManagement/Components/WaitingRoom";
import { GameInfo } from "./GameInfo/GameInfo";
import { DiceInfo } from "./GameInfo/ChildComponents/DiceInfo/DiceInfo";
import * as BackendService from "./Services/BackendServices";
import { IDialogContentProps } from "@fluentui/react";
import { DatabaseReference, get, off, onValue, ref, set } from "firebase/database";
const mockGame: IGame = {
  Id: 'initialData',
  OnProgress: IStatusGame.NotStarted,
  AllCards: [],
  ActivePlayer: -1,
  Private: undefined,
  ActiveRequest: undefined,
  Dice: [0,0]
}

function App() {
  //Global Info
  // const  [gameId, setGameId] =useState<string>( getGameIdFromPath() || "initialData");
  // const [reference, setGameRef] = useState<DatabaseReference>(gameReference(gameId))
  // console.log(gameId, reference)
  // // const gameId = gameRef.current;
  // // const setGameId = (id: string) => gameRef.current = id;
  // const setGameId = (gameId: string) => {
  //   setId(gameId);
  //   setGameRef(gameReference(gameId))
  // } 
  // let [gameRef, game, checkGame] = useGame<IGame>(reference, mockGame, (gameId) =>
  //   BackendService.checkGameReference(gameId)
  // );
  // console.log("GAME", game)
  // const [_, forceUpdate] = useReducer((x) => x + 1, 0);
//  const gameId = gameRef.current;
//  const setGameId = (id: string) => gameRef.current = id;
  // const gameRef = useRef( getGameIdFromPath() || "initialData")
  


  //States
  const [state, setState] = useState({
    gameId: getGameIdFromPath() || "initialData",
    userId: '',
    myCards: [],
    loaded: false,
    dialogOptions: {type: getGameIdFromPath() !== '' ? DialogComponent.None : DialogComponent.Landing, props: undefined},
    mode: ButtonMode.StartScreen
  })

  const updateContext = (val: any) => {
    console.log(val)
    setState(prev => {return {...prev, ...val}});
  }

  const setDialog = (type: DialogComponent, props?: any) => {
    updateContext({dialogOptions: {type, props}});
    
  }

  const {gameId, userId, myCards, loaded, dialogOptions, mode} = state;
  const [game, checkGame] = useDataByPath(`/games/${gameId}`, mockGame, (gameId) =>
    BackendService.checkGameReference(gameId))


  // const [userId, setUserId] = useState<string>("");
  // console.log(userId);
  // const [myCards, setMyCards] = useState<ICard[]>([]);
  // const [loaded, setLoaded] = useState<boolean>(false)
  const IsWaitingRoom = gameId !== "initialData" && game && game?.OnProgress === IStatusGame.NotStarted;
  

  //Management menu
  // const [dialogOptions, setDialogOption] = useState<IDialogConfigProps>({type: DialogComponent.None});

  // const setDialog = (type: DialogComponent, props?: any) => {
  //   updateContext({dialogOptions: {type, props}});
    
  // }
  // const type = dialogOptions?.type
  // const props = dialogOptions?.props
  
  // const [mode, setMode] = useState(ButtonMode.StartScreen);

  //Consts
  // const { progress } = useProgress();
  const progress = 100;
  const loading = IsWaitingRoom || progress < 100;
  const Users = game?.Users || [];
  const ActivePlayer = game?.ActivePlayer;
  const isYourTurn = ActivePlayer ? Users?.[ActivePlayer]?.Id === userId : false;
  console.log(myCards)
 console.log(state, game)

  const loadMyData = useCallback(async () => {
    console.log("hola")
    if (game?.OnProgress === IStatusGame.InProgress && (!loaded))
    console.log("hola")
      try {
        const userIdSaved = sessionStorage.getItem(`${gameId}:userId`);
        console.log(userIdSaved)
        if (userIdSaved && userIdSaved !== '') {
          console.log("loadMyData")
          const myCards: ICard[] = await BackendService.getMyCards(gameId, userIdSaved.toString());
          console.log(myCards)
          updateContext({
            userId: userIdSaved,
            myCards,
            dialogOptions: {type: DialogComponent.None}
          })

          if(myCards?.length > 0 && userId !== ''){
            updateContext({loaded: true})
          }
        }
      } catch (ex) {
        console.error(ex);
      }
  },[game?.OnProgress]);

  const initData = useCallback(() => {
    if (gameId !== "initialData" && !loaded) {
      updateContext({mode: ButtonMode.GameScreen})
      checkGame(gameId);
      if (IsWaitingRoom){
        setDialog(DialogComponent.Waiting)
      }
    }
  }, [])

  const StartManually = (gameId: string) => {
    console.log(gameId)
    checkGame(gameId);
    updateContext({gameId, mode: ButtonMode.GameScreen, dialogOptions: {type: DialogComponent.Waiting}})
   
    
    console.log(game)

  }

  useEffect(() => {
    void loadMyData();
  }, [game?.OnProgress]);

  useEffect(() => {
    initData()
  }, [gameId]);

  
  
  return (
    <>
      <GameContext.Provider
        value={{
          game,
          mode,
          userId,
          dialog: dialogOptions?.type,
          props: dialogOptions?.props,
          setDialog,
          myCards ,
          updateContext,
          users: Users ,
          loaded: !loading,
          isYourTurn,
          startManually: (gameId: string ) => StartManually(gameId)
        }}
      >
        <NavMenu
          loading={IsWaitingRoom ? 0 : progress}
          onClick={(type) => setDialog(type)}
          activeButton={dialogOptions?.type}
          mode={mode}
          isYourTurn={isYourTurn}
        />
        <DialogBoard
          // component={IsWaitingRoom ? WaitingRoom : switchComponentsByActiveButton(activeButton)}
          hidden={dialogOptions?.type === DialogComponent.None && !IsWaitingRoom}
        />
        <GameInfo />
        {/* <GameScene />  */}
      </GameContext.Provider>
    </>
  );
}

export default App;
