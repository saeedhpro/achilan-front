<template>
<div>
  <main-header></main-header>
  <types></types>
  <main-footer></main-footer>
</div>
</template>

<script>
import mainHeader from '@/components/header/mainHeader';
import types from "~/components/products/types";
import mainFooter from "~/components/footer/mainFooter";

export default {
  components:{
    mainHeader,
    types,
    mainFooter,
  },
  name: "index.vue"
}
</script>
