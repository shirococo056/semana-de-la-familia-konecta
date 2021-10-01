import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// replace these with your own config values from Firebase!
const config = {
  apiKey: 'AIzaSyCAw3yXjcam7HJaS0ThALIMoZ_ICUR9V1k',
  authDomain: 'insta-536de.firebaseapp.com',
  projectId: 'insta-536de',
  storageBucket: 'insta-536de.appspot.com',
  messagingSenderId: '859496964055',
  measurementId: 'G-G7FFWSY76Y',
  appId: '1:859496964055:web:897146ee34dd2ded3a3592'
};

const firebase = Firebase.initializeApp(config);
const { FieldValue } = Firebase.firestore;

export { firebase, FieldValue };
