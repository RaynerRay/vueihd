<template>
    <div id="registration">
<!-- Form -->
            <div class='flex max-w-lg w-full bg-white  rounded-lg overflow-hidden mx-auto mt-6'>
              <div class='flex items-center px-2 py-3'>
               <form class="w-full max-w-lg" >
                    <div class="md:flex md:items-center mb-6">
                        <div class="md:w-2/4">
                        <label class="block text-gray-500 text-sm font-light md:text-right mb-1 md:mb-0 pr-4" for="inline-full-name">
                        <span class="text-red-600">*</span>
                            Country
                        </label>
                        </div>
                        <div class="md:w-2/4 w-full">
                        <input class="bg-white appearance-none border border-gray-200 rounded w-full py-2 px-4 
                        text-gray-700 text-sm leading-tight focus:outline-none focus:bg-white focus:border-red-500"
                        id="inline-full-name" type="text" value="Niger" v-model="country">
                        </div>
                    </div>
                <div class="md:flex md:items-center mb-6">
                    <div class="md:w-2/4">
                    <label for="forms-labelLeftInputCode" class="text-gray-500 text-sm font-light">
                        <span class="text-red-600">*</span> Please select trade role:</label>
                    </div>
                <div class="md:w-2/4">
                    <input type="radio" value="buyer" v-model="trade_role"/>
                        <span class="ml-1 text-gray-500 text-sm font-light">Buyer</span>
                    <input type="radio" value="seller" v-model="trade_role"/>
                        <span class="ml-1 text-gray-500 text-sm font-light">Seller</span>    
                    <input type="radio" value="both" v-model="trade_role"/>   
                        <span class="ml-1 text-gray-500 text-sm font-light">Both</span>   
                         
                </div>
            </div>

            <!--confirm password-->
            <div class="md:flex md:items-center mb-6">
                <div class="md:w-2/4">
                <label class="block text-gray-500 text-sm font-light md:text-right mb-1 md:mb-0 pr-4"
                 for="inline-password">
                    <span class="text-red-600">*</span>
                    Email Address:
                </label>
                </div>
                <div class="md:w-2/4">
                <input class="bg-white appearance-none border border-gray-200 rounded w-full py-2 px-4 
                text-gray-700 text-sm leading-tight focus:outline-none focus:bg-white focus:border-red-500" 
                id="inline-email" type="email" placeholder="Enter your email address" v-model="email">
                </div>
            </div>

            <!--password-->
            <div class="md:flex md:items-center mb-6">
                <div class="md:w-2/4">
                <label class="block text-gray-500 text-sm font-light md:text-right mb-1 md:mb-0 pr-4" for="inline-password">
                   <span class="text-red-600">*</span>
                    Password:
                </label>
                </div>
                <div class="md:w-2/4">
                <input class="bg-white appearance-none border border-gray-200 rounded w-full py-2 px-4 
                text-gray-700 text-sm leading-tight focus:outline-none focus:bg-white focus:border-red-500" 
                id="inline-password" type="password" placeholder="******************" v-model="password">
                </div>
            </div>
            <!--confirm password-->
            <div class="md:flex md:items-center mb-6">
                <div class="w-48">
                <label class="block text-gray-500 text-sm font-light md:text-right mb-1 md:mb-0 pr-4" for="inline-password">
                    <span class="text-red-600">*</span>
                    Confirm Password:
                </label>
                </div>
                <div class="w-48">
                <input class="bg-white appearance-none border border-gray-200 rounded w-full py-2 px-2 
                text-gray-700 text-sm leading-tight focus:outline-none focus:bg-white focus:border-red-500" 
                id="inline-confirm-password" type="password" placeholder="******************" v-model="confirm_password">
                </div>
            </div>
            <!--company name-->
            <div class="md:flex md:items-center mb-6">
                <div class="md:w-2/4">
                <label class="block text-gray-500 text-sm font-light md:text-right mb-1 md:mb-0 pr-4" for="company-name">
                    <span class="text-red-600">*</span>
                    Company Name:
                </label>
                </div>
                <div class="md:w-2/4">
                <input class="bg-white appearance-none border border-gray-200 rounded w-full py-2 px-1
                text-gray-700 text-sm leading-tight focus:outline-none focus:bg-white focus:border-red-500" 
                id="company-name" type="text" placeholder="Enter your company name" v-model="company_name">
                </div>
            </div>
            <!--first name-->
            <div class="md:flex md:items-center mb-6">
                <div class="md:w-2/4">
                <label class="block text-gray-500 text-sm font-light md:text-right mb-1 md:mb-0 pr-4" for="first-name">
                    <span class="text-red-600">*</span>
                    First Name:
                </label>
                </div>
                <div class="md:w-2/4">
                <input class="bg-white appearance-none border border-gray-200 rounded w-full py-2 px-4 
                text-gray-700 text-sm leading-tight focus:outline-none focus:bg-white focus:border-red-500" 
                id="first-name" type="text" placeholder="Enter your first name" v-model="first_name">
                </div>
            </div>
            <!--last name-->
            <div class="md:flex md:items-center mb-6">
                <div class="md:w-2/4">
                <label class="block text-gray-500 text-sm font-light md:text-right mb-1 md:mb-0 pr-4" for="last-name">
                    <span class="text-red-600">*</span>
                    Last Name:
                </label>
                </div>
                <div class="md:w-2/4">
                <input class="bg-white appearance-none border border-gray-200 rounded w-full py-2 px-4 
                text-gray-700 text-sm leading-tight focus:outline-none focus:bg-white focus:border-red-500" 
                id="last-name" type="text" placeholder="Enter your last name" v-model="last_name">
                </div>
            </div>
            <!--Phone Number-->
            <div class="md:flex md:items-center mb-6">
                <div class="md:w-2/4">
                <label class="block text-gray-500 text-sm font-light md:text-right mb-1 md:mb-0 pr-4" for="contact-number">
                    <span class="text-red-600">*</span>
                    Contact Number:
                </label>
                </div>
                <div class="md:w-2/4">
                <input class="bg-white appearance-none border border-gray-200 rounded w-full py-2 px-4 
                text-gray-700 text-sm leading-tight focus:outline-none focus:bg-white focus:border-red-500" 
                id="contact-number" type="text" placeholder="+1 (555) 1234-567" v-model="number">
                </div>
            </div>
           
            <div class="md:flex md:items-center">
                <div class="md:w-2/4"></div>
                <div class="md:w-2/4">
                <nuxt-link to="/verify-email">
                    <button @click.prevent="userRegister" class="shadow bg-red-500 hover:bg-red-400 focus:shadow-outline 
                    focus:outline-none text-white font-light py-2 px-4 rounded" type="submit">
                        Sign Up
                    </button>
                </nuxt-link>
                </div>
            </div>
            </form>
        </div>
    </div>
</div>
</template>

<script>
 export default {
  name: 'Register',
  data () {
    return {
          country : "",
          trade_role: [],
          email: "",  
          password: "",
          confirm_password: "",
          company_name: "",
          first_name: "",
          last_name: "",
          number: ""
        }
  },
 methods: {
    userRegister() {
       
        }
    },
};
</script>

<style scoped>

html {
  background-color: #ffffff;
}


</style>