import firebase from "firebase/app";
// Required for side-effects
import "firebase/firestore";

firebase.initializeApp({
    apiKey: "AIzaSyBcVx8EJVsNNkurVbFTVM1RNh5Fmap9lXY",
    authDomain: "zeikar-blog.firebaseapp.com",
    projectId: "zeikar-blog"
});

// Initialize Cloud Firestore through Firebase
export const firestore = firebase.firestore();