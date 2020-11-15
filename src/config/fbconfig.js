import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyCrAgq_-TaEQCnYG-MJwWCe48IQe5M_B3g",
  authDomain: "evernote-439be.firebaseapp.com",
  databaseURL: "https://evernote-439be.firebaseio.com",
  projectId: "evernote-439be",
  storageBucket: "evernote-439be.appspot.com",
  messagingSenderId: "200122891296",
  appId: "1:200122891296:web:a8017fd51d4dc2fb76d045"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebaseConfig