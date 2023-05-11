
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA4-0qS6vt5ZtSpKxE7i1nlCbi025Ka62g",
  authDomain: "theeinsteinscrime.firebaseapp.com",
  databaseURL: "https://theeinsteinscrime-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "theeinsteinscrime",
  storageBucket: "theeinsteinscrime.appspot.com",
  messagingSenderId: "530014496645",
  appId: "1:530014496645:web:f42db3bf398347adc306ec"
};

// Initialize Firebase
const firebase = initializeApp(firebaseConfig);
const DataBase = getDatabase(firebase);
export default DataBase;