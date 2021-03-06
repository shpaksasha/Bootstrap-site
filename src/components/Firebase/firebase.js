import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCLcW7k-6urtpXnkwGg5BwgW2LeHqL19cE",
    authDomain: "react-project-e1e0f.firebaseapp.com",
    databaseURL: "https://react-project-e1e0f.firebaseio.com",
    projectId: "react-project-e1e0f",
    storageBucket: "react-project-e1e0f.appspot.com",
    messagingSenderId: "383552354149",
    appId: "1:383552354149:web:09d6930d89b2be65ded38c"
};

firebase.initializeApp(firebaseConfig);

export default firebase;
