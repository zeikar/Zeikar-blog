<template>
  <article class="media">
    <div class="media-content">
      <nav class="level">
        <div class="content">
          <h2>
            <router-link class="has-text-dark" :to="'post/' + post.title">{{post.title}}</router-link>
          </h2>
          <p>{{post.contents.substring(0, 100)}}</p>
        </div>
        <div class="level-right">
          <p class="level-item">
            <span class="icon">
              <i class="fas fa-clock"></i>
            </span>
            {{formatDate()}}
          </p>
          <p class="level-item">
            <span class="icon">
              <i class="fas fa-eye"></i>
            </span>
            {{post.views}}
          </p>
        </div>
      </nav>
    </div>
    <figure class="media-right">
      <p class="image is-128x128">
        <img src="https://bulma.io/images/placeholders/128x128.png">
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
      const date = new Date(this.post.created_at.seconds * 1000);
      return date.toLocaleDateString();
    }
  }
};
</script>
