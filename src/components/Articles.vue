<template>
  <section class="section">
    <div class="container">
      <Article
        v-for="(article, index) in articles"
        :key="index"
        :title="article.title"
        :preview="article.contents"
      />
    </div>
  </section>
</template>

<script>
import { firestore } from "../firebase/firestore";
import Article from "./Article.vue";

export default {
  name: "Articles",
  components: {
    Article
  },
  data() {
    return {
      articles: null
    };
  },
  created() {
    this.fetchData();
  },
  methods: {
    fetchData() {
      firestore
        .collection("posts")
        .onSnapshot(querySnapshot => {
          this.articles = [];
          querySnapshot.forEach(doc => {
            this.articles.push(doc.data());
          });
        });
    }
  }
};
</script>