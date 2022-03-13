<template>
  <div class="mt-2 pb-2 pt-4 bg-white">

    <div class="mx-4 py-4 relative shadow-lg">
      <img width="24px" height="12px" class="m-1.5 absolute left-0 bottom-0" src="@/static/images/corner.svg">
      <img width="24px" height="12px" class="m-1.5 absolute right-0 top-0 rotate-180"
           src="@/static/images/corner.svg">
      <img width="24px" height="12px" class="m-1.5 absolute right-0 bottom-0" src="@/static/images/corner2.svg">
      <img width="24px" height="12px" class="m-1.5 absolute left-0 top-0 rotate-180"
           src="@/static/images/corner2.svg">
      <p class="font-bold text-center">اجزای درب اتوماتیک</p>
    </div>

    <ul role="list" class="py-10 bg-white grid grid-cols-2 gap-1 sm:grid-cols-2 md:grid-cols-3">
      <li class="col-span-1 bg-white text-center" v-for="component in ingredients.slice(0,9)" :key="component">
        <img width="108px" height="72px" class="mx-auto" :src="component.Thumbnail">
        <p class="py-2 bg-white text-sm">{{ component.name }}</p>
      </li>

    </ul>

    <a href="/ingredients"
       class="mb-2 mx-auto px-2 py-2 w-1/3 block bg-[#F4EEF5] border text-[#2C0531] text-sm text-center rounded shadow-sm hover:text-gray-800 hover:bg-gray-100 hover:border-gray-300 hover:shadow">
      مشاهده همه
    </a>

  </div>
</template>

<script>
export default {
  name: "automaticDoorComponents",

  mounted() {
    this.$store.dispatch('ingredients/getIngredients')
  },

  computed: {
    ingredients() {
      return this.$store.getters['ingredients/getIngredients']
    },
}
}

</script>
