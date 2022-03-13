<template>
  <div>
    <main-header></main-header>
    <magazine></magazine>
    <main-footer></main-footer>

  </div>
</template>

<script>
import mainHeader from '@/components/header/mainHeader';
import magazine from "~/components/magazines/magazine";
import mainFooter from "~/components/footer/mainFooter";

export default {
  name: "index",
  components: {
    mainHeader,
    magazine,
    mainFooter,

  }
}
</script>

<style scoped>

</style>
