<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <NavBar />
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
import NavBar from "./components/NavBar.vue";
import Home from "./views/Home.vue";
export default {
  components: { Login, Register, NavBar, Home },
  name: "App",

};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: white;
  margin-top: 60px;
}
</style>
