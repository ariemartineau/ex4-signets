import firebase from 'firebase/app';
import * as firebaseui from 'firebaseui';
import 'firebase/firestore';

// Configuration (mettez-y les vôtres !)
const firebaseConfig = {
  apiKey: "AIzaSyAhzsTCb6NEh7f3_ov9IRdhLK0GhSGurQ4",
  authDomain: "panier-achats-alm.firebaseapp.com",
  projectId: "panier-achats-alm",
  storageBucket: "panier-achats-alm.appspot.com",
  messagingSenderId: "561235444569",
  appId: "1:561235444569:web:253f34bfa46174f7048248",
  measurementId: "G-V0WH1T971B"
};

// Initialiser Firebase
if(!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

// Initialiser FirebaseUI
export const instanceFirebaseUI = new firebaseui.auth.AuthUI(firebase.auth());

// Initialiser Firestore
export const firestore = firebase.firestore();
