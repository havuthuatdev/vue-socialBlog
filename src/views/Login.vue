<template>
  <div class="container">
    <div class="row">
      <div class="col-sm-3"></div>
      <div class="col-sm-6">
        <form>
          <h1>LOGIN</h1>
          <div class="form-login">
            <div class="form-group">
              <label for="exampleInputEmail1">Email address</label>
              <input
                type="email"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Enter email"
                v-model="email"
              />
              <small
                class="error-messages"
                v-for="error in errors"
                :key="error.id"
              >
                {{ error.message }}
              </small>
            </div>
            <div class="form-group">
              <label for="exampleInputPassword1">Password</label>
              <input
                type="password"
                class="form-control"
                id="exampleInputPassword1"
                placeholder="Password"
                v-model="password"
              />
            </div>
            <!-- <div class="form-check">
              <input
                type="checkbox"
                class="form-check-input"
                id="exampleCheck1"
              />
              <label class="form-check-label" for="exampleCheck1"
                >Check me out</label
              >
            </div> -->
            <button
              type="submit"
              class="btn btn-primary"
              @click.prevent="login"
            >
              Login
            </button>
          </div>
        </form>
      </div>
      <div class="col-sm-3"></div>
    </div>
  </div>
</template>

<script>
// import store from '../store/modules/users'
import {mapActions} from "vuex"
export default {
  name: "Login",
  data() {
    return {
      email: "",
      password: "",
      errors: null,
    };
  },
  computed: {
    // username() {
    //   return this.$store.getters["user",["username"]];
    // },
  },
  methods: {
    login() {
      this.$store
        .dispatch("loginUser", {
          email: this.email,
          password: this.password,
          errors: [],
        })
        .then(() => {
          this.errors = [];
          this.$router.push("home");
        })
        .catch((err) => {
          this.errors.push(err);
        });

      // .then(() => {
      //   this.errors = [];
      //   this.$router.push('Home')
      // })
      // .catch((err) => {
      //   this.errors.push(err);
      // });
    },
  },
};
</script>

<style scoped>
form {
  background-image: linear-gradient(#01003a, #b86077);
  width: 500px;
  height: 600px;
  position: relative;
}
.form-login {
  position: absolute;
  margin-top: 50%;
}
.form-group {
  /* position: absolute; */
  width: 300px;
  margin-left: 100px;
  /* position: relative; */
}
h1 {
  position: absolute;
  color: white;
  /* text-align: center; */
  width: 25%;
  /* right: 45%; */
  /* padding: 25%; */
  margin-top: 100px;
  margin-left: 187.5px;
}
.btn-primary {
  position: absolute;
  width: 25%;
  margin-left: 200px;
}
/*     
    input{
        position: absolute;
        width: 70%;
        right: 15%;
        margin-top: 60%;
    } */
/* button{
        position: absolute;
        margin-top: 70%;
        width: 20%;
        right: 40%;

    } */
/* label{
        position: absolute;
        top: 25%;
    } */
</style>
