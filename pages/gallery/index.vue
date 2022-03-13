<template>
  <div>
    <main-header></main-header>
    <video-gallery></video-gallery>
    <main-footer></main-footer>
  </div>
</template>

<script>
import mainHeader from '@/components/header/mainHeader';
import videoGallery from "~/components/gallery/videoGallery";
import mainFooter from "~/components/footer/mainFooter";

export default {
  name: "index",

  components: {
    mainHeader,
    videoGallery,
    mainFooter,

  }
}
</script>

<style scoped>

</style>
