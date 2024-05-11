import { ICard } from "../Firebase/Models/ICard";
import { IRequest } from "../Firebase/Models/IRequest";

// const backendUri = "https://the-einsteins-crime-backend.glitch.me/api/games";

const backendUri = "http://localhost:3000/api/games";

export async function getGame(gameId: string) {
  try {
    const options = {
      method: "GET",
    };
    return await fetch(`${backendUri}/${gameId}/getGame`, options);
  } catch (ex) {
    console.error("(API service) Error to get Game: Exception: ", ex);
  }
}

export async function checkGameReference(gameId: string): Promise<void> {
  try {
    const options = {
      method: "GET",
    };
    await fetch(`${backendUri}/${gameId}/checkGameReference`, options);
  } catch (ex) {
    console.error("(API service) Error to check GameReference. Exception: ", ex, ", Attached:", {gameId});
  }
}

export async function startGame(gameId: string): Promise<void> {
  try {
    const options = {
      method: "POST",
    };
    await fetch(`${backendUri}/${gameId}/startGame`, options);
  } catch (ex) {
    console.error("(API service) Error to start Game. Exception: ", ex, ", Attached:", gameId);
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
    console.error("(API service) Error to check response. Exception: ", ex, ", Attached:", gameId, body);
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
    console.error("(API service) Error to get my cards. Exception: ", ex, ", Attached:", gameId, userId);
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
    console.error("(API service) Error to add User To Game. Exception: ", ex, ", Attached:", gameId, name);
  }
}

export async function throwDice(gameId: string): Promise<void> {
  try {
    const options = {
      method: "POST",
    };
    await fetch(`${backendUri}/${gameId}/throwDice`, options);
  } catch (ex) {
    console.error("(API service) Error to throw dice. Exception: ", ex, ", Attached:", gameId);
  }
}

// export async function nextTurn(gameId: string) {
//   try {
//     const options = {
//       method: "POST",
//     };
//     await fetch(`${backendUri}/${gameId}/nextTurn`, options);
//   } catch (ex) {
//     console.error("Error");
//   }
// }

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
    console.error("(API service) Error to create request. Exception: ", ex, ", Attached:", gameId, body);
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
    console.error("(API service) Error to set response. Exception: ", ex, ", Attached:", gameId, body);
  }
}

export async function markAsReaded(gameId: string) {
  try {
    const options = {
      method: "POST",
    };
    await fetch(`${backendUri}/${gameId}/markAsReaded`, options);
  } catch (ex) {
    console.error("(API service) Error to mark as readed. Exception: ", ex, ", Attached:", gameId);
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
    console.error("(API service) Error to make movement. Exception: ", ex, ", Attached:", gameId, userId, movement);
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
    console.error("(API service) Error to check solution. Exception: ", ex, ", Attached:", gameId, request);
  }
  return false;
}
