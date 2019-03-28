<template>
  <div class="columns is-desktop">
    <div class="column has-text-centered">
      <router-link class="has-text-dark" :to="'/posts/' + post.title">
        <img class="article-image" :src="post.thumbnail">
      </router-link>
    </div>
    <div class="column is-four-fifths">
      <nav class="level">
        <div class="content">
          <h2>
            <router-link class="has-text-dark" :to="'/posts/' + post.title">{{post.title}}</router-link>
          </h2>
          <p class="article-content">{{contentSubstring()}}</p>
          <p>
            <span class="icon">
              <i class="fas fa-clock"></i>
            </span>
            {{formatDate()}}
          </p>
        </div>
      </nav>
    </div>
  </div>
</template>

<script>
export default {
  name: "Article",
  props: ["post"],
  methods: {
    formatDate() {
      const date = new Date(this.post.created_at);
      return date.toLocaleDateString();
    },
    contentSubstring() {
      return this.post.contents.substring(1, 300) + "...";
    }
  }
};
</script>

<style>
.article-content {
  line-height: 24px;
  display: block;
  max-height: 48px; /* 2 lines */
  display: -webkit-box; /* multi-line ellipsis */
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;
  word-wrap: break-word;
  overflow: hidden;
}

.article-image {
  background-color: #fff;
  border-radius: 6px;
  box-shadow: 0 2px 3px rgba(10, 10, 10, 0.1), 0 0 0 1px rgba(10, 10, 10, 0.1);
  color: #4a4a4a;
  padding: 0.25rem;

  height: 128px;
}
</style>
