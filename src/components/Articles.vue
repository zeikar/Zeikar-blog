<template>
  <section class="section">
    <div class="container">
      <Article
        v-for="(post, index) in posts"
        :key="index"
        :post="post"
      />
    </div>
  </section>
</template>

<script>
import { getPosts } from "../services/posts";
import Article from "./Article.vue";

export default {
  name: "Articles",
  components: {
    Article
  },
  data() {
    return {
      posts: null
    };
  },
  created() {
    this.fetchData();
  },
  methods: {
    fetchData() {
      getPosts().then(querySnapshot => {
          this.posts = [];
          querySnapshot.forEach(doc => {
            this.posts.push(doc.data());
          });
        });
    }
  }
};
</script>