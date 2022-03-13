<template>
<div>
  <div class="mt-5 py-4 px-4 w-full flex justify-between items-center rounded bg-[#E4E4EB]">
    <h3 class="mr-2 font-bold underline decoration-4 decoration-[#FFB508] underline-offset-1">نتایج</h3>
    <p class="px-3 py-1 bg-[#F7F8FA] text-sm text-center rounded shadow-sm">
      4 کالا
    </p>
  </div>
  <ul role="list" class="pt-5 grid grid-cols-2 gap-4 sm:grid-cols-2 md:grid-cols-4">

    <li v-for="(i, n) in list" :key="n" class="p-4 col-span-1 items-center bg-white rounded ">
        <img class=""
             :src="i.thumbnail ? i.thumbnail : '@/static/images/articles/FireShot Capture 032.png'" height="210"
             width="280"/>
        <div
          class="py-3 px-5 border border-black absolute top-20 right-24 opacity-0 whitespace-nowrap text-sm">
          مشاهده محصول
        </div>
        <div class="py-4 font-medium">
          {{ i.title }}
        </div>

        <p class="pb-4 text-left">
          {{i.rates}} امتیاز
        </p>

      <div class="w-full flex justify-between text-center" >
        <nuxt-link to="#" class="ml-1 py-2 w-1/2 border text-sm inline rounded">مشاهده محصول</nuxt-link>
        <span to="" class="mr-1 py-2 w-1/2 bg-[#BA4B30] text-sm text-white inline rounded" @click="addItem(i.id)">افزودن به سبد</span>
      </div>
    </li>

  </ul>
</div>
</template>

<script>
export default {
  name: "result",
  props: {
    list: {
      type: Array,
      default: []
    }
  },
  methods: {
    addItem(id) {
      this.$store.dispatch('inquiry/addItem', {
        product_id: id
      })
      .then(res => {
        console.log(res, "res")
      })
      .catch(err => {
        console.log(err, "err")
      })
    }
  }
}
</script>

<style scoped>

</style>
