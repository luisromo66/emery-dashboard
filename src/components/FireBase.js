import firebase from 'firebase/app';


const firebaseConfig = {
    apiKey: "AIzaSyAX1agYrVRfdelOfa7hVMsvPAjCisD-OjM",
    authDomain: "ferny-llantas.firebaseapp.com",
    databaseURL: "https://ferny-llantas.firebaseio.com",
    projectId: "ferny-llantas",
    storageBucket: "ferny-llantas.appspot.com",
    messagingSenderId: "404927151180",
    appId: "1:404927151180:web:65e5a358924ffd7b9688e9"
}

export const firebaseApp = firebase.initializeApp(firebaseConfig);