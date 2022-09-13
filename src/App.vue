<template>
  <!-- <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </nav> -->
  <NavBar/>
  <router-view/>
  <FooterComp/>
</template>
<script>
import NavBar from "./components/navBar.vue";
import FooterComp from "./components/FooterComp.vue";
export default {
  components: {
    NavBar,
    FooterComp
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
  overflow-x: hidden;
}
h6 {
  display: inline-block;
  
  /* font-family: 'Lato', sans-serif; */
  color: #f55;
  padding: 2px;
  text-transform: uppercase;
  font-size: 4em;
  text-shadow: 0px 0px 15px #f00, 0px 0px 12px #f00, 0px 0px 5px #f00;
  border-radius: 40% 60%;
  box-shadow: -1px -1px 1px #000,-2px -2px 1px #000,-3px -3px 4px #000, -5px -5px 1px #00f,-8px -8px 1px #55f, -9px -9px 12px #00f, 1px 1px 1px #000,2px 2px 1px #000, 3px 3px 4px #000, 5px 5px 1px #00f,8px 8px 1px #55f, 9px 9px 12px #00f;
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
