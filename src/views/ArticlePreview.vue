<template>
  <div>
    <div class="user-flex">
      <router-link
        :to="{
          name: 'ProfileUser',
          params: { username: Article.author.username },
        }"
        class="preview-link"
      >
        <img class="user-img" :src="Article.author.image" />
      </router-link>
      <div class="user-flex-group">
        <router-link
          :to="{
            name: 'ProfileUser',
            params: { username: Article.author.username },
          }"
          class="preview-link"
        >
          <h5 class="user-name">{{ Article.author.username }}</h5>
          <span class="date">{{ FormData(Article.createdAt) }}</span>
        </router-link>
      </div>
    </div>
    <button
      @click="onFavorited"
      type="button"
      class="btn btn-outline-primary btn-sm pull-xs-right"
    >
      <i class="fas fa-heart">{{ Article.favoritesCount }}</i>
    </button>
    <router-link
      :to="{
        name: 'ProfileArticle',
        params: { slug: Article.slug },
      }"
      class="preview-link"
    >
      <h3>{{ Article.title }}</h3>
      <p>{{ Article.description }}</p>
      <span>Read more...</span>
    </router-link>
    <hr />
    <!-- <input class="suser-comment" type="text" /> -->
    <!-- <a href="#" class="btn btn-primary ">Submit</a> -->
  </div>
</template>
<script>
import moment from "moment";
export default {
  props: {
    Article: {
      type: Object,
      default: () => {},
    },
  },
  methods: {
    FormData(dateString) {
      return moment(dateString).format("MMMM Do, YYYY");
    },
    onFavorited() {
      alert("skndfks");
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
