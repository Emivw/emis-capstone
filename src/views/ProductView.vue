<template>
<div class="product-container pt-5 mt-5">

<div id="product" v-if="product" class="container">
<div class="row">
    <div class="product_images col-md-5"><img :src="product.prodImg1" alt=" " class="img-fluid"/></div>
    <div class="product_details col-md-5">
        <div class="back">
           <h6>Back to<router-link to="/products" class="btn btn-outine-primary btn-dark"><i class="fa fa-briefcase" aria-hidden="true"></i> Products</router-link></h6>
        </div>

        <h2>{{product.prodTitle}}</h2>
        <h3>R{{product.prodPrice}}</h3>

        <div class="about">
            <p>Availability : <span>{{product.prodStock}}</span></p>
            <p>Product Code : <span>{{product.prodID}}</span></p>   
            <p>Tags : <span>{{product.prodCat}}</span> </p>
        </div>

        <p>{{product.prodDesc}}</p>
        <div class="cta">
            <div class="btn btn-outline-warning btn-dark">add to cart</div>
            <div class="btn btn-outline-success btn-dark">
                <span class="material-symbols-outlined">favorite</span>add to wishlist</div>
        </div>
    </div>
</div>
</div>
<div v-else>loading...</div>
</div>
</template>

<script>
    export default {
        name: "Product",
  computed: {
    product() {
      return this.$store.state.product;
    },
  },
  mounted() {
    this.$store.dispatch("getProduct", this.$route.params.id);
  },
    }
</script>

<style scoped>
    .product-container{
        background: url('https://images.pexels.com/photos/235985/pexels-photo-235985.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1');
        color: black;
    }

</style>