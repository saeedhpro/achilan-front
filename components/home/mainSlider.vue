<template>
  <div class="bg-[#F7F8FA]">
    <div class="mx-auto pb-6 px-5 max-w-7xl">
      <div class="flex">

        <div class="px-3 lg:w-1/3 w-full max-h-[30rem] bg-[#282828] overflow-auto rounded">

          <div v-for="item in videos" :key="videos" @click="setInfo(item)"
               class="flex items-center border-b hover:bg-gray-600">

            <div class="p-3  w-1/3">
              <img class="h-24 w-full block rounded" :src=item.thumbnail>
<!--              <video-player class="h-24 w-full block rounded" :src="item.image"/>-->
              <video class="w-full block h-[30rem] rounded" controls v-if="item.url">
                <source :src="item.url" type="video/mp4">
              </video>
            </div>

            <div class="w-2/3 text-white">
              <p class="pb-2 text-xs font-bold"> {{ item.title }}</p>
              <p class="text-xs">{{ item.description }}</p>
            </div>

          </div>

        </div>

        <div class="pr-3 flex-1 md:pr-6 lg:flex hidden">
<!--          <video-player :src="imgsrc" class="w-full block h-[30rem] rounded"/>-->
<!--          <video-player class="w-full block h-[30rem] rounded" :src=""/>-->
          <video class="w-full block h-[30rem] rounded" controls v-if="video">
            <source :src="video" type="video/mp4">
          </video>
          <video class="w-full block h-[30rem] rounded" controls v-else>
            <source :src="video" type="video/mp4">
          </video>
        </div>

      </div>
    </div>
  </div>
</template>

<script>

export default {

  data() {
    return {
      video:null,
      state: false,
      // videos: "https://www.aparat.com/v/vmbIS",
      imgsrc: "https://picsum.photos/200/300?random=10",
      names: "معرفی آچیلان در و انواع محصولات درب های اتوماتیک",
      description: "توضیحات درمورد ویدیو معرفی آچیلان در و انواع درب های اتوماتیک و...",

      slides: [
        {
          image: "https://hivantech.ir/wp-content/uploads/2022/03/sample.mp4",
          dec: "توضیحات درمورد ویدیو معرفی آچیلان در و انواع درب های اتوماتیک و ...",
          num: 1,
          name: "معرفی آچیلان در و انواع محصولات درب های اتوماتیک",
        },
        {
          image: "https://picsum.photos/200/300?random=13",
          dec: "توضیحات درمورد ویدیو معرفی آچیلان در و انواع درب های اتوماتیک و ...",
          num: 2,
          name: "معرفی آچیلان در و انواع محصولات درب های اتوماتیک",
        },
        {
          image: "https://picsum.photos/200/300?random=14",
          dec: "توضیحات درمورد ویدیو معرفی آچیلان در و انواع درب های اتوماتیک و ...",
          num: 3,
          name: "معرفی آچیلان در و انواع محصولات درب های اتوماتیک",
        },
        {
          image: "https://picsum.photos/200/300?random=5",
          dec: "توضیحات درمورد ویدیو معرفی آچیلان در و انواع درب های اتوماتیک و ...",
          num: 4,
          name: "معرفی آچیلان در و انواع محصولات درب های اتوماتیک",
        },
        {
          image: "https://picsum.photos/200/300?random=13",
          dec: "توضیحات درمورد ویدیو معرفی آچیلان در و انواع درب های اتوماتیک و ...",
          num: 5,
          name: "معرفی آچیلان در و انواع محصولات درب های اتوماتیک",
        },
        {
          image: "https://picsum.photos/200/300?random=14",
          dec: "توضیحات درمورد ویدیو معرفی آچیلان در و انواع درب های اتوماتیک و ...",
          num: 6,
          name: "معرفی آچیلان در و انواع محصولات درب های اتوماتیک",
        },
        {
          image: "https://picsum.photos/200/300?random=15",
          dec: "توضیحات درمورد ویدیو معرفی آچیلان در و انواع درب های اتوماتیک و ...",
          num: 7,
          name: "معرفی آچیلان در و انواع محصولات درب های اتوماتیک",
        },
        {
          image: "https://picsum.photos/200/300?random=16",
          dec: "توضیحات درمورد ویدیو معرفی آچیلان در و انواع درب های اتوماتیک و ...",
          num: 8,
          name: "معرفی آچیلان در و انواع محصولات درب های اتوماتیک",
        },
        {
          image: "https://picsum.photos/200/300?random=14",
          dec: "توضیحات درمورد ویدیو معرفی آچیلان در و انواع درب های اتوماتیک و ...",
          num: 9,
          name: "معرفی آچیلان در و انواع محصولات درب های اتوماتیک",
        },
        {
          image: "https://picsum.photos/200/300?random=15",
          dec: "توضیحات درمورد ویدیو معرفی آچیلان در و انواع درب های اتوماتیک و ...",
          num: 10,
          name: "معرفی آچیلان در و انواع محصولات درب های اتوماتیک",
        },
        {
          image: "https://picsum.photos/200/300?random=16",
          dec: "توضیحات درمورد ویدیو معرفی آچیلان در و انواع درب های اتوماتیک و ...",
          num: 11,
          name: "معرفی آچیلان در و انواع محصولات درب های اتوماتیک",
        },
      ],
    }
  },

  methods: {
    setInfo(h) {
      this.video = null
      setTimeout(() =>{
        this.video = h.url
        this.title = h.title
        this.description = h.description

      }, 200 )

    }
  },
  mounted() {
    this.$store.dispatch('video/getVideos')
  },

  computed: {
    videos() {
      return this.$store.getters['video/getVideos']
    },
  },
}
</script>

<style scoped>

</style>
