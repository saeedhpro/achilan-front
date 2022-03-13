<template>
  <div class="bg-[#F7F8FA]">

    <div class="mx-auto px-5 max-w-7xl">
      <!-- BreadCrumbs -->
      <div class="px-4 py-2.5 flex text-sm text-[#100D14] rounded items-center bg-[#F0F0F5]">

        <nuxt-link to="" class="px-1">گالری ویدیو</nuxt-link>

        <svg class="font-bold text-[#100D14]" fill="black" width="10px" height="10px" viewBox="0 0 32 32"
             xmlns="http://www.w3.org/2000/svg">
          <path d="M 26 6 L 6 15.21875 L 6 16.78125 L 26 26 L 26 23.84375 L 9.46875 16 L 26 8.15625 Z"/>
        </svg>

        <nuxt-link to="" class="px-1">عنوان ویدیو</nuxt-link>

      </div>


      <div id="start" class=" pt-6 flex">
        <div class="w-2/3">
<!--          <img class="h-96 w-full block" :src=imgsrc>-->
          <video class="h-96 w-full block" controls v-if="video">
            <source :src="video" type="video/mp4" >
          </video>
          <video class="h-96 w-full block" controls v-else>
            <source :src="video" type="video/mp4" >
          </video>
        </div>

        <div class="mr-6 px-4 max-h-64 w-1/3 rounded bg-white overflow-auto">
          <div class="py-4 border-b font-bold">
            {{ description }}
          </div>
          <div class="py-4 flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="23.958" height="24" viewBox="0 0 23.958 24">
              <defs>
                <style>.aclock {
                  fill: #d7d9e0;
                }</style>
              </defs>
              <g transform="translate(0.9)">
                <g transform="translate(-0.9)">
                  <path class="aclock"
                        d="M12.267,12.188V7.125a1.125,1.125,0,0,0-2.25,0V12.75a1.125,1.125,0,0,0,.45.9l3,2.25a1.014,1.014,0,0,0,.633.225,1.125,1.125,0,0,0,.676-2.024ZM11.1,0A12,12,0,1,0,23.058,12,12,12,0,0,0,11.1,0Zm.042,21.75A9.75,9.75,0,1,1,20.892,12,9.761,9.761,0,0,1,11.142,21.75Z"
                        transform="translate(0.9)"/>
                </g>
              </g>
            </svg>
            <div class="pr-2">
              <p class="text-sm text-[#606060]">مدت ویدیو</p>
              <p class="text-sm"> {{ times }}</p>
            </div>
          </div>
          <div class="py-4 flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="21" height="24" viewBox="0 0 21 24">
              <defs>
                <style>.adate {
                  fill: #d7d9e0;
                }</style>
              </defs>
              <path class="adate"
                    d="M18,3H16.125V1.125A1.117,1.117,0,0,0,15.042,0a1.191,1.191,0,0,0-1.167,1.125V3H7.125V1.125a1.125,1.125,0,0,0-2.25,0V3H3A3,3,0,0,0,0,6V21a3,3,0,0,0,3,3H18a3,3,0,0,0,3-3V6A3,3,0,0,0,18,3Zm.75,18a.751.751,0,0,1-.75.75H3A.751.751,0,0,1,2.25,21V9h16.5ZM5.25,18h4.5a.755.755,0,0,0,.75-.75v-4.5A.755.755,0,0,0,9.75,12H5.25a.758.758,0,0,0-.75.75v4.5A.755.755,0,0,0,5.25,18Z"/>
            </svg>
            <div class="pr-2">
              <p class="text-sm text-[#606060]">بارگزاری در</p>
              <p class="text-sm"> {{ dates }}</p>
            </div>
          </div>

        </div>

      </div>

      <div class="my-8 p-2 bg-[#F0F0F5] rounded">
        <div @click="state = !state" class="flex p-4 items-center">
          <div class="ml-4 text-black font-bold text-sm underline decoration-4 decoration-[#FFB508] underline-offset-1">
            توضیحات
          </div>

          <div v-if="state" class="py-2 px-3 flex text-black items-center rounded-3xl bg-[#E4E4EB]">
            <p class="pl-1 text-sm">کمتر</p>
            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="2" viewBox="0 0 12 1.385">
              <defs>
                <style>.aminus {
                  fill: #282828;
                }</style>
              </defs>
              <g transform="translate(-16 -232)">
                <g transform="translate(16 232)">
                  <path class="aminus"
                        d="M28,232.692a.691.691,0,0,1-.692.692H16.692a.692.692,0,1,1,0-1.385H27.308A.692.692,0,0,1,28,232.692Z"
                        transform="translate(-16 -232)"/>
                </g>
              </g>
            </svg>
          </div>

          <div v-else class="py-2 px-3 flex text-black items-center rounded-3xl bg-[#E4E4EB]">
            <p class="pl-1 text-sm">بیشتر</p>
            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12">
              <defs>
                <style>.aplus {
                  fill: #282828;
                }</style>
              </defs>
              <g transform="translate(-16 -48.01)">
                <g transform="translate(16 48.01)">
                  <path class="aplus"
                        d="M28,54.01a.691.691,0,0,1-.692.692H22.692v4.615a.692.692,0,1,1-1.385,0V54.7H16.692a.692.692,0,1,1,0-1.385h4.615V48.7a.692.692,0,0,1,1.385,0v4.615h4.615A.692.692,0,0,1,28,54.01Z"
                        transform="translate(-16 -48.01)"/>
                </g>
              </g>
            </svg>
          </div>

        </div>

        <hr class="mx-4 text-[#DADAE0]">

        <div v-if="state" class="p-4 text-sm">
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون
          بلکه
          روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف
          بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان
          را
          می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در
          زبان
          فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به
          پایان
          رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد
          استفاده قرار گیرد.لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک
          است،
          چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و
          کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت
          فراوان جامعه و متخصصان را می طلبد
        </div>
        <div v-else class="p-4 text-sm">
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون
          بلکه
          روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف
          بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان
          را
          می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در
          زبان
          فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شـ
        </div>
      </div>

      <div class="mt-5 mb-8 py-4 px-4 w-full flex justify-between rounded items-center bg-[#E4E4EB]">
        <div class="px-4 flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="13.333" viewBox="0 0 20 13.333">
            <defs>
              <style>.avideo, .bvideo {
                fill: #2c0531;
              }

              .bvideo {
                opacity: 0.4;
              }</style>
            </defs>
            <g transform="translate(0 -64)">
              <g transform="translate(0 64)">
                <path class="avideo"
                      d="M421.556,97.092v8.92a1.113,1.113,0,0,1-1.75.9L416,104.286V98.821l3.806-2.624A1.113,1.113,0,0,1,421.556,97.092Z"
                      transform="translate(-401.556 -94.887)"/>
                <path class="bvideo"
                      d="M13.333,65.667v10a1.667,1.667,0,0,1-1.667,1.667h-10A1.667,1.667,0,0,1,0,75.667v-10A1.667,1.667,0,0,1,1.667,64h10A1.667,1.667,0,0,1,13.333,65.667Z"
                      transform="translate(0 -64)"/>
              </g>
            </g>
          </svg>
          <h3 class="mr-2 font-bold underline decoration-4 text-[#282828] decoration-[#FFB508] underline-offset-1">گالری
            ویدیو</h3>
        </div>
        <p class="px-3 py-1 bg-[#F7F8FA] text-sm text-center rounded shadow-sm">
          73 ویدیو
        </p>
      </div>

      <div>
        <div class="px-4 py-3 flex text-sm text-[#100D14] rounded items-center justify-between bg-[#E4E4EB]">

          <p class="px-1">دسته بندی ویدیو 1</p>

          <div class="flex">

            <button class="ml-2 p-2 block bg-[#F7F8FA] rounded" @click="$refs.myVueperSlides2.next()">
              <svg class="rotate-180" xmlns="http://www.w3.org/2000/svg" width="8" height="12" viewBox="0 0 8 12">
                <defs>
                  <style>.anext {
                    fill: #424242;
                  }</style>
                </defs>
                <path class="anext" d="M5.2,1.067a1,1,0,0,1,1.6,0l4,5.333A1,1,0,0,1,10,8H2a1,1,0,0,1-.8-1.6Z"
                      transform="translate(0 12) rotate(-90)"/>
              </svg>
            </button>

            <button class="p-2 block bg-[#F7F8FA] rounded" @click="$refs.myVueperSlides2.previous()">
              <svg xmlns="http://www.w3.org/2000/svg" width="8" height="12" viewBox="0 0 8 12">
                <defs>
                  <style>.apre {
                    fill: #424242;
                  }</style>
                </defs>
                <path class="apre" d="M5.2,1.067a1,1,0,0,1,1.6,0l4,5.333A1,1,0,0,1,10,8H2a1,1,0,0,1-.8-1.6Z"
                      transform="translate(0 12) rotate(-90)"/>
              </svg>
            </button>

          </div>

        </div>

        <div class="pt-6">

          <vueper-slides
            class="no-shadow"
            :visible-slides="4"
            slide-multiple
            :gap="2"
            :rtl="true"
            :touchable="false"
            :bullets="false"
            :arrows="false"
            :breakpoints="{ 800: { visibleSlides: 2, slideMultiple: 2 } }"
            ref="myVueperSlides">
            <vueper-slide v-for="i in videos" :key="i">
              <template #content>
                <button @click="information(i)">
                  <a href="#">
                    <div class="p-4 rounded bg-white">
