<template>
  <div>
    <main-header></main-header>
    <connect-ways></connect-ways>
    <main-footer></main-footer>

  </div>
</template>

<script>
import mainHeader from '@/components/header/mainHeader';
import connectWays from "~/components/connectUs/connectWays";
import mainFooter from "~/components/footer/mainFooter";

export default {
  name: "index",
  components: {
    mainHeader,
    connectWays,
    mainFooter,

  }
}
</script>

<style scoped>

</style>
