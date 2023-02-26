import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAZ-WiG7CHrdmJJS3h2bSgiIAqt0Uf36gc",
  authDomain: "mymoney-39b88.firebaseapp.com",
  projectId: "mymoney-39b88",
  storageBucket: "mymoney-39b88.appspot.com",
  messagingSenderId: "76478018079",
  appId: "1:76478018079:web:1d71c39bd6a8ff23be1b2a",
};

// init firebase
firebase.initializeApp(firebaseConfig);

// init service
const projectFirestore = firebase.firestore();
const projectAuth = firebase.auth();

// timestamp
const timestamp = firebase.firestore.Timestamp

export { projectFirestore, projectAuth, timestamp };