<!--                      <img class="w-72 h-52 block" :src=i.image>-->
<!--                      <div> {{ i.dec }}</div>-->
<!--                      <video-player class="w-72 h-52 block" :src="i.url"/>-->
                      <video class="w-72 h-52 block" controls>
                        <source :src="i.url" type="video/mp4">
                      </video>
                      <div> {{ i.title }}</div>
                    </div>
                  </a>
                </button>
              </template>
            </vueper-slide>
          </vueper-slides>

        </div>
      </div>

      <div class="-mt-10">
        <div class="px-4 py-3 flex text-sm text-[#100D14] rounded items-center justify-between bg-[#E4E4EB]">

          <p class="px-1">نمونه کار ها</p>

          <div class="flex">

            <button class="ml-2 p-2 block bg-[#F7F8FA] rounded" @click="$refs.myVueperSlides2.next()">
              <svg class="rotate-180" xmlns="http://www.w3.org/2000/svg" width="8" height="12" viewBox="0 0 8 12">
                <defs>
                  <style>.anext {
                    fill: #424242;
                  }</style>
                </defs>
                <path class="anext" d="M5.2,1.067a1,1,0,0,1,1.6,0l4,5.333A1,1,0,0,1,10,8H2a1,1,0,0,1-.8-1.6Z"
                      transform="translate(0 12) rotate(-90)"/>
              </svg>
            </button>

            <button class="p-2 block bg-[#F7F8FA] rounded" @click="$refs.myVueperSlides2.previous()">
              <svg xmlns="http://www.w3.org/2000/svg" width="8" height="12" viewBox="0 0 8 12">
                <defs>
                  <style>.apre {
                    fill: #424242;
                  }</style>
                </defs>
                <path class="apre" d="M5.2,1.067a1,1,0,0,1,1.6,0l4,5.333A1,1,0,0,1,10,8H2a1,1,0,0,1-.8-1.6Z"
                      transform="translate(0 12) rotate(-90)"/>
              </svg>
            </button>

          </div>

        </div>

        <div>

          <vueper-slides
            class="no-shadow"
            :visible-slides="4"
            slide-multiple
            :gap="2"
            :rtl="true"
            :touchable="false"
            :bullets="false"
            :arrows="false"
            :breakpoints="{ 800: { visibleSlides: 2, slideMultiple: 2 } }"
            ref="myVueperSlides2">
            <vueper-slide v-for="h in portfolios" :key="h" style="display: flex;flex-wrap: wrap">
              <template #content>
                <button @click="info(h)">
                  <a href="#">
                    <div class="p-4 rounded bg-white">
                      <img class="w-72 h-52 block" :src="h.images[0]">
