import Vue from 'vue'
import VueFirestore from 'vue-firestore'
import Firebase from 'firebase'
import 'firebase/firestore'

Vue.use(VueFirestore)

const firebaseApp = Firebase.initializeApp({
    apiKey: "AIzaSyD007GyCmZ1-SICnPX9PE7eaxKRYWSRy7Q",
    authDomain: "make-step.firebaseapp.com",
    databaseURL: "https://make-step.firebaseio.com",
    projectId: "make-step",
    storageBucket: "make-step.appspot.com",
    messagingSenderId: "756459131667"
})

const db = firebaseApp.firestore();

export default db;