<template>
  <div class="container">
    <div class="setting">
      <h1>Create Article</h1>
      <form>
        <div class="form-group">
          <input
            type="text"
            class="form-control"
            id="exampleFormControlInput1"
            placeholder="Article Title"
            v-model="title"
          />
        </div>
        <div class="form-group">
          <input
            type="text"
            class="form-control"
            id="exampleFormControlInput1"
            placeholder="What's this article about ?"
            v-model="description"
          />
        </div>
        <div class="form-group">
          <textarea
            class="form-control"
            id="exampleFormControlTextarea1"
            rows="3"
            placeholder="Write your article"
            v-model="body"
          ></textarea>
        </div>
        <div class="form-group">
          <input
            type="text"
            class="form-control"
            id="exampleFormControlInput1"
            placeholder="Enter tags"
            v-model="tagList"
          />
        </div>
        <button
          type="button"
          class="btn btn-primary"
          @click.prevent="onCreatArticle"
        >
          Create Article
        </button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "ArticleCreate",
  data() {
    return {
      title: "",
      description: "",
      body: "",
      tagList: [],
      loading: false,
    };
  },
  methods: {
    onCreatArticle() {
      this.$store.dispatch("createArticle", {
        title: this.title,
        description: this.description,
        body: this.body,
      }).then(() =>{
        this.$router.push("/")
      }).catch((err)=>{
        console.log(err);
      });
    },
  },
};
</script>

<style>
</style>