<!--                      <video-player class="w-72 h-52 block" :src="h.url"/>-->
                      <div> {{ h.name }}</div>
                    </div>
                  </a>
                </button>
              </template>
            </vueper-slide>
          </vueper-slides>

        </div>
      </div>

    </div>

  </div>
</template>

<script>
import {VueperSlides, VueperSlide} from 'vueperslides';

export default {
  name: "videoGallery",
  components: {
    VueperSlides,
    VueperSlide,

  },
  data() {
    return {

      state: false,
      video:null,
      imgsrc: "https://picsum.photos/200/300?random=10",
      dates: "۱۴۰۰/۱۲/۲۰",
      times: "۱۴:۳۳",
      description: "عنوان نمونه کار درب اتوماتیک اسلایدینگ تلسکوپی",
    }
  },
  methods: {
    information(h) {
      this.video = null
      setTimeout(() =>{
        this.video = h.url
        this.title = h.title
        this.description = h.description
        this.times = h.time
      }, 200 )
      this.times = h.time
    },
    info(h) {
      this.video = null
      setTimeout(() =>{
        this.video = h.url
        this.title = h.title
        this.description = h.description
        this.times = h.time
      }, 200 )
      this.times = h.time
    }
  },

  mounted() {
    this.$store.dispatch('video/getVideos')
    this.$store.dispatch('portfolio/getPortfolios')
  },

  computed: {
    videos() {
      return this.$store.getters['video/getVideos']
    },
    portfolios(){
      return this.$store.getters['portfolio/getPortfolios']
    }
  },
}
</script>
