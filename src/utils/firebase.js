import firebase from 'firebase/app'
import 'firebase/firestore'
import firebaseSettings from '../config/keys'

let firebaseApp;

if (!firebase.apps.length) {
    firebaseApp = firebase.initializeApp(firebaseSettings);
} else firebaseApp = firebase;

export const db = firebaseApp.firestore();
