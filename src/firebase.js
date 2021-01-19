import firebase from "firebase/app";
import "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCwkn0EJ0QhMFuYvqJ4lQnUa2P6A7OJYCU",
    authDomain: "clothing-ecommerce-496c6.firebaseapp.com",
    projectId: "clothing-ecommerce-496c6",
    storageBucket: "clothing-ecommerce-496c6.appspot.com",
    messagingSenderId: "981413450894",
    appId: "1:981413450894:web:9c536a71fca444496e65df"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// export
export const auth = firebase.auth();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();