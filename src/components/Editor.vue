<template>
  <div class="container">
    <div class="control">
      <input v-model="title" class="input" type="text" placeholder="title input">
      <input v-model="thumbnail" class="input" type="text" placeholder="thumbnail input">
      <textarea
        v-model="contents"
        class="textarea has-fixed-size"
        placeholder="content textarea"
      ></textarea>
    </div>
    <button class="button" @click="onSubmit()">Button</button>
  </div>
</template>

<script>
import { addPost, editPost } from "../services/posts";
import { anonymouslyLogin } from "../services/auth";

export default {
  name: "Editor",
  props: ["postId"],
  data() {
    return {
      title: "",
      thumbnail: "",
      contents: ""
    };
  },
  created() {
    anonymouslyLogin();
  },
  methods: {
    onSubmit() {
      if (this.postId != undefined) {
        editPost(this.postId, this.title, this.thumbnail, this.contents).then(() => {
          alert("수정 완료");
        });
      } else {
        addPost(this.title, this.thumbnail, this.contents).then(() => {
          alert("작성 완료");
        });
      }
    }
  }
};
</script>

<style>
</style>
