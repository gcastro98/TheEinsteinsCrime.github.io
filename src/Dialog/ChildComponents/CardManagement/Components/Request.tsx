import { useContext, useState } from "react"
import { GameContext } from "../../../../Services/DataServices"
import { Dropdown, PrimaryButton } from "@fluentui/react"
import { useActiveRequest } from "../../../../Services/DataServices"
import { IRequest } from "../../../../Services/DataModels"

interface IDropdownOption{
    key: string,
    text: string
}



export function Request():JSX.Element{
    const {game, setGame, userId} = useContext(GameContext)
    const [suspect, setSuspect] = useState<IDropdownOption| undefined>(undefined)
    const [weapon, setWeapon] = useState<IDropdownOption| undefined>(undefined)
    const [room, setRoom] = useState<IDropdownOption| undefined>(undefined)
    const [activeRequest, setActiveRequest] :[IRequest , (newRequest: any) => void] = useActiveRequest()
    const createRequest = () => {
        const request = {
            suspectId: parseInt(suspect?.key as string),
            weaponId: parseInt(weapon?.key as string),
            roomId: parseInt(room?.key as string),
            userId: userId,
        } as IRequest
        setActiveRequest(request)
    }
    

    return <div>
        <h1>Request</h1>
        <Dropdown options={game?.Cards.filter(x=>x.type === "Suspect").map(x=>{return {key: x.id, text: x.name}})} onChange={(e,option)=>setSuspect(option as IDropdownOption)} placeholder="Select a Suspect" />
        <Dropdown options={game?.Cards.filter(x=>x.type === "Weapon").map(x=>{return {key: x.id, text: x.name}})} onChange={(e,option)=>setWeapon(option as IDropdownOption)} placeholder="Select a Weapon" />
        <Dropdown options={game?.Cards.filter(x=>x.type === "Room").map(x=>{return {key: x.id, text: x.name}})} onChange={(e,option)=>setRoom(option as IDropdownOption)} placeholder="Select a Room" />
        <PrimaryButton text="Enviar" onClick={createRequest} />
    </div>
}