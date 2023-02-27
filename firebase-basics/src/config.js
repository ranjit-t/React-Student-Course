import firebase from "firebase";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDT1e7wwqCfo8g9zu7GHti84xEyp1S_Ih0",
  authDomain: "contact-list-byranjit.firebaseapp.com",
  databaseURL:
    "https://contact-list-byranjit-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "contact-list-byranjit",
  storageBucket: "contact-list-byranjit.appspot.com",
  messagingSenderId: "648086588529",
  appId: "1:648086588529:web:1876dc426b7c974d93dfd0",
};
firebase.initializeApp(firebaseConfig);
export const projectFireStore = firebase.firestore();
