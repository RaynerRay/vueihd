<template>
    <div class="mt-8">
     <div class="flex justify-center">
		<div class="bg-white min-h-screen w-2/4 flex justify-center items-center">
			<div>
                <form @submit.prevent="submit">
					<div>
						<span class="text-sm text-gray-900">Welcome </span>
						<h1 class="text-2xl font-bold">Login to your account</h1>
					</div>
					
						<div class="my-3">
							<label class="block text-md mb-2" for="email">Email</label>
							<input v-model="email" class="px-4 w-full border-2 py-2 rounded-md text-sm outline-none" type="email" name="password" placeholder="email">
                    	</div>
						<div class="mt-5">
							<label class="block text-md mb-2" for="password">Password</label>
							<input v-model="password" class="px-4 w-full border-2 py-2 rounded-md text-sm outline-none" type="password" name="password" placeholder="password">
                    	</div>
						<div class="mt-5">
							<label class="block text-md mb-2" for="password">Location</label>
							<input  class="px-4 w-full border-2 py-2 rounded-md text-sm outline-none" type="password" name="password" placeholder="location">
                    	</div>
						<div class="mt-5">
							<label class="block text-md mb-2" for="password">Contact Number</label>
							<input  class="px-4 w-full border-2 py-2 rounded-md text-sm outline-none" type="password" name="password" placeholder="Contact Number">
                    	</div>
						
							<div class="flex justify-between">
								<div>
									<input  class="cursor-pointer"  type="radio" name="rememberme">
									<span class="text-sm">Remember Me</span>
								</div>
								<span class="text-sm text-blue-700 hover:underline cursor-pointer">Forgot password?</span>
							</div>
							<div class="">
								<router-link to="/cart"><button  class="mt-4 mb-3 w-full bg-green-500 hover:bg-green-400 text-white py-2 rounded-md transition duration-100">Login now</button>
								</router-link>
							</div>
				</form>
				<router-link to="/register">
					<p class="mt-8"> Dont have an account? <span class="cursor-pointer text-sm text-blue-600"> register for free</span></p>
				</router-link>
				
			</div>
		</div>
	</div>
</div>

</template>

<script>
export default {
  data() {
    return {
        email: '',
        password: ''
    }
  },
}
</script>