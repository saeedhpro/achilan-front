<template>
	<div class="bg-[#F7F8FA]">

		<div class="mx-auto pt-3 pb-10 px-5 max-w-7xl md:pb-20 md:pt-6">
			<!-- BreadCrumbs -->
			<div>
				<div class="px-4 py-2.5 flex text-sm text-[#100D14] rounded items-center bg-[#F0F0F5]">

					<nuxt-link to="/" class="px-1">آچیلان دُر</nuxt-link>

					<svg class="font-bold text-[#100D14]" fill="black" width="10px" height="10px" viewBox="0 0 32 32"
						 xmlns="http://www.w3.org/2000/svg">
						<path d="M 26 6 L 6 15.21875 L 6 16.78125 L 26 26 L 26 23.84375 L 9.46875 16 L 26 8.15625 Z"/>
					</svg>

					<nuxt-link to="" class="px-1">استعلام قیمت</nuxt-link>

				</div>
			</div>

			<div class="mt-6 px-6 py-4 bg-white rounded">

				<h3 class="mr-2 font-bold underline decoration-4 decoration-[#FFB508] underline-offset-1">استعلام قیمت</h3>

				<div class="px-2 py-3">
					از این بخش می‌توانید با وارد کردن اطلاعات درب مورد نظر خود، از قیمت آن مطلع شده و سپس با اضافه کردن هر محصول
					به سبد خرید، سفارش خود را به صورت پیش فاکتور ثبت نمایید
				</div>

				<div class="px-2 py-3 md:flex">

					<div class="pl-3 md:w-1/2">

						<div>
							<h5 class="py-1 text-sm text-[#282828]">نوع درب</h5>
							<t-rich-select
								placeholder="چند انتخابی"
								multiple
								:close-on-select="false"
								v-model="types"
								:options="getCategories"
								valueAttribute="id"
								textAttribute="name"
							>
							</t-rich-select>
						</div>

						<div class="py-4 flex ">
							<div class="pl-3 w-1/2">
								<h5 class="py-1 text-sm text-[#282828]">طول درب</h5>
								<div class="relative flex items-center w-full">
									<input class="w-full h-12 px-1 block border border-gray-300 rounded shadow-sm " type="text"
										   v-model="height"/>
									<div class="absolute left-3 bg-white">
										<p class="text-xs text-[#606060]">سانتی متر</p>
									</div>
								</div>
							</div>
							<div class="pr-3 w-1/2">
								<h5 class="py-1 text-sm text-[#282828]">عرض درب</h5>
								<div class="relative flex items-center w-full">
									<input class="w-full h-12 px-1 block border border-gray-300 rounded shadow-sm " type="text"
										   v-model="door_width"/>
									<div class="absolute left-3 bg-white">
										<p class="text-xs text-[#606060]">سانتی متر</p>
									</div>
								</div>
							</div>
						</div>

						<div>
							<h5 class="py-1 text-sm text-[#282828]">نوع شیشه</h5>
							<t-rich-select
								placeholder="چند انتخابی"
								multiple
								:close-on-select="false"
								v-model="glasses"
								:options="getGlasses"
								valueAttribute="id"
								textAttribute="name"
							>
							</t-rich-select>
						</div>

					</div>

					<div class="pr-3 md:w-1/2">

						<div class="w-full">
							<h5 class="py-1 text-sm text-[#282828]">نوع کاربری </h5>
							<t-rich-select
								placeholder="چند انتخابی"
								multiple
								:close-on-select="false"
								v-model="usages"
								:options="getUsages"
								valueAttribute="id"
								textAttribute="name"
							>
							</t-rich-select>
						</div>

						<div class="py-3.5 flex ">

							<div class="pl-3 w-1/2">
								<h5 class="py-1 text-sm text-[#282828]">عرض بازشو</h5>
								<div class="relative flex items-center w-full">
									<input class="w-full h-12 px-1 block border border-gray-300 rounded shadow-sm " type="text"
										   v-model="width"/>
									<div class="absolute left-3 bg-white">
										<p class="text-xs text-[#606060]">سانتی متر</p>
									</div>
								</div>
							</div>

							<div class="pr-3 w-1/2">
								<h5 class="py-1 text-sm text-[#282828]">میزان تردد</h5>
								<div class="relative flex items-center w-full">
									<input class="w-full h-12 px-1 block border border-gray-300 rounded shadow-sm " type="number"
										   v-model="traffic"/>
									<div class="absolute left-3 bg-white">
										<p class="text-xs text-[#606060]">عدد</p>
									</div>
								</div>
							</div>

						</div>

						<div class="py-0.5">
							<h5 class="py-1 text-sm text-[#282828]">نوع فریم</h5>
							<t-rich-select
								placeholder="چند انتخابی"
								multiple
								:close-on-select="false"
								v-model="frames"
								:options="getFrames"
								valueAttribute="id"
								textAttribute="name"
							>
							</t-rich-select>
						</div>

					</div>

				</div>

				<div class="py-3 pl-2 text-left">

					<button @click="cleane()"
							class="ml-3 px-8 py-2.5 inline-flex items-center border border-[#757575] rounded-md shadow-sm hover:text-gray-800 hover:bg-gray-100 hover:border-gray-300 hover:shadow">
						پاک کردن
					</button>

					<div class="relative inline-block">

						<button type="button" @click="search()" v-cloak
								class="mr-3 px-8 py-2.5 inline-flex items-center border text-white rounded-md shadow-sm shadow-[#2C053129] bg-[#4B1752] relative hover:text-gray-800 hover:bg-gray-100 hover:border-gray-300 hover:shadow focus:border-gray-300 focus:outline-none hover:opacity60">
							جستجو
						</button>

						<div v-if="info" @click="info = false" v-cloak class="fixed inset-0 bg-black bg-opacity-70 z-10"></div>

					</div>

				</div>

			</div>

			<!--results-->
			<result :list="productList"></result>

		</div>

		<!-- User [Login] - not logged in -->
		<div v-if="modal_user">
			<div class="fixed inset-0 w-full h-full flex items-center justify-center z-20" v-cloak>

				<div class="py-6 px-6 max-w-md bg-white rounded">

					<h3 class="pb-2 font-bold underline decoration-4 decoration-[#FFB508] underline-offset-1">ورود مشخصات</h3>
					<div class="py-2">به جهت استعلام قیمت محصولات و ارتباط بعدی کارشناسان با شما، لطفا مشخصات خود را وارد نمایید</div>

					<am-string label="نام و نام خانوادگی" v-model="user.name" ref="name" required/>

					<am-mobile label="شماره همراه" ref="mobile" v-model="user.phone_number" required/>

					<div class="py-2">
						<h5 class="py-1 text-sm text-[#282828]">استان انجام پروژه</h5>
						<t-rich-select
							:close-on-select="true"
							v-model="user.state_id"
							:options="getStates"
							valueAttribute="id"
							textAttribute="name"
							placeholder="استان را انتخاب کنید"
							searchBoxPlaceholder="جستجو ..."
							noResultsText="استانی پیدا نشد"
							searchingText="در حال جستجو ..."
							loadingMoreResultsText="نمایش نتایج بیشتر"
						>
						</t-rich-select>
					</div>

					<div class="pt-6">
						<button
							class="px-8 py-2.5 w-full inline text-center text-white rounded-md shadow-sm shadow-[#2C053129] border bg-[#4B1752] hover:text-gray-800 hover:bg-gray-100 hover:border-gray-300 hover:shadow focus:border-gray-300 focus:outline-none hover:opacity60"
							type="button"
							@click="sendCode"
							v-cloak>ارسال کد تایید
						</button>

						<div class="pt-6 text-center">
							<nuxt-link to="/" class="inline hover:text-gray-400">
								بازگشت به صفحه اصلی
							</nuxt-link>
						</div>
					</div>

				</div>

			</div>
			<div v-cloak class="fixed inset-0 bg-black bg-opacity-70 z-10"></div>
		</div>

		<!-- User [Verify] - not logged in -->
		<div v-if="modal_code">
			<div class="fixed inset-0 w-full h-full flex items-center justify-center z-20" v-cloak>

				<div class="py-6 px-6 max-w-md bg-white rounded">

					<h3 class="pb-2 font-bold underline decoration-4 decoration-[#FFB508] underline-offset-1">کد تایید</h3>

					<div class="py-2">
						یک کد تایید به شماره {{ user.phone_number }} ارسال شده است. لطفا آن را در کادر زیر وارد نمایید
					</div>

					<div class="py-2 flex items-center">
						<svg width="16" height="16" class="text-[#2C0531]" xmlns="http://www.w3.org/2000/svg"
							 xmlns:xlink="http://www.w3.org/1999/xlink"
							 x="0px" y="0px"
							 viewBox="0 0 55.25 55.25" style="enable-background:new 0 0 55.25 55.25;" xml:space="preserve">
    <path d="M52.618,2.631c-3.51-3.508-9.219-3.508-12.729,0L3.827,38.693C3.81,38.71,3.8,38.731,3.785,38.749
    	c-0.021,0.024-0.039,0.05-0.058,0.076c-0.053,0.074-0.094,0.153-0.125,0.239c-0.009,0.026-0.022,0.049-0.029,0.075
    	c-0.003,0.01-0.009,0.02-0.012,0.03l-3.535,14.85c-0.016,0.067-0.02,0.135-0.022,0.202C0.004,54.234,0,54.246,0,54.259
    	c0.001,0.114,0.026,0.225,0.065,0.332c0.009,0.025,0.019,0.047,0.03,0.071c0.049,0.107,0.11,0.21,0.196,0.296
    	c0.095,0.095,0.207,0.168,0.328,0.218c0.121,0.05,0.25,0.075,0.379,0.075c0.077,0,0.155-0.009,0.231-0.027l14.85-3.535
    	c0.027-0.006,0.051-0.021,0.077-0.03c0.034-0.011,0.066-0.024,0.099-0.039c0.072-0.033,0.139-0.074,0.201-0.123
    	c0.024-0.019,0.049-0.033,0.072-0.054c0.008-0.008,0.018-0.012,0.026-0.02l36.063-36.063C56.127,11.85,56.127,6.14,52.618,2.631z
    	 M51.204,4.045c2.488,2.489,2.7,6.397,0.65,9.137l-9.787-9.787C44.808,1.345,48.716,1.557,51.204,4.045z M46.254,18.895l-9.9-9.9
    	l1.414-1.414l9.9,9.9L46.254,18.895z M4.961,50.288c-0.391-0.391-1.023-0.391-1.414,0L2.79,51.045l2.554-10.728l4.422-0.491
    	l-0.569,5.122c-0.004,0.038,0.01,0.073,0.01,0.11c0,0.038-0.014,0.072-0.01,0.11c0.004,0.033,0.021,0.06,0.028,0.092
    	c0.012,0.058,0.029,0.111,0.05,0.165c0.026,0.065,0.057,0.124,0.095,0.181c0.031,0.046,0.062,0.087,0.1,0.127
    	c0.048,0.051,0.1,0.094,0.157,0.134c0.045,0.031,0.088,0.06,0.138,0.084C9.831,45.982,9.9,46,9.972,46.017
    	c0.038,0.009,0.069,0.03,0.108,0.035c0.036,0.004,0.072,0.006,0.109,0.006c0,0,0.001,0,0.001,0c0,0,0.001,0,0.001,0h0.001
    	c0,0,0.001,0,0.001,0c0.036,0,0.073-0.002,0.109-0.006l5.122-0.569l-0.491,4.422L4.204,52.459l0.757-0.757
    	C5.351,51.312,5.351,50.679,4.961,50.288z M17.511,44.809L39.889,22.43c0.391-0.391,0.391-1.023,0-1.414s-1.023-0.391-1.414,0
    	L16.097,43.395l-4.773,0.53l0.53-4.773l22.38-22.378c0.391-0.391,0.391-1.023,0-1.414s-1.023-0.391-1.414,0L10.44,37.738
    	l-3.183,0.354L34.94,10.409l9.9,9.9L17.157,47.992L17.511,44.809z M49.082,16.067l-9.9-9.9l1.415-1.415l9.9,9.9L49.082,16.067z"/>
							<g></g>
							<g></g>
							<g></g>
							<g></g>
							<g></g>
							<g></g>
							<g></g>
							<g></g>
							<g></g>
							<g></g>
							<g></g>
							<g></g>
							<g></g>
							<g></g>
							<g></g>
    				</svg>

						<p @click="modal_code = false;modal_user=true" class="px-1 py-1 text-sm text-[#282828] hover:text-gray-4000">اصلاح
							مشخصات</p>
					</div>
					<input v-model="otp" class="px-8 py-2.5 w-full inline text-left text-black rounded-md shadow-sm shadow-[#2C053129] border ">
					<div class="py-6">
						<button @click="verifyCode" type="button"
								class="px-8 py-2.5 w-full inline text-center text-white rounded-md shadow-sm shadow-[#2C053129] border bg-[#4B1752] hover:text-gray-800 hover:bg-gray-100 hover:border-gray-300 hover:shadow focus:border-gray-300 focus:outline-none hover:opacity60">
							ورود
						</button>
						<div class="pt-6 text-center">
							<nuxt-link to="/" class="inline hover:text-gray-400">
								بازگشت به صفحه ی اصلی
							</nuxt-link>
						</div>
					</div>

				</div>

			</div>
			<div v-cloak class="fixed inset-0 bg-black bg-opacity-70 z-10"></div>
		</div>

	</div>
