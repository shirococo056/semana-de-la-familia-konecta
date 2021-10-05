/* eslint-disable prefer-const */
import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/storage';

// replace these with your own config values from Firebase!
const config = {
  apiKey: 'AIzaSyCFHuM-dhUN45L2yCWE-Z8L6aWryPk098A',
  authDomain: 'konecta-instagram.firebaseapp.com',
  projectId: 'konecta-instagram',
  storageBucket: 'konecta-instagram.appspot.com',
  messagingSenderId: '670817656287',
  measurementId: 'G-HC0D29WZKG',
  appId: '1:670817656287:web:a9bee5a4251033a7a9f86a'
};
let form = document.querySelector('#uploader');
form.addEventListener('submit', (ev) => {
  ev.preventDefault();
  let fileInput = form.querySelector('#file');
  // eslint-disable-next-line no-unused-vars
  let file = fileInput.files(0);
});
const firebase = Firebase.initializeApp(config);
const { FieldValue } = Firebase.firestore;

export { firebase, FieldValue };
