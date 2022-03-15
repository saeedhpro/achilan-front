<template>
  <div>
    <main-header></main-header>
    <frequently-asked-questions></frequently-asked-questions>
    <main-footer></main-footer>
  </div>
</template>

<script>
import mainHeader from '@/components/header/mainHeader';
import frequentlyAskedQuestions from "~/components/faq/frequentlyAskedQuestions";
import mainFooter from "~/components/footer/mainFooter";
export default {
  name: "index",
  components: {
    mainHeader,
    frequentlyAskedQuestions,
    mainFooter,

  }
}
</script>
