<template>
  <div class=" bg-[#F7F8FA]">

    <div class="mx-auto py-6 px-5 max-w-7xl">

      <div class="container">
        <h3 class="mr-2 py-4 font-bold text-xl underline decoration-4 decoration-[#FFB508] underline-offset-1">ایجاد کاربرد جدید</h3>

        <form @submit.prevent="validate" class="space-y-6">

          <div class="space-y-1">
            <label class="font-medium">عنوان محصول</label>
            <input v-model="name"
                   class="w-full block border border-gray-200 rounded px-3 py-2 leading-6 focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50"
                   type="text" placeholder="عنوان محصول"/>
          </div>


          <div class="space-y-1">
            <label class="font-medium">تصویر محصول</label>
            <div class="sm:w-full items-center text-center">
              <div class="p-2  upload-box-title-box rounded-lg bg-gray-100 text-center  relative"
                   @click="onUploadClicked">
                <div class="p-10 text-center flex flex-col border-2 border-dashed border-gray-500 rounded-lg">
                  <div class="upload-box-title-text text-gray-700 ir-medium text-sm">
                    تصویر مقاله
                  </div>
                  <div class="my-3 text-gray-600 text-sm">فرمت‌های فایل مورد پذیرش برای تصویر (حداکثر حجم مورد پذیرش: ۱۰ مگابایت)</div>
                  <div class="my-3 flex justify-center">
                    <div class="px-2 py-1 bg-gray-200 rounded text-gray-600">PNG</div>
                    <div class="px-2 py-1 mx-1 bg-gray-200 rounded text-gray-600">JPG</div>
                    <div class="px-2 py-1 ml-1 bg-gray-200 rounded text-gray-600">JPEG</div>
                    <div class="px-2 py-1 bg-gray-200 rounded text-gray-600">GIF</div>
                  </div>
                  <div class="my-5 upload-box-title-input">
                    <!--            <img src="/images/upload-icon.png">-->
                    <div class="flex m-auto w-32 border-2 py-2 px-1 rounded-lg border-solid border-gray-500 text-gray-600 bg-gray-200 justify-center  text-sm">
                      <i class="fal fa-upload"></i>
                      <div class=" mr-2">آپلود تصویر</div>
                    </div>
                    <input ref="upload" accept="image/jpeg,png" type="file" hidden @change="onFile">
                    <img src=""/>
                  </div>
                  <img
                    v-if="base64"
                    ref="upload-placeholder"
                    alt=""
                    class="w-full  h-full upload-placeholder rounded-lg absolute inset-0"
                    :src="base64"
                    @click="onUploadClicked"
                  >
                </div>
              </div>
            </div>

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

</svg>
            <span class="mx-5">ثبت</span>
          </button>


        </form>

      </div>

    </div>

  </div>
</template>

<script>
import Price from "~/components/shoppingCard/price";

export default {
  name: "addNewProduct",
  layout:'admin',
  components: {Price},
  data() {
    return {
      editModal: '',
      deleteModal: '',
      base64: null,
      name:null,
    }
  },
  methods: {
    onUploadClicked () {
      this.$refs.upload.click()
    },
    async onFileDrop (e) {
      const base64 = await this.$toBase64(e.target.files[0])
      this.base64 = base64.data
      const data = new FormData()
      data.set('file_type', base64.type)
      data.set('base64_file', base64.base64)
      // this.$axios.$post('/upload_file', data)
      //     .then((response) => {
      //         this.course.course_image = response.file
      //     })
      //     .catch((error) => {
      //     })
    },
    async onFile (e) {
      const file = e.target.files[0];
      const base64 = await this.$toBase64(e.target.files[0])
      this.base64 = base64.data
      const data = new FormData()
      data.set('file_type', base64.type)
      data.set('base64_file', base64.base64)
      const dataForm = new FormData();
      dataForm.set('file', file);
      this.$store.dispatch('latestArticles/uploadImage', dataForm)
        .then((response) => {
          this.image = response
        })
        .catch((error) => {
        })
    },
    save(){
      this.$store.dispatch('applications/createusage', {
        name:this.name,
        image_id:this.image ? this.image.id :null,
      })
        .then(res=>{
          alert("کاربرد با موفقیت ایجاد شد")
        })
        .catch(async err=>{
          alert("در ایجاد کاربرد مشکلی به وجود آمده است")
        })
    },

  }
}
</script>
