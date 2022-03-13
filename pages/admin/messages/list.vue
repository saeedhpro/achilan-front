<template>
  <div class="h-screen bg-[#F7F8FA]">

    <div class="mx-auto py-6 px-5 max-w-7xl">

      <h3 class="mr-2 py-2 font-bold text-xl underline decoration-4 decoration-[#FFB508] underline-offset-1">لیست پیام ها</h3>

      <!--add product-->
<!--      <div class="py-6">-->
<!--        <nuxt-link class="py-3 flex justify-center items-center bg-[#4B1752] text-white font-bold rounded hover:bg-[#2C0531]" to="/admin/products/addNewProduct">-->

<!--          <svg width="36px" height="36px" viewBox="0 0 36 36" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="h-4 w-4" preserveAspectRatio="xMidYMid meet"><path fill="white" d="M31 15H21V5a3 3 0 1 0-6 0v10H5a3 3 0 1 0 0 6h10v10a3 3 0 1 0 6 0V21h10a3 3 0 1 0 0-6z"></path></svg>-->
<!--          <p class="pr-2">افزودن محصول</p>-->

<!--        </nuxt-link>-->
<!--      </div>-->

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
              نام
            </th>
            <th class="p-3 text-white font-bold text-sm tracking-wider uppercase text-center">
              ایمیل
            </th>

            <th class="p-3 text-white font-bold text-sm tracking-wider uppercase text-center">
              پیام
            </th>
<!--            <th class="p-3 text-white font-bold text-sm tracking-wider uppercase text-center">-->
<!--              Actions-->
<!--            </th>-->
          </tr>
          </thead>
          <!-- END Table Header -->

          <!-- Table Body -->
          <tbody v-for="i in messages" :key="i">
          <!--modal fo edit product-->
<!--          <div v-if="editModal" class="top-36 w-full flex justify-center absolute rounded z-20" v-cloak>-->

<!--            &lt;!&ndash;ویرایش محصول&ndash;&gt;-->

<!--          </div>-->

          <!--modal for delete product-->
<!--          <div v-if="deleteModal" class="top-36 w-full flex justify-center absolute rounded z-20" v-cloak>-->

<!--            <div class="p-4">-->

<!--              <div>-->

<!--              </div>-->

<!--            </div>-->

<!--          </div>-->

          <tr class="border-b border-gray-200 hover:bg-gray-50" @click="">
            <td class="p-3 text-center">
              <p class="font-medium">
               {{ i.id}}
              </p>
            </td>
            <td class="p-3 text-center">
              {{i.name}}
            </td>
<!--            <td class="p-3 text-gray-500">-->
<!--              <img :src="i.thumbnail">-->
<!--            </td>-->
            <td class="p-3 text-center">
              <div
                class="font-bold inline-flex px-2 py-1 leading-4 text-xs rounded-full text-green-700 bg-green-200">
                {{ i.message}}
              </div>
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
    this.$store.dispatch('contactUs/getMessages')
  },

  computed: {
    messages() {
      return this.$store.getters['contactUs/getMessages']
    },
  }

}
</script>
