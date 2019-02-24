<template>
  <div class="container">
    <figure class="image is-3by1">
      <img src="https://bulma.io/images/placeholders/128x128.png" :alt="postTitle">
    </figure>
    <div class="content">
      <h1>{{postTitle}}</h1>
      <div v-if="post" v-html="convertContents()"></div>
    </div>
  </div>
</template>

<script>
import { getPost } from "../services/posts";
import marked from "marked";

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
    },
    convertContents() {
      return marked(this.post.contents);
    }
  }
};
</script>