<template>
  <div class="container">
    <div class="row">
      <div class="col-sm-3"></div>
      <div class="col-sm-6">
        <form>
          <h1>Register</h1>
          <p>Create your account. It's free and only take a minute.</p>
          <div class="form-register">
            <!-- <div class="form-group">
              <div class="form-group-name">
                <input
                  type="text"
                  class=" form-control input-name"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="First Name"
                  v-model="firstName"
                />
                <input
                  type="text"
                  class=" form-control input-name"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Last Name"
                  v-model="lastName"
                />
              </div>
            </div> -->
            <div class="form-group">
              <label for="exampleInputEmail1">UserName</label>
              <input
                type="text"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Enter username"
                v-model="username"
              />
            </div>
            <div class="form-group">
              <label for="exampleInputEmail1">Email</label>
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
              <!-- <small id="emailHelp" class="form-text text-muted"
                >We'll never share your email with anyone else.</small
              > -->
            </div>
            <div class="form-group">
              <label for="exampleInputEmail1">Password </label>
              <input
                type="password"
                class="form-control"
                id="exampleInputPassword"
                aria-describedby="emailHelp"
                placeholder="Password"
                v-model="password"
              />
              <!-- <small id="emailHelp" class="form-text text-muted"
                >We'll never share your email with anyone else.</small
              > -->
            </div>
            <button
              type="submit"
              class="btn btn-primary"
              @click.prevent="register"
            >
              Register
            </button>
          </div>
        </form>
      </div>
      <div class="col-sm-3"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Register",
  data() {
    return {
      username: "",
      email: "",
      password: "",
      errors: [],
    };
  },
  methods: {
    register() {
      alert("register");
      this.$store
        .dispatch("registerUser", {
          username: this.username,
          email: this.email,
          password: this.password,
        })
        .then(() => {
          this.errors = [];
          this.$router.push("Login");
        })
        .catch((err) => {
          this.errors.push(err);
        });
      // (this.email = email), (this.password = password);
    },
  },
};
</script>

<style scoped>
.container{
  color: white;
}
form {
  background-image: linear-gradient(#01003a, #b86077);
  width: 500px;
  height: 600px;
  /* position: relative; */
}
h1 {
  padding-top: 25px;
  text-align: center;
}
p {
  text-align: center;
}
.form-register {
  margin-top: 100px;
}
.form-group {
  margin: 0px 50px;
  position: relative;
  margin-top: 20px;
}
.btn-primary {
  width: 80px;
  margin-top: 20px;
  margin-left: 210px;
  /* position: absolute; */
  /* justify-items: center; */
}
.form-group-name {
  display: flex;
  justify-content: space-between;
  /* padding: 0px 100px; */
}
.input-name {
  width: 170px;
  height: 38px;
  border: 1px solid white;
}
</style>