<template>
<div class="h-20 p-5  shadow-lg flex justify-between">
  <nuxt-link to="/admin/order/list">لیست سفارشات</nuxt-link>
  <nuxt-link to="/admin/faq/list">سوالات متداول</nuxt-link>
  <nuxt-link to="/admin/Blog">مقالات</nuxt-link>
<!--  <nuxt-link to="/admin/ContactUs">تماس باما</nuxt-link>-->
  <nuxt-link to="/admin/products/listOfProducts">محصولات</nuxt-link>
  <nuxt-link to="/admin/videos/list">لیست ویدیوها</nuxt-link>
  <nuxt-link to="/admin/portfolios/list">لیست نمونه کارها</nuxt-link>
  <nuxt-link to="/admin/usages/list">لیست کاربردهای درب اتوماتیک</nuxt-link>
  <nuxt-link to="/admin/components/list">لیست اجزا درب اتوماتیک</nuxt-link>
  <nuxt-link to="/admin/frame/list">لیست فریم</nuxt-link>
<!--  <nuxt-link to="/admin/Grouping">دسته بندی</nuxt-link>-->
<!--  <nuxt-link to="/admin/Comments">نظرات کاربران</nuxt-link>-->
<!--  <nuxt-link to="/admin/NewsLetters">خبرنامه</nuxt-link>-->
<!--  <nuxt-link to="/admin/SMSSettings">تنظیمات پیامک</nuxt-link>-->
  <button>خروج</button>
</div>
</template>

<script>
export default {
  name: "Header"
}
</script>

<style scoped>

</style>
