<template>
<div class="app-header">

    <!-- Navbar component -->
		<nav class="nav-bar shadow-sm mt-2">
			<div class="max-w-6xl mx-auto px-4">
				<div class="flex ">
					<div class="flex items-center">
						
						<!-- Primary Navbar items -->
						<div class="hidden md:flex items-center space-x-1 ml-48">
							
							<nuxt-link to="" class="py-4 px-2 ml-8 text-gray-500 text-sm
							 font-semibold ">Covid 19</nuxt-link>
							<nuxt-link to="" class="py-4 px-2 text-gray-500 text-sm font-semibold 
							hover:text-red-600 transition duration-300">Best Sellers</nuxt-link>
							<nuxt-link to="" class="py-4 px-2 text-gray-500 text-sm font-semibold
							 hover:text-red-600 transition duration-300">AppPoint membership</nuxt-link>
							<nuxt-link to="" class="py-4 px-2 text-gray-500 text-sm font-semibold
							 hover:text-red-600 transition duration-300">Club 100</nuxt-link>
							<nuxt-link to="" class="py-4 px-2 text-gray-500 text-sm font-semibold 
							hover:text-red-600 transition duration-300">Request Quote</nuxt-link>
							<nuxt-link to="" class="py-4 px-2 text-gray-500 text-sm font-semibold 
							hover:text-red-600 transition duration-300">Help Center</nuxt-link>

							<router-link to="/login" class="text-md font-light pl-4 hover:text-red-600 transition duration-300">Login</router-link>
							<router-link to="/register" class="text-md text-red-600 font-light pl-2"> Register</router-link>
							<router-link to="/cart" class="text-md text-blue-800 font-medium pl-2"> Cart</router-link>
						</div>
					</div>
					<!-- Secondary Navbar items -->
					<!--<div class="hidden md:flex items-center space-x-3 ">
						<a href="" class="py-2 px-2 font-medium text-gray-500 rounded hover:bg-red-600 hover:text-white transition duration-300">Log In</a>
						<nuxt-link to="/registration/register" class="py-2 px-2 font-medium text-white
						 bg-gray-600 rounded hover:bg-red-600 transition duration-300">Register</nuxt-link>
					</div>-->
					<!-- Mobile menu button -->
					<div class="md:hidden flex items-center">
						<button class="outline-none mobile-menu-button"  
 						@click="showMobileMenuBtn = !showMobileMenu">
						<svg class=" w-6 h-6 text-gray-500 hover:text-red-600 "
							x-show="!showMenu"
							fill="none"
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							<path d="M4 6h16M4 12h16M4 18h16"></path>
						</svg>
					</button>
					</div>
				</div>
			</div>
			<!-- mobile menu -->
			<div v-show="!showMobileMenu">
				<ul class="">
					<li class="active"><a href="index.html" class="block text-sm px-2 py-4 text-white bg-red-600 font-semibold">Home</a></li>
					<li><a href="#services" class="block text-sm px-2 py-4 hover:bg-red-600 transition duration-300">Services</a></li>
					<li><a href="#about" class="block text-sm px-2 py-4 hover:bg-red-600 transition duration-300">About</a></li>
					<li><a href="#contact" class="block text-sm px-2 py-4 hover:bg-red-600 transition duration-300">Contact Us</a></li>
					
				</ul>
			</div>
        </nav>

    
</div>

 </template>   
 
 <script>
 export default {
  name: 'Navbar',
  data () {
    return {
		mountains: [],
      showMobileMenu: true
    }
  },
 methods: {
    showMobileMenuBtn () {
      this.$emit('showMobileMenu')
    },
  }
};
</script>

<style scoped>
.nav-bar{
	background-color: #f7f7f7;
}
</style>