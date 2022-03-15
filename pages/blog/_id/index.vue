<template>
  <div>
    <main-header></main-header>
    <blog2></blog2>
    <main-footer></main-footer>
  </div>
</template>

<script>
import mainHeader from "~/components/header/mainHeader";
import blog2 from "~/components/blog/blog2";
import mainFooter from "~/components/footer/mainFooter";

export default {
  name: "index",
  components:{
    mainHeader,
    blog2,
    mainFooter,
  },

}
</script>
