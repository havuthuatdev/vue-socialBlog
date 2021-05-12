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


  <!-- <Articles /> -->
  <!-- <Article /> -->
  <!-- <div class="homePage" v-if="isAuth">
      <div class="feed-toggle">
        <ul class="nav nav-pills outline-active">
          <li class="nav-item">
            <a
              href=""
              class="nav-link"
              v-if="isAuth"
              @click.prevent="setFeed('user')"
              :class="{ active: activeFeed === 'user' }"
            >
              Your Feed
            </a>
          </li>
          <li class="nav-item">
            <a
              href=""
              class="nav-link"
              v-if="isAuth"
              @click.prevent="setFeed('global')"
              :class="{ active: activeFeed === 'global' }"
            >
              Global Feed
            </a>
          </li>
        </ul>
      </div>
      <h1 class="homePage-title">Article</h1>
      <hr />
      <article-preview
        v-for="article in articles"
        :key="article.slug"
        :article="article"
      />
    </div> -->
  <!-- </div> -->
</template>

<script>
import HomeArticleNav from "../components/HomeArticleNav.vue";
import TheTags from '../components/TheTags.vue';
import ThePaginate from '../components/ThePaginate.vue';
import Article from "./Article.vue";


// import Article from './Article.vue';
// import ArticlePreview from "../components/ArticlePreview.vue";
export default {
  components: { HomeArticleNavs: HomeArticleNav, Articles: Article, TheTags, ThePaginate},
  // components: { ArticlePreview },
  name: "Home",
  data() {
    return {
      // articles: [
      //   {
      //     slug: "",
      //     title: "",
      //     description: "",
      //     body: "",
      //     tagList: ["", ""],
      //     createdAt: "",
      //     updatedAt: "",
      //     favorited: false,
      //     favoritesCount: 0,
      //     author: {
      //       username: "",
      //       bio: "",
      //       image: "",
      //       following: false,
      //     },
      //   },
      //   {
      //     slug: "",
      //     title: "",
      //     description: "",
      //     body: "",
      //     tagList: ["", ""],
      //     createdAt: "",
      //     updatedAt: "",
      //     favorited: false,
      //     favoritesCount: 0,
      //     author: {
      //       username: "",
      //       bio: "",
      //       image: "",
      //       following: false,
      //     },
      //   },
      // ],
      // activeFeed: "global",
    };
  },
  methods: {
    // setFeed(feedType) {
    //   if (feedType === "global") {
    //     this.activeFeed = "global";
    //     // this.$store.dispatch("articles/testFunction");
    //     this.$store.dispatch("articles/getGlobalFeed");
    //   } else if (feedType === "user") {
    //     this.activeFeed = "user";
    //     this.$store.dispatch("articles/getUserFeed");
    //   }
    // },
  },
  created() {
    // this.setFeed("global");
  },
  computed: {
    // globalArticles() {
    //   return this.$store.articles.state.feed || [];
    // },
    // username() {
    //   return this.$store.getters["users/username"];
    // },
    isAuth() {
      return this.$store.getters[("user", "isAuthenticated")];
    },
  },
};
</script>

<style>
.home-page{
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