<template>
  <div v-if="post" class="container">
    <section class="hero post-background is-medium has-text-centered has-background">
      <div class="hero-body blur-background">
        <div class="container">
          <h1 class="is-size-1 has-text-white">{{post.title}}</h1>
          <h2 class="subtitle has-text-white">{{formatDate()}}</h2>
        </div>
      </div>
    </section>
    <section class="section">
      <div class="content post" v-html="convertContents()"></div>
    </section>
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
    },
    formatDate() {
      const date = new Date(this.post.created_at);
      return date.toLocaleDateString();
    }
  }
};
</script>

<style>
.post-background {
  background-image: url("https://images.pexels.com/photos/461077/pexels-photo-461077.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260");
}

.blur-background {
  background: rgba(12, 12, 48, 0.3);
}

.post img {
  display: block;
  margin-left: auto;
  margin-right: auto;
  margin-top: 4rem;
  margin-bottom: 4rem;
  max-width: 50%;

  background-color: #fff;
  border-radius: 6px;
  box-shadow: 0 2px 3px rgba(10, 10, 10, 0.1), 0 0 0 1px rgba(10, 10, 10, 0.1);
  color: #4a4a4a;
  padding: 1.25rem;
}
</style>
