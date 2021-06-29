import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyDgng2TcDKYf9jsATKIQuNsRItR7XSCzBM",
    authDomain: "crwn-db-3c6b9.firebaseapp.com",
    projectId: "crwn-db-3c6b9",
    storageBucket: "crwn-db-3c6b9.appspot.com",
    messagingSenderId: "209105438065",
    appId: "1:209105438065:web:09ba874f580941753de2d0",
    measurementId: "G-75EZV44S5Z"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account' });

  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;