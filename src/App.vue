<template>
  <!-- <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </nav> -->
  <NavBar/>
  <router-view/>
</template>
<script>
import NavBar from "./components/navBar.vue";
export default {
  components: {
    NavBar
  }
}

</script>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Rampart+One&display=swap');
#app {
  font-family: 'Rampart One', cursive;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
         
.btn-grad {
            background-image: linear-gradient(to right, #1e130c 0%, #9a8478  51%, #1e130c  100%);
            margin: 10px;
            padding: 15px 45px;
            text-align: center;
            text-transform: uppercase;
            transition: 0.5s;
            background-size: 200% auto;
            color: white;            
            box-shadow: 0 0 20px #eee;
            border-radius: 10px;
            display: block;
          }

          .btn-grad:hover {
            background-position: right center; /* change the direction of the change here */
            color: #fff;
            text-decoration: none;
          }
         

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
