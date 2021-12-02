<template>
 
  <div class="add-to-cart">
    <router-link to="login"><button class="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded"
    
     @click="addToCart"> Place Order
    </button>
    </router-link>
    
  </div>
</template>

<script>

//import $ from 'jquery'

export default {
  name: "AddToCart",
  props: {
    name: String,
    price: String,
    image: String,
    pId: String
  },
  data(){
      return {
          showModal: false,
          item :{
            productName: this.name,
            productImage: this.image,
            productPrice: this.price,
            productId: this.pId,
            productQuantity: 1,
          }
      }
  },
  methods:{
    addToCart(){
      console.log(this.item)
      this.$store.commit('addToCart', this.item)
    }
  }
};
</script>



<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>