const backendUri = "https://the-einsteins-crime-backend.glitch.me/api/games"


export async function getGame(gameId: string){
    try {
        const options = {
            method: 'GET',
        }
        return await fetch(`${backendUri}/${gameId}/getGame`, options);
    } catch(ex){
        console.error("Error")
    }
}

export async function checkGameReference(gameId: string){
    try {
        const options = {
            method: 'GET',
        }
        return await fetch(`${backendUri}/${gameId}/checkGameReference`, options);
    } catch(ex){
        console.error("Error")
    }
}

export async function checkResponse(gameId: string, body: any){
    try {
        const options = {
            method: 'POST',
            body: JSON.stringify(body)
        }
        return await fetch(`${backendUri}/${gameId}/checkResponse`, options);
    } catch(ex){
        console.error("Error")
    }
}

export async function getMyCards(gameId: string, userId: string){
    try {
        const options = {
            method: 'GET',
        }
        return await fetch(`${backendUri}/${gameId}/getMyCards/${userId}`, options);
    } catch(ex){
        console.error("Error")
    }
}

export async function addUserToGame(gameId: string, body: any){
    try {
        const options = {
            method: 'POST',
            body: JSON.stringify(body)
        }
        return await fetch(`${backendUri}/${gameId}/addUserToGame`, options);
    } catch(ex){
        console.error("Error")
    }
}

export async function throwDice(gameId: string){
    try {
        const options = {
            method: 'POST'
        }
        return await fetch(`${backendUri}/${gameId}/throwDice`, options);
    } catch(ex){
        console.error("Error")
    }
}

export async function nextTurn(gameId: string){
    try {
        const options = {
            method: 'POST'
        }
        return await fetch(`${backendUri}/${gameId}/nextTurn`, options);
    } catch(ex){
        console.error("Error")
    }
}

export async function createRequest(gameId: string, body: any){
    try {
        const options = {
            method: 'POST',
            body: JSON.stringify(body)
        }
        return await fetch(`${backendUri}/${gameId}/createRequest`, options);
    } catch(ex){
        console.error("Error")
    }
}

export async function setResponse(gameId: string, body: any){
    try {
        const options = {
            method: 'POST',
            body: JSON.stringify(body)
        }
        return await fetch(`${backendUri}/${gameId}/setResponse`, options);
    } catch(ex){
        console.error("Error")
    }
}