<template>
    <div class="products-container">
        <ProductCard  />
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
</style>