<template>
<div>
  <main-header></main-header>
  <sliding-doors></sliding-doors>
  <main-footer></main-footer>
</div>
</template>

<script>
import mainHeader from '~/components/header/mainHeader';
import slidingDoors from "~/components/products/slidingDoors";
import mainFooter from "~/components/footer/mainFooter";

export default {
  components:{
    mainHeader,
    slidingDoors,
    mainFooter,
  },
  name: "index"
}
</script>
