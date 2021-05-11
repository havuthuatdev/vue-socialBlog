<template>
  <div class="articlePreview">
    <div class="articlePreview-meta">
      <div class="user" v-for="getArticle in getArticle" :key="getArticle.id">
        <div class="user-flex">
          <a href="profile.html">
            <img class="user-img" :src="getArticle.author.image" />
          </a>
          <div class="user-flex-group">
            <h5 class="user-name">{{ getArticle.author.username }}</h5>
            <span class="date">{{ FormData(getArticle.createdAt) }}</span>
          </div>
        </div>
        <button
          type="button"
          class="btn btn-outline-primary btn-sm pull-xs-right"
        >
          <i class="fas fa-heart">{{ getArticle.favoritesCount }}</i>
        </button>
        <router-link :to="``" class="preview-link">
          <h3>{{getArticle.title}}</h3>
          <p>{{getArticle.description}}</p>
          <span>Read more...</span>
          <hr />
        </router-link>
        <!-- <input class="suser-comment" type="text" /> -->
        <!-- <a href="#" class="btn btn-primary ">Submit</a> -->
      </div>
    </div>
  </div>
</template>
<script>
import moment from "moment";
export default {
  name: "Article",
  data() {
    return {
      article: null,
    };
  },
  mounted() {
    this.$store.dispatch("getArticle");
  },
  computed: {
    getArticle() {
      return this.$store.state.articles.article;
    },
  },
  methods: {
    FormData(dateString) {
      return moment(dateString).format("MMMM Do, YYYY");
    },
  },
};
</script>

<style scoped>
.articlePreview {
  color: white;
}
.user-flex {
  display: flex;
}
.user-img {
  width: 50px;
  height: 50px;
}
.user-name {
  line-height: 50px;
  margin-left: 10px;
}
.date {
  margin-left: 10px;
  color: gray;
}
.user-flex-group {
  display: grid;
}
h5{
  color: black;
}
</style>