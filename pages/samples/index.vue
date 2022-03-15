<template>
  <div>
    <main-header></main-header>
    <div class="bg-[#F7F8FA]">
      <div class="mx-auto px-5 max-w-7xl">
        <!-- BreadCrumbs -->
        <div class="px-4 py-2.5 flex text-sm text-[#100D14] rounded items-center bg-[#F0F0F5]">

          <nuxt-link to="" class="px-1">محصولات</nuxt-link>

          <svg class="font-bold text-[#100D14]" fill="black" width="10px" height="10px" viewBox="0 0 32 32"
               xmlns="http://www.w3.org/2000/svg">
            <path d="M 26 6 L 6 15.21875 L 6 16.78125 L 26 26 L 26 23.84375 L 9.46875 16 L 26 8.15625 Z"/>
          </svg>

          <nuxt-link to="" class="px-1">نمونه کارها</nuxt-link>

        </div>

        <div class="mt-5 py-4 px-4 w-full rounded bg-[#E4E4EB]">
          <h3 class="mr-2 font-bold underline decoration-4 decoration-[#FFB508] underline-offset-1">نمونه کارها
            </h3>
        </div>

        <ul role="list" class="py-5 grid grid-cols-2 gap-3 sm:grid-cols-2 md:grid-cols-4">
          <li v-for="(i ,portfolios) in portfolios" :key="portfolios" class="p-4 col-span-1 items-center bg-white rounded ">
            <a href="#" class=" group relative">
              <img class="group-hover:opacity-60 group-hover:bg-black"
                   :src='i.thumbnail' height="210"
                   width="280"/>
              <div
                class="py-3 px-5 border border-black absolute top-20 right-24 opacity-0 rounded whitespace-nowrap text-sm font-bold group-hover:opacity-100">
                مشاهده توضیحات
              </div>
              <nuxt-link :to="`/samples/${i.id}`" class="pt-4 font-medium group-hover:opacity-60">
                {{ i.name }}
              </nuxt-link>
            </a>

          </li>
        </ul>

        <div class="my-8 p-2 bg-[#F0F0F5]">
          <div @click="description.state = !description.state" class="flex p-4 items-center">
            <div class="ml-4 text-black font-bold text-sm underline decoration-4 decoration-[#FFB508] underline-offset-1">
              توضیحات
            </div>

            <div v-if="description.state" class="py-2 px-3 flex text-black items-center rounded-3xl bg-[#E4E4EB]">
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

          <div v-if="description.state" class="p-4 text-sm">
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
      </div>
    </div>

    <main-footer></main-footer>
  </div>
</template>

<script>
import mainHeader from '@/components/header/mainHeader';
import mainFooter from "~/components/footer/mainFooter";

export default {
  components:{
    mainHeader,
    mainFooter,
  },
  name: "index",
  data(){
    return{
      description: {
        state: false,
      }
    }
  },
  computed:{
    portfolios(){
      return this.$store.getters['portfolio/getPortfolios']
    }
  },
  mounted() {
    this.$store.dispatch('portfolio/getPortfolios')
  }
}
</script>

<style scoped>

</style>
