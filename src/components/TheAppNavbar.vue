<template>
  <div class="container">
    <nav class="navbar navbar-expand-lg navbar-light bg-primary">
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active" v-if="isAuth">
            <!-- <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a> -->
            <router-link class="nav-link" :to="{ path: '/' }">Home</router-link>
          </li>
          <li class="nav-item" v-if="!isAuth">
            <router-link class="nav-link" to="/Register">Register</router-link>
            <!-- <a class="nav-link" href="#">Link</a> -->
          </li>

          <li class="nav-item" v-if="!isAuth">
            <router-link class="nav-link" to="/Login">Login</router-link>
            <!-- <a class="nav-link disabled" href="#">Disabled</a> -->
          </li>
        </ul>
        <div class="form-inline my-2 my-lg-0">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item" v-if="isAuth">
              <router-link class="nav-link" to="/editor">
                NewArticle
              </router-link>
              <!-- <a class="nav-link" href="#">Link</a> -->
            </li>
          </ul>
          <ul class="navbar-nav mr-auto">
            <li class="nav-item" v-if="isAuth">
              <router-link class="nav-link" to="/Setting">
                Setting
              </router-link>
              <!-- <a class="nav-link" href="#">Link</a> -->
            </li>
          </ul>
          <ul class="navbar-nav mr-auto" v-if="isAuth">
            <li class="nav-item">
              <router-link
                class="nav-link"
                :to="{
                  name: 'ProfileUser',
                  params: { username: username }
                }"
                >{{ username }}</router-link
              >
              <!-- <a class="nav-link" href="#">Link</a> -->
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: "TheAppNavbar",
  computed: {
    username() {
      return this.$store.getters[("user", ["username"])];
    },
    isAuth() {
      debugger
      // return this.$store.getters[("user", ["isAuthenticated"])];
      return this.$store.state.users.isAuthenticated;
    }
  }
};
</script>

<style></style>
