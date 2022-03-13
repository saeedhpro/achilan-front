<template>
<div>
  <main-header></main-header>
  <types-product></types-product>
  <main-footer></main-footer>
</div>
</template>

<script>
import mainHeader from '~/components/header/mainHeader';
import mainFooter from "~/components/footer/mainFooter";
import TypesProduct from "~/components/products/typesProduct";

export default {
  components:{
    TypesProduct,
    mainHeader,
    mainFooter,
  },
  name: "index"
}
</script>
