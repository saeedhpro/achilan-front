<template>
  <div>
    <main-header></main-header>
    <license></license>
    <main-footer></main-footer>

  </div>
</template>

<script>
import mainHeader from '@/components/header/mainHeader';
import license from "~/components/licenses/license";
import mainFooter from "~/components/footer/mainFooter";

export default {
  name: "index",
  components: {
    mainHeader,
    license,
    mainFooter,

  }
}
</script>

<style scoped>

</style>
