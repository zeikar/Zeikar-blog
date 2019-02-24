<template>
  <div class="container">
    <figure class="image is-3by1">
      <img src="https://bulma.io/images/placeholders/128x128.png" :alt="postTitle">
    </figure>
    <div class="content">
      <h1>{{postTitle}}</h1>
      <p v-if="post">{{post.contents}}</p>
    </div>
  </div>
</template>

<script>
import { getPost } from "../services/posts";

export default {
  name: "Post",
  props: ["postTitle"],
  created() {
    this.fetchData();
  },
  data() {
    return {
      post: null
    };
  },
  methods: {
    fetchData() {
      getPost(this.postTitle).then(querySnapshot => {
        this.post = querySnapshot.docs[0].data();
      });
    }
  }
};
</script>