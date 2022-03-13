<template>

	<div class="mt-2 pb-2 pt-4 bg-white">
		<div class="mx-4 py-4 relative bg-[#4B1752] shadow-lg">
			<img width="24px" height="12px" class="m-1.5 absolute left-0 bottom-0 rotate-180"
				 src="@/static/images/corner -colored.svg">
			<img width="24px" height="12px" class="m-1.5 absolute right-0 top-0"
				 src="@/static/images/corner -colored.svg">
			<img width="24px" height="12px" class="m-1.5 absolute right-0 bottom-0" src="@/static/images/corner2-colored.svg">
			<img width="24px" height="12px" class="m-1.5 absolute left-0 top-0 rotate-180"
				 src="@/static/images/corner2-colored.svg">
			<p class="font-bold text-white text-center">انواع درب اتوماتیک</p>
		</div>
		<ul role="list" class="py-10 bg-white grid grid-cols-2 gap-1 sm:grid-cols-2 md:grid-cols-3">
			<li class="col-span-1 bg-white text-center" v-for="(type, i) in types" :key="i">
				<img width="108px" height="72px" class="mx-auto" :src="type.thumbnail" :alt="type.name">
				<p class="py-2 bg-white text-sm">{{ type.name }}</p>
			</li>
			<!--                    <li class="col-span-1 bg-white text-center">-->
			<!--                      <img width="108px" height="72px" class="mx-auto" src="@/static/images/doors/door1.png">-->
			<!--                      <p class="py-2 bg-white text-sm">کرو</p>-->
			<!--                    </li>-->
			<!--                    <li class="col-span-1 bg-white text-center">-->
			<!--                      <img width="108px" height="72px" class="mx-auto" src="@/static/images/doors/door2.png">-->
			<!--                      <p class="py-2 bg-white text-sm">اسلایدینگ</p>-->
			<!--                    </li>-->
			<!--                    <li class="col-span-1 bg-white text-center">-->
			<!--                      <img width="108px" height="72px" class="mx-auto" src="@/static/images/doors/door3.png">-->
			<!--                      <p class="py-2 bg-white text-sm">اسلایدینگ</p>-->
			<!--                    </li>-->
			<!--                    <li class="col-span-1 bg-white text-center">-->
			<!--                      <img width="108px" height="72px" class="mx-auto" src="@/static/images/doors/door2.png">-->
			<!--                      <p class="py-2 bg-white text-sm">اسلایدینگ</p>-->
			<!--                    </li>-->
			<!--                    <li class="col-span-1 bg-white text-center">-->
			<!--                      <img width="108px" height="72px" class="mx-auto" src="@/static/images/doors/door3.png">-->
			<!--                      <p class="py-2 bg-white text-sm">اسلایدینگ</p>-->
			<!--                    </li>-->
			<!--                    <li class="col-span-1 bg-white text-center">-->
			<!--                      <img width="108px" height="72px" class="mx-auto" src="@/static/images/doors/door1.png">-->
			<!--                      <p class="py-2 bg-white text-sm">کرو</p>-->
			<!--                    </li>-->
			<!--                    <li class="col-span-1 bg-white text-center">-->
			<!--                      <img width="108px" height="72px" class="mx-auto" src="@/static/images/doors/door2.png">-->
			<!--                      <p class="py-2 bg-white text-sm">اسلایدینگ</p>-->
			<!--                    </li>-->
			<!--                    <li class="col-span-1 bg-white text-center">-->
			<!--                      <img width="108px" height="72px" class="mx-auto" src="@/static/images/doors/door3.png">-->
			<!--                      <p class="py-2 bg-white text-sm">اسلایدینگ</p>-->
			<!--                    </li>-->
			<!--                    <li class="col-span-1 bg-white text-center">-->
			<!--                      <img width="108px" height="72px" class="mx-auto" src="@/static/images/doors/door2.png">-->
			<!--                      <p class="py-2 bg-white text-sm">اسلایدینگ</p>-->
			<!--                    </li>-->

		</ul>
		<a href="/products/types"
		   class="mb-2 mx-auto px-2 py-2 w-1/3 block bg-[#4B1752] border border-[#2C0531] text-white text-sm text-center rounded shadow-sm hover:text-gray-800 hover:bg-gray-100 hover:border-gray-300 hover:shadow">
			مشاهده همه
		</a>
	</div>

</template>

<script>
export default {
	name: "automaticDoorTypes",

	mounted() {
		this.$store.dispatch('AutomaticDoorDetails/getType')
	},
	computed: {
		types() {
			return this.$store.getters['AutomaticDoorDetails/getType']
		},
	},
}
</script>
