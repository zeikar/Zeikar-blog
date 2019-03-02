<template>
  <div>
    <Hero/>
    <section class="section">
      <div class="container">
        <Article v-for="(post, index) in posts" :key="index" :post="post"/>
      </div>
    </section>
  </div>
</template>

<script>
import { postStore } from "../store/posts";
import Article from "./Article.vue";
import Hero from "./Hero.vue";

export default {
  name: "Articles",
  components: {
    Article,
    Hero
  },
  computed: {
    posts () {
      return postStore.state.posts;
    }
  },
  created() {
    this.fetchData();
  },
  methods: {
    fetchData() {
      postStore.dispatch("fetchPosts");
    }
  }
};
</script>