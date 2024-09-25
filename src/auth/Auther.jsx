// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA8kd5zA5hHz8wFckZ-_dpo5lAXwpvv5ok",
  authDomain: "portfolio-14666.firebaseapp.com",
  projectId: "portfolio-14666",
  storageBucket: "portfolio-14666.appspot.com",
  messagingSenderId: "350448304667",
  appId: "1:350448304667:web:2e9d0865ded899ed536ebe",
  measurementId: "G-68D4E6D7KR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const dataStore  = getFirestore(app)