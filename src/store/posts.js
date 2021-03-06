import {
  getPosts
} from "../services/posts";
import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export const postStore = new Vuex.Store({
  state: {
    posts: null,
    currentPosts: null
  },
  getters: {
    getCurrentPosts(state) {
      return state.currentPosts;
    }
  },
  mutations: {
    fetchPosts(state, data) {
      state.posts = data;
    },
    setCurrentPosts(state, data) {
      state.currentPosts = data;
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
        context.commit("setCurrentPosts", posts);
      });
    },
    searchPosts(context, searchKeyword) {
      // 없으면 가져옴
      if (context.state.posts == null) {
        getPosts().then(querySnapshot => {
          let posts = [];
          querySnapshot.forEach(doc => {
            posts.push(doc.data());
          });
          context.commit("fetchPosts", posts);

          let searchedPosts = posts.filter((post) => {
            return post.title.includes(searchKeyword);
          });
          context.commit("setCurrentPosts", searchedPosts);
        });
      } else {
        let searchedPosts = context.state.posts.filter((post) => {
          return post.title.includes(searchKeyword) || post.contents.includes(searchKeyword);
        });
        context.commit("setCurrentPosts", searchedPosts);
      }
    }
  }
});