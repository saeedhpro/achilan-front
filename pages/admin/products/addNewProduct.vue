<template>
  <div class="bg-[#F7F8FA]">

    <div class="mx-auto py-6 px-5 max-w-7xl">

      <div class="container">
        <h3 class="mr-2 py-4 font-bold text-xl underline decoration-4 decoration-[#FFB508] underline-offset-1">ایجاد
          محصول جدید</h3>

        <form @submit.prevent="validate" class="space-y-6">

          <div class="space-y-1">
            <label class="font-medium">عنوان درب</label>
            <input v-model="product.title"
                   class="w-full block border border-gray-200 rounded px-3 py-2 leading-6 focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50"
                   type="text" placeholder="عنوان درب"/>
          </div>

          <div class="space-y-1">
            <label class="font-medium">طول</label>
            <input v-model="product.height"
                   class="w-full block border border-gray-200 rounded px-3 py-2 leading-6 focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50"
                   type="number" placeholder="طول محصول"/>
          </div>
          <div class="space-y-1">
            <label class="font-medium">عرض</label>
            <input v-model="product.width"
                   class="w-full block border border-gray-200 rounded px-3 py-2 leading-6 focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50"
                   type="number" placeholder="عرض محصول"/>
          </div>
          <div class="space-y-1">
            <label class="font-medium">عرض درب</label>
            <input v-model="product.door_width"
                   class="w-full block border border-gray-200 rounded px-3 py-2 leading-6 focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50"
                   type="tenumberxt" placeholder="عرض محصول"/>
          </div>
          <div class="space-y-1">
            <label class="font-medium">میزان تردد</label>
            <input v-model="product.traffic"
                   class="w-full block border border-gray-200 rounded px-3 py-2 leading-6 focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50"
                   type="number" placeholder="میزان تردد محصول"/>
          </div>

          <div class="space-y-1">
            <label class="font-medium">نوع درب</label>
            <t-rich-select
              class="w-full block border border-gray-200 rounded px-3 py-2 leading-6 focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50"
              placeholder="چند انتخابی"
              :close-on-select="false"
              v-model="product.type_id"
              :options="types"
              valueAttribute="id"
              textAttribute="name"
            >
            </t-rich-select>
          </div>
          <div class="space-y-1">
            <label class="font-medium">کاربرد درب</label>
            <t-rich-select
              class="w-full block border border-gray-200 rounded px-3 py-2 leading-6 focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50"
              placeholder="چند انتخابی"
              :close-on-select="false"
              v-model="product.usage_id"
              :options="usages"
              valueAttribute="id"
              textAttribute="name"
            >
            </t-rich-select>
          </div>
          <div class="space-y-1">
            <label class="font-medium">فریم های درب</label>
            <t-rich-select
              class="w-full block border border-gray-200 rounded px-3 py-2 leading-6 focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50"
              placeholder="چند انتخابی"
              multiple
              :close-on-select="false"
              v-model="product.frames"
              :options="frames"
              valueAttribute="id"
              textAttribute="name"
            >
            </t-rich-select>
          </div>

          <div class="space-y-1">
            <label class="font-medium">اپراتور های درب</label>
            <t-rich-select
              class="w-full block border border-gray-200 rounded px-3 py-2 leading-6 focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50"
              placeholder="چند انتخابی"
              multiple
              :close-on-select="false"
              v-model="product.operators"
              :options="operators"
              valueAttribute="id"
              textAttribute="name"
            >
            </t-rich-select>
          </div>

          <div class="space-y-1">
            <label class="font-medium">توضیحات محصول</label>
            <client-only placeholder="loading...">
              <ckeditor-nuxt id="description" v-model="product.description" :config="editorConfig"/>
            </client-only>
          </div>

          <div class="space-y-1">
            <label class="font-medium">تصویر شاخص</label>
            <div class="sm:w-full items-center text-center">
              <div class="p-2  upload-box-title-box rounded-lg bg-gray-100 text-center  relative"
                   @click="onUploadClicked">
                <div class="p-10 text-center flex flex-col border-2 border-dashed border-gray-500 rounded-lg">
                  <div class="upload-box-title-text text-gray-700 ir-medium text-sm">
                    تصویر شاخص
                  </div>
                  <div class="my-3 text-gray-600 text-sm">فرمت‌های فایل مورد پذیرش برای تصویر (حداکثر حجم مورد پذیرش: ۱۰
                    مگابایت)
                  </div>
                  <div class="my-3 flex justify-center">
                    <div class="px-2 py-1 bg-gray-200 rounded text-gray-600">PNG</div>
                    <div class="px-2 py-1 mx-1 bg-gray-200 rounded text-gray-600">JPG</div>
                    <div class="px-2 py-1 ml-1 bg-gray-200 rounded text-gray-600">JPEG</div>
                    <div class="px-2 py-1 bg-gray-200 rounded text-gray-600">GIF</div>
                  </div>
                  <div class="my-5 upload-box-title-input">
                    <!--            <img src="/images/upload-icon.png">-->
                    <div
                      class="flex m-auto w-32 border-2 py-2 px-1 rounded-lg border-solid border-gray-500 text-gray-600 bg-gray-200 justify-center  text-sm">
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
          <div class="space-y-1">
            <label class="font-medium">تصویر اسلاید</label>
            <div class="sm:w-full items-center text-center">
              <div class="p-2  upload-box-title-box rounded-lg bg-gray-100 text-center  relative"
                   @click="onUploadClickedSlider">
                <div class="p-10 text-center flex flex-col border-2 border-dashed border-gray-500 rounded-lg">
                  <div class="upload-box-title-text text-gray-700 ir-medium text-sm">
                    تصویر اسلایدر
                  </div>
                  <div class="my-3 text-gray-600 text-sm">فرمت‌های فایل مورد پذیرش برای تصویر (حداکثر حجم مورد پذیرش: ۱۰
                    مگابایت)
                  </div>
                  <div class="my-3 flex justify-center">
                    <div class="px-2 py-1 bg-gray-200 rounded text-gray-600">PNG</div>
                    <div class="px-2 py-1 mx-1 bg-gray-200 rounded text-gray-600">JPG</div>
                    <div class="px-2 py-1 ml-1 bg-gray-200 rounded text-gray-600">JPEG</div>
                    <div class="px-2 py-1 bg-gray-200 rounded text-gray-600">GIF</div>
                  </div>
                  <div class="my-5 upload-box-title-input">
                    <!--            <img src="/images/upload-icon.png">-->
                    <div
                      class="flex m-auto w-32 border-2 py-2 px-1 rounded-lg border-solid border-gray-500 text-gray-600 bg-gray-200 justify-center  text-sm">
                      <i class="fal fa-upload"></i>
                      <div class=" mr-2">آپلود تصویر</div>
                    </div>
                    <input ref="slider" accept="image/jpeg,png" multiple type="file" hidden @change="onFileSlider">
                    <img src=""/>
                  </div>

                </div>
              </div>
            </div>

          </div>
          <div v-for="i in sliders">
            <img :src="i.images">
          </div>

          <div class="space-y-1">
            <label class="font-medium">ویدیو محصول</label>
            <div class="sm:w-full items-center text-center">
              <div class="p-2  upload-box-title-box rounded-lg bg-gray-100 text-center  relative"
                   @click="onUploadClickedVideo">
                <div class="p-10 text-center flex flex-col border-2 border-dashed border-gray-500 rounded-lg">
                  <div class="upload-box-title-text text-gray-700 ir-medium text-sm">
                    ویدیو محصول
                  </div>
                  <div class="my-3 text-gray-600 text-sm">فرمت‌های فایل مورد پذیرش برای ویدئو (حداکثر حجم مورد پذیرش: ۱۰
                    مگابایت)
                  </div>
                  <div class="my-3 flex justify-center">
                    <div class="px-2 py-1 bg-gray-200 rounded text-gray-600">MP4</div>
                  </div>
                  <div class="my-5 upload-box-title-input">
                    <div
                      class="flex m-auto w-32 border-2 py-2 px-1 rounded-lg border-solid border-gray-500 text-gray-600 bg-gray-200 justify-center  text-sm">
                      <i class="fal fa-upload"></i>
                      <div class=" mr-2">آپلود ویدئو</div>
                    </div>
                    <input ref="video" accept="video/*" multiple type="file" hidden @change="onFileVideo">
                  </div>

                </div>
              </div>
            </div>

          </div>

          <button type="submit"
                  class="py-3 w-full flex justify-center items-center bg-[#4B1752] text-white font-bold rounded hover:bg-[#2C0531]"
                  @click.prevent="save_product">
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
import {
  TRichSelect,
} from 'vue-tailwind/dist/components'
import VueTailwind from 'vue-tailwind';

