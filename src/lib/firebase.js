/* eslint-disable prefer-const */
import { initializeApp, Firebase } from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/storage';
import { getAnalytics } from 'firebase/analytics';
import { seedDatabase } from '../seed';

// replace these with your own config values from Firebase!
const config = {
  apiKey: 'AIzaSyCFHuM-dhUN45L2yCWE-Z8L6aWryPk098A',
  authDomain: 'konecta-instagram.firebaseapp.com',
  databaseURL: 'https://konecta-instagram-default-rtdb.firebaseio.com',
  projectId: 'konecta-instagram',
  storageBucket: 'konecta-instagram.appspot.com',
  messagingSenderId: '670817656287',
  measurementId: 'G-HC0D29WZKG',
  appId: '1:670817656287:web:a9bee5a4251033a7a9f86a'
};
export const firebase = Firebase.initializeApp(config);
export const { FieldValue } = Firebase.firestore;

seedDatabase(firebase);
// Initialize Firebase
export const app = initializeApp(config);
// eslint-disable-next-line no-unused-vars
export const analytics = getAnalytics(app);
