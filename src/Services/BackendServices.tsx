import { ICard, IGame, IPosition, IRequest, IUser } from "./DataModels";

// const backendUri = "https://the-einsteins-crime-backend.glitch.me/api/games";

const backendUri = "http://localhost:3000/api/games";

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
    await fetch(`${backendUri}/${gameId}/startGame`, options);
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

export async function addUserToGame(gameId: string, name: string): Promise<any> {
  try {
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username: name }),
    };
    return await fetch(`${backendUri}/${gameId}/addUserToGame`, options).then((body) => body.json());
  } catch (ex) {
    console.error("Error", ex);
  }
}

export async function throwDice(gameId: string): Promise<void> {
  try {
    const options = {
      method: "POST",
    };
    await fetch(`${backendUri}/${gameId}/throwDice`, options);
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
      headers: {
        "Content-Type": "application/json",
      },
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
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    };
    await fetch(`${backendUri}/${gameId}/setResponse`, options);
  } catch (ex) {
    console.error("Error");
  }
}

export async function markAsReaded(gameId: string) {
  try {
    const options = {
      method: "POST",
    };
    await fetch(`${backendUri}/${gameId}/markAsReaded`, options);
  } catch (ex) {
    console.error("Error");
  }
}

export async function makeMovement(gameId: string, userId: string, movement: string | number) {
  try {
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        move: movement,
        userId: userId,
      }),
    };
    await fetch(`${backendUri}/${gameId}/makeMovement`, options);
  } catch (ex) {
    console.error("Error");
  }
}

export async function checkSolution(gameId: string, request: IRequest): Promise<boolean> {
  try {
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(request),
    };
    return await fetch(`${backendUri}/${gameId}/checkSolution`, options).then((body) => body.json());
  } catch (ex) {
    console.error("Error");
  }
  return false;
}
