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

export const addPost = (title, contents) => {
  return firestore
    .collection("posts").add({
      title: title,
      contents: contents,
      created_at: Date.now(),
      views: 0
    })
    .then(docRef => {
      console.log("Document written with ID: ", docRef.id);
    })
    .catch(error => {
      console.error("Error adding document: ", error);
    });
};

export const editPost = (postId, title, contents) => {
  return firestore
    .collection("posts").doc(postId).set({
      title: title,
      contents: contents,
      modified_at: Date.now()
    })
    .then(docRef => {
      console.log("Document written with ID: ", docRef.id);
    })
    .catch(error => {
      console.error("Error adding document: ", error);
    });
};