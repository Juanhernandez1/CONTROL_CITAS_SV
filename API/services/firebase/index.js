import firebase from 'firebase';
import firebaseConfig from '../config/FirebaseConfig';
const Firebase = firebase.initializeApp(firebaseConfig);
const AuthGoogle = new firebase.auth.GoogleAuthProvider();
export default Firebase;