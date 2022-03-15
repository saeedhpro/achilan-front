<template>

  <div>
    <main-header></main-header>
    <maps></maps>
    <main-footer></main-footer>
  </div>

</template>

<script>
import mainHeader from '@/components/header/mainHeader';
import maps from "~/components/maps/maps";
import mainFooter from "~/components/footer/mainFooter";
export default {
  name: "index",
  components: {
    mainHeader,
    maps,
    mainFooter,

  }
}
</script>

<style scoped>

</style>
