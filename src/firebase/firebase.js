import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyArI2GpegskUBUxzjhNcQt6yJ7S909G4kg",
  authDomain: "clone-linkedin-7a5aa.firebaseapp.com",
  projectId: "clone-linkedin-7a5aa",
  storageBucket: "clone-linkedin-7a5aa.appspot.com",
  messagingSenderId: "712979380295",
  appId: "1:712979380295:web:dc85800b2a0db46672d962",
  measurementId: "G-CW9PPQQMHT",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
