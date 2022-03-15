<template>

	<div class="h-screen bg-[#F7F8FA]">

		<div class="mx-auto pt-10 max-w-2xl items-center md:pt-32">
			<div class="p-2 mx-auto flex justify-center bg-white shadow-lg rounded text-center">
				<div class="  p-2 md:w-1/2">

					<h3 class="pb-4 font-bold text-xl underline decoration-4 decoration-[#FFB508] underline-offset-2">ورود به
						سایت</h3>

					<input name="phone_number" class="mt-2 pr-12 w-full h-12 bg-gray-200 rounded-md placeholder-gray-500" v-model="phone_number"
						   placeholder="شماره همراه"/>

					<input name="password" type="password" class="my-5 pr-12 w-full h-12 bg-gray-200 rounded-md placeholder-gray-500"
						   v-model="password" placeholder="رمز عبور"/>

					<button @click="login" class="py-3 px-2 my-5 w-full flex bg-[#2C0531] rounded-md text-white text-center"
							style="align-items: center">
						<span class="mx-auto text-sm medium click">ورود</span>
					</button>


					<button @click="auth" class="py-3 px-2 my-5 w-full flex bg-[#2C0531] rounded-md text-white text-center"
							style="align-items: center">
						<span class="mx-auto text-sm medium click">بررسی</span>
					</button>

				</div>

			</div>
		</div>

	</div>
</template>

<script>
export default {

	name: "Login",

	data() {
		return {
			phone_number: '',
			password: ''
		}
	},
	methods: {
		login() {
			this.$store.dispatch('login/login', {
				phone_number: this.phone_number,
				password: this.password
			})
				.then(res => {
					setTimeout(() => {
						window.location.href = '/admin/blog'
					}, 200)
				})

				.catch(async err => {
					console.log(err)
				})
		},


		auth() {
			this.$store.dispatch('login/check', {
				// phone_number: this.phone_number,
				// password: this.password
			})
				.then(res => {
					console.log(res)
				})

				.catch(async err => {
					console.log(err)
				})
		}

	},
}
</script>

<style scoped>

</style>
