<template>
  <div class="bg-[#F7F8FA]">

    <div class="mx-auto px-5 max-w-7xl">
      <div class="pb-6 md:flex">
        <div v-for="(article ,i) in articles" :key="i" v-if="article.id===1"
             class="ml-3 relative mb-6 md:w-2/3 md:mb-0">
          <img class="w-full max-h-[31rem] block" :src='article.thumbnail' alt="#">
          <nuxt-link  :to="`/blog/${article.slug}`" class="pb-6 mr-6 absolute bottom-0 right-0">
            <p class="mb-2 px-3 py-1 inline-block text-sm text-[#282828] rounded bg-white">{{ tags(i) }}</p><h4
            class="mb-6 text-2xl font-medium text-white">{{ article.title }}</h4>
          </nuxt-link>
        </div>
        <div class="md:w-1/3">
          <div v-for="(article ,i) in articles" :key="i" v-if="article.id===2" class="pb-1 relative">
            <img class="pb-6 pr-3 w-full max-h-[16rem] block" :src='article.thumbnail' alt="#">
            <nuxt-link :to="`/blog/${article.slug}`" class="pb-6 mr-6 absolute bottom-0 right-0">
              <p class="mb-2 px-3 py-1 inline-block text-xs text-[#282828] rounded bg-white">{{ tags(i) }}</p>
              <h4 class="mb-6 text-lg text-white">{{ article.title }}</h4>
            </nuxt-link>
          </div>
          <div v-for="(article ,i) in articles" :key="i" v-if="article.id===3" class="pt-1 relative">
            <img class="pb-6 pr-3 w-full max-h-[16rem] block" :src='article.thumbnail' alt="#">
            <nuxt-link :to="`/blog/${article.slug}`" class="pb-6 mr-6 absolute bottom-0 right-0">
              <p class="mb-2 px-3 py-1 inline-block text-xs text-[#282828] rounded bg-white">{{ tags(i) }}</p>
              <h4 class="mb-6 text-lg text-white">{{ article.title }}</h4>
            </nuxt-link>
          </div>
        </div>
      </div>

      <div class="py-6 flex items-center">
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

      <div class="py-6">

        <div v-for="(i ,article) in articles" :key="article" class="p-6 md:flex group rounded hover:bg-white">
          <img class="pl-6 max-h-40 rounded md:w-1/4" :src='i.thumbnail' alt="#">
          <div class="md:flex-1">
            <nuxt-link :to="`/blog/${i.slug}`"  class="pb-3 text-lg font-medium group-hover:text-[#BA4B30]">
              {{i.title}}
            </nuxt-link>
            <div class="py-3">
              {{ i.body }}
            </div>
            <div class="flex items-center">
              <p class="px-3 py-1 inline-block text-xs text-[#282828] rounded bg-[#EAECF5]">{{ tags(i) }}</p>
              <p class="pr-8 inline-block text-xs text-[#606060]">{{ i.created_at }}</p>
            </div>
          </div>
        </div>
      </div>

      <nav id="pagination" class="py-6 text-center">
        <a href="#" class="inline-block">
          <svg class="rotate-180" xmlns="http://www.w3.org/2000/svg" width="8" height="12" viewBox="0 0 8 12">
            <defs>
              <style>.aprevious {
                fill: #606060;
              }</style>
            </defs>
            <path class="aprevious" d="M5.2,1.067a1,1,0,0,1,1.6,0l4,5.333A1,1,0,0,1,10,8H2a1,1,0,0,1-.8-1.6Z"
                  transform="translate(0 12) rotate(-90)"/>
          </svg>
        </a>

        <a href="#" class="active">1</a>
        <a href="#">2</a>
        <a href="#">3</a>
        <a href="#">4</a>
        <a href="#">5</a>
        <a href="#">6</a>

        <a href="#">
          <svg xmlns="http://www.w3.org/2000/svg" width="8" height="12" viewBox="0 0 8 12">
            <defs>
              <style>.anext {
                fill: #606060;
              }</style>
            </defs>
            <path class="anext" d="M5.2,1.067a1,1,0,0,1,1.6,0l4,5.333A1,1,0,0,1,10,8H2a1,1,0,0,1-.8-1.6Z"
                  transform="translate(0 12) rotate(-90)"/>
          </svg>
        </a>
      </nav>
    </div>

  </div>
</template>

<script>
export default {
  name: "blog1",

  mounted() {
    this.$store.dispatch('latestArticles/getArticles')
  },

  computed: {
    articles() {
      return this.$store.getters['latestArticles/getArticles']
    },
  },
  methods:{
    tags(i) {
      switch (i) {
        case 0 :
          return "Muriel Jaskolski"
          break;
        case 1 :
          return "Rosina Hackett"
          break;
        case 2 :
          return "Mr. Kamren Pfannerstill"
          break;

        case 3 :
          return "Dr. Dorcas Johnston PhD"
          break;

        case 4 :
          return "Norval Mitchell DVM"
          break;

      }
    }
  }
}
</script>
