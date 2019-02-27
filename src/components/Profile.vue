<template>
  <div>
    <Hero/>
    <section class="section">
      <div class="container">
        <div class="card">
          <header class="card-header">
            <p class="card-header-title has-text-centered">About ME</p>
          </header>
          <div class="card-content">
            <div class="media">
              <div class="media-left">
                <figure class="image is-48x48">
                  <img src="https://bulma.io/images/placeholders/96x96.png" alt="Placeholder image">
                </figure>
              </div>
              <div class="media-content">
                <p class="title is-4">Zeikar</p>
                <p class="subtitle is-6">@LuciZ</p>
              </div>
            </div>

            <div class="content">개발을 좋아하는 개발자. Zeikar 입니다.</div>
            <div class="tags">
              <span class="tag">Devops</span>
              <span class="tag">Web</span>
              <span class="tag">Android</span>
            </div>
          </div>
          <div class="card-content">
            <div class="content">
              <article class="message">
                <div class="message-body">
                  <h3>Apps (Games)</h3>
                  <ul>
                    <li><a href="https://play.google.com/store/apps/details?id=com.luciz.airpangpang2" target="_blank">Air PANG PANG</a></li>
                    <li><a href="https://play.google.com/store/apps/details?id=com.LuciZ.TetriCube" target="_blank">Tetricube</a></li>
                  </ul>
                  <h3>Works</h3>
                  <ul>
                    <li>2019.01- Kakao corp.</li>
                    <li>2018.07-08 Samsung SDS 인턴</li>
                    <li>2014.10-12 NexText 인턴</li>
                  </ul>
                  <h3>Education</h3>
                  <ul>
                    <li>2013.03-2019.02 Dongguk Univ.</li>
                  </ul>
                </div>
              </article>
            </div>
          </div>

          <!--<footer class="card-footer">
            <a href="#" class="card-footer-item">Save</a>
            <a href="#" class="card-footer-item">Edit</a>
            <a href="#" class="card-footer-item">Delete</a>
          </footer>-->
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import Hero from "./Hero.vue";

export default {
  name: "Profile",
  components: {
    Hero
  }
};
</script>