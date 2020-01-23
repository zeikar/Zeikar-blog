<template>
  <nav class="navbar is-fixed-top" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <router-link to="/" class="navbar-item" @click.native="closeBurger()">
        <b>Zeikar</b>'s 기술 블로그
      </router-link>

      <a
        role="button"
        class="navbar-burger burger"
        aria-label="menu"
        :aria-expanded="isBurgerOpen"
        @click="isBurgerOpen = !isBurgerOpen"
        :class="{'is-active': isBurgerOpen}"
      >
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>

    <div :class="{'is-active': isBurgerOpen}" class="navbar-menu">
      <div class="navbar-start navbar-center">
        <router-link to="/" class="navbar-item is-tab" exact-active-class="is-active" @click.native="closeBurger()">Home</router-link>
        <router-link to="/about" class="navbar-item is-tab" active-class="is-active" @click.native="closeBurger()">About</router-link>
        <router-link to="/posts" class="navbar-item is-tab" active-class="is-active" @click.native="closeBurger()">Posts</router-link>

        <div class="navbar-item has-dropdown is-hoverable">
          <a class="navbar-link is-tab">More</a>

          <div class="navbar-dropdown is-active">
            <a class="navbar-item" href="https://www.facebook.com/lucizgames/" target="_blank">
              <span class="icon">
                <i class="fab fa-facebook"></i>
              </span>
              Facebook
            </a>
            <a class="navbar-item" href="https://www.linkedin.com/in/zeikar/" target="_blank">
              <span class="icon">
                <i class="fab fa-linkedin"></i>
              </span>
              LinkedIn
            </a>            
            <a class="navbar-item" href="https://github.com/zeikar" target="_blank">
              <span class="icon">
                <i class="fab fa-github"></i>
              </span>
              Github
            </a>
            <hr class="navbar-divider">
            <a class="navbar-item" href="https://github.com/zeikar/Zeikar-blog/issues" target="_blank">Report an issue</a>
          </div>
        </div>
      </div>

      <div class="navbar-end">
        <div class="navbar-item">
          <div class="field has-addons">
            <div class="control">
              <input
                class="input is-rounded"
                type="search"
                placeholder="블로그 내 검색"
                v-on:input="searchInput"
                v-bind:value="searchKeyword"
                @keyup.enter="searchSubmit"
              >
            </div>
            <div class="control">
              <button class="button is-rounded" @click="searchSubmit()">
                <span class="icon is-small">
                  <i class="fas fa-search"></i>
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Navbar",
  data() {
    return {
      isBurgerOpen: false,
      searchKeyword: ""
    };
  },
  methods: {
    searchInput(e) {
      this.searchKeyword = e.target.value;
    },
    searchSubmit() {
      this.searchKeyword = this.searchKeyword.trim();
      // 검색 문자열 있는지 확인
      if (this.searchKeyword == "") {
        return;
      }
      this.$router.push({
        path: "/posts/search/" + this.searchKeyword
      });

      this.closeBurger();
    },
    closeBurger() {
      this.isBurgerOpen = false;
    }
  }
};
</script>

<style>
.navbar-center {
  flex-grow: 1;
  justify-content: center;
}
</style>
