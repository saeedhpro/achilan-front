<template>

  <div>
    <main-header></main-header>
    <us></us>
    <main-footer></main-footer>
  </div>

</template>

<script>
import mainHeader from '@/components/header/mainHeader';
import us from "~/components/aboutUs/us";
import mainFooter from "~/components/footer/mainFooter";

export default {
  name: "index",
  components: {
    mainHeader,
    us,
    mainFooter,

  }
}
</script>

<style scoped>

</style>
