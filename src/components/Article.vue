<template>
  <article class="media">
    <div class="media-content">
      <div class="content">
        <h2>{{post.title}}</h2>
        {{post.contents}}
      </div>
    </div>
    <nav class="level is-mobile">
      <div class="level-left">
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
