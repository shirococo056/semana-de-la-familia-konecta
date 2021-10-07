/* eslint-disable prefer-const */
import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/storage';
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCFHuM-dhUN45L2yCWE-Z8L6aWryPk098A",
  authDomain: "konecta-instagram.firebaseapp.com",
  databaseURL: "https://konecta-instagram-default-rtdb.firebaseio.com",
  projectId: "konecta-instagram",
  storageBucket: "konecta-instagram.appspot.com",
  messagingSenderId: "670817656287",
  appId: "1:670817656287:web:a9bee5a4251033a7a9f86a",
  measurementId: "G-HC0D29WZKG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);