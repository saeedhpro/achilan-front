<template>

  <div>
    <main-header></main-header>
    <file-information></file-information>
    <main-footer></main-footer>

  </div>

</template>

<script>
import mainHeader from '@/components/header/mainHeader';
import mainFooter from "~/components/footer/mainFooter";
import FileInformation from "~/components/fileInfo/fileInformation";

export default {
  name: "index",
  components: {
    FileInformation,
    mainHeader,
    mainFooter,
  }
}
</script>

<style scoped>

</style>

