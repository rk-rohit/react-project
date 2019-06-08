import firebase from 'firebase';
import 'firebase/firestore';
import 'firebase/auth';

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyBhKOtwSSAv-ZNXRafDbPoAhQWx4Kv6J6w",
    authDomain: "react-redux-2ee80.firebaseapp.com",
    databaseURL: "https://react-redux-2ee80.firebaseio.com",
    projectId: "react-redux-2ee80",
    storageBucket: "",
    messagingSenderId: "288711221111",
    appId: "1:288711221111:web:c3f1cad3c9ccd8f8"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.firestore().settings({timestampsInSnapshots : true});

  export default firebase;