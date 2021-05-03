import firebase from 'firebase/app'
import 'firebase/firestore'

// Your web app's Firebase configuration from firebase website
const firebaseConfig = {
    apiKey: "AIzaSyDCxd4w97skIK6ptpsNkB75CpjMY_ZZhzI",
    authDomain: "react-crud-firebase-14ce3.firebaseapp.com",
    projectId: "react-crud-firebase-14ce3",
    storageBucket: "react-crud-firebase-14ce3.appspot.com",
    messagingSenderId: "644505252294",
    appId: "1:644505252294:web:67d7768978f736eaf142c7"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export{firebase}