export function selectPath() {
  return `./models`;
}

export function getGameIdFromPath(): string {
  const path = window.location.search?.toLocaleLowerCase();
  const params = new URLSearchParams(path);
  if (params.has("game")) {
    return params.get("game") || "";
  } else {
    return "";
  }
}

// export function getGameIdFromUrl(url: string){
//     if (url.includes("game")) {
//         return url.split("game=")[1];
//     }
// }

export function saveUserIdOnLocalStorage(userId: string) {
  const gameId = getGameIdFromPath();
  sessionStorage.setItem(`${gameId}:userId`, `${userId}`);
}

export function getUserIdFromLocalStorage() {
  const gameId = getGameIdFromPath();
  return sessionStorage.getItem(`${gameId}:userId`);
}

export function generateRandomId(): string {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (c) {
    // eslint-disable-next-line no-mixed-operators
    const r = (Math.random() * 16) | 0,
      // eslint-disable-next-line no-mixed-operators
      v = c === "x" ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
}

export function getPieceColorByIndex(index: number):string {
  switch (index) {
    case 0:
      return "red";
    case 1: 
    return "green";
    case 2:
      return "blue";
    case 3:
      return "yellow";

    default:
      return "yellow";
   
  }
}

export function getColorStyle(color: string): any {
  switch (color) {
    case "green":
      return {
        "--bg-color-0": "rgba(17, 255, 0, 1)",
        "--bg-color-webkit": "rgba(17, 255, 0, 0.75)",
        "--bg-color-moz": "rgba(102, 255, 0, 0.75)",
        "--bg-color-box": "rgba(111, 255, 0, 0.75)",
        "--bg-color-100": "rgba(0, 128, 0, 1)",
      };
    case "blue":
      return {
        "--bg-color-0": "rgba(0, 0, 255, 1)",
        "--bg-color-webkit": "rgba(0, 0, 255, 0.75)",
        "--bg-color-moz": "rgba(102, 102, 255, 0.75)",
        "--bg-color-box": "rgba(111, 111, 255, 0.75)",
        "--bg-color-100": "rgba(0, 0, 128, 1)",
      };
    case "red":
      return {
        "--bg-color-0": "rgba(255, 0, 0, 1)",
        "--bg-color-webkit": "rgba(255, 0, 0, 0.75)",
        "--bg-color-moz": "rgba(255, 102, 102, 0.75)",
        "--bg-color-box": "rgba(255, 111, 111, 0.75)",
        "--bg-color-100": "rgba(128, 0, 0, 1)",
      };
    case "yellow":
      return {
        "--bg-color-0": "rgba(255, 255, 0, 1)",
        "--bg-color-webkit": "rgba(255, 255, 0, 0.75)",
        "--bg-color-moz": "rgba(255, 255, 102, 0.75)",
        "--bg-color-box": "rgba(255, 255, 111, 0.75)",
        "--bg-color-100": "rgba(128, 128, 0, 1)",
      };
    default:
      return {};
  }
}
