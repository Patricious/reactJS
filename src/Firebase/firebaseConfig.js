import firebase from 'firebase/app' // doing import firebase from 'firebase' or import * as firebase from firebase is not good practice.
import 'firebase/auth'
import 'firebase/database'
import 'firebase/firestore';
// import Axios from 'axios'

// Initialize Firebase
var firebaseApp =  firebase.initializeApp({

  apiKey: "AIzaSyDb564uqE-JPo_DRLMCAh45FqvZ2p_t6Gc",
    authDomain: "contactform-777a7.firebaseapp.com",
    databaseURL: "https://contactform-777a7.firebaseio.com",
    projectId: "contactform-777a7",
    storageBucket: "contactform-777a7.appspot.com",
    messagingSenderId: "594739970819",
    appId: "1:594739970819:web:2ec9fd539c05c8f113df36",
    measurementId: "G-P1KDCBBT3M"
})


export var db = firebaseApp.firestore();
export var auth = firebaseApp.auth();


 export default firebase
  
