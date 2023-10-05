import { ICard, IUser } from "../../Services/DataModels";


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

export function generateRandomCards(cards: ICard[], users: IUser[]){
    cards[getRandomCardByType(cards, "suspect")].userId = "Solution" ;
    cards[getRandomCardByType(cards, "weapon")].userId = "Solution" ;
    cards[getRandomCardByType(cards, "room")].userId = "Solution" ;
    const shuffleCards = shuffle(cards.filter(card => card.userId !== "Solution"));
    shuffleCards.forEach((card, index) => {
        cards[card.id].userId = users[index % users.length].userId;
    }
    );
    return cards;
}

function shuffle(cards: ICard[]){
    return cards.map((card) => ({ card, sort: Math.random()})).sort((a, b) => a.sort - b.sort).map((a) => a.card);
}

function getRandomCardByType(cards: ICard[], type: string): number{
    const auxCards = cards.filter(card => card.type === type);
    const randomIndex = Math.floor(Math.random() * auxCards.length);
    return randomIndex;
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