<template>
  <div class="articlePreview">
    <div class="articlePreview-meta">
      <div class="user">
        <div class="user-flex">
          <a href="profile.html">
            <img class="user-img" :src="article.author.image" />
          </a>
          <div class="user-flex-group">
            <h5 class="user-name">{{ article.author.username }}</h5>
            <span class="date">{{ FormData(article.createdAt) }}</span>
          </div>
        </div>
        <button
          type="button"
          class="btn btn-outline-primary btn-sm pull-xs-right"
        >
          <i class="fas fa-heart"></i>{{ article.favoritesCount }}
        </button>
        <router-link :to="`/article/${article.slug}`" class="preview-link"> 
            <h1>{{article.title}}</h1>
            <p>{{article.description}}</p>
            <span>Read more...</span>
            <hr>
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
  name: "ArtclePreview",
  data() {
    return {
      img: "../assets/thuat.png",
    };
  },
  props: ["article"],
  methods: {
    FormData(dateString) {
      return moment(dateString).format("MMMM Do, YYYY");
    },
  },
};
</script>

<style scped>
.articlePreview {
  color: black;
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
</style>