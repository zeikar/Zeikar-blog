<template>
  <article class="media">
    <div class="media-content">
      <nav class="level">
        <div class="content">
          <h2>
            <router-link class="has-text-dark" :to="'post/' + post.title">{{post.title}}</router-link>
          </h2>
          <p>{{post.contents.substring(0, 100)}}</p>
          <p>
            <span class="icon">
              <i class="fas fa-clock"></i>
            </span>
            {{formatDate()}}
          </p>
        </div>
      </nav>
    </div>
    <figure class="media-right">
      <p class="image is-128x128">
        <img style="object-fit: cover;" :src="post.thumbnail">
      </p>
    </figure>
  </article>
</template>

<script>
export default {
  name: "Article",
  props: ["post"],
  methods: {
    formatDate() {
      const date = new Date(this.post.created_at);
      return date.toLocaleDateString();
    }
  }
};
</script>
