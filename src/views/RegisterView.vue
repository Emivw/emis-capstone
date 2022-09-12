<template>
  <div class="register-container">
    <div class="register-dark" style="height: 695px">
      <form>
        <h2 class="sr-only">register Form</h2>
        <div class="illustration"><i class="icon ion-ios-locked-outline"></i></div>
        <div class="illustration" v-if="user"><h1>Thank you for Registering with us, {{user.fullname}}</h1></div>
        <div v-else>

        <div class="form-group">
          <input
            class="form-control"
            type="text"
            name="fullname"
            placeholder="Full Name"
            v-model="fullname"
          />
        </div>
        <div class="form-group">
          <input
            class="form-control"
            type="email"
            name="email"
            placeholder="Email"
            v-model="email"
          />
        </div>
        <div class="form-group">
          <input
            class="form-control"
            type="number"
            name="phone"
            placeholder="Phone Number"
            v-model="phone"
          />
        </div>
        <div class="form-group">
          <input
            class="form-control"
            type="password"
            name="password"
            placeholder="Password"
            v-model="password"
          />
        </div>
        <div class="form-group">
          <button type="submit" class="btn btn-outline-warning btn-dark">Register</button>
        </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      fullname: "",
      email: "",
      phone: "",
      password: "",
    };
  },
  computed: {
    user() {
      return this.$store.state.user;
    },
  },
  methods: {
    register() {
      const user = {
        fullname: this.fullname,
        email: this.email,
        phone: this.phone,
        password: this.password,
      };
      return this.$store.dispatch("register", user);
    },
  },
};
</script>

<style scoped>
.register-container {
  /* background: url('https://images.pexels.com/photos/331986/pexels-photo-331986.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'); */
  /* width: 100vw; */
  height: 80vh;

  background: url("https://raw.githubusercontent.com/claudz1/CodepenImages/master/plank.jpg");
  background-size: cover;
  /* font-family: 'Quicksand', sans-serif; */
}
.register-dark {
  height: 1000px;
  background-size: cover;
  position: relative;
}

.register-dark form {
  max-width: 320px;
  width: 90%;
  background-color: #1e2833;
  padding: 40px;
  border-radius: 4px;
  transform: translate(-50%, -50%);
  position: absolute;
  top: 50%;
  left: 50%;
  color: #fff;
  box-shadow: 3px 3px 4px rgba(0, 0, 0, 0.2);
}

.register-dark .illustration {
  text-align: center;
  padding: 15px 0 20px;
  font-size: 100px;
  color: #e0dd04;
}

.register-dark form .form-control {
  background: none;
  border: none;
  border-bottom: 1px solid #434a52;
  border-radius: 0;
  box-shadow: none;
  outline: none;
  color: inherit;
}

.register-dark form .btn-primary {
  background: #214a80;
  border: none;
  border-radius: 4px;
  padding: 11px;
  box-shadow: none;
  margin-top: 26px;
  text-shadow: none;
  outline: none;
}

.register-dark form .btn-primary:hover,
.register-dark form .btn-primary:active {
  background: #214a80;
  outline: none;
}

.register-dark form .forgot {
  display: block;
  text-align: center;
  font-size: 12px;
  color: #6f7a85;
  opacity: 0.9;
  text-decoration: none;
}

.register-dark form .forgot:hover,
.register-dark form .forgot:active {
  opacity: 1;
  text-decoration: none;
}

.register-dark form .btn-primary:active {
  transform: translateY(1px);
}
</style>
