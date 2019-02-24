import {
  firestore
} from "./firestore";

export const getPosts = () => {
  return firestore
    .collection("posts")
    .get()
    .catch(error => {
      console.log(error);
    });
};