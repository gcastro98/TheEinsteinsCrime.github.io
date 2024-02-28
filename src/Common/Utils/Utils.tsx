
export function selectPath() {
  return `./models`;
}

export function getGameIdFromPath(): string {
  const path = window.location.search?.toLocaleLowerCase();
  const params = new URLSearchParams(path);
  if (params.has("game")) {
    return params.get("game") || '';
  } else {
    return "";
  }
}


export function getGameIdFromUrl(url: string){
    if (url.includes("game")) {
        return url.split("game:")[1];
    }
}

export function saveUserIdOnLocalStorage(userId:string){
    const gameId = getGameIdFromUrl(window.location.href);
    sessionStorage.setItem(`${gameId}:userId`, `${userId}`);
}


export function getUserIdFromLocalStorage(){
    const gameId = getGameIdFromUrl(window.location.href);
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

// export function nullOrEmpty(str: string | number | any[]| IStatusGame): boolean {
//   if (str === null || str === undefined) {
//     return true;
//   }

//   if (typeof str === 'string') {
//     if (str.trim().length <= 0) return true;
//     else return false;
//   }

//   if (typeof str === 'number') {
//     if (str < 0) return true;
//     else return false;
//   }

//   if (str?.length === 0) {
//     return true;
//   }

//   // if (typeof str === IStatusGame && str === IStatusGame.NotStarted){
//   //   return true;
//   // }

//   return false;
// }

