<template>
  <div>
    <main-header></main-header>
    <product-category></product-category>
    <main-footer></main-footer>
  </div>
</template>

<script>
import mainHeader from '~/components/header/mainHeader';
import productCategory from "~/components/product/productCategory";
import mainFooter from "~/components/footer/mainFooter";
export default {
  components:{
    mainHeader,
    productCategory,
    mainFooter,
  },
  name: "index"
}
</script>
