import firebase from 'firebase/app';


const firebaseConfig = {
    apiKey: "AIzaSyBybsSDub699Mgzf7djJze9ncNV0KTutSk",
    authDomain: "emerymark-a3c8d.firebaseapp.com",
    projectId: "emerymark-a3c8d",
    storageBucket: "emerymark-a3c8d.appspot.com",
    messagingSenderId: "664711681811",
    appId: "1:664711681811:web:b3676d6b9c5dceb32aece6"
}

export const firebaseApp = firebase.initializeApp(firebaseConfig);