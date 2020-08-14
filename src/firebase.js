import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyCBdnfhYQue7pMmpmQGtr24TCUjIjvNsCc",
    authDomain: "instagram-clone-react-320be.firebaseapp.com",
    databaseURL: "https://instagram-clone-react-320be.firebaseio.com",
    projectId: "instagram-clone-react-320be",
    storageBucket: "instagram-clone-react-320be.appspot.com",
    messagingSenderId: "356547863753",
    appId: "1:356547863753:web:54f3aec03763ec8467d918",
    measurementId: "G-ZXY918YWK2"
});

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage};