export default {
  name: "addNewProduct",
  layout: 'admin',
  components: {
    Price,
    TRichSelect,
    VueTailwind,
    'ckeditor-nuxt': () => {
      if (process.client) {
        return import('@blowstack/ckeditor-nuxt')
      }
    },
  },
  data() {
    return {
      base64: '',
      editModal: '',
      deleteModal: '',
      sliders: [],
      videos: [],
      product: {
        title: "",
        description: "",
        images: [],
        videos: [],
        components: [],
        operators: [],
        glasses: [],
        frames: [],
        permissions: [],
        technicals: [],
        catalogs: [],
        maps: [],
        thumbnail: "",
        type_id: null,
        usage_id: null,
      },
      editorConfig: {
        simpleUpload: {
          uploadUrl: '/upload',
          headers: {
            "Access-Control-Allow-Origin": "*",
            'Authorization': `Bearer ${this.$cookies.get('token')}`
          }
        },
        plugins: [
          'Alignment',
          'BlockQuote',
          'Bold',
          'Italic',
          'Link',
          'List',
          'ListStyle',
          'Code',
          'FontFamily',
          'FontColor',
          'FontSize',
          'Heading',
          'Highlight',
          'Image',
          'ImageCaption',
          'ImageResize',
          'ImageStyle',
          'ImageUpload',
          'Table',
          'SimpleUploadAdapter'
        ],
        toolbar: [
          'Alignment',
          'BlockQuote',
          'Bold',
          'Italic',
          'Link',
          'List',
          'ListStyle',
          'Code',
          'FontFamily',
          'FontColor',
          'FontSize',
          'Heading',
          'Highlight',
          'Image',
          'ImageCaption',
          'ImageResize',
          'ImageStyle',
          'ImageUpload',
          'Table',
          'SimpleUploadAdapter'
        ]
      },
    }
  },
  mounted() {
    this.getTypes()
    this.getFrames()
    this.getGlasses()
    this.getUsages()
    this.getOperators()
  },
  methods: {
    getGlasses() {
      this.$store.dispatch('inquiry/getGlasses')
    },
    getFrames() {
      this.$store.dispatch('inquiry/getFrames')
    },
    getTypes() {
      this.$store.dispatch('inquiry/getCategories', 'product')
    },
    getUsages() {
      this.$store.dispatch('inquiry/getUsages')
    },
    getOperators() {
      this.$store.dispatch('inquiry/getOperators')
    },
    onUploadClickedVideo() {
      this.$refs.video.click()
    },
    onUploadClickedSlider() {
      this.$refs.slider.click()
    },
    onUploadClicked() {
      this.$refs.upload.click()
    },
    async onFileDropSlider(e) {
      const base64 = await this.$toBase64(e.target.files[0])
      this.base64 = base64.data
      const data = new FormData()
      data.set('file_type', base64.type)
      data.set('base64_file', base64.base64)
    },
    async onFileDropVideo(e) {
      const base64 = await this.$toBase64(e.target.files[0])
      this.base64 = base64.data
      const data = new FormData()
      data.set('file_type', base64.type)
      data.set('base64_file', base64.base64)
    },
    async onFileDrop(e) {
      const base64 = await this.$toBase64(e.target.files[0])
      this.base64 = base64.data
      const data = new FormData()
      data.set('file_type', base64.type)
      data.set('base64_file', base64.base64)
    },
    async onFileVideo(e) {
      const file = e.target.files[0];
      const base64 = await this.$toBase64(e.target.files[0])
      this.videos.push(base64.data)
      const data = new FormData()
      data.set('file_type', base64.type)
      data.set('base64_file', base64.base64)
      const dataForm = new FormData();
      dataForm.set('file', file);
      this.$store.dispatch('latestArticles/uploadImage', dataForm)
        .then((response) => {
          this.product.videos.push(response.url)
        })
        .catch((error) => {
        })
    },
    async onFileSlider(e) {
      const file = e.target.files[0];
      const base64 = await this.$toBase64(e.target.files[0])
      this.videos.push(base64.data)
      const data = new FormData()
      data.set('file_type', base64.type)
      data.set('base64_file', base64.base64)
      const dataForm = new FormData();
      dataForm.set('file', file);
      this.$store.dispatch('latestArticles/uploadImage', dataForm)
        .then((response) => {
          this.product.images.push(response.url)
        })
        .catch((error) => {
        })
    },
    async onFile(e) {
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
          this.product.thumbnail = response.url
        })
        .catch((error) => {
        })
    },
    async save_product() {
      await this.$store.dispatch('product/addNewProduct/saveProduct', this.product)
        .then(res => {
        })
        .catch(err => console.log(err))
    },

    validate() {
      if (this.product.title !== "" && this.product.description !== "") {
        this.save_product();
      } else {
        alert("something went wrong")
      }
    },
  },
  computed: {
    frames() {
      return this.$store.getters['inquiry/getFrames']
    },
    glasses() {
      return this.$store.getters['inquiry/getGlasses']
    },
    types() {
      return this.$store.getters['inquiry/getCategories']
    },
    usages() {
      return this.$store.getters['inquiry/getUsages']
    },
    operators() {
      return this.$store.getters['inquiry/getOperators']
    },
  }
}
</script>
