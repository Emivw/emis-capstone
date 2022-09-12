<template>
.<div class="landing-container">
  <div class="text-container">
  <span>N</span>
  <span>O</span>
  <span>I</span>
  <span>R</span>
  <span>'S</span>
  <br>
  <span>Gents</span>
</div>
</div>
  <Polaroid v-for="product in products" :key="product.prodID" :product="product" />
</template>

<script>
import Carousel from '@/components/Carousel.vue';
import Polaroid from '@/components/Polaroid.vue';

export default {
  name: 'HomeView',
  computed: {
    products() {
      return this.$store.state.products;
    },
  },
  mounted() {
    this.$store.dispatch("getProducts");
  },
  components: {
    // HelloWorld,
    Carousel,
    Polaroid
  }
}
</script>
<style scoped>
  .landing-container{
    /* background: url('https://images.pexels.com/photos/331986/pexels-photo-331986.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'); */
    /* width: 100vw; */
    height: 80vh;
  
  background:url('https://raw.githubusercontent.com/claudz1/CodepenImages/master/plank.jpg') ;
  background-size: cover;
  background-color: #000;
  color: #111;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 4rem;
  height: 100vh;
  /* font-family: 'Quicksand', sans-serif; */
}

.text-container > span {
  text-transform: uppercase;
  animation: glow 2s ease-in-out infinite;
}

@keyframes glow {
  0%, 100% {
    color: #FFF;
    text-shadow: 0 0 10px #0652DD, 0 0 50px #0652DD, 0 0 100px #0652DD;
  }
  
  10%, 90% {
    color: #111;
    text-shadow: none;
  }
}

.text-container > span:nth-child(2) {
	animation-delay: 0.25s;
}

.text-container > span:nth-child(3) {
	animation-delay: 0.5s;
}

.text-container > span:nth-child(4) {
	animation-delay: 0.75s;
}

.text-container > span:nth-child(5) {
	animation-delay: 1s;
}

.text-container > span:nth-child(6) {
	animation-delay: 1.25s;
}

.text-container > span:nth-child(7) {
	animation-delay: 1.5s;
}
/*  */

</style>
