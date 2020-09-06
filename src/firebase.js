

import firebase from "firebase";
const firebaseApp = firebase.initializeApp({

    apiKey: "AIzaSyDX-eutOTZ3gIKFkLFYGGJpO_5SeS6Kptc",
    authDomain: "todo-app-react-7abdd.firebaseapp.com",
    databaseURL: "https://todo-app-react-7abdd.firebaseio.com",
    projectId: "todo-app-react-7abdd",
    storageBucket: "todo-app-react-7abdd.appspot.com",
    messagingSenderId: "930897916075",
    appId: "1:930897916075:web:ab1791495e3c36d14247ee",
    measurementId: "G-8JM5M1Y83X"

});
const db = firebaseApp.firestore();
export default db ;