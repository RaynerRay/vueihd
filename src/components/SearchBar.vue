<template>
<div class="app-header">
  <div class="grid grid-cols-12 mt-2">  <!-- tailwind grid for app header -->
        <div class="col-span-1">
            <router-link to="/"><img class="h-15" src="../../static/ihd-2.png" alt=""></router-link>
        </div>
        <div class="col-span-3 pr-8">
            <button class="py-1"><svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
</svg></button>
            <p class="pr-14 font-bold">Zimbabwe</p>
        </div>
        

        <div class="col-span-8">
            <div class="bg-red-600 max-w-xl rounded-md justify-self-center"><!-- marging just for display-->
                <div class="max-w-lg mx-auto">
                
                        <div class="flex items-center md:flex">
                           <div class="dropdown inline-block relative">
                                <div class="bg-red-600 text-white font-semibold py-3 px-4 rounded
                                 inline-flex items-center" style="margin-left: -7.8rem;">
                                <span class="mr-1">Categories</span>
                                <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/> </svg>
                                </div>
                                <ul class="divide-y-1 bg-custombg divide-gray-50 dropdown-menu absolute hidden text-white pt-1 w-40" style="margin-left: -7.8rem;">
                                        <nuxt-link to="" class="flex justify-between p-3 hover:bg-blue-400 text-sm  text-gray-500 hover:text-blue-200">
                                            Equipments
                                        </nuxt-link>
                                        <nuxt-link to="" class="flex justify-between p-3 hover:bg-blue-400 text-sm text-gray-500 hover:text-blue-200">
                                            Consumer Goods
                                        </nuxt-link>
                                        <nuxt-link to="" class="flex justify-between p-3 hover:bg-blue-400 text-sm  text-gray-500 hover:text-blue-200">
                                            Pharmaceuticals
                                        </nuxt-link>
                                        <div class="flex justify-between p-3 hover:bg-blue-400 text-sm  text-gray-500 hover:text-blue-200">
                                            Masks
                                        </div>
                                        <nuxt-link to="" class="flex justify-between p-3 hover:bg-blue-400 text-sm  text-gray-500 hover:text-blue-200">
                                            Herbals
                                        </nuxt-link>
                                        <nuxt-link to="" class="flex justify-between p-3 hover:bg-blue-400 text-sm  text-gray-500 hover:text-blue-200">
                                            Health & Nutrition
                                        </nuxt-link>
                                        <nuxt-link to="" class="flex justify-between p-3 hover:bg-blue-400 text-sm  text-gray-500 hover:text-blue-200">
                                            Other Items
                                        </nuxt-link>
                                </ul>
                            </div>

                            <input type="text" class="w-full py-2 
                            bg-white shadow-inner rounded-md border 
                            border-red-500 focus:outline-none">
                            
                        
                        <!--search icon-->
                        <button  class="pl-2 mr-2 outline-none focus:outline-none active:outline-none">
                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            viewBox="0 0 24 24" class="w-5 h-5 text-white">
                            <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                        </svg>
                        </button>
                        </div>
                 </div>
            </div>
        </div>
    </div>
    </div>
</template>   

 <script>
 export default {
     
 }
 </script>

 <style>
    .dropdown:hover .dropdown-menu {
    display: block;

    }
 </style>