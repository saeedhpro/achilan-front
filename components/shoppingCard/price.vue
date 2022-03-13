<template>
  <div class="bg-[#F7F8FA]">

    <div v-if="shop" class="mx-auto pb-8 px-5 max-w-7xl md:pb-16">
      <!-- BreadCrumbs -->
      <div class="mb-6 px-4 py-2.5 flex text-sm text-[#100D14] rounded items-center bg-[#F0F0F5]">

        <nuxt-link to="" class="px-1">آچیلان دُر</nuxt-link>

        <svg class="font-bold text-[#100D14]" fill="black" width="10px" height="10px" viewBox="0 0 32 32"
             xmlns="http://www.w3.org/2000/svg">
          <path d="M 26 6 L 6 15.21875 L 6 16.78125 L 26 26 L 26 23.84375 L 9.46875 16 L 26 8.15625 Z"/>
        </svg>

        <nuxt-link to="" class="px-1">سبد خرید</nuxt-link>

      </div>

      <div class="px-6 py-4 rounded bg-white">

        <h3 class="pb-6 font-bold underline decoration-4 decoration-[#FFB508] underline-offset-1">سبد خرید</h3>

        <div class="pb-6">
          <div class="flex items-center">
            <svg class="max-h-1.5 max-w-1.5" fill="#FFB508" xmlns="http://www.w3.org/2000/svg"
                 xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                 viewBox="0 0 6 6" style="enable-background:new 0 0 6 6;" xml:space="preserve">
                  <rect width="6" height="6"/>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
                </svg>
            <p class="pr-1.5 pb-1 text-sm">مشخصات</p>
          </div>
          <div class="rounded bg-[#F7F7F7]">
            <ul role="list" class="p-4 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-4">

              <li class="col-span-1">
                <div class="pb-3">
                  <p class="text-xs rounded text-[#757575]">نوع درب</p>
                  <div class="flex items-center text-sm">

                    <p> اسلایدینگ</p>

                    <svg class="px-1.5 max-h-1.5 max-w-1.5" fill="#757575" xmlns="http://www.w3.org/2000/svg"
                         xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                         viewBox="0 0 6 6" style="enable-background:new 0 0 6 6;" xml:space="preserve">
                  <rect width="6" height="6"/>
                      <g></g>
                      <g></g>
                      <g></g>
                      <g></g>
                      <g></g>
                      <g></g>
                      <g></g>
                      <g></g>
                      <g></g>
                      <g></g>
                      <g></g>
                      <g></g>
                      <g></g>
                      <g></g>
                      <g></g>
                </svg>

                    <p>چرخشی</p>

                  </div>
                </div>

                <div>
                  <p class="text-xs rounded text-[#757575]">طول درب</p>

                  <p> 300 سانتی متر</p>

                </div>

              </li>

              <li class="col-span-1">
                <div class="pb-3">
                  <p class="text-xs rounded text-[#757575]">نوع کاربری</p>

                  <p>آتش نشانی</p>

                </div>

                <div>
                  <p class="text-xs rounded text-[#757575]">عرض درب</p>

                  <p> 280 سانتی متر</p>

                </div>

              </li>

              <li class="col-span-1">
                <div class="pb-3">
                  <p class="text-xs rounded text-[#757575]">نوع شیشه</p>

                  <p>شیشه نوع سه</p>

                </div>

                <div>
                  <p class="text-xs rounded text-[#757575]">عرض باز شو</p>

                  <p> 160 سانتی متر</p>

                </div>

              </li>

              <li class="col-span-1">
                <div class="pb-3">
                  <p class="text-xs rounded text-[#757575]">نوع فریم</p>
                  <div class="flex items-center text-sm">

                    <p> فریم نوع دو</p>

                    <svg class="px-1.5 max-h-1.5 max-w-1.5" fill="#757575" xmlns="http://www.w3.org/2000/svg"
                         xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                         viewBox="0 0 6 6" style="enable-background:new 0 0 6 6;" xml:space="preserve">
                  <rect width="6" height="6"/>
                      <g></g>
                      <g></g>
                      <g></g>
                      <g></g>
                      <g></g>
                      <g></g>
                      <g></g>
                      <g></g>
                      <g></g>
                      <g></g>
                      <g></g>
                      <g></g>
                      <g></g>
                      <g></g>
                      <g></g>
                </svg>

                    <p>فریم نوع چهار</p>

                  </div>
                </div>

                <div>
                  <p class="text-xs rounded text-[#757575]">میزان تردد</p>

                  <p> 300 نفر در روز</p>

                </div>

              </li>

            </ul>
          </div>

        </div>

        <div>
          <div class="flex items-center">
            <svg class="max-h-1.5 max-w-1.5" fill="#FFB508" xmlns="http://www.w3.org/2000/svg"
                 xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                 viewBox="0 0 6 6" style="enable-background:new 0 0 6 6;" xml:space="preserve">
                  <rect width="6" height="6"/>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
                </svg>
            <p class="pr-1.5 pb-1 text-sm">کالاها</p>
          </div>

          <div v-if="card">
            <div
              v-for="(i,n) in card.items"
              :key="n"
              class="mb-4 p-1 group flex items-center justify-between border border-[#E1E3EB] rounded hover:border-[#999BA3]">

              <div class="flex">
                <div class="pl-2">
                  <img :src="i.product.thumbnail ? i.product.thumbnail : '@/static/images/shop1.png'" style="width: 200px">
                </div>
                <div>
                  <p class="text-sm text-[#757575]">{{ i.product.type.name }}</p>
                  <p class="pt-1 text-[#282828] font-medium">APS-121 عنوان کالا درب اسلایدینگ مدل</p>
                  <p class="pt-1 text-[#282828] font-medium">تعداد: {{ i.number }} عدد</p>
                </div>
              </div>

              <div class="pl-5">
                <img class="block group-hover:hidden" src="@/static/images/trash.png">
                <a href="#">
                  <img class="hidden group-hover:block" src="@/static/images/trash2.png">
                </a>
              </div>

            </div>
          </div>

        </div>

        <div class="text-left">

          <button type="button" @click="final = !final , shop=!shop " v-cloak
                  class="px-8 py-2.5 block inline-flex text-center text-white rounded-md text-sm text-white shadow-sm shadow-[#2C053129] border bg-[#4B1752] hover:text-gray-800 hover:bg-gray-100 hover:border-gray-300 hover:shadow focus:border-gray-300 focus:outline-none hover:opacity60">
            استعلام قیمت

          </button>
          <!--         <a href="#"-->
          <!--            class="px-6 py-2.5 block inline-flex items-center border text-sm text-white rounded-md shadow-sm shadow-[#2C053129] bg-[#4B1752] hover:text-gray-800 hover:bg-gray-100 hover:border-gray-300 hover:shadow">-->
          <!--           استعلام قیمت-->
          <!--         </a>-->
        </div>
      </div>

    </div>

    <div v-if="final" class="py-5 mx-auto max-w-4xl text-center md:py-14">
      <div class="py-12 bg-white rounded">
        <svg class="mb-2 mx-auto block" xmlns="http://www.w3.org/2000/svg" width="104" height="104"
             viewBox="0 0 104 104">
          <defs>
            <style>.atick {
              fill: #fafffa;
              stroke: #2e7d32;
            }

            .btick, .ctick {
              fill: #2e7d32;
            }

            .ctick {
              opacity: 0.4;
            }

            .dtick {
              stroke: none;
            }

            .etick {
              fill: none;
            }
            </style>
          </defs>
          <g transform="translate(-633 -227)">
            <g class="atick" transform="translate(633 227)">
              <rect class="dtick" width="104" height="104" rx="4"/>
              <rect class="etick" x="0.5" y="0.5" width="103" height="103" rx="3.5"/>
            </g>
            <g transform="translate(625.16 251)">
              <g transform="translate(31.84)">
                <path class="btick"
                      d="M205.885,180.42l-12.25,12.25a2.065,2.065,0,0,1-1.761.864,2.625,2.625,0,0,1-1.856-.769l-5.25-5.25a2.625,2.625,0,1,1,3.712-3.712l3.394,3.4,10.394-10.394a2.624,2.624,0,0,1,3.712,0A2.433,2.433,0,0,1,205.885,180.42Z"
                      transform="translate(-167.356 -156.785)"/>
                <path class="ctick"
                      d="M87.836,28a11.337,11.337,0,0,0-5.125-9.488,11.334,11.334,0,0,0-13.4-13.4A11.477,11.477,0,0,0,59.836,0a11.694,11.694,0,0,0-9.592,5.113,11.331,11.331,0,0,0-13.3,13.4,11.37,11.37,0,0,0,0,18.971,11.35,11.35,0,0,0,13.394,13.4,11.36,11.36,0,0,0,18.977,0,11.334,11.334,0,0,0,13.4-13.4A11.335,11.335,0,0,0,87.836,28ZM70.368,23.636l-12.25,12.25a2.065,2.065,0,0,1-1.761.864,2.625,2.625,0,0,1-1.856-.769l-5.25-5.25a2.625,2.625,0,0,1,3.712-3.712l3.394,3.4L66.751,20.023a2.624,2.624,0,0,1,3.712,0A2.433,2.433,0,0,1,70.368,23.636Z"
                      transform="translate(-31.84)"/>
              </g>
            </g>
          </g>
        </svg>
        <div class="py-4 text-lg text-[#2E7D32] font-bold">استعلام شما با موفقیت ثبت شد</div>
        <div class="text-[#282828]">کارشناسان ما به زودی و پس از بررسی درخواستتان، با شما ارتباط می‌گیرند</div>
        <a href="#" @click="final = !final , shop=!shop"
           class="mt-8 mx-auto px-8 py-2.5 block inline-flex items-center border text-sm text-white rounded-md shadow-sm shadow-[#2C053129] bg-[#4B1752] hover:text-gray-800 hover:bg-gray-100 hover:border-gray-300 hover:shadow">
          بازگشت به صفحه اصلی
        </a>
      </div>
    </div>


  </div>
</template>

<script>
export default {
  name: "price",
  data() {
    return {
      shop: true,
      final: false,
      card: null
    }
  },

  mounted() {
    this.getCard()
  },
  methods: {
    getCard() {
      const token = this.$cookies.get("otpt") || null
      if (!token) {
        return
      }
      this.$axios.setHeader('Authorization', `Bearer ${token}`)
      this.$store.dispatch('inquiry/getCard')
        .then(res => {
          console.log(res)
          this.card = res
        })
        .catch(err => {
          console.log(err)
        })
    }
  }
}
</script>

<style scoped>

</style>
