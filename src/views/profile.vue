<template>
  <div class="user-infor">
    <div class="container">
      <div class="row">
        <template>
          <div class="col-xs-12 col-md-10 offset-md-1">
            <img src="" alt="" />
            <h4>name</h4>
            <p>bio</p>
          </div>
        </template>
      </div>
    </div>
    <div class="container">
      <div class="homeNav">
        <ul class="nav nav-pills outline-active">
          <li class="nav-item">
            <router-link
              class="nav-link"
              :to="{ name: ProfileArticles }"
              exact-active-class="active"
              >Articles
            </router-link>
          </li>
          <li class="nav-item">
            <router-link
              class="nav-link"
              :to="{ name: ProfileFavorited }"
              exact-active-class="active"
              >Favorited
            </router-link>
          </li>
        </ul>
        <hr />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Profile",
  mounted() {
    this.$store.dispatch("fetchProfile");
  },
  computed: {
    getUser() {
      return this.$store.state.profile["user"];
    },
  },
};
</script>

<style>
</style>