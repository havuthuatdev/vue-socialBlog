<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <TheNavBar />
    <br />
    <!-- <Home /> -->
    <router-view />
    <!-- <login /> -->

    <!-- <register /> -->
  </div>
</template>

<script>
import Login from "./views/Login.vue";
import Register from "./views/Register.vue";
import TheNavBar from "./components/TheNavBar.vue";
import Home from "./views/Home.vue";
export default {
  components: { Login, Register, TheNavBar, Home },
  name: "App",
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: black;
  margin-top: 60px;
}
</style>
