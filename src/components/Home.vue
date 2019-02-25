<template>
  <section class="hero home-background has-background is-fullheight-with-navbar">
    <div class="hero-body">
      <div class="container is-size-1 has-text-centered">
        <vue-typer
          :text="['Hello.','I am Zeikar.','I Love to Develop.','Thank you for visiting my blog!']"
          :repeat="Infinity"
          :shuffle="false"
          initial-action="typing"
          :pre-type-delay="70"
          :type-delay="100"
          :pre-erase-delay="2000"
          :erase-delay="70"
          erase-style="backspace"
          :erase-on-complete="false"
          caret-animation="smooth"
        ></vue-typer>
      </div>
    </div>
  </section>
</template>

<script>
import { VueTyper } from "vue-typer";

export default {
  name: "Home",
  components: {
    VueTyper
  }
};
</script>

<style>
.home-background {
  background-image: url("https://images.pexels.com/photos/872958/pexels-photo-872958.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260");
}
</style>
