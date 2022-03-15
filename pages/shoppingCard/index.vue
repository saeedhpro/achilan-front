<template>
  <div>
    <main-header></main-header>
    <price></price>
    <main-footer></main-footer>

  </div>
</template>

<script>
import mainHeader from '@/components/header/mainHeader';
import price from "~/components/shoppingCard/price";
import mainFooter from "~/components/footer/mainFooter";

export default {
  name: "index",
  components: {
    mainHeader,
    price,
    mainFooter,
  },
}
</script>

<style scoped>

</style>
