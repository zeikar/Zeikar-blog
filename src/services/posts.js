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

export const getPost = (title) => {
  return firestore
    .collection("posts")
    .where("title", "==", title)
    .get()
    .catch(error => {
      console.log(error);
    });
};