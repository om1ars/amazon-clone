import firebase from 'firebase';

const firebaseApp = firebase.intializeApp({
  apiKey: "AIzaSyCcbiqTicuMJRrf0WAlaZ6WPPBUZLOix58",
  authDomain: "clone-7037f.firebaseapp.com",
  projectId: "clone-7037f",
  storageBucket: "clone-7037f.appspot.com",
  messagingSenderId: "270627472815",
  appId: "1:270627472815:web:9772de0aa2f3cdb2e79b5a",
  measurementId: "G-RHR440C0XP",
});

const db = firebaseApp.firestore();
const auth = firebase.auth();

export {db, auth}



