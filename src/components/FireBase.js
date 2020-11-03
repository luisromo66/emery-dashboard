import firebase from 'firebase/app';


const firebaseConfig = {
    apiKey: "AIzaSyCSoENTR1f2ZZSI74vVKYpgQVJm663MlLg",
    authDomain: "mudanzas-gana.firebaseapp.com",
    databaseURL: "https://mudanzas-gana.firebaseio.com",
    projectId: "mudanzas-gana",
    storageBucket: "mudanzas-gana.appspot.com",
    messagingSenderId: "672606101377",
    appId: "1:672606101377:web:89a8dfa26a9560af235280"
}

export const firebaseApp = firebase.initializeApp(firebaseConfig);