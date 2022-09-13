<template>
    <section class="pollaroid-gallery p-5">

        <figure class="pollaroid-card m-4" v-for="product in products" :key="product.prodID" :product="product">
            <img :src="product.prodImg1" alt="icecream" width="200" height="300" class="img-fluid">
            <figcaption class="pollaroid-card-caption">{{product.prodTitle}}</figcaption>
        </figure>
    </section>
</template>
    
<script>
export default {
    computed: {
        products() {
            return this.$store.state.products;
        },
    },
    mounted() {
        this.$store.dispatch("getProducts");
    },
};
</script>
<style scoped>
.home-demo .item {
    background: #ff3f4d;
}

.pollaroid-gallery {
    background-image: url('https://raw.githubusercontent.com/claudz1/CodepenImages/master/plank.jpg');
    height: 100%;
    background-size: cover;

}

h1 {
    margin: 3rem;
}

.pollaroid-gallery {
    text-align: center;
    color: #eee6d8;
}

.pollaroid-card {
    display: inline-block;
    background-color: #eee6d8;
    padding: 10px;
    box-shadow: 4px 4px 8px -4px rgba(0, 0 0, 0.9);
    cursor: pointer;
    transition: transform 0.5s;
}

.pollaroid-card-caption {
    text-align: center;
    font-family: sans-serif;
    color: #000;
}

.pollaroid-card:nth-of-type(even) {
    transform: rotate(-5deg);
}

.pollaroid-card:nth-of-type(odd) {
    transform: rotate(10deg);
}

.pollaroid-card:nth-of-type(even)::before {
    content: '';
    display: block;
    background-color: #948c8c5c;
    width: 100px;
    height: 25px;
    transform: rotate(-24deg) translate(-30px, -25px);
}

.pollaroid-card:nth-of-type(odd)::before {
    content: '';
    display: block;
    background-color: #948c8c5c;
    width: 100px;
    height: 25px;
    transform: translate(140px, -2px) rotate(25deg)
}

.pollaroid-card:hover {
    transform: scale(1.2);
}
</style>
    