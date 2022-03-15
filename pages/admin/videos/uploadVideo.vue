<template>
  <div class="h-screen bg-[#F7F8FA]">

    <div class="mx-auto py-6 px-5 max-w-7xl">

      <div class="container">
        <h3 class="mr-2 py-4 font-bold text-xl underline decoration-4 decoration-[#FFB508] underline-offset-1">ایجاد
          ویدپو جدید</h3>

        <form @submit.prevent="validate" class="space-y-6">

          <div class="space-y-1">
            <label class="font-medium">عنوان فیلم</label>
            <input v-model="title"
                   class="w-full block border border-gray-500 border-2 rounded-lg px-3 py-2 leading-6 focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50"
                   type="text" placeholder="عنوان فیلم"/>
          </div>

          <div class="space-y-1">
            <label class="font-medium">توضیحات ویدیو</label>
            <textarea v-model="description"
                      class="w-full block border border-gray-500 border-2 rounded-lg px-3 py-2 focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50"
                      rows="4" placeholder="توضیحات ویدیو"></textarea>
          </div>

          <div class="space-y-1">
            <label class="font-medium">فیلم محصول</label>
            <div class="sm:w-full items-center text-center">

<!--              <dropzone id="bar" ref="bar" :options="options" :destroyDropzone="true" :useCustomSlot="true"-->
<!--                        class="p-8 border border-gray-500 border-2 border-dashed rounded-lg">-->
<!--                <div class="">-->
<!--                  <h3 class="pb-4 font-bold">ویدیو محصول</h3>-->
<!--                  <p class="text-sm">فایل مورد نظر را جهت آپلود انتخاب کنید <span>(حداکثر حجم 256 Mb)</span></p>-->
<!--                </div>-->
<!--              </dropzone>-->
              <div class="sm:w-full items-center text-center">
                <div class="p-2  upload-box-title-box rounded-lg bg-gray-100 text-center  relative"
                     @click="onUploadClickedVideo">
                  <div class="p-10 text-center flex flex-col border-2 border-dashed border-gray-500 rounded-lg">
                    <div class="upload-box-title-text text-gray-700 ir-medium text-sm">
                      تصویر اسلایدر
                    </div>
                    <div class="my-3 text-gray-600 text-sm">فرمت‌های فایل مورد پذیرش برای ویدپو (حداکثر حجم مورد پذیرش: ۱۰
                      مگابایت)
                    </div>
                    <div class="my-3 flex justify-center">
                      <div class="px-2 py-1 bg-gray-200 rounded text-gray-600">MP4</div>
                    </div>
                    <div class="my-5 upload-box-title-input">
                      <div
                        class="flex m-auto w-32 border-2 py-2 px-1 rounded-lg border-solid border-gray-500 text-gray-600 bg-gray-200 justify-center  text-sm">
                        <i class="fal fa-upload"></i>
                        <div class=" mr-2">آپلود ویدپو</div>
                      </div>
                      <input ref="video" accept="video/*" multiple type="file" hidden @change="onFileVideo">
                    </div>

                  </div>
                </div>
              </div>

            </div>

          </div>

          <div class="mt-6 mb-6">
            <label>انتخاب دسته بندی</label>
            <select
              id="movie"
              v-model="category_id"
              class="w-full rounded-lg border-2 border-gray-500 border-solid"

            >
              <option v-for="(i , index) in getCategories" :key="index" :value="i.id">{{ i.name }}</option>
            </select>
          </div>

          <button type="submit"
                  class="py-3 w-full flex justify-center items-center bg-[#4B1752] text-white font-bold rounded hover:bg-[#2C0531]"
                  @click.prevent="save">
            <svg class="h-4 w-4" fill="white" xmlns="http://www.w3.org/2000/svg"
                 xmlns:xlink="http://www.w3.org/1999/xlink"
                 x="0px" y="0px"
                 viewBox="0 0 49 49" xml:space="preserve">
<g>
	<rect x="27.5" y="5" width="6" height="10"/>
  <path d="M39.914,0H0.5v49h48V8.586L39.914,0z M10.5,2h26v16h-26V2z M39.5,47h-31V26h31V47z"/>
  <path d="M13.5,32h7c0.553,0,1-0.447,1-1s-0.447-1-1-1h-7c-0.553,0-1,0.447-1,1S12.947,32,13.5,32z"/>
  <path d="M13.5,36h10c0.553,0,1-0.447,1-1s-0.447-1-1-1h-10c-0.553,0-1,0.447-1,1S12.947,36,13.5,36z"/>
  <path d="M26.5,36c0.27,0,0.52-0.11,0.71-0.29c0.18-0.19,0.29-0.45,0.29-0.71s-0.11-0.521-0.29-0.71c-0.37-0.37-1.04-0.37-1.41,0
		c-0.19,0.189-0.3,0.439-0.3,0.71c0,0.27,0.109,0.52,0.29,0.71C25.979,35.89,26.229,36,26.5,36z"/></g>

</svg>
            <span class="mx-5">ثبت</span>
          </button>


        </form>

      </div>

    </div>

  </div>

</template>

<script>
import Dropzone from 'nuxt-dropzone'
import 'nuxt-dropzone/dropzone.css'

export default {
  name: "uploadVideo",
  components: {
    Dropzone
  },
  data() {
    return {

      title: null,
      description: null,
      category_id: null,
      video: null,
      // See https://rowanwins.github.io/vue-dropzone/docs/dist/index.html#/props
      options: {
        url: "https://apiachilan.iran.liara.run/api/upload",

      }
    }
  },
  methods: {
    onUploadClickedVideo() {
      this.$refs.video.click()
    },
    async onFileDropVideo(e) {
      const base64 = await this.$toBase64(e.target.files[0])
      this.base64 = base64.data
      const data = new FormData()
      data.set('file_type', base64.type)
      data.set('base64_file', base64.base64)
    },
    async onFileVideo(e) {
      const file = e.target.files[0];
      const base64 = await this.$toBase64(e.target.files[0])
      this.video = base64.data
      const data = new FormData()
      data.set('file_type', base64.type)
      data.set('base64_file', base64.base64)
      const dataForm = new FormData();
      dataForm.set('file', file);
      this.$store.dispatch('latestArticles/uploadImage', dataForm)
        .then((response) => {
          this.video = response.url
        })
        .catch((error) => {
        })
    },
    save() {
      this.$store.dispatch('video/createVideo', {
        title: this.title,
        url: this.video,
        thumbnail: null,
        description: this.description,
        category_id: this.category_id,
      })
        .then(res => {
          this.$router.replace('/admin/videos/list')
        })
        .catch(async err => {
          alert("در ایجاد ویدپو مشکلی به وجود آمده است")
        })
    },

    getCategory() {
      this.$store.dispatch('inquiry/getCategories', 'product')
    },

  },
  computed: {
    getCategories() {
      return this.$store.getters['inquiry/getCategories']
    }
  },
  mounted() {
    this.getCategory()
    // Everything is mounted and you can access the dropzone instance
    // const instance = this.$refs.el.dropzone
  },

}
</script>

<style scoped>

</style>
