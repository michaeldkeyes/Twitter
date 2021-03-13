import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD-m7uPTlRcwObUycHrMnH6vVu1yq_bAYg",
  authDomain: "twitter-16cfd.firebaseapp.com",
  projectId: "twitter-16cfd",
  storageBucket: "twitter-16cfd.appspot.com",
  messagingSenderId: "817801498542",
  appId: "1:817801498542:web:a88833467607268a21023f"
};

firebase.initializeApp(firebaseConfig);

let db = firebase.firestore();

export default db;
