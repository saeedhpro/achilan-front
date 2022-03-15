<template>
  <div>
    <main-header></main-header>
    <ingredients-page></ingredients-page>
    <main-footer></main-footer>
  </div>
</template>

<script>
import mainHeader from "~/components/header/mainHeader";
import ingredientsPage from "~/components/ingredients/ingredientsPage";
import mainFooter from "~/components/footer/mainFooter";

export default {
  name: "index",
  components:{
    mainHeader,
    ingredientsPage,
    mainFooter,
  },
}
</script>
