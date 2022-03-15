<template>
  <div class="bg-[#F7F8FA]">

    <div class="mx-auto px-5 max-w-7xl">
      <ul role="list" class="py-10 grid grid-cols-1 gap-4 sm:grid-cols-1 md:grid-cols-3">

        <li class="col-span-1">

          <automatic-door-components></automatic-door-components>

        </li>
        <li class="col-span-1">

          <automatic-door-types></automatic-door-types>

        </li>
        <li class="col-span-1">

          <automatic-door-usage></automatic-door-usage>

        </li>

      </ul>
    </div>

  </div>
</template>

<script>
import automaticDoorComponents from "~/components/home/automaticDoorComponents";
import automaticDoorTypes from "~/components/home/automaticDoorTypes";
import automaticDoorUsage from "~/components/home/automaticDoorUsage";
export default {
  name: "detailsBox",
components:{
  automaticDoorComponents,
  automaticDoorTypes,
  automaticDoorUsage,
},

}
</script>

<style scoped>

</style>
