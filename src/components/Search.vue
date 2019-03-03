<template>
  <div>
    <Hero/>
    <section v-if="posts" class="section">
      <div class="container">
        <article v-if="posts.length != 0" class="message is-success">
          <div class="message-body">
            <p>
              <strong>{{searchQuery}}</strong> 검색 결과
            </p>
            <p>
              총
              <strong>{{posts.length}}</strong> 건의 포스트가 있습니다.
            </p>
          </div>
        </article>
        <article v-else class="message is-warning">
          <div class="message-body">
            <p>
              <strong>{{searchQuery}}</strong> 검색 결과
            </p>
            <p>해당하는 포스트가 없습니다.</p>
          </div>
        </article>
        <hr>
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
  name: "Search",
  props: ["searchQuery"],
  components: {
    Article,
    Hero
  },
  computed: {
    posts() {
      return postStore.getters.getCurrentPosts;
    }
  },
  watch: {
    "$route.params.searchQuery"() {
      this.fetchData();
    }
  },
  created() {
    this.fetchData();
  },
  methods: {
    fetchData() {
      postStore.dispatch("searchPosts", this.searchQuery);
    }
  }
};
</script>

<style>
</style>
