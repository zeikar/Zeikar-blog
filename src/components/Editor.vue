<template>
  <div class="container">
    <div class="control">
      <input v-model="title" class="input" type="text" placeholder="Text input">
      <textarea
        v-model="contents"
        class="textarea has-fixed-size"
        placeholder="Fixed size textarea"
      ></textarea>
    </div>
    <button class="button" @click="onSubmit()">Button</button>
  </div>
</template>

<script>
import { addPost, editPost } from "../services/posts";

export default {
  name: "Editor",
  props: ["postId"],
  data() {
    return {
      title: "",
      contents: ""
    };
  },
  methods: {
    onSubmit() {
      if (this.postId != undefined) {
        editPost(this.postId, this.title, this.contents).then(() => {
          alert("수정 완료");
        });
      } else {
        addPost(this.title, this.contents).then(() => {
          alert("작성 완료");
        });
      }
    }
  }
};
</script>

<style>
</style>
