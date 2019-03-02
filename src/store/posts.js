import { getPosts } from "../services/posts";
import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export const postStore = new Vuex.Store({
  state: {
    posts: null
  },
  mutations: {
    fetchPosts(state) {
      getPosts().then(querySnapshot => {
        state.posts = [];
        querySnapshot.forEach(doc => {
          state.posts.push(doc.data());
        });
      });
    }
  }
});