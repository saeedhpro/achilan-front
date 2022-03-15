<template>
  <div class="h-screen bg-[#F7F8FA]">

    <div class="mx-auto py-6 px-5 max-w-7xl">

      <h3 class="mr-2 py-2 font-bold text-xl underline decoration-4 decoration-[#FFB508] underline-offset-1">لیست شیشه ها</h3>

      <!--add product-->
      <div class="py-6">
        <nuxt-link class="py-3 flex justify-center items-center bg-[#4B1752] text-white font-bold rounded hover:bg-[#2C0531]" to="/admin/glasses/add">

          <svg width="36px" height="36px" viewBox="0 0 36 36" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="h-4 w-4" preserveAspectRatio="xMidYMid meet"><path fill="white" d="M31 15H21V5a3 3 0 1 0-6 0v10H5a3 3 0 1 0 0 6h10v10a3 3 0 1 0 6 0V21h10a3 3 0 1 0 0-6z"></path></svg>
          <p class="pr-2">افزودن شیشه</p>

        </nuxt-link>
      </div>

      <div class="border border-gray-200 rounded overflow-x-auto min-w-full bg-white">
        <!-- Bordered Table -->
        <table class="min-w-full text-sm align-middle whitespace-nowrap">
          <!-- Table Header -->
          <thead>
          <tr class="border-b border-gray-200 bg-[#4B1752]">
            <th class="p-3 text-white font-bold text-sm tracking-wider uppercase text-right">
              ردیف
            </th>
            <th class="p-3 text-white font-bold text-sm tracking-wider uppercase text-center">
              عنوان
            </th>
            <th class="p-3 text-white font-bold text-sm tracking-wider uppercase text-center">
              عکس
            </th>

            <th class="p-3 text-white font-bold text-sm tracking-wider uppercase text-center">
              عملیات
            </th>
          </tr>
          </thead>
          <!-- END Table Header -->

          <!-- Table Body -->
          <tbody v-for="(i,n) in getGlasses" :key="n">
          <!--modal fo edit product-->
          <div v-if="editModal" class="top-36 w-full flex justify-center absolute rounded z-20" v-cloak>

            <!--ویرایش محصول-->

          </div>

          <!--modal for delete product-->
          <div v-if="deleteModal" class="top-36 w-full flex justify-center absolute rounded z-20" v-cloak>

            <div class="p-4">

              <div>

              </div>

            </div>

          </div>

          <tr class="border-b border-gray-200 hover:bg-gray-50" @click="">
            <td class="p-3 text-center">
              <p class="font-medium">
               {{ n+1}}
              </p>
            </td>
            <td class="p-3 text-center">
              {{i.name}}
            </td>
            <td class="w-32 h-32 p-3 text-gray-500">
              <img :src="i.thumbnail">
            </td>

            <td class="p-3 space-x-2 space-x-reverse text-center">

              <div v-if="editModal" @click="editModal = false" v-cloak
                   class="fixed inset-0 bg-gray-400 bg-opacity-20 z-10"></div>

              <button type="button" @click="editModal = !editModal" v-cloak
                      class="px-2 py-1 inline-flex justify-center items-center space-x-1 space-x-reverse border bg-yellow-100 font-bold leading-5 text-sm rounded border-[#fbbf24] bg-white text-[#fbbf24] shadow-sm hover:text-gray-800 hover:bg-gray-100 hover:border-gray-300 hover:shadow focus:ring focus:ring-gray-500 focus:ring-opacity-25">
                <svg class="hi-solid hi-pencil inline-block w-4 h-4" fill="currentColor" viewBox="0 0 20 20"
                     xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z"/>
                </svg>
                <span>ویرایش</span>
              </button>

              <div v-if="deleteModal" @click="deleteModal = false" v-cloak
                   class="fixed inset-0 bg-gray-400 bg-opacity-20 z-10"></div>

              <button type="button" @click="deleteModal = !deleteModal" v-cloak
                      class="inline-flex justify-center items-center space-x-2 space-x-reverse border bg-red-100 text-red-600 font-bold focus:outline-none px-2 py-1 leading-5 text-sm rounded border-red-600 bg-white shadow-sm hover:text-gray-800 hover:bg-gray-100 hover:border-gray-300 hover:shadow focus:ring focus:ring-gray-500 focus:ring-opacity-25">

                <svg class=" h-4 w-4" version="1.1" id="Layer_1" fill="currentColor" xmlns="http://www.w3.org/2000/svg"
                     xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                     viewBox="0 0 512 512" xml:space="preserve">
                  <g><g><g>
                    <path d="M490.667,85.333h-42.665H448h-68.675l-7.012-28.062C363.905,23.609,333.658,0,298.965,0h-85.931
			               c-34.693,0-64.94,23.609-73.348,57.273l-7.012,28.06H64.002c0,0-0.001,0-0.001,0c0,0,0,0-0.001,0H21.333
			               C9.551,85.333,0,94.885,0,106.667C0,118.449,9.551,128,21.333,128h22.488l17.974,323.53C63.683,485.452,91.744,512,125.719,512
			              	h260.565c33.975,0,62.036-26.548,63.924-60.468L468.183,128h22.484c11.782,0,21.333-9.551,21.333-21.333
			               	C512,94.885,502.449,85.333,490.667,85.333z M181.081,67.614c3.663-14.664,16.838-24.948,31.954-24.948h85.931
			              	c15.116,0,28.291,10.284,31.953,24.946l4.428,17.721H176.653L181.081,67.614z M407.608,449.163
			                c-0.63,11.311-9.993,20.17-21.324,20.17H125.719c-11.33,0-20.694-8.859-21.324-20.172L86.554,128h62.78h213.333h62.784
			            	  L407.608,449.163z"/>
                    <path d="M170.667,170.667c-11.782,0-21.333,9.551-21.333,21.333v213.333c0,11.782,9.551,21.333,21.333,21.333
			                c11.782,0,21.333-9.551,21.333-21.333V192C192,180.218,182.449,170.667,170.667,170.667z"/>
                    <path d="M256,170.667c-11.782,0-21.333,9.551-21.333,21.333v213.333c0,11.782,9.551,21.333,21.333,21.333
				               s21.333-9.551,21.333-21.333V192C277.333,180.218,267.782,170.667,256,170.667z"/>
                    <path d="M341.333,170.667C329.551,170.667,320,180.218,320,192v213.333c0,11.782,9.551,21.333,21.333,21.333
			                      c11.782,0,21.333-9.551,21.333-21.333V192C362.667,180.218,353.115,170.667,341.333,170.667z"/>
                  </g>
                  </g></g>
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

                <span class="pl-2">حذف</span>

              </button>
            </td>
          </tr>

          </tbody>
          <!-- END Table Body -->
        </table>
        <!-- END Bordered Table -->
      </div>

    </div>

  </div>
</template>

<script>
export default {
  name: "list",
  layout:'admin',
  data() {
    return {
      editModal: '',
      deleteModal: '',
    }
  },

  mounted() {
    this.$store.dispatch('ingredients/getGlasses')
  },

  computed: {
    getGlasses() {
      return this.$store.getters['ingredients/getGlasses']
    },
  },

}
</script>
