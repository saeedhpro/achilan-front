<template>
  <div class="container">
    <div class="relative bg-white rounded-lg shadow-lg">
      <TableAdmin>
        <div slot="head-name">لیست نظرات</div>
        <div slot="head1">ردیف</div>
        <div slot="head2">کامنت</div>
<!--        <div slot="head3">عنوان مقاله</div>-->
<!--        <div slot="head4">نویسنده</div>-->
<!--        <div slot="head5">دسته بندی</div>-->
<!--        <div slot="head6">زمان انتشار</div>-->
        <div slot="head7">عملیات</div>
      </TableAdmin>
      <div v-for="(item, index) in articlesList" :key="index" class="my-8 px-10 pb-5 flex justify-between border-b-2 border-gray-400 border-dashed">
        <div class="text-black text-sm">{{index + 1}}</div>
        <div class="text-black text-sm">
          <img class="w-20 h-20 rounded-lg" v-if="item.thumbnail" :src="item.thumbnail.path"/>
        </div>
        <div class="text-black text-sm">{{item.title}}</div>
        <div class="text-black text-sm">{{item.user.first_name}}  {{item.user.last_name}}</div>
        <div class="text-black text-sm">{{item.category.name}}</div>
        <div class="text-black text-sm">{{ $moment(item.created_at).format('jYYYY/jM/jDD') }}</div>
        <div class="text-black text-sm ">
          <span @click="deleteArticle(item.id)"><i class="fal fa-trash-alt mr-3"></i></span>
          <nuxt-link :to="`/blog/${item.id}`"  ><i class="fal fa-eye mx-3"></i></nuxt-link>
          <nuxt-link :to="`/admin/Article/edit/${item.id}`" style="cursor: pointer">
            <i class="fal fa-edit" ></i>
          </nuxt-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TableAdmin from "../../components/admin/TableAdmin";
export default {
  name: "Comments",
  layout:'admin',
  components: {TableAdmin},

}
</script>

<style scoped>

</style>
