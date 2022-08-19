import firebase from "firebase";
import 'firebase/auth'
import 'firebase/firebase'

const firebaseConfig = {
    apiKey: "AIzaSyBH_v9QLGJFdAFWxeI6xEiuZQh_XP0MkCQ",
    authDomain: "olx-clone-ddfaa.firebaseapp.com",
    projectId: "olx-clone-ddfaa",
    storageBucket: "olx-clone-ddfaa.appspot.com",
    messagingSenderId: "839288548388",
    appId: "1:839288548388:web:eee1030db80c9b9501bcb1",
    measurementId: "G-R9NZBD9DGP"
  };



export default  firebase.initializeApp(firebaseConfig)