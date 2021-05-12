<template>
  <div class="articlePreview">
    <div class="articlePreview-meta">
      <div class="user" v-for="Article in getArticle" :key="Article.id">
        <div class="user-flex">
          <router-link
            :to="{ name: 'Profile', params: { username: Article.author.username }}"
            class="preview-link">
            <img class="user-img" :src="Article.author.image" />
          </router-link>
          <div class="user-flex-group">
            <router-link
              :to="{ name: 'Profile',params: { username: Article.author.username }}"
              class="preview-link">
              <h5 class="user-name">{{ Article.author.username }}</h5>
              <span class="date">{{ FormData(Article.createdAt) }}</span>
            </router-link>
          </div>
        </div>
        <button
          type="button"
          class="btn btn-outline-primary btn-sm pull-xs-right"
        >
          <i class="fas fa-heart">{{ Article.favoritesCount }}</i>
        </button>
        <router-link :to="``" class="preview-link">
          <h3>{{ Article.title }}</h3>
          <p>{{ Article.description }}</p>
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
      loading: true,
    };
  },
  mounted() {
    this.$store.dispatch("getArticle");
  },
  computed: {
    getArticle() {
      return this.$store.state.home.article;
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
h5 {
  color: black;
}
</style>