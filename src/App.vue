<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <TheAppNavbar />
    <br />
    <!-- <Home /> -->
    <!-- <Home/> -->
    <router-view />
    <!-- <login /> -->

    <!-- <register /> -->
  </div>
</template>

<script>
import Login from "./views/Login.vue";
import Register from "./views/Register.vue";
import TheAppNavbar from "./components/TheAppNavbar";
import TheAppContent from "./views/TheAppContent";
export default {
  components: { Login, Register, TheAppNavbar, TheAppContent },
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
