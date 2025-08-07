// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCwq4FDP5gJyGRi-I_m9tvQI5T4QCI08Kc",
  authDomain: "drc-site-66f36.firebaseapp.com",
  projectId: "drc-site-66f36",
  storageBucket: "drc-site-66f36.firebasestorage.app",
  messagingSenderId: "717103858888",
  appId: "1:717103858888:web:d9f84dd9c3ac74d917d1fd",
  measurementId: "G-CK49W5E2LD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Initialize Firestore
export const db = getFirestore(app)
