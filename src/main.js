import Vue from "vue";
import VueDisqus from "vue-disqus";
import router from "./router";
import App from "./App.vue";

Vue.config.productionTip = false;

Vue.use(VueDisqus);

new Vue({
  router,
  render: h => h(App),
}).$mount("#app");
