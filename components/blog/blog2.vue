<template>
  <div class="bg-[#F7F8FA]">

    <div class="mx-auto px-5 max-w-7xl" v-if="article">
      <!-- BreadCrumbs -->
      <div class="px-4 py-2.5 flex text-sm text-[#100D14] rounded items-center bg-[#F0F0F5]">

        <nuxt-link to="" class="px-1">مقالات</nuxt-link>

        <svg class="font-bold text-[#100D14]" fill="black" width="10px" height="10px" viewBox="0 0 32 32"
             xmlns="http://www.w3.org/2000/svg">
          <path d="M 26 6 L 6 15.21875 L 6 16.78125 L 26 26 L 26 23.84375 L 9.46875 16 L 26 8.15625 Z"/>
        </svg>

        <nuxt-link to="" class="px-1">{{ article.slug }}</nuxt-link>

      </div>

      <div class="mx-auto md:max-w-3xl">

        <img class="py-6 mx-auto block" :src="article.thumbnail">

        <h2 class="pt-2 font-bold text-3xl text-[#282828]">{{ article.body }}</h2>

        <p class="py-4 text-sm text-[#606060]">{{ article.created_at }}</p>

        <hr>

        <div class="py-4 text-[#282828]">
          {{ article.body }}
        </div>

      </div>

    </div>

  </div>
</template>

<script>
export default {
  name: "blog2",
  mounted() {
    this.$store.dispatch('latestArticles/getArticle' , this.$route.params.id)
  },

  computed: {
    article() {
      return this.$store.getters['latestArticles/getArticle']
    },
  },
}
</script>
