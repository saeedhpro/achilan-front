<template>
  <div class="bg-[#F7F8FA]">

    <div class="mx-auto px-5 max-w-7xl" v-if="ingredient">
      <!-- BreadCrumbs -->
      <div class="px-4 py-2.5 flex text-sm text-[#100D14] rounded items-center bg-[#F0F0F5]">

        <nuxt-link to="/ingredients" class="px-1">اجزای درب اتوماتیک</nuxt-link>

        <svg class="font-bold text-[#100D14]" fill="black" width="10px" height="10px" viewBox="0 0 32 32"
             xmlns="http://www.w3.org/2000/svg">
          <path d="M 26 6 L 6 15.21875 L 6 16.78125 L 26 26 L 26 23.84375 L 9.46875 16 L 26 8.15625 Z"/>
        </svg>

        <div class="px-1">{{ ingredient.name }}</div>

      </div>

      <div class="py-3 md:py-6 md:flex">

        <div class="md:w-1/3">

          <div class="p-6 w-full bg-white rounded">

            <img class="mx-auto block" src="@/static/images/part.png"/>

            <h3 class="py-4 text-lg text-center text-[#282828] font-bold">اجزای درب اتوماتیک</h3>

            <div class="text-center text-[#282828]">
              در این صفحه می‌توانید تصاویر، توضیحات و اطلاعات فنی مربوط به اجزای درب‌های اتوماتیک را مشاهده فرمایید
            </div>

           <nuxt-link to="/ingredients">
             <button
               class="mx-auto mt-4 px-6 py-2 block items-center border text-sm text-white rounded-md shadow-sm shadow-[#2C053129] bg-[#4B1752] hover:text-gray-800 hover:bg-gray-100 hover:border-gray-300 hover:shadow">
               مشاهده لیست اجزا
             </button>
           </nuxt-link>

          </div>

        </div>

        <div class="md:pr-6 md:w-2/3">
          <h2 class="pt-2 font-bold text-3xl text-[#282828]">{{ ingredient.name }}</h2>

<!--          <img class="py-6 block" :src="ingredient.Thumbnail">-->

          <div class="py-4 text-[#282828]">
          {{ ingredient.description}}
          </div>

<!--          <div class="pb-4 w-full md:pb-8">-->
<!--            <div class="flex flex-col ">-->
<!--              <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">-->
<!--                <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">-->
<!--                  <div class="shadow overflow-hidden border-b border-white sm:rounded">-->
<!--                    <table class="min-w-full divide-y divide-gray-200">-->
<!--                      <thead class="bg-[#591262]">-->
<!--                      <tr>-->

<!--                        <th scope="col" class="px-6 py-3 text-left border-l-4 border-white text-sm font-medium text-white">-->
<!--                          Product-->
<!--                        </th>-->

<!--                        <th scope="col" class="px-6 py-3 text-left text-sm font-medium text-white">-->
<!--                          Name-->
<!--                        </th>-->

<!--                      </tr>-->
<!--                      </thead>-->
<!--                      <tbody>-->

<!--                      <tr v-for="i in info" :key="i.num" :class="[i.num % 2 === 0 ? 'bg-white' : 'bg-[#E1E3EB]']">-->
<!--                        <td class="px-6 py-4 border-l-4 border-white whitespace-nowrap text-sm text-left text-[#282828]">-->
<!--                          {{ i.product }}-->
<!--                        </td>-->
<!--                        <td class="px-6 py-4 whitespace-nowrap text-sm text-left font-medium text-[#282828]">-->
<!--                          {{i.name }}-->
<!--                        </td>-->
<!--                      </tr>-->

<!--                      </tbody>-->
<!--                    </table>-->
<!--                  </div>-->
<!--                </div>-->
<!--              </div>-->
<!--            </div>-->
<!--          </div>-->

        </div>

      </div>
    </div>
  </div>

</template>

<script>
import VueTailwind from 'vue-tailwind';
import {
  TTable,
} from 'vue-tailwind/dist/components';
import result from "~/components/price/result";

export default {
  name: "ingredientsPage",
  components: {
    VueTailwind,
    TTable,
  },
  data() {
    return {
      info: [
        {
          num:1,
          name: 'Alfonso Bribiesca',
          product: 'alfonso',
        },
        {
          num:2,
          name: 'Saida Redondo',
          product: 'saida',
        },
        {
          num:3,
          name: 'Regina Bribiesca',
          product: 'regina',
        },
        {
          num:4,
          name: 'Ricardo Martinez',
          product: 'rickyrickky',
        },
        {
          num:5,
          name: 'Alfonso Bribiesca',
          product: 'alfonso',
        },
        {
          num:6,
          name: 'Saida Redondo',
          product: 'saida',
        },
        {
          num:7,
          name: 'Regina Bribiesca',
          product: 'regina',
        },
        {
          num:8,
          name: 'Regina Bribiesca',
          product: 'regina',
        },
      ]
    }
  },
  mounted() {
    this.$store.dispatch('ingredients/getIngredient')
  },

  computed: {
    ingredient() {
      return this.$store.getters['ingredients/getIngredient']
    },
  },
}
</script>
