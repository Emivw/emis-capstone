<template>
    <div class="modal fade" style="color:black !important;" :id="`editProduct`+product.prodID" tabindex="-1"
        :aria-labelledby="product.prodID+`EditLabel`" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content text-white">
                <div class="modal-header">
                    <h5 class="modal-title" :id="`editProductLabel`+product.prodID">Modal Title</h5>
                    <button type="button" :id="`editProductClose`+product.prodID" class="btn-close"
                        data-bs-dismiss="modal" aria-label="Close"></button>
                </div>

                <div class="modal-body">
                    <form method="PATCH" @submit.prevent="editProduct">
                        <label class="form-label">ID</label>
                        <input type="number" class="form-control" :value="product.prodID" readonly>
                        <label class="form-label">Product Name</label>
                        <input type="text" class="form-control" v-model="product.prodTitle">
                        <label class="form-label">Product Image</label>
                        <input type="text" class="form-control" v-model="product.prodImg1">
                        <label class="form-label">Description</label>
                        <textarea style="resize:none;" class="form-control" cols="30" rows="2"
                            v-model="product.prodDesc"></textarea>
                        <label class="form-label">Category</label>
                        <input type="text" class="form-control" v-model="product.prodCat">
                        <label class="form-label">Price</label>
                        <input type="number" class="form-control" v-model="product.prodPrice">
                        <label class="form-label">Stock</label>
                        <input type="text" class="form-control" v-model="product.prodStock">
                        <label class="form-label">Price</label>
                        <input type="number" class="form-control" v-model="product.prodPrice">
                        <button type="button" class="btn btn-grad" @click="editProduct(product.prodID)">Save
                            Changes</button>
                    </form>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-grad" data-bs-dismiss="modal">Close</button>
                </div>
            </div>
        </div>
    </div>
</template>
    
<script>
export default {
    props: ['product'],
    methods: {
        editProduct(id) {
            const payload = {
                id: id,
                prodTitle: this.product.prodTitle,
                prodCat: this.product.prodCat,
                prodStock: this.product.prodStock,
                prodDesc: this.product.prodDesc,
                prodColor: this.product.prodColor,
                prodPrice: this.product.prodPrice,
                prodImg1: this.product.prodImg1,
            };
            this.$store.dispatch('editProduct', payload);
            document.getElementById(`editProductClose` + this.product.prodID).click();
        }
    }
}
</script>
    
<style scoped>

</style>