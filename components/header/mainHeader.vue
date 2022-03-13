<template>
  <div class="bg-[#F7F8FA]">
    <!--header-->
    <header class="pb-5 mx-auto px-5 max-w-7xl">

      <!-- Topbar -->
      <div class="border-b">
        <div class="py-1 w-full flex items-center justify-between ">

          <!-- Navigation -->
          <div>
            <nav class="text-sm md:text-base space-x-4 space-x-reverse">
              <a href="/FAQ" class="text-sm font-medium text-gray-900 hover:text-gray-500">سوالات متداول</a>
              <a href="/blog" class="text-sm font-medium text-gray-900 hover:text-gray-500">مقالات</a>
              <a href="/gallery" class="text-sm font-medium text-gray-900 hover:text-gray-500">گالری ویدیو</a>
              <a href="/aboutUs" class="text-sm font-medium text-gray-900 hover:text-gray-500">درباره ما</a>
              <a href="/connectUs" class="text-sm font-medium text-gray-900 hover:text-gray-500">تماس با ما</a>
            </nav>
          </div>
          <!-- END Navigation -->

          <!-- Logo -->
          <nuxt-link to="/" class="">
            <img width="50px" height="40px" src="@/static/images/logo.svg"/>
          </nuxt-link>
          <!-- END Logo -->

        </div>
      </div>
      <!-- END Topbar -->

      <div class="py-1 w-full md:flex items-center justify-between ">

        <!-- Navigation -->
        <div>
          <nav class="text-sm md:text-base space-x-4 space-x-reverse">
            <a href="/products/types" class="text-sm font-medium text-gray-900 hover:text-gray-500">انواع درب های اتوماتیک</a>
            <a href="/products/application" class="text-sm font-medium text-gray-900 hover:text-gray-500">کاربردهای درب اتوماتیک</a>
            <a href="/ingredients" class="text-sm font-medium text-gray-900 hover:text-gray-500">اجزای درب اتوماتیک</a>
          </nav>
        </div>
        <!-- END Navigation -->

        <!-- shopping card & btn -->
        <div class="py-2 flex items-center">
          <div>
            <a href="/shoppingCard">
              <div class="p-2.5 rounded bg-[#FFE6E0] hover:bg-gray-100">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="17.779" viewBox="0 0 20 17.779">
                  <defs>
                    <style>.ashop {
                      fill: #ba4b30;
                    }</style>
                  </defs>
                  <path class="ashop"
                        d="M6.08,14.445a1.64,1.64,0,0,0-1.635,1.667,1.636,1.636,0,1,0,3.271,0A1.621,1.621,0,0,0,6.08,14.445Zm10,0a1.64,1.64,0,0,0-1.635,1.667,1.636,1.636,0,1,0,3.271,0A1.621,1.621,0,0,0,16.081,14.445ZM19.775,1.553a1.1,1.1,0,0,0-.888-.442H4.205L4.153.677A.836.836,0,0,0,3.333,0H.8A.821.821,0,0,0,0,.8a.836.836,0,0,0,.8.865h1.81l2.093,10.99a.9.9,0,0,0,.85.677H16.945a.828.828,0,0,0,.833-.8.839.839,0,0,0-.833-.865H6.247L5.927,10H16.983a1.112,1.112,0,0,0,1.068-.806l1.9-6.636A1.151,1.151,0,0,0,19.775,1.553ZM16.563,8.334H5.611L4.553,2.778h13.6Z"/>
                </svg>
              </div>
            </a>
          </div>
          <div class="mr-6">
            <a href="/priceInquiry"
               class="px-4 py-2 inline-flex items-center border text-sm text-white rounded-md shadow-sm shadow-[#2C053129] bg-[#4B1752] hover:text-gray-800 hover:bg-gray-100 hover:border-gray-300 hover:shadow">
              استعلام قیمت
            </a>
          </div>
        </div>
        <!-- END shopping card & btn -->

      </div>

    </header>

  </div>
</template>

<script>

export default {
  name: "mainHeader"
}
</script>

<style scoped>

</style>
