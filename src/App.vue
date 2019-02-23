<template>
  <div id="app">
    <Navbar/>
    <Articles/>
    <Footer/>
  </div>
</template>

<script>
import "bulma/css/bulma.css";
import Navbar from "./components/Navbar.vue";
import Articles from "./components/Articles.vue";
import Footer from "./components/Footer.vue";

export default {
  name: "app",
  components: {
    Articles,
    Navbar,
    Footer
  }
};
</script>