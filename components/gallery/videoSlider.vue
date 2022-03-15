<!--<template>-->
<!--  <div>-->
<!--    <div class="px-4 py-3 flex text-sm text-[#100D14] rounded items-center justify-between bg-[#E4E4EB]">-->

<!--      <p class="px-1">دسته بندی ویدیو 1</p>-->

<!--      <div class="flex">-->

<!--        <button class="ml-2 p-2 block bg-[#F7F8FA] rounded" @click="$refs.myVueperSlides1.previous()">-->
<!--          <svg class="rotate-180" xmlns="http://www.w3.org/2000/svg" width="8" height="12" viewBox="0 0 8 12">-->
<!--            <defs>-->
<!--              <style>.anext {-->
<!--                fill: #424242;-->
<!--              }</style>-->
<!--            </defs>-->
<!--            <path class="anext" d="M5.2,1.067a1,1,0,0,1,1.6,0l4,5.333A1,1,0,0,1,10,8H2a1,1,0,0,1-.8-1.6Z"-->
<!--                  transform="translate(0 12) rotate(-90)"/>-->
<!--          </svg>-->
<!--        </button>-->

<!--        <button class="p-2 block bg-[#F7F8FA] rounded" @click="$refs.myVueperSlides1.next()">-->
<!--          <svg xmlns="http://www.w3.org/2000/svg" width="8" height="12" viewBox="0 0 8 12">-->
<!--            <defs>-->
<!--              <style>.apre {-->
<!--                fill: #424242;-->
<!--              }</style>-->
<!--            </defs>-->
<!--            <path class="apre" d="M5.2,1.067a1,1,0,0,1,1.6,0l4,5.333A1,1,0,0,1,10,8H2a1,1,0,0,1-.8-1.6Z"-->
<!--                  transform="translate(0 12) rotate(-90)"/>-->
<!--          </svg>-->
<!--        </button>-->

<!--      </div>-->

<!--    </div>-->

<!--    <div class="pt-6">-->
<!--      <vueper-slides-->
<!--        class="no-shadow"-->
<!--        :visible-slides="4"-->
<!--        slide-multiple-->
<!--        :gap="2"-->
<!--        :rtl="true"-->
<!--        :touchable="false"-->
<!--        :bullets="false"-->
<!--        :arrows="false"-->
<!--        :breakpoints="{ 800: { visibleSlides: 2, slideMultiple: 2 } }"-->
<!--        ref="myVueperSlides1">-->
<!--        <vueper-slide v-for="j in slides1" :key="j.num">-->
<!--          <template #content>-->
<!--            <button @click="information(j)">-->
<!--              <a href="#">-->
<!--                <div class="p-4 rounded bg-white">-->
<!--                  <img class="w-72 h-52 block" :src=j.image alt="">-->
<!--                  <div> {{ j.dec }}</div>-->
<!--                </div>-->
<!--              </a>-->
<!--            </button>-->
<!--          </template>-->
<!--        </vueper-slide>-->
<!--      </vueper-slides>-->
<!--    </div>-->
<!--  </div>-->
<!--</template>-->

<!--<script>-->
<!--import {VueperSlides, VueperSlide} from 'vueperslides'-->

<!--export default {-->
<!--  name: "videoSlider",-->
<!--  components: {-->
<!--    VueperSlides,-->
<!--    VueperSlide,-->

<!--  },-->

<!--  props:['slides1],-->

<!--  data(){-->
<!--    return{-->
<!--      // slides1: [-->
<!--      //   {-->
<!--      //     image: "https://picsum.photos/200/300?random=1",-->
<!--      //     dec: "عنوان نمونه کار درب اتوماتیک اسلایدینگ تلسکوپی",-->
<!--      //     num: 1,-->
<!--      //     date: "۱۴۰۰/۱۲/۲۰",-->
<!--      //     time: "۱۴:۳۳",-->
<!--      //   },-->
<!--      //   {-->
<!--      //     image: "https://picsum.photos/200/300?random=10",-->
<!--      //     dec: "عنوان نمونه کار درب اتوماتیک اسلایدینگ تلسکوپی",-->
<!--      //     num: 2,-->
<!--      //     date: "۱۴۰۰/۱۲/۲۰",-->
<!--      //     time: "۱۴:۳۳",-->
<!--      //   },-->
<!--      //   {-->
<!--      //     image: "https://picsum.photos/200/300?random=11",-->
<!--      //     dec: "عنوان نمونه کار درب اتوماتیک اسلایدینگ تلسکوپی",-->
<!--      //     num: 3,-->
<!--      //     date: "۱۴۰۰/۱۲/۲۰",-->
<!--      //     time: "۱۴:۳۳",-->
<!--      //   },-->
<!--      //   {-->
<!--      //     image: "https://picsum.photos/200/300?random=12",-->
<!--      //     dec: "عنوان نمونه کار درب اتوماتیک اسلایدینگ تلسکوپی",-->
<!--      //     num: 4,-->
<!--      //     date: "۱۴۰۰/۱۲/۲۰",-->
<!--      //     time: "۱۴:۳۳",-->
<!--      //   },-->
<!--      //   {-->
<!--      //     image: "https://picsum.photos/200/300?random=13",-->
<!--      //     dec: "عنوان نمونه کار درب اتوماتیک اسلایدینگ تلسکوپی",-->
<!--      //     num: 5,-->
<!--      //     date: "۱۴۰۰/۱۲/۲۰",-->
<!--      //     time: "۱۴:۳۳",-->
<!--      //   },-->
<!--      //   {-->
<!--      //     image: "https://picsum.photos/200/300?random=14",-->
<!--      //     dec: "عنوان نمونه کار درب اتوماتیک اسلایدینگ تلسکوپی",-->
<!--      //     num: 6,-->
<!--      //     date: "۱۴۰۰/۱۲/۲۰",-->
<!--      //     time: "۱۴:۳۳",-->
<!--      //   },-->
<!--      //   {-->
<!--      //     image: "https://picsum.photos/200/300?random=15",-->
<!--      //     dec: "عنوان نمونه کار درب اتوماتیک اسلایدینگ تلسکوپی",-->
<!--      //     num: 7,-->
<!--      //     date: "۱۴۰۰/۱۲/۲۰",-->
<!--      //     time: "۱۴:۳۳",-->
<!--      //   },-->
<!--      //   {-->
<!--      //     image: "https://picsum.photos/200/300?random=16",-->
<!--      //     dec: "عنوان نمونه کار درب اتوماتیک اسلایدینگ تلسکوپی",-->
<!--      //     num: 8,-->
<!--      //     date: "۱۴۰۰/۱۲/۲۰",-->
<!--      //     time: "۱۴:۳۳",-->
<!--      //   },-->
<!--      // ],-->
<!--    }-->
<!--  },-->

<!--  methods: {-->
<!--    information(h) {-->
<!--      this.imgsrc = h.image-->
<!--      this.dates = h.date-->
<!--      this.times = h.time-->
<!--      this.description = h.dec-->

<!--    }-->
<!--  }-->
<!--}-->
<!--</script>-->

<!--<style scoped>-->


<!--</style>-->
