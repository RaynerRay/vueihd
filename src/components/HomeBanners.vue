<template>
<div>
  <br>
  <div class=" best-selling relative m-3 flex flex-wrap mx-auto ">

    <div class="relative max-w-sm min-w-[200px] bg-white shadow-md p-2 p mx-6 my-6 cursor-pointer">
      <div class="overflow-x-hidden relative">
        <img class="h-40  object-cover pt-4"
         src="../../static/best-selling-products.png">
        
      </div>
      <div class="mt-4 pl-2 mb-2 flex justify-between ">
        <div>
          <p class="text-lg font-semibold text-red-600 mb-0 px-4"> View All</p>
        </div>
       
      </div>
    </div>
    <div v-for="product in productsData" :key="product.pID"
    class="relative max-w-sm min-w-[200px] bg-white shadow-md p-2 mx-6 my-3 cursor-pointer">
      <div class="overflow-x-hidden relative">
        <img class="h-40 object-cover pt-2 px-2" src="https://imgcdn.mckesson.com/CumulusWeb/Images/High_Res/765876.jpg">
        
      </div>
      <div class="mt-4 pl-2 mb-2 flex justify-between ">
        <div>
          <p class="text-lg font-semibold text-gray-900 mb-0">{{product.name}}</p>
          <add-to-cart
           :name="product.name"
           :price="product.price"
           :product-id="product.pID"
          >
          </add-to-cart>
        </div>
        <div class="flex flex-col-reverse mb-1 mr-4 group cursor-pointer">
          <!--<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 group-hover:opacity-70" fill="none" viewBox="0 0 24 24" stroke="gray">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
          </svg>-->
        </div>
      </div>
    </div>
    
    
</div>
<br>

    <div id="best-selling-home">
        
        <!-- App Point grid -->
        <div class="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-10 mt-6">
            <!--Card 1-->
            <div class=" w-full lg:max-w-full lg:flex border-solid border-2">
                <div class="h-48 lg:h-auto lg:w-40 flex-none bg-gray-50 rounded-t lg:rounded-t-none lg:rounded-l 
                text-center overflow-hidden" >
                    <img class="pt-2 my-2 ml-6" src="../../static/ihd-2.png" alt="Mountain">
      
                    <p class="text-red-600 text-base font-bold">
                    View All
                    </p>
            </div>
      
            <div class=" 
            bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
                <div class="mb-8 border-t">
                <p class="text-sm text-gray-600 flex items-center">
                    
                    <svg xmlns="http://www.w3.org/2000/svg" class=" w-3 h-3 mr-2 " fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                            </svg>
                </p>
                    <div class=" pt-2">
                        <img class="w-25 h-15 " src="../../static/home-banner.png" alt="Mountain">
                        <div class="">
                            <p class="text-sm text-gray-600 font-bold pt-2">Non Contact Infrared Thermometer FC120-3CC</p>
                            <p class="text-gray-700 text-base text-sm font-light">
                            Anti-Drugs
                            </p>
                            <p class="text-base text-sm text-blue-800">
                            $120.55 - $130.10
                            </p>
                            <nuxt-link to="products/product"> 
                                <button class="bg-red-600 text-white px-2 rounded-md">Buy Now</button>
                            </nuxt-link>    
                        </div>
                    </div>
                </div>
             </div>
            </div>

            <!--Card 2-->
            <div class="rounded overflow-hidden shadow-lg bg-indigo-900 text-white">
            
                <div class="px-6 pt-4 pb-2">
                <div class="font-bold text-white text-xl mb-2">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 px-1 bg-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                    AppPoint CLUB
                </div>
                  <p class="text-white text-sm ">Innovative Healthcare Delivery Corporation
                            (IHD Corp) SA is a country driven, result-oriented, social impact
                            , multi-partner organization, towards healthcare delivery in Africa: 
                            An Agenda for United Nations Sustainable Development Goals towards 
                            Health for All. IHD focuses on innovative healthcare delivery and is 
                            headquartered in Geneva, Switzerland.
                        </p>

                        <button class="bg-red-600 text-white py-1 px-2 rounded-md"> JOIN NOW</button>
                </div>
            </div>

            <!--Card 3-->
            <div class=" w-full lg:max-w-full lg:flex border-solid border-2">
                <div class="h-48 lg:h-auto lg:w-40 flex-none bg-gray-50 rounded-t lg:rounded-t-none lg:rounded-l 
                text-center overflow-hidden" >
                    <img class="pt-2 my-2 ml-6" src="../../static/ihd-2.png" alt="Mountain">
      
                    <p class="text-red-600 text-base font-bold">
                    View All
                    </p>
            </div>
      
            <div class="bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
                <div class="mb-8 border-t">
                <p class="text-sm text-gray-600 flex items-center">
                    
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-3 h-3 mr-2 " fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                            </svg>
                </p>
                    <div class=" pt-2">
                        <img class="w-25 h-15 " src="../../static/home-banner.png" alt="Mountain">
                        <div class="">
                            <p class="text-sm text-gray-600 font-bold pt-2">Non Contact Infrared Thermometer FC120-3CC</p>
                            <p class="text-gray-700 text-base text-sm font-light">
                            Anti-Drugs
                            </p>
                            <p class="text-base text-sm text-blue-800">
                            $120.55 - $130.10
                            </p>
                        <nuxt-link to="products/product">    
                            <button class="bg-red-600 text-white px-2 rounded-md">Buy Now</button>
                        </nuxt-link>    
                        </div>
                    </div>
                </div>
             </div>
            </div>
            </div>
        </div>
        

        

        <div id="explore-pharma">
        <!-- Explore Pharmaceuticals, home page component-->
        <!--<div class="max-w-full max-h-sm rounded-md overflow-hidden shadow-md bg-white my-2">
          <div class="px-6 py-4">
            <img src="/explore-pharma.JPG" alt="" class="my-4">

            <a class="text-red-600 mx-4 font-bold" href="#">View All</a>
          </div>
        </div>
        </div>-->

        <!-- Explore Health Equipment-->
        <!--<div class="grid grid-cols-12 my-6  grid-flow-col">  
            <div class="col-span-6">
                <div class="max-w-lg max-h-lg rounded-md overflow-hidden shadow-md bg-custom-bg ">
                    <div class="px-6 py-4">
                        <img src="/health-equip.JPG" alt="" class="">

                        <a class="text-red-600 mx-5 font-bold" href="#">View All</a>
                    </div>
                </div>
            </div>

            <div class="col-span-6">
                 <div class="max-w-lg max-h-lg rounded-md overflow-hidden shadow-md bg-white ">
                    <div class="px-6 py-4">
                        <img src="/surgical-equip.JPG" alt="" class="my-2">

                        <a class="text-red-600 mx-5 font-bold" href="#">View All</a>
                    </div>
                </div>
            </div>-->
        </div> <br>
        <HmPictureCards />
    </div> 
</template>

<script>
import db from "../firebase/firebaseInit";

import HmPictureCards from '@/components/HmPictureCards.vue';
export default {
  components: {
      HmPictureCards
  },
  data() {
      return {
          productsData: []
      }
  },
  created() {
      db.collection("products")
        .get()
        .then((querySnapshot) => {
          querySnapshot.forEach((doc) => {
           this.productsData.push({
              id: doc.id,
              name: doc.data().name,
              price: doc.data().price,
            });
          });
        })
        .catch((error) => {
          console.log("Error getting documents: ", error);
        });
        
  
  }, 
}
</script>

<style scoped>
.best-selling{
  background-color: white;
}
</style>