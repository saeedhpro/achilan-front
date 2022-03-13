<template>
  <div class="h-screen bg-[#F7F8FA]">

    <div class="mx-auto py-6 px-5 max-w-7xl">

      <div class="container">
        <h3 class="mr-2 py-4 font-bold text-xl underline decoration-4 decoration-[#FFB508] underline-offset-1">ایجاد
          محصول جدید</h3>

        <form @submit.prevent="validate" class="space-y-6">

          <div class="space-y-1">
            <label class="font-medium">سوال</label>
            <input v-model="question"
                   class="w-full block border border-gray-200 rounded px-3 py-2 leading-6 focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50"
                   type="text" placeholder="سوال"/>
          </div>

          <div class="space-y-1">
            <label class="font-medium">پاسخ</label>
            <textarea v-model="answer"
                      class="w-full block border border-gray-200 rounded px-3 py-2 focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50"
                      rows="4" placeholder="پاسخ"></textarea>
          </div>


          <button type="submit"
                  class="py-3 w-full flex justify-center items-center bg-[#4B1752] text-white font-bold rounded hover:bg-[#2C0531]"
                  @click.prevent="save">
            <svg class="h-4 w-4" fill="white" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                 x="0px" y="0px"
                 viewBox="0 0 49 49" xml:space="preserve">
<g>
	<rect x="27.5" y="5" width="6" height="10"/>
  <path d="M39.914,0H0.5v49h48V8.586L39.914,0z M10.5,2h26v16h-26V2z M39.5,47h-31V26h31V47z"/>
  <path d="M13.5,32h7c0.553,0,1-0.447,1-1s-0.447-1-1-1h-7c-0.553,0-1,0.447-1,1S12.947,32,13.5,32z"/>
  <path d="M13.5,36h10c0.553,0,1-0.447,1-1s-0.447-1-1-1h-10c-0.553,0-1,0.447-1,1S12.947,36,13.5,36z"/>
  <path d="M26.5,36c0.27,0,0.52-0.11,0.71-0.29c0.18-0.19,0.29-0.45,0.29-0.71s-0.11-0.521-0.29-0.71c-0.37-0.37-1.04-0.37-1.41,0
		c-0.19,0.189-0.3,0.439-0.3,0.71c0,0.27,0.109,0.52,0.29,0.71C25.979,35.89,26.229,36,26.5,36z"/></g>
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

            <p class="pr-2">ذخیره محصول جدید</p>
          </button>


        </form>

      </div>

    </div>

  </div>
</template>

<script>
import Price from "~/components/shoppingCard/price";

export default {
  name: "addFaq",
  layout:'admin',
  components: {Price},
  data() {
    return {
      question: '',
      answer: '',
    }
  },
  methods: {
    async save() {
      this.$store.dispatch('faq/createFaq',
        {
          question : this.question,
          answer : this.answer
        }
      )
      .then(res=>{})
      .catch(err=>{})

    },

  }
}
</script>
