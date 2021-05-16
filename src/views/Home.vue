<template>
  <div class="container">
    <div class="home-page">
      <div class="banner">
        <div class="container">
          <h1 v-if="isAuth">SOCIAL NETWORK</h1>
        </div>
        <div class="container">
          <div class="row">
            <div class="col-md-9">
              <div class="feed-toggle">
                <HomeArticleNavs />
              </div>
              <!-- ĐIều khiển nav -->
              <router-view></router-view>
            </div>
            <div class="col-md-3">
              <the-tags />
            </div>
          </div>
          <div class="row">
            <ThePaginate />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import HomeArticleNav from "../components/TheNavHome.vue";
import TheTags from "../components/TheTags.vue";
import ThePaginate from "../components/ThePaginate.vue";

export default {
  components: { HomeArticleNavs: HomeArticleNav, TheTags, ThePaginate },
  name: "Home",
  computed: {
    isAuth() {
      return this.$store.getters[("user", "isAuthenticated")];
    },
  },
};
</script>

<style>
.home-page {
  background-color: #e0f2f1;
}
.homePage {
  color: black;
}
h1 {
  text-align: center;
}
.homePage-title {
  text-align: center;
}
.container {
  color: black;
}
</style>
