<template>
  <div class="user-infor">
    <div class="container">
      <div class="row">
        <template>
          <div class="col-xs-9 col-md-10 offset-md-1">
            <img :src="getUser.image" alt="" width="100px" height="100px" />
            <h4>{{ getUser.username }}</h4>
            <p>{{ getUser.bio }}</p>
          </div>
          <div class="col-xs-3">
            <button
              @click="onSettingUser"
              v-if="isCurrentUser == getUser.username"
            >
              setting profile
            </button>
            <button @click="onFollow" v-else>follow</button>
          </div>
        </template>
      </div>
    </div>
    <div class="container">
      <div class="row">
        <div class="col-md-9">
          <div class="feed-toggle">
            <ul class="nav nav-pills outline-active">
              <li class="nav-item">
                <router-link
                  class="nav-link"
                  exact-active-class="active"
                  :to="{
                    name: 'ArticlePersonal',
                    params: { username: getUser.username },
                  }"
                  >Articles Personal
                </router-link>
              </li>
              <li class="nav-item">
                <router-link
                  class="nav-link"
                  exact-active-class="active"
                  :to="{ path: '/favorites' }"
                  >Favorited
                </router-link>
              </li>
            </ul>
            <hr />
            <router-view></router-view>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Profile",
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
  methods: {
    onSettingUser() {
      this.$router.push("/setting");
    },
    onFollow() {
      alert("dsjf");
    },
  },
};
</script>
<style>
button {
  margin-top: 10px;
}
</style>