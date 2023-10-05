import { useContext, useState } from "react"
import { GameContext, useActivePlayer, useCards } from "../../../../Services/DataServices"
import { Dropdown, PrimaryButton } from "@fluentui/react"
import { useActiveRequest } from "../../../../Services/DataServices"
import { IRequest } from "../../../../Services/DataModels"
import styles from "../CardManagement.module.scss";
import { ButtonType } from "../../../../Utils/Config"

interface IDropdownOption{
    key: string,
    text: string
}



export function Request():JSX.Element{
    const {gameId, game, setGame, userId, setActive} = useContext(GameContext)
    const [cards] = useCards(gameId)[0]
    const [suspect, setSuspect] = useState<IDropdownOption| undefined>(undefined)
    const [weapon, setWeapon] = useState<IDropdownOption| undefined>(undefined)
    const [room, setRoom] = useState<IDropdownOption| undefined>(undefined)
    const [activeRequest, setActiveRequest] :[IRequest | undefined , (newRequest: any) => void] = useActiveRequest(gameId)
    const [activePlayer, nextActivePlayer, setActivePlayer] = useActivePlayer(gameId);
   
    const reset = () =>{
        setSuspect(undefined)
        setWeapon(undefined)
        setRoom(undefined)
    }

    const createRequest = () => {
        const request = {
            suspectId: parseInt(suspect?.key as string),
            weaponId: parseInt(weapon?.key as string),
            roomId: parseInt(room?.key as string),
            userId: userId,
        } as IRequest
        setActiveRequest(request)
        setActive(ButtonType.None)
        nextActivePlayer()
        reset()
    }
    

    return <div>
        <h2>Request</h2>
        <span>Ha sido </span>
        <Dropdown className={styles.textfield} options={game?.Cards.filter(x=>x.type === "Suspect").map(x=>{return {key: x.id, text: x.name}})} onChange={(e,option)=>setSuspect(option as IDropdownOption)} placeholder="Select a Suspect" selectedKey={suspect?.key} />
        <span>con</span>
        <Dropdown className={styles.textfield} options={game?.Cards.filter(x=>x.type === "Weapon").map(x=>{return {key: x.id, text: x.name}})} onChange={(e,option)=>setWeapon(option as IDropdownOption)} placeholder="Select a Weapon" selectedKey={weapon?.key} />
        <span>en</span>
        <Dropdown className={styles.textfield} options={game?.Cards.filter(x=>x.type === "Room").map(x=>{return {key: x.id, text: x.name}})} onChange={(e,option)=>setRoom(option as IDropdownOption)} placeholder="Select a Room" selectedKey={room?.key} />
        <PrimaryButton className={styles.button} text="Enviar" onClick={createRequest} />
    </div>
}