<template>
  <div>
    <main-header></main-header>
    <blog1></blog1>
    <main-footer></main-footer>
  </div>
</template>

<script>
import mainHeader from "~/components/header/mainHeader";
import blog1 from "~/components/blog/blog1";
import mainFooter from "~/components/footer/mainFooter";

export default {
  components:{
    mainHeader,
    blog1,
    mainFooter,
  },

  name: "index"
}
</script>



<style scoped>

</style>
