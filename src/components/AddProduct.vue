<template>
    <!-- Modal -->
    <div class="modal fade" id="createProduct" tabindex="-1" aria-labelledby="createProductLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="createProductLabel">Modal title</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <form @submit.prevent="createProduct">
                        <div class="form-group">
                            <label for="title">product Title</label>
                            <input type="text" class="form-control" id="title" placeholder="Title" v-model="prodTitle">
                            <small id="emailHelp" class="form-text text-muted"></small>
                        </div>
                        <div class="form-group">
                            <label for="category">product Category</label>
                            <input type="text" class="form-control" id="category"
                                placeholder="[ 'category1', 'category2', 'category3']" v-model="prodCat">
                        </div>
                        <div class="form-group">
                            <label for="description">product Description</label>
                            <textarea style="resize:none;" class="form-control" cols="30" rows="2" v-model="prodDesc"
                                placeholder="description"></textarea>
                            <small id="emailHelp" class="form-text text-muted"></small>
                        </div>
                        <div class="form-group">
                            <label for="description">product Stock</label>
                            <input type="number" class="form-control" id="stock" placeholder="stock"
                                v-model="prodStock">
                            <small id="emailHelp" class="form-text text-muted"></small>
                        </div>
                        <div class="form-group">
                            <label for="color">product color</label>
                            <input type="text" class="form-control" id="color"
                                placeholder="[ 'color1', 'color2', 'color3']" v-model="prodColor">
                        </div>
                        <div class="form-group">
                            <label for="price">product Price</label>
                            <input type="text" class="form-control" id="price" placeholder="Price" v-model="prodPrice">
                            <small id="" class="form-text text-muted"></small>
                        </div>
                        <div class="form-group">
                            <label for="imgUrl">product imgUrl</label>
                            <input type="text" class="form-control" id="imgUrl" placeholder="imgUrl" v-model="prodImg1">
                        </div>

                        <button type="submit" class="btn btn-primary">Save</button>
                    </form>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                </div>
            </div>
        </div>
    </div>
</template>
    
<script>
export default {
    data() {
        return {
            prodTitle: "",
            prodCat: "",
            prodStock: "",
            prodDesc: "",
            prodColor: "",
            prodPrice: "",
            prodImg1: "",
        };
    },
    computed: {
        products() {
            return this.$store.state.products;
        }
    },
    mounted() {
        this.$store.dispatch("getProducts");
    },
    methods: {
        createProduct() {
            const payload = {
                prodTitle: this.prodTitle,
                prodCat: this.prodCat,
                prodStock: this.prodStock,
                prodDesc: this.prodDesc,
                prodColor: this.prodColor,
                prodPrice: this.prodPrice,
                prodImg1: this.prodImg1,
            };
            this.$store.dispatch("createProduct", payload);
        },
    }
}
</script>
    
<style scoped>

</style>