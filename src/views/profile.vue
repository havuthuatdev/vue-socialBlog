<template>
  <div class="user-infor">
    <div class="container">
      <div class="row">
        <template>
          <div class="col-xs-9 col-md-10 offset-md-1">
            <img src="" alt="" />
            <h4>{{ getUser.username }}</h4>
            <p>{{ getUser.bio }}</p>
          </div>
          <div class="col-xs-3">
            <button v-if="isCurrentUser == getUser.username">setting profile</button>
            <button v-else>follow</button>
          </div>
        </template>
      </div>
    </div>
    <div class="container">
      <div class="homeNav">
        <ul class="nav nav-pills outline-active">
          <li class="nav-item">
            <router-link
              exact-active-class="active"
              class="nav-link"
              :to="{ name: 'ProfileArticle' }"
              >Articles
            </router-link>
          </li>
          <li class="nav-item">
            <router-link
              class="nav-link"
              exact-active-class="active"
              :to="{ name: 'ProfileFavorited' }"
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
  // props: {
  //   username: {
  //     type: String,
  //     required: true,
  //   },
  // },
  mounted() {
    this.$store.dispatch("fetchProfile", this.$route.params.username);
  },
  computed: {
    getUser() {
      return this.$store.state.profile.user;
    },
    userLoading() {
      return this.$store.state.profile.isLoading;
    },
    isCurrentUser() {
      return this.$store.state.users.user.username;
    },
  },
  // beforeRouteEnter(to, from, next) {
  //   const currentUsername = store.state.user.user.username;
  //   if (currentUsername === to.params.username) {
  //     const { username, bio, image } = store.state.user.user;
  //     const user = { username, bio, image, following: false };
  //     store.dispatch("COPY_PROFILE", user);
  //   } else {
  //     store.dispatch("fetchProfile", to.params.username);
  //   }
  //   next();
  // },
  // beforeRouteUpdate(to, from, next) {
  //   if (to.params.username === from.params.username) {
  //     next();
  //     return;
  //   }
  //   const currentUsername = store.state.user.user.username;
  //   if (currentUsername === to.params.username) {
  //     const { username, bio, image } = store.state.user.user;
  //     const user = { username, bio, image, following: false };
  //     store.dispatch("COPY_PROFILE", user);
  //   } else {
  //     store.dispatch("fetchProfile", to.params.username);
  //   }
  //   next();
  // },
};
</script>
<style>
button{
  margin-top: 10px;
}

</style>