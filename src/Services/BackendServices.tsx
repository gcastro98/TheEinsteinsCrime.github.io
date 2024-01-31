import { ICard, IGame, IUser } from "./DataModels";

const backendUri = "https://the-einsteins-crime-backend.glitch.me/api/games";

export async function getGame(gameId: string) {
  try {
    const options = {
      method: "GET",
    };
    return await fetch(`${backendUri}/${gameId}/getGame`, options);
  } catch (ex) {
    console.error("Error");
  }
}

export async function checkGameReference(gameId: string): Promise<void> {
  try {
    const options = {
      method: "GET",
    };
    await fetch(`${backendUri}/${gameId}/checkGameReference`, options);
  } catch (ex) {
    console.error("Error");
  }
}

export async function startGame(gameId: string): Promise<void> {
  try {
    const options = {
      method: "POST",
    };
    await fetch(`${backendUri}/${gameId}/StartGame`, options);
  } catch (ex) {
    console.error("Error");
  }
}

export async function checkResponse(gameId: string, body: any) {
  try {
    const options = {
      method: "POST",
      body: JSON.stringify(body),
    };
    await fetch(`${backendUri}/${gameId}/checkResponse`, options);
  } catch (ex) {
    console.error("Error");
  }
}

export async function getMyCards(gameId: string, userId: string): Promise<ICard[]> {
  try {
    const options = {
      method: "GET",
    };
    return await fetch(`${backendUri}/${gameId}/getMyCards/${userId}`, options).then((response) =>
      response.json()
    );
  } catch (ex) {
    console.error("Error");
  }
  return [];
}

export async function addUserToGame(gameId: string, body: any): Promise<void> {
  try {
    const options = {
      method: "POST",
      body: JSON.stringify(body),
    };
    await fetch(`${backendUri}/${gameId}/addUserToGame`, options).then((res) => res.json());
  } catch (ex) {
    console.error("Error");
  }
}

export async function throwDice(gameId: string): Promise<void> {
  try {
    const options = {
      method: "POST",
    };
    await fetch(`${backendUri}/${gameId}/throwDice`, options).then((res) => res.json());
  } catch (ex) {
    console.error("Error");
  }
}

export async function nextTurn(gameId: string) {
  try {
    const options = {
      method: "POST",
    };
    await fetch(`${backendUri}/${gameId}/nextTurn`, options);
  } catch (ex) {
    console.error("Error");
  }
}

export async function createRequest(gameId: string, body: any) {
  try {
    const options = {
      method: "POST",
      body: JSON.stringify(body),
    };
    await fetch(`${backendUri}/${gameId}/createRequest`, options);
  } catch (ex) {
    console.error("Error");
  }
}

export async function setResponse(gameId: string, body: any) {
  try {
    const options = {
      method: "POST",
      body: JSON.stringify(body),
    };
    await fetch(`${backendUri}/${gameId}/setResponse`, options);
  } catch (ex) {
    console.error("Error");
  }
}

export async function markAsReaded(gameId: string){
    try {
        const options = {
          method: "POST"
        };
        await fetch(`${backendUri}/${gameId}/markAsReaded`, options);
      } catch (ex) {
        console.error("Error");
      }
}
