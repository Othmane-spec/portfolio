// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// Import the functions you need from the SDKs you need

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyArc2npCui72h366rTzcQUZp8QdtUT90Sc",
  authDomain: "react-contact-portfolio-a9e73.firebaseapp.com",
  projectId: "react-contact-portfolio-a9e73",
  storageBucket: "react-contact-portfolio-a9e73.appspot.com",
  messagingSenderId: "1042390021720",
  appId: "1:1042390021720:web:9618d30b248b7b44363c2d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export  { db } ;

