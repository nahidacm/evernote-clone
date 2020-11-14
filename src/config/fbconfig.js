import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyAOPGA2CFTkrkpoZO8M2KHnaxov8ClsyMc",
    authDomain: "evernote-clone-68586.firebaseapp.com",
    databaseURL: "https://evernote-clone-68586.firebaseio.com",
    projectId: "evernote-clone-68586",
    storageBucket: "evernote-clone-68586.appspot.com",
    messagingSenderId: "1074965089605",
    appId: "1:1074965089605:web:d4906a223435b6a0b9422c"
  };

  firebaseConfig.initializeApp(firebaseConfig)