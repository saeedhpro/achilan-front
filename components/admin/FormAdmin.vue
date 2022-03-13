<template>
  <div class="border border-gray-200 rounded overflow-x-auto min-w-full bg-white">
    <form
      id="app"
      @submit="checkForm"
      action="https://vuejs.org/"
      method="post"
      class="w-full p-3 rounded-lg border-2 border-gray-500 border-solid"
    >
      <div v-if="errors.length">
        <b>Please correct the following error(s):</b>
        <ul>
          <li v-for="error in errors">{{ error }}</li>
        </ul>
      </div>

      <div>
        <label for="name">عنوان مقاله</label>
        <input
          id="name"
          v-model="title"
          type="text"
          name="name"
          class="w-full rounded-lg border-2 border-gray-500 border-solid"
        >
      </div>

      <div class="mt-6 mb-6">
        <label for="description">توضیحات مقاله</label>
        <client-only placeholder="loading...">
          <ckeditor-nuxt id="description" v-model="body" :config="editorConfig"/>
        </client-only>


      </div>
      <label>عکس مقاله</label>
      <div class="sm:w-full items-center text-center">
        <div class="p-2  upload-box-title-box rounded-lg bg-gray-100 text-center  relative"
             @click="onUploadClicked">
          <div class="p-10 text-center flex flex-col border-2 border-dashed border-gray-500 rounded-lg">
            <div class="upload-box-title-text text-gray-700 ir-medium text-sm">
              تصویر مقاله
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


      <div class="mt-6 mb-6">
        <label for="movie">انتخاب دسته بندی</label>
        <select
          id="movie"
          v-model="category_id"
          name="movie"
          class="w-full rounded-lg border-2 border-gray-500 border-solid"

        >
          <option v-for="(i , index) in getCategories" :key="index" :value="i.id">{{ i.name }}</option>
        </select>
      </div>
      <div class="w-full mt-5 px-1">
        <div class="my-2">تگ های مربوط به مقاله را وارد نمایید</div>
        <div class="text-sm text-gray-500 ir-light">بعد از وارد کردن هر تگ، "اینتر" را کلیک کنید</div>
        <input type="text" class="w-full sm:w-2/4  h-10 border-solid border-2 border-gray-600 rounded-lg bg-white"
               @keydown.enter="addTags" v-model="tag">
        <div class="flex flex-row justify-start pa-3 languages-box">
          <span @click="removeTags(l)" v-for="(l,i) in tags" :key="i"
                class="ir-light m-2 bg-greenFreelancer rounded-2xl click"
                style="color: #EEEEEE; padding: 8px;">{{ l }}</span>
        </div>
      </div>

      <!--    <p>-->
      <!--      <input-->
      <!--        type="submit"-->
      <!--        value="ثبت مقاله"-->
      <!--      >-->
      <!--    </p>-->
      <div class="my-10 sm:text-left text-center text-white">
        <button type="button"
                class="py-3 px-10 flex justify-center items-center bg-[#4B1752] text-white font-bold rounded hover:bg-[#2C0531]"
                @click="saveArticle">ثبت مقاله
        </button>
      </div>

    </form>
  </div>
</template>

<script>
export default {
  name: "FormAdmin",
  data() {
    return {
      errors: [],
      name: null,
      age: null,
      movie: null,
      base64: null,
      showSessionModal: false,
      courseAdded: false,
      title: null,
      body: null,
      category_id: null,
      image: null,
      thumbnail: null,
      tags: [],
      tag: null,
      editorConfig: {
        simpleUpload: {
          uploadUrl: '/upload',
          headers: {
            "Access-Control-Allow-Origin": "*",
            'Authorization': this.$cookies.get('token')
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
  components: {
    'ckeditor-nuxt': () => {
      if (process.client) {
        return import('@blowstack/ckeditor-nuxt')
      }
    },
  },
  methods: {
    checkForm: function (e) {
      if (this.name && this.age) {
        return true;
      }

      this.errors = [];

      if (!this.name) {
        this.errors.push('Name required.');
      }
      if (!this.age) {
        this.errors.push('Age required.');
      }

      e.preventDefault();
    },
    onUploadClicked() {
      this.$refs.upload.click()
    },
    async onFileDrop(e) {
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
          this.image = response.url
          this.thumbnail = response.url
        })
        .catch((error) => {
        })
    },
    saveArticle() {
      this.$store.dispatch('latestArticles/createBlog', {
        title: this.title,
        body: this.body,
        category_id: this.category_id,
        thumbnail: this.thumbnail,
        tags: this.tags
      })
        .then(res => {
          alert("مقاله با موفقیت ایجاد شد")
        })
        .catch(async err => {
          alert("در ایجاد مقاله مشکلی به وجود آمده است")
        })
    },
    getCategory() {
      this.$store.dispatch('inquiry/getCategories', 'article')
    },
    addTags() {
      const l = this.tags.find(i => i == this.tag);
      if (!l) {
        const tag = this.tag
        this.tags = [
          ...this.tags.slice(), tag
        ]
        this.tag = null;
      }
    },
    removeTags(tag) {
      const l = this.tags.findIndex(i => i == tag);
      if (l > -1) {
        // this.languages.splice(l,1);
        this.tags = [
          ...this.tags.filter(i => i != tag)
        ]
      }
    },
  },
  mounted() {
    this.getCategory()
  },
  computed: {
    getCategories() {
      return this.$store.getters['inquiry/getCategories']
    }
  }

}
</script>

<style scoped>
input, select {
  margin-left: 10px;
}
</style>
