<template>
  <nav class="navbar is-fixed-top" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <a class="navbar-item" href="/">
        <b>Zeikar</b>'s 기술 블로그
      </a>
      
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
        <a class="navbar-item is-tab">About</a>
        
        <a class="navbar-item is-tab is-active">Posts</a>

        <div class="navbar-item has-dropdown is-hoverable">
          <a class="navbar-link is-tab">More</a>

          <div class="navbar-dropdown">
            <a class="navbar-item">About</a>
            <a class="navbar-item">Jobs</a>
            <a class="navbar-item">Contact</a>
            <hr class="navbar-divider">
            <a class="navbar-item">Report an issue</a>
          </div>
        </div>
      </div>

      <div class="navbar-end">
        <div class="navbar-item">
          <div class="field has-addons">
            <div class="control">
              <input class="input is-rounded" type="search" placeholder="블로그 내 검색">
            </div>
            <div class="control">
              <button class="button is-rounded">
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
  data: function() {
    return {
      isBurgerOpen: false
    };
  }
};
</script>

<style>
.navbar-center {
  flex-grow: 1;
  justify-content: center;
}
</style>
