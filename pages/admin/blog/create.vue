<template>
  <div class="bg-[#F7F8FA]">
    <div class="mx-auto py-6 px-5 max-w-7xl">
      <h3 class="mr-2 py-2 font-bold text-xl underline decoration-4 decoration-[#FFB508] underline-offset-1">ایجاد
        مقاله</h3>
      <FormAdmin/>
    </div>
  </div>
</template>

<script>
import FormAdmin from "../../../components/admin/FormAdmin";

export default {
  name: "create",
  components: {FormAdmin},
  comments: {FormAdmin},
  layout: 'admin',
  // middleware:'admin',

}
</script>
