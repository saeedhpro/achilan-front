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

        <nuxt-link to="" class="px-1">نمونه کار درب اتوماتیک اسلایدینگ تلسکوپی</nuxt-link>

      </div>


      <div id="start" class=" pt-6 flex">
        <div class="w-2/3">
          <img class="h-96 w-full block" :src=imgsrc>
        </div>
        <div class="mr-6 px-4 max-h-96 w-1/3 rounded bg-white overflow-auto">

          <div class="py-4 border-b font-bold">
            {{ description }}
          </div>
          <div class="py-4">
              <p class="text-sm text-[#606060]">نام پروژه</p>
              <p class="text-sm font-bold"> {{ names }}</p>
          </div>
          <div class="py-4">
              <p class="text-sm text-[#606060]">نظر کار فرما</p>
              <div class="px-2 py-1 border border-[#2E7D32] rounded text-xs"> {{ comments }}</div>
          </div>
          <div class="py-4">
            <p class="text-sm text-[#606060]">محصول مرتبط</p>
            <div class="px-2 py-1 flex items-center bg-[#F7F7F7] rounded text-xs">
            <img src="@/static/images/Sliding-Breakout-THB-open.png">
              <div class="pr-2 text-[#282828]">عنوان نمونه کار درب اتوماتیک اسلایدینگ تلسکوپی</div>
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

            <button class="ml-2 p-2 block bg-[#F7F8FA] rounded" @click="$refs.myVueperSlides.previous()">
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

            <button class="p-2 block bg-[#F7F8FA] rounded" @click="$refs.myVueperSlides.next()">
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
            <vueper-slide v-for="i in slides" :key="i.num">
              <template #content>
                <button @click="information(i)">
                  <a href="#">
                    <div class="p-4 rounded bg-white">
                      <img class="w-72 h-52 block" :src=i.image>
                      <div> {{ i.dec }}</div>
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

          <p class="px-1">دسته بندی ویدیو 1</p>

          <div class="flex">

            <button class="ml-2 p-2 block bg-[#F7F8FA] rounded" @click="$refs.myVueperSlides1.previous()">
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

            <button class="p-2 block bg-[#F7F8FA] rounded" @click="$refs.myVueperSlides1.next()">
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
            ref="myVueperSlides1">
            <vueper-slide v-for="j in slides1" :key="j.num">
              <template #content>
                <button @click="information(j)">
                  <a href="#start">
                    <div class="p-4 rounded bg-white">
                      <img class="w-72 h-52 block" :src=j.image>
                      <div> {{ j.dec }}</div>
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
            ref="myVueperSlides2">
            <vueper-slide v-for="h in slides2" :key="h.num">
              <template #content>
                <button @click="information(h)">
                  <a href="#">
                    <div class="p-4 rounded bg-white">
                      <img class="w-72 h-52 block" :src=h.image>
                      <div> {{ h.dec }}</div>
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
  name: "samplesVideo",
  components: {
    VueperSlides,
    VueperSlide,

  },
  data() {
    return {

      state: false,

      imgsrc: "https://picsum.photos/200/300?random=10",
      names: "درب اتوماتیک برج نور تهران | فاز اول",
      comments: "تجربه‌ای بسیار حرفه‌ای و عالی با یک تیم درجه یک و حرفه‌ای بود. درب‌ها به همان صورتی که مد نظر بود، پیاده سازی شد و نتیجه‌ی بسیار عالی رقم خورد",
      description: "عنوان نمونه کار درب اتوماتیک اسلایدینگ تلسکوپی",

      slides: [
        {
          image: "https://picsum.photos/200/300?random=2",
          dec: "عنوان نمونه کار درب اتوماتیک اسلایدینگ تلسکوپی",
          num: 1,
          name: "درب اتوماتیک برج نور تهران | فاز اول",
          comment: "تجربه‌ای بسیار حرفه‌ای و عالی با یک تیم درجه یک و حرفه‌ای بود. درب‌ها به همان صورتی که مد نظر بود، پیاده سازی شد و نتیجه‌ی بسیار عالی رقم خورد",
        },
        {
          image: "https://picsum.photos/200/300?random=13",
          dec: "عنوان نمونه کار درب اتوماتیک اسلایدینگ تلسکوپی",
          num: 2,
          name: "درب اتوماتیک برج نور تهران | فاز اول",
          comment: "تجربه‌ای بسیار حرفه‌ای و عالی با یک تیم درجه یک و حرفه‌ای بود. درب‌ها به همان صورتی که مد نظر بود، پیاده سازی شد و نتیجه‌ی بسیار عالی رقم خورد",
        },
        {
          image: "https://picsum.photos/200/300?random=14",
          dec: "عنوان نمونه کار درب اتوماتیک اسلایدینگ تلسکوپی",
          num: 3,
          name: "درب اتوماتیک برج نور تهران | فاز اول",
          comment: "تجربه‌ای بسیار حرفه‌ای و عالی با یک تیم درجه یک و حرفه‌ای بود. درب‌ها به همان صورتی که مد نظر بود، پیاده سازی شد و نتیجه‌ی بسیار عالی رقم خورد",
        },
        {
          image: "https://picsum.photos/200/300?random=5",
          dec: "عنوان نمونه کار درب اتوماتیک اسلایدینگ تلسکوپی",
          num: 4,
          name: "درب اتوماتیک برج نور تهران | فاز اول",
          comment: "تجربه‌ای بسیار حرفه‌ای و عالی با یک تیم درجه یک و حرفه‌ای بود. درب‌ها به همان صورتی که مد نظر بود، پیاده سازی شد و نتیجه‌ی بسیار عالی رقم خورد",
        },
        {
          image: "https://picsum.photos/200/300?random=13",
          dec: "عنوان نمونه کار درب اتوماتیک اسلایدینگ تلسکوپی",
          num: 5,
          name: "درب اتوماتیک برج نور تهران | فاز اول",
          comment: "تجربه‌ای بسیار حرفه‌ای و عالی با یک تیم درجه یک و حرفه‌ای بود. درب‌ها به همان صورتی که مد نظر بود، پیاده سازی شد و نتیجه‌ی بسیار عالی رقم خورد",
        },
        {
          image: "https://picsum.photos/200/300?random=14",
          dec: "عنوان نمونه کار درب اتوماتیک اسلایدینگ تلسکوپی",
          num: 6,
          name: "درب اتوماتیک برج نور تهران | فاز اول",
          comment: "تجربه‌ای بسیار حرفه‌ای و عالی با یک تیم درجه یک و حرفه‌ای بود. درب‌ها به همان صورتی که مد نظر بود، پیاده سازی شد و نتیجه‌ی بسیار عالی رقم خورد",
        },
        {
          image: "https://picsum.photos/200/300?random=15",
          dec: "عنوان نمونه کار درب اتوماتیک اسلایدینگ تلسکوپی",
          num: 7,
          name: "درب اتوماتیک برج نور تهران | فاز اول",
          comment: "تجربه‌ای بسیار حرفه‌ای و عالی با یک تیم درجه یک و حرفه‌ای بود. درب‌ها به همان صورتی که مد نظر بود، پیاده سازی شد و نتیجه‌ی بسیار عالی رقم خورد",
        },
        {
          image: "https://picsum.photos/200/300?random=16",
          dec: "عنوان نمونه کار درب اتوماتیک اسلایدینگ تلسکوپی",
          num: 8,
          name: "درب اتوماتیک برج نور تهران | فاز اول",
          comment: "تجربه‌ای بسیار حرفه‌ای و عالی با یک تیم درجه یک و حرفه‌ای بود. درب‌ها به همان صورتی که مد نظر بود، پیاده سازی شد و نتیجه‌ی بسیار عالی رقم خورد",
        },
        {
          image: "https://picsum.photos/200/300?random=14",
          dec: "عنوان نمونه کار درب اتوماتیک اسلایدینگ تلسکوپی",
          num: 9,
          name: "درب اتوماتیک برج نور تهران | فاز اول",
          comment: "تجربه‌ای بسیار حرفه‌ای و عالی با یک تیم درجه یک و حرفه‌ای بود. درب‌ها به همان صورتی که مد نظر بود، پیاده سازی شد و نتیجه‌ی بسیار عالی رقم خورد",
        },
        {
          image: "https://picsum.photos/200/300?random=15",
          dec: "عنوان نمونه کار درب اتوماتیک اسلایدینگ تلسکوپی",
          num: 10,
          name: "درب اتوماتیک برج نور تهران | فاز اول",
          comment: "تجربه‌ای بسیار حرفه‌ای و عالی با یک تیم درجه یک و حرفه‌ای بود. درب‌ها به همان صورتی که مد نظر بود، پیاده سازی شد و نتیجه‌ی بسیار عالی رقم خورد",
        },
        {
          image: "https://picsum.photos/200/300?random=16",
          dec: "عنوان نمونه کار درب اتوماتیک اسلایدینگ تلسکوپی",
          num: 11,
          name: "درب اتوماتیک برج نور تهران | فاز اول",
          comment: "تجربه‌ای بسیار حرفه‌ای و عالی با یک تیم درجه یک و حرفه‌ای بود. درب‌ها به همان صورتی که مد نظر بود، پیاده سازی شد و نتیجه‌ی بسیار عالی رقم خورد",
        },
      ],

      slides1: [
        {
          image: "https://picsum.photos/200/300?random=1",
          dec: "عنوان نمونه کار درب اتوماتیک اسلایدینگ تلسکوپی",
          num: 1,
          name: "درب اتوماتیک برج نور تهران | فاز اول",
          comment: "تجربه‌ای بسیار حرفه‌ای و عالی با یک تیم درجه یک و حرفه‌ای بود. درب‌ها به همان صورتی که مد نظر بود، پیاده سازی شد و نتیجه‌ی بسیار عالی رقم خورد",
        },
        {
          image: "https://picsum.photos/200/300?random=10",
          dec: "عنوان نمونه کار درب اتوماتیک اسلایدینگ تلسکوپی",
          num: 2,
          name: "درب اتوماتیک برج نور تهران | فاز اول",
          comment: "تجربه‌ای بسیار حرفه‌ای و عالی با یک تیم درجه یک و حرفه‌ای بود. درب‌ها به همان صورتی که مد نظر بود، پیاده سازی شد و نتیجه‌ی بسیار عالی رقم خورد",
        },
        {
          image: "https://picsum.photos/200/300?random=11",
          dec: "عنوان نمونه کار درب اتوماتیک اسلایدینگ تلسکوپی",
          num: 3,
          name: "درب اتوماتیک برج نور تهران | فاز اول",
          comment: "تجربه‌ای بسیار حرفه‌ای و عالی با یک تیم درجه یک و حرفه‌ای بود. درب‌ها به همان صورتی که مد نظر بود، پیاده سازی شد و نتیجه‌ی بسیار عالی رقم خورد",
        },
        {
          image: "https://picsum.photos/200/300?random=12",
          dec: "عنوان نمونه کار درب اتوماتیک اسلایدینگ تلسکوپی",
          num: 4,
          name: "درب اتوماتیک برج نور تهران | فاز اول",
          comment: "تجربه‌ای بسیار حرفه‌ای و عالی با یک تیم درجه یک و حرفه‌ای بود. درب‌ها به همان صورتی که مد نظر بود، پیاده سازی شد و نتیجه‌ی بسیار عالی رقم خورد",
        },
        {
          image: "https://picsum.photos/200/300?random=13",
          dec: "عنوان نمونه کار درب اتوماتیک اسلایدینگ تلسکوپی",
          num: 5,
          name: "درب اتوماتیک برج نور تهران | فاز اول",
          comment: "تجربه‌ای بسیار حرفه‌ای و عالی با یک تیم درجه یک و حرفه‌ای بود. درب‌ها به همان صورتی که مد نظر بود، پیاده سازی شد و نتیجه‌ی بسیار عالی رقم خورد",
        },
        {
          image: "https://picsum.photos/200/300?random=14",
          dec: "عنوان نمونه کار درب اتوماتیک اسلایدینگ تلسکوپی",
          num: 6,
          name: "درب اتوماتیک برج نور تهران | فاز اول",
          comment: "تجربه‌ای بسیار حرفه‌ای و عالی با یک تیم درجه یک و حرفه‌ای بود. درب‌ها به همان صورتی که مد نظر بود، پیاده سازی شد و نتیجه‌ی بسیار عالی رقم خورد",
        },
        {
          image: "https://picsum.photos/200/300?random=15",
          dec: "عنوان نمونه کار درب اتوماتیک اسلایدینگ تلسکوپی",
          num: 7,
          name: "درب اتوماتیک برج نور تهران | فاز اول",
          comment: "تجربه‌ای بسیار حرفه‌ای و عالی با یک تیم درجه یک و حرفه‌ای بود. درب‌ها به همان صورتی که مد نظر بود، پیاده سازی شد و نتیجه‌ی بسیار عالی رقم خورد",
        },
        {
          image: "https://picsum.photos/200/300?random=16",
          dec: "عنوان نمونه کار درب اتوماتیک اسلایدینگ تلسکوپی",
          num: 8,
          name: "درب اتوماتیک برج نور تهران | فاز اول",
          comment: "تجربه‌ای بسیار حرفه‌ای و عالی با یک تیم درجه یک و حرفه‌ای بود. درب‌ها به همان صورتی که مد نظر بود، پیاده سازی شد و نتیجه‌ی بسیار عالی رقم خورد",
        },
      ],

      slides2: [
        {
          image: "https://picsum.photos/200/300?random=9",
          dec: "عنوان نمونه کار درب اتوماتیک اسلایدینگ تلسکوپی",
          num: 1,
          name: "درب اتوماتیک برج نور تهران | فاز اول",
          comment: "تجربه‌ای بسیار حرفه‌ای و عالی با یک تیم درجه یک و حرفه‌ای بود. درب‌ها به همان صورتی که مد نظر بود، پیاده سازی شد و نتیجه‌ی بسیار عالی رقم خورد",
        },
        {
          image: "https://picsum.photos/200/300?random=10",
          dec: "عنوان نمونه کار درب اتوماتیک اسلایدینگ تلسکوپی",
          num: 2,
          name: "درب اتوماتیک برج نور تهران | فاز اول",
          comment: "تجربه‌ای بسیار حرفه‌ای و عالی با یک تیم درجه یک و حرفه‌ای بود. درب‌ها به همان صورتی که مد نظر بود، پیاده سازی شد و نتیجه‌ی بسیار عالی رقم خورد",
        },
        {
          image: "https://picsum.photos/200/300?random=11",
          dec: "عنوان نمونه کار درب اتوماتیک اسلایدینگ تلسکوپی",
          num: 3,
          name: "درب اتوماتیک برج نور تهران | فاز اول",
          comment: "تجربه‌ای بسیار حرفه‌ای و عالی با یک تیم درجه یک و حرفه‌ای بود. درب‌ها به همان صورتی که مد نظر بود، پیاده سازی شد و نتیجه‌ی بسیار عالی رقم خورد",
        },
        {
          image: "https://picsum.photos/200/300?random=12",
          dec: "عنوان نمونه کار درب اتوماتیک اسلایدینگ تلسکوپی",
          num: 4,
          name: "درب اتوماتیک برج نور تهران | فاز اول",
          comment: "تجربه‌ای بسیار حرفه‌ای و عالی با یک تیم درجه یک و حرفه‌ای بود. درب‌ها به همان صورتی که مد نظر بود، پیاده سازی شد و نتیجه‌ی بسیار عالی رقم خورد",
        },
        {
          image: "https://picsum.photos/200/300?random=13",
          dec: "عنوان نمونه کار درب اتوماتیک اسلایدینگ تلسکوپی",
          num: 5,
          name: "درب اتوماتیک برج نور تهران | فاز اول",
          comment: "تجربه‌ای بسیار حرفه‌ای و عالی با یک تیم درجه یک و حرفه‌ای بود. درب‌ها به همان صورتی که مد نظر بود، پیاده سازی شد و نتیجه‌ی بسیار عالی رقم خورد",
        },
        {
          image: "https://picsum.photos/200/300?random=14",
          dec: "عنوان نمونه کار درب اتوماتیک اسلایدینگ تلسکوپی",
          num: 6,
          name: "درب اتوماتیک برج نور تهران | فاز اول",
          comment: "تجربه‌ای بسیار حرفه‌ای و عالی با یک تیم درجه یک و حرفه‌ای بود. درب‌ها به همان صورتی که مد نظر بود، پیاده سازی شد و نتیجه‌ی بسیار عالی رقم خورد",
        },
        {
          image: "https://picsum.photos/200/300?random=15",
          dec: "عنوان نمونه کار درب اتوماتیک اسلایدینگ تلسکوپی",
          num: 7,
          name: "درب اتوماتیک برج نور تهران | فاز اول",
          comment: "تجربه‌ای بسیار حرفه‌ای و عالی با یک تیم درجه یک و حرفه‌ای بود. درب‌ها به همان صورتی که مد نظر بود، پیاده سازی شد و نتیجه‌ی بسیار عالی رقم خورد",
        },
        {
          image: "https://picsum.photos/200/300?random=16",
          dec: "عنوان نمونه کار درب اتوماتیک اسلایدینگ تلسکوپی",
          num: 8,
          name: "درب اتوماتیک برج نور تهران | فاز اول",
          comment: "تجربه‌ای بسیار حرفه‌ای و عالی با یک تیم درجه یک و حرفه‌ای بود. درب‌ها به همان صورتی که مد نظر بود، پیاده سازی شد و نتیجه‌ی بسیار عالی رقم خورد",
        },
      ],
    }
  },
  methods: {
    information(h) {
      this.imgsrc = h.image
      this.names = h.name
      this.comments = h.comment
      this.description = h.dec

    }
  }
}
</script>

<style scoped>

</style>
