<template>
  <div class="homeNav">
    <ul class="nav nav-pills outline-active">
      <li class="nav-item">
        <router-link 
          class="nav-link" 
          to="/" 
          exact-active-class="active">
          Global Feed
        </router-link>
      </li>
      <li class="nav-item">
        <router-link
          class="nav-link"
          to='feed'
          exact-active-class="active"
          >Feed
        </router-link
        >
      </li>
    </ul>
    <hr />
  </div>
</template>

<script>
export default {
  name: "homeNav",
};
</script>

<style>
</style>