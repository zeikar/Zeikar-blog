<template>
  <div id="app">
    <Navbar/>
    <transition name="fade">
      <router-view/>
    </transition>
    <Footer/>
  </div>
</template>

<script>
import "bulma/css/bulma.css";
import Navbar from "./components/Navbar.vue";
import Footer from "./components/Footer.vue";

export default {
  name: "app",
  components: {
    Navbar,
    Footer
  }
};
</script>

<style>
.fade-enter-to,
.fade-leave {
  transition: opacity 0.7s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
