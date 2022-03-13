<template>
  <div>
    <main-header></main-header>
    <samples-video></samples-video>
    <main-footer></main-footer>
  </div>
</template>

<script>
import MainHeader from "~/components/header/mainHeader";
import MainFooter from "~/components/footer/mainFooter";
import SamplesVideo from "~/components/samples/samplesVideo";

export default {
  name: "index",
  components: {SamplesVideo, MainFooter, MainHeader}
}
</script>

<style scoped>

</style>
