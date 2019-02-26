import firebase from "firebase/app";
import "firebase/auth";

export const anonymouslyLogin = () => {
  firebase.auth().signInAnonymously().catch(error => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;

    console.log(errorCode + errorMessage);
  });
};