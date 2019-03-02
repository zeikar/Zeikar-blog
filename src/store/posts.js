import { getPosts } from "../services/posts";
import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export const postStore = new Vuex.Store({
  state: {
    posts: null
  },
  mutations: {
    fetchPosts(state, data) {
      state.posts = data;
    }
  },
  actions: {
    fetchPosts(context) {
      getPosts().then(querySnapshot => {
        let posts = [];
        querySnapshot.forEach(doc => {
          posts.push(doc.data());
        });
        context.commit("fetchPosts", posts);
      });
    }
  }
});