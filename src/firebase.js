// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDWsU2ISMhGnc03xsw1QoEANgrRhULonvo",
  authDomain: "gym-tracker-2ec49.firebaseapp.com",
  projectId: "gym-tracker-2ec49",
  storageBucket: "gym-tracker-2ec49.appspot.com",
  messagingSenderId: "769658670029",
  appId: "1:769658670029:web:66d5722955926ca0031284",
  measurementId: "G-LZVKDBWYNG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

export { db };