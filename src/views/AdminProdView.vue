<template>
  <div class="productadmin-container pt-5 table-responsive">

    <table class="table table-hover table-dark text-danger" v-if="products">
      <thead>
        <tr class="text-warning">
          <th scope="col"><button name="" id="" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#createProduct"><i class="fa fa-plus"
                aria-hidden="true"></i></button></th>
          <th scope="col">TITLE</th>
          <th scope="col">CATEGORY</th>
          <th scope="col">STOCK</th>
          <th scope="col">DESCRIPTION</th>
          <th scope="col">COLOR</th>
          <th scope="col">PRICE</th>
          <th scope="col">IMAGE1</th>
          <th scope="col">Operations</th>
        </tr>
      </thead>
      <tbody v-for="product in products" :key="product.prodID" :product="product">
        <AddProduct/>
        <UpdateProduct :product="product"/>
        <tr>
          <th scope="row">{{product.prodID}}</th>
          <td><input type="text" name="" :value="product.prodTitle" disabled></td>
          <td><input type="text" name="" :value="product.prodCat" disabled></td>
          <td><input type="text" name="" :value="product.prodStock" disabled></td>
          <td><input type="text" name="" :value="product.prodDesc" disabled></td>
          <td><input type="text" name="" :value="product.prodColor" disabled></td>
          <td><input type="text" name="" :value="product.prodPrice" disabled></td>
          <td><input type="text" name="" :value="product.prodImg1" disabled></td>
          <td>
            <button class="btn btn-primary" @click="this.$store.dispatch('deleteProduct', product.prodID)"><i
                class="fa fa-trash" aria-hidden="true"></i></button>
            <button name="" id="" class="btn btn-primary" data-bs-toggle="modal"
              :data-bs-target="`#editProduct` + product.prodID"><i class="fa fa-cut" aria-hidden="true"></i></button>
          </td>

        </tr>
      </tbody>
    </table>

  </div>
</template>

<script>
import UpdateProduct from '@/components/UpdateProduct.vue';
import AddProduct from '@/components/AddProduct.vue';
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
    deleteProduct() {
      this.$store.dispatch("deleteProduct", this.id);
    }
  },
  components: {
    UpdateProduct,
    AddProduct
  }
}
</script>

<style scoped>

</style>