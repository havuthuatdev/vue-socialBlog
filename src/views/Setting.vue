<template>
  <div class="container">
    <div class="setting">
      <h1>Your setting</h1>
      <form>
        <div class="form-group">
          <input
            type="text"
            class="form-control"
            id="exampleFormControlInput1"
            placeholder="URL picture"
          />
        </div>
        <div class="form-group">
          <input
            type="text"
            class="form-control"
            id="exampleFormControlInput1"
            v-model="user.username"
            placeholder="UserName"
          />
        </div>
        <div class="form-group">
          <textarea
            class="form-control"
            id="exampleFormControlTextarea1"
            rows="3"
            v-model="user.bio"
          ></textarea>
        </div>
        <div class="form-group">
          <input
            type="email"
            class="form-control"
            id="exampleFormControlInput1"
            v-model="user.email"
            placeholder="Email"
          />
        </div>
        <div class="form-group">
          <input
            type="password"
            class="form-control"
            id="exampleFormControlInput1"
            v-model="user.password"
            placeholder="Password"
          />
        </div>
        <button
          type="button"
          class="btn btn-primary"
          @click.prevent="updateSetting"
        >
          Update setting
        </button>
      </form>
      <hr />
      <button @click="logout" class="btn btn-outline-danger">
        Or click here to logout.
      </button>
    </div>
  </div>
</template>

<script>
// import { mapGetters } from "vuex";
export default {
  name: "Setting",
  data() {
    return {
      user: {
        email: "",
        bio: "",
        username: "",
        password: "",
        image: "",
      },
      errors: null,
    };
  },
  computed: {
    currentUser() {
      return this.$store.state.users.user;
    },
    isAuth() {
      return this.$store.getters[("user", ["isAuthenticated"])];
    },
  },
  created() {
    const { image, username, bio, email } = this.currentUser;
    Object.assign(this.user, { image, username, bio, email });
    // console.log( this.user);
  },
  methods: {
    updateSetting() {
      this.$store
        .dispatch("updateSetting", this.user)
        .then(() => {
          // this.errors = [];
          this.$router.push("home");
        })
        .catch((err) => {
          // this.errors.push(err);
          console.log(err);
        });
    },
    logout() {
      // comfirm("Do you want to");
      this.$store
        .dispatch("logout")
        .then(() => {
          this.$router.push("login");
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>

<style>
h1 {
  color: black;
}
form {
  color: black;
}
</style>