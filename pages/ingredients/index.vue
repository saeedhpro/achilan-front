<template>
  <div>
    <main-header></main-header>
    <ingredient></ingredient>
    <main-footer></main-footer>

  </div>
</template>

<script>
import mainHeader from '@/components/header/mainHeader';
import ingredient from "~/components/ingredients/ingredient";
import mainFooter from "~/components/footer/mainFooter";

export default {
  name: "index",
  components: {
    mainHeader,
    ingredient,
    mainFooter,

  }
}
</script>

<style scoped>

</style>