</template>

<script>
import result from "~/components/price/result";
import VueTailwind from 'vue-tailwind';
import {
	TSelect,
	TRichSelect,
} from 'vue-tailwind/dist/components';
import AmString from "~/components/mehr-form/am-string";
import AmMobile from "~/components/mehr-form/am-mobile";

export default {
	name: "inquiry",
	middleware: '',
	components: {
		AmMobile,
		AmString,
		result,
		VueTailwind,
		TSelect,
		TRichSelect,
	},
	props: {
		fixedClasses: {
			wrapper: 'relative',
			buttonWrapper: 'inline-block relative w-full',
			selectButton: 'w-full flex text-left justify-between items-center px-3 py-2 text-black transition duration-100 ease-in-out border rounded shadow-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:outline-none focus:ring-opacity-50 disabled:opacity-50 disabled:cursor-not-allowed',
			selectButtonLabel: 'block truncate',
			selectButtonPlaceholder: 'block truncate',
			selectButtonIcon: 'fill-current flex-shrink-0 ml-1 h-4 w-4',
			selectButtonClearButton: 'rounded flex flex-shrink-0 items-center justify-center absolute right-0 top-0 m-2 h-6 w-6 transition duration-100 ease-in-out',
			selectButtonClearIcon: 'fill-current h-3 w-3',
			dropdown: 'absolute w-full z-10 -mt-1 absolute border-b border-l border-r rounded-b shadow-sm z-10',
			dropdownFeedback: '',
			loadingMoreResults: '',
			optionsList: 'overflow-auto',
			searchWrapper: 'inline-block w-full',
			searchBox: 'inline-block w-full',
			optgroup: '',
			option: 'cursor-pointer',
			disabledOption: 'opacity-50 cursor-not-allowed',
			highlightedOption: 'cursor-pointer',
			selectedOption: 'cursor-pointer',
			selectedHighlightedOption: 'cursor-pointer',
			optionContent: '',
			optionLabel: 'truncate block',
			selectedIcon: 'fill-current h- w-4',
			enterClass: '',
			enterActiveClass: '',
			enterToClass: '',
			leaveClass: '',
			leaveActiveClass: '',
			leaveToClass: ''
		},
		classes: {
			wrapper: '',
			buttonWrapper: '',
			selectButton: 'bg-white border-gray-300',
			selectButtonLabel: '',
			selectButtonPlaceholder: 'text-[#2C0531]',
			selectButtonIcon: 'text-[#2C0531]',
			selectButtonClearButton: 'hover:bg-gray-100 text-[#2C0531]',
			selectButtonClearIcon: '',
			dropdown: 'bg-white border-gray-300',
			dropdownFeedback: 'pb-2 px-3 text-[#2C0531] text-sm',
			loadingMoreResults: 'pb-2 px-3 text-[#2C0531] text-sm',
			optionsList: '',
			searchWrapper: 'p-2 placeholder-gray-400',
			searchBox: 'px-3 py-2 bg-gray-50 text-sm rounded border focus:outline-none focus:shadow-outline border-gray-300',
			optgroup: 'text-[#2C0531] uppercase text-xs py-1 px-2 font-semibold',
			option: '',
			disabledOption: '',
			highlightedOption: 'bg-gray-100',
			selectedOption: 'font-semibold bg-gray-100 bg-blue-500 font-semibold text-white',
			selectedHighlightedOption: 'font-semibold bg-gray-100 bg-blue-600 font-semibold text-white',
			optionContent: 'flex justify-between items-center px-3 py-2',
			optionLabel: '',
			selectedIcon: '',
			enterClass: 'opacity-0',
			enterActiveClass: 'transition ease-out duration-100',
			enterToClass: 'opacity-100',
			leaveClass: 'opacity-100',
			leaveActiveClass: 'transition ease-in duration-75',
			leaveToClass: 'opacity-0'
		},
		variants: {
			danger: {
				selectButton: 'border-red-300 bg-red-50 text-red-900',
				selectButtonPlaceholder: 'text-red-200',
				selectButtonIcon: 'text-red-500',
				selectButtonClearButton: 'hover:bg-red-200 text-red-500',
				dropdown: 'bg-red-50 border-red-300'
			},
			success: {
				selectButton: 'border-green-300 bg-green-50 text-green-900',
				selectButtonIcon: 'text-green-500',
				selectButtonClearButton: 'hover:bg-green-200 text-green-500',
				dropdown: 'bg-green-50 border-green-300'
			}
		}
	},

	data() {
		return {
			modal_user: false,
			modal_code: false,

			user: {
				name: '',
				state_id: '',
				phone_number: 'r',
			},

			info: '',

			otp: null,
			results: 'false',
			fullName: null,
			state: null,
			productList: [],
			types: [],
			glasses: [],
			frames: [],
			usages: [],
			door_width: null,
			width: null,
			height: null,
			frame_types: null,
			traffic: null
		}
	},

	computed: {
		getStates() {
			return this.$store.getters['inquiry/getStates']
		},
		getCategories() {
			return this.$store.getters['inquiry/getCategories']
		},
		getGlasses() {
			return this.$store.getters['inquiry/getGlasses']
		},
		getUsages() {
			return this.$store.getters['inquiry/getUsages']
		},
		getFrames() {
			return this.$store.getters['inquiry/getFrames']
		},
		type() {
			return this.$store.getters['AutomaticDoorDetails/getType']
		},
		usage() {
			return this.$store.getters['applications/getUsagesProducts']
		},
		glass_type() {
			return this.$store.getters['ingredients/getGlass_type']
		},
	},

	async mounted() {

		// Get user token if is logged in
		const token = await this.$cookies.get("user_token") || false

		// Check if user has token then set it to axios
		if (token) {
			await this.$axios.setHeader('Authorization', `Bearer ${token}`)
			await this.search()
		} else {
			this.modal_user = true;
		}

		await this.$store.dispatch('inquiry/getCategories', 'product')
		await this.$store.dispatch('inquiry/getGlasses')
		await this.$store.dispatch('inquiry/getUsages')
		await this.$store.dispatch('inquiry/getFrames')
		await this.$store.dispatch('inquiry/getStates')
	},

	methods: {
		async sendCode() {
			console.log('Name:', !this.$refs.name.$v.$invalid)
			console.log('Mobile:', !this.$refs.mobile.$v.$invalid)

			let name = !this.$refs.name.$v.$invalid
			let mobile = !this.$refs.mobile.$v.$invalid

			if (name && mobile) {
				console.log('True')

				this.$store.dispatch('inquiry/sendCode', this.user)
					.then(res => {
						// disable user modal
						this.modal_user = false

						// enable code modal
						this.modal_code = true

						this.$notify({
							group: 'mehr',
							title: 'کد فعالسازی برای شما پیامک شد',
							type: 'warn'
						});
					})
					.catch(err => {
						console.log(err)
					})

			} else {
				return this.$notify({
					group: 'mehr',
					title: 'لطفا فرم را بررسی کنید',
					type: 'error'
				});
			}
		},
		verifyCode() {
			if (!this.otp) return
			this.$store.dispatch('inquiry/verifyOtp', {
				phone_number: this.user.phone_number,
				otp: this.otp,
			})
				.then(res => {
					this.$cookies.set("user_token", res.data)
					this.$axios.setHeader('Authorization', `Bearer ${res.data}`)
					this.modal_code = false
				})
				.catch(err => {
					console.log(err, 'err')
				})
		},
		getCitiesList(id) {
			this.$store.dispatch(`user/getStatesList`, id)
		},
		getTypes(id) {
			this.$store.dispatch(`AutomaticDoorDetails/getType`, id)
		},
		getusages(id) {
			this.$store.dispatch(`applications/getApplications`, id)
		},
		getframes(id) {
			this.$store.dispatch(`ingredients/getFrames`, id)
		},
		getGlass_type(id) {
			this.$store.dispatch(`ingredients/getGlass_type`, id)
		},
		cleane() {
			this.types = null,
				this.door_width = null,
				this.width = null,
				this.height = null,
				this.usages = null,
				this.frame_types = null
		},
		search() {
			let route = `/products/search?`;
			const filters = []
			filters.push(`door_width=${this.door_width}`)
			filters.push(`width=${this.width}`)
			filters.push(`height=${this.height}`)
			filters.push(`traffic=${this.traffic}`)
			const types = this.types.join(',')
			filters.push(`types=${types}`)
			const usages = this.usages.join(',')
			filters.push(`usages=${usages}`)
			const frames = this.frames.join(',')
			filters.push(`frame_types=${frames}`)
			const glasses = this.glasses.join(',')
			filters.push(`glass_type=${glasses}`)
			route += filters.join('&')
			this.$store.dispatch('search/getSearch', route)
				.then(res => {
					this.productList = res
					console.log('Search Result:', res)
				})
				.catch(err => {
					console.log(err, 'err')
				})
		},

		// Must removed
		login() {
			this.$store.dispatch('user/login', {
				username: this.username,
				phone_number: this.user.phone_number,
				state_id: this.state,
			})
		},
	}
}


</script>
