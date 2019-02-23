<template>
  <div class="container">
    <Article title="제목" preview="내용"/>
  </div>
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