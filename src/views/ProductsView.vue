<template>
    <div class="products-container mt-5 pt-5">
    <div class="col-md-12 d-flex">
        <h1 class="red">M</h1>
<h1 class="yellow">E</h1>
<h1 class="green">R</h1>
<h1 class="blue">C</h1>
<h1 class="red">H</h1>
    </div>
        <div v-if="products">
        <div class="row">
            <ProductCard v-for="product in products" :key="product.prodID" :product="product" />
        </div>
        </div>
        <div v-else>
            loading...</div>
    </div>
</template>

<script>
import ProductCard from '@/components/productCard.vue';
export default {
    name: 'product',
    computed: {
        products() {
            return this.$store.state.products;
        },
    },
    mounted() {
        this.$store.dispatch("getProducts");
    },
    components: { ProductCard }
}
</script>

<style scoped>
    .products-container{
        background: url('https://images.pexels.com/photos/1901028/pexels-photo-1901028.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'); 
        height: 100vh;

  justify-content: center;
  align-items: center;
  background: #000000;
  overflow-x: hidden;
    }
    h1 {
  /* font-family: 'Poppins', sans-serif; */
  color: #ffffff;
  font-size: 5rem;
  font-weight: 700;
  text-transform: uppercase;
  transition: 0.5s;
  cursor: pointer;
  user-select: none;
}

</style>