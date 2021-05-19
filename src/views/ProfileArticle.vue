<template>
  <div class="container">
    <div class="row">
      <template>
        <div class="col-xs-9 col-md-10 offset-md-1">
          <div class="informatinAuthor">
            <img :src="getArticle.author.image" alt="" width="100px" />
            <h4>{{ getArticle.author.username }}</h4>
            <p>{{ getArticle.author.bio }}</p>
          </div>
          <div class="articleAuthor">
            <h4>{{ getArticle.title }}</h4>
            <p>{{ getArticle.body }}</p>
          </div>
          <div class="comment">
            <input type="text" />
            <button>comment</button>
          </div>
        </div>
        <div class="col-xs-3">
          <button
            v-if="userNameAccount == getArticle.author.username"
            @click="onDeleteArticle"
          >
            delete Article
          </button>
          <button v-else>Follow</button>
          <button v-if="userNameAccount == getArticle.author.username">
            Edit Article
          </button>
        </div>
      </template>
    </div>
  </div>
</template>

<script>
export default {
  name: "ArticleProfile",
  mounted() {
    this.$store.dispatch("fetchArticle", this.$route.params.slug);
  },
  computed: {
    userNameAccount() {
      return this.$store.getters[("user", ["username"])];
    },
    getArticle() {
      return this.$store.state.articles["article"];
    },
  },
  methods: {
    onDeleteArticle() {
      this.$store
        .dispatch("deleteArticle", this.$route.params.slug)
        .then(() => {
          this.$router.push("/");
        });
    },
    onEditArticle() {
      // this.$router.push('/editor')
      this.$store.dispatch("updateArticle", this.$route.params.slug);
    },
  },
};
</script>

<style></style>
