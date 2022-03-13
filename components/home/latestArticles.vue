<template>
  <div class="bg-[#F7F8FA]">

    <div class="mx-auto pb-16 px-5 max-w-7xl">
      <div class="flex justify-between items-center">
        <div class="flex items-center">
          <svg class="ml-2" xmlns="http://www.w3.org/2000/svg" width="18" height="24" viewBox="0 0 18 24">
            <defs>
              <style>.aarticles {
                fill: #2c0531;
              }

              .barticles {
                fill: #ffb508;
                opacity: 0.4;
              }</style>
            </defs>
            <path class="aarticles"
                  d="M103.5,0V6h6Zm.75,18h-7.5a.75.75,0,0,0,0,1.5h7.5a.75.75,0,0,0,0-1.5Zm0-3h-7.5a.75.75,0,1,0,0,1.5h7.5a.75.75,0,1,0,0-1.5Zm0-3h-7.5a.75.75,0,0,0,0,1.5h7.5a.75.75,0,0,0,0-1.5Z"
                  transform="translate(-91.5)"/>
            <path class="barticles"
                  d="M12,6V0H2.25A2.25,2.25,0,0,0,0,2.25v19.5A2.25,2.25,0,0,0,2.25,24h13.5A2.25,2.25,0,0,0,18,21.75V6Zm.75,13.5H5.25a.75.75,0,0,1,0-1.5h7.5a.75.75,0,0,1,0,1.5Zm0-3H5.25a.75.75,0,1,1,0-1.5h7.5a.75.75,0,1,1,0,1.5Zm0-3H5.25a.75.75,0,0,1,0-1.5h7.5a.75.75,0,0,1,0,1.5Z"/>
          </svg>
          <h3 class="font-bold text-2xl text-[#2C0531] underline decoration-4 decoration-[#FFB508] underline-offset-2">
            آخرین مقالات</h3>
        </div>
        <a href="/blog"
           class="px-4 py-2 block bg-[#E5E0E6] text-sm text-center rounded shadow-sm hover:text-gray-800 hover:bg-gray-100 hover:border-gray-300 hover:shadow">
          مشاهده همه
        </a>
      </div>
      <ul role="list" class="py-5 grid grid-cols-2 gap-8 sm:grid-cols-2 md:grid-cols-4">
        <li v-for="(article ,i) in articles.slice(0,4)" :key="i" class="col-span-1 items-center">
          <nuxt-link :to="`/blog/${article.slug}`" class="group relative">
            <img class="w-full max-h-56 block group-hover:opacity-60" :src='article.thumbnail'/>
            <div
              class="py-1.5 px-4 border border-black rounded absolute top-24 right-20 opacity-0 whitespace-nowrap text-sm group-hover:opacity-100">
              مشاهده مقاله
            </div>
          </nuxt-link>
          <div class="mt-4 font-medium text-center">
            {{ article.title }}
          </div>
        </li>

      </ul>
    </div>

  </div>
</template>

<script>
export default {
  name: "latestArticles",
  mounted() {
    this.$store.dispatch('latestArticles/getArticles')
  },

  computed: {
    articles() {
      return this.$store.getters['latestArticles/getArticles']
    },
  },
}
</script>
