<template>
  <div >
      <br>
      <img src="/ihd-banner.jpeg" alt="" id="sm-bckground-img" />

    <div id="bg-img">  
    <div class="w-full bg-custombg rounded-lg shadow-md lg:w-1/5 hidden md:block">
    <div class=" text-xl text-center text-red-600">CATEGORIES</div>

      <ul class="divide-y-2 divide-gray-200">
          
          
          <nuxt-link to="" class="flex justify-between p-3 hover:bg-blue-400 text-md  text-gray-500 font-light hover:text-blue-200">
              Equipments
              <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24"
                  stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
          </nuxt-link>
          <nuxt-link to="" class="flex justify-between p-3 hover:bg-blue-400 text-md text-gray-500 font-light hover:text-blue-200">
              Consumer Goods
              <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 " fill="none" viewBox="0 0 24 24"
                  stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
          </nuxt-link>
          <nuxt-link to="" class="flex justify-between p-3 hover:bg-blue-400 text-md  text-gray-500 font-light hover:text-blue-200">
              Pharmaceuticals
              <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 t" fill="none" viewBox="0 0 24 24"
                  stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
          </nuxt-link>
          <nuxt-link to="" class="flex justify-between p-3 hover:bg-blue-400 text-md  text-gray-500 font-light hover:text-blue-200">
              Masks
              <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 " fill="none" viewBox="0 0 24 24"
                  stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
          </nuxt-link>
          <nuxt-link to="" class="flex justify-between p-3 hover:bg-blue-400 text-md  text-gray-500 font-light hover:text-blue-200">
              Herbals
              <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 " fill="none" viewBox="0 0 24 24"
                  stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
          </nuxt-link>
          <nuxt-link to="" class="flex justify-between p-3 hover:bg-blue-400 text-md  text-gray-500 font-light hover:text-blue-200">
              Health & Nutrition
              <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 " fill="none" viewBox="0 0 24 24"
                  stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
          </nuxt-link>
          <nuxt-link to="" class="flex justify-between p-3 hover:bg-blue-400 text-md  text-gray-500 font-light hover:text-blue-200">
              Other Items
              <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24"
                  stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
          </nuxt-link>
        </ul>
      </div>
    </div>
    <br>
  </div>  

</template>

<script>
  export default {
    
  }
</script>

<style>
#bg-img{
  background-image: url("../../static/ihd-banner.jpeg");
  background-size: 900px 500px;
  background-repeat: no-repeat;
  background-position: right 10px top;
}


@media screen and (min-width: 600px) {
#sm-bckground-img{
display:none;
}
}

</style>

