// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
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