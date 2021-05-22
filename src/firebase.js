// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDan6VJ3J9PAwGYK6mzFay1ohmPcJuwERI",
  authDomain: "chit-chat-dfcc0.firebaseapp.com",
  projectId: "chit-chat-dfcc0",
  storageBucket: "chit-chat-dfcc0.appspot.com",
  messagingSenderId: "12049782420",
  appId: "1:12049782420:web:611ac918ba5e681f934681",
  measurementId: "G-B5K3Z8NK70",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
