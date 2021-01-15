import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

var firebaseConfig = {
    apiKey: "AIzaSyCHgBpYc0zZ2bs0ukbzNu-hDCPRbWN6_N8",
    authDomain: "marioplan-ccb16.firebaseapp.com",
    projectId: "marioplan-ccb16",
    storageBucket: "marioplan-ccb16.appspot.com",
    messagingSenderId: "443735952595",
    appId: "1:443735952595:web:388142a1c038d679a01826"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase 