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
          @click.prevent="creatArticle"
        >
          Create Article
        </button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "Article Create",
  data() {
    return {
      title: "",
      description: "",
      body: "",
      tagList: [],
      loading: false
    };
  },
  created(){
    this.$store.dispatch("createArticle");
    debugger;
  }

};
</script>

<style>
</style>