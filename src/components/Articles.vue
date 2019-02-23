<template>
  <section class="section">
    <div class="container">
      <Article title="제목" preview="내용"/>
    </div>
  </section>
</template>

<script>
import Article from "./Article.vue";

export default {
  name: "Articles",
  components: {
    Article
  }
};
</script>