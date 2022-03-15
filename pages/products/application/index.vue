<template>
<div>
  <main-header></main-header>
  <aplication></aplication>
  <main-footer></main-footer>
</div>
</template>

<script>
import mainHeader from '@/components/header/mainHeader';
import aplication from "~/components/products/aplication";
import mainFooter from "~/components/footer/mainFooter";

export default {
  components:{
    mainHeader,
    aplication,
    mainFooter,
  },
  name: "index.vue"
}
</script>

<style scoped>

</style>
