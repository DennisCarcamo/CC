import firebase from "firebase";
// Initialize Firebase
const config = {
  apiKey: "AIzaSyAWLwUiFfEBb44n2UG2oxniBfkKfyN68_8",
  authDomain: "connectedcar-12d9e.firebaseapp.com",
  databaseURL: "https://connectedcar-12d9e.firebaseio.com",
  projectId: "connectedcar-12d9e",
  storageBucket: "connectedcar-12d9e.appspot.com",
  messagingSenderId: "602582701044"
};

const fire = firebase.initializeApp(config);
export default fire;
export const googleProvider = new firebase.auth.GoogleAuthProvider();
