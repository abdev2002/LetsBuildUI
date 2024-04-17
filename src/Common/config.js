import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";
// import { GoogleAuthProvider } from "firebase/compat/auth";
// import { GoogleSignin } from "@react-native-google-signin/google-signin";



const firebaseConfig = {
  apiKey: "AIzaSyAh4U5YkZYKShSi_RSIg0BJjHWaK67gsj4",
  authDomain: "letsbuildproto.firebaseapp.com",
  projectId: "letsbuildproto",
  storageBucket: "letsbuildproto.appspot.com",
  messagingSenderId: "702768899903",
  appId: "1:702768899903:web:2963562bda1577257a558a",
  measurementId: "G-P6JR25GKBX",
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

// GoogleSignin.configure({
//   webClientId: "YOUR_WEB_CLIENT_ID", // From Firebase Console
// });

// export { firebase, GoogleAuthProvider };
export { firebase };
