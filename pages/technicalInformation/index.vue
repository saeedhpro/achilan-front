<template>

  <div>
    <main-header></main-header>
    <technical-information></technical-information>
    <main-footer></main-footer>

  </div>

</template>

<script>
import mainHeader from '@/components/header/mainHeader';
import technicalInformation from "~/components/technicalInfo/technicalInformation";
import mainFooter from "~/components/footer/mainFooter";

export default {
  name: "index",
  components: {
    mainHeader,
    technicalInformation,
    mainFooter,

  }
}
</script>

<style scoped>

</style>

