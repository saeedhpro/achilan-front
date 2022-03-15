<template>

  <client-only class="bg-[#F7F8FA]" v-if="product">

    <div class="mx-auto py-6 px-5 max-w-7xl md:flex">

      <!--right menu-->
      <div class="pl-6 md:w-1/4">

        <div class="mb-6">
          <vueper-slides
            :rtl="true"
            ref="vueperslides3"
            :touchable="false"
            fade
            :arrows="false"
            :bullets="false"
            @slide="$refs.vueperslides2.goToSlide($event.currentSlide.index, { emit: false })"
            fixed-height="236px">
            <vueper-slide v-for="(slide, i) in product.images" :key="i">
              <template #content>
                <img class="w-72 h-52 block" :src="slide">
              </template>
            </vueper-slide>

          </vueper-slides>

          <vueper-slides
            :rtl="true"
            class="no-shadow thumbnails py-2"
            ref="vueperslides2"
            @slide="$refs.vueperslides3.goToSlide($event.currentSlide.index, { emit: false })"
            :visible-slides="4"
            fixed-height="54px"
            :touchable="false"
            :bullets="false"
            :gap="2.5"
            :arrows="false">
            <vueper-slide v-for="(slide, i) in product.images" :key="i" @click.native="$refs.vueperslides2.goToSlide(i)">
              <template #content>
                <img class="w-72 h-52 block" :src="slide">
              </template>
            </vueper-slide>

          </vueper-slides>
        </div>

        <div class="">
          <a href="#"
             class="pr-4 py-3 flex block bg-white border border-[#E1E3EB] text-sm items-center rounded shadow-sm hover:text-gray-800 hover:bg-[#FFFAEB] hover:border-[#2C0531] hover:shadow">
            <svg xmlns="http://www.w3.org/2000/svg" width="19.022" height="20" viewBox="0 0 19.022 20">
              <defs>
                <style>.a1 {
                  fill: #2c0531;
                }

                .b1 {
                  fill: #ffb508;
                  opacity: 0.4;
                }</style>
              </defs>
              <g transform="translate(-12.527)">
                <g transform="translate(12.527)">
                  <path class="a1"
                        d="M31.549,12.969a.641.641,0,0,0-.32-.55l-1.821-1.051A7.785,7.785,0,0,0,29.538,10a7.826,7.826,0,0,0-.13-1.368l1.821-1.051a.641.641,0,0,0,.32-.55c0-.551-1.64-3.869-2.495-3.869a.645.645,0,0,0-.322.086L26.907,4.3a7.5,7.5,0,0,0-2.369-1.367V.831a.628.628,0,0,0-.489-.618,9.584,9.584,0,0,0-4.021,0,.63.63,0,0,0-.489.618v2.1A7.5,7.5,0,0,0,17.17,4.3L15.344,3.248a.642.642,0,0,0-.322-.086c-.77,0-2.495,3.2-2.495,3.869a.641.641,0,0,0,.32.55l1.821,1.051a7.236,7.236,0,0,0,0,2.736l-1.821,1.051a.641.641,0,0,0-.32.55c0,.551,1.64,3.869,2.495,3.869a.644.644,0,0,0,.322-.086L17.169,15.7a7.481,7.481,0,0,0,2.369,1.365v2.1a.628.628,0,0,0,.489.618A9.67,9.67,0,0,0,22,20a10.046,10.046,0,0,0,2.011-.213.657.657,0,0,0,.524-.619v-2.1A7.487,7.487,0,0,0,26.907,15.7l1.825,1.054a.644.644,0,0,0,.322.086C29.823,16.836,31.549,13.637,31.549,12.969Zm-9.512.156A3.125,3.125,0,1,1,25.163,10,3.129,3.129,0,0,1,22.038,13.125Z"
                        transform="translate(-12.527)"/>
                  <path class="b1" d="M225.25,226.5a1.25,1.25,0,1,1,1.25-1.25A1.254,1.254,0,0,1,225.25,226.5Z"
                        transform="translate(-215.739 -215.25)"/>
                </g>
              </g>
            </svg>
            <span class="mr-1">اطلاعات فنی</span>
          </a>
          <a href="#"
             class="pr-4 py-3 flex block bg-white border border-[#E1E3EB] text-sm items-center rounded shadow-sm hover:text-gray-800 hover:bg-[#FFFAEB] hover:border-[#2C0531] hover:shadow">
            <svg xmlns="http://www.w3.org/2000/svg" width="17.5" height="20" viewBox="0 0 17.5 20">
              <defs>
                <style>.a2 {
                  fill: #2C0531;
                }

                .b2 {
                  fill: #ffb508;
                  opacity: 0.4;
                }</style>
              </defs>
              <path class="a2"
                    d="M3.75,15H16.563a.938.938,0,0,0,.938-.937V1.25A1.25,1.25,0,0,0,16.25,0H3.75A3.75,3.75,0,0,0,0,3.75v12.5A3.75,3.75,0,0,0,3.75,20H16.563a.938.938,0,0,0,.938-.937v-.625a.937.937,0,0,0-.937-.937H3.75a1.25,1.25,0,0,1,0-2.5ZM5.59,5h7.5a.635.635,0,0,1,.66.625.627.627,0,0,1-.625.625h-7.5A.626.626,0,0,1,5.59,5Zm0,2.5h7.5a.635.635,0,0,1,.66.625.627.627,0,0,1-.625.625h-7.5A.626.626,0,0,1,5.59,7.5Z"/>
              <path class="b2" d="M77.75,384v2.5H65.25a1.25,1.25,0,0,1,0-2.5Z" transform="translate(-61.5 -369)"/>
            </svg>
            <span class="mr-1">مجله ها</span>
          </a>
          <a href="#"
             class="pr-4 py-3 flex block bg-white border border-[#E1E3EB] text-sm items-center rounded shadow-sm hover:text-gray-800 hover:bg-[#FFFAEB] hover:border-[#2C0531] hover:shadow">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
              <defs>
                <style>.a3 {
                  fill: #2C0531;
                }

                .b3 {
                  fill: #ffb508;
                  opacity: 0.4;
                }</style>
              </defs>
              <g transform="translate(0)">
                <g transform="translate(0)">
                  <path class="a3"
                        d="M15,0V5h5ZM9.664,9.465c-.437-.445-.512-.5-.613-.84-.035-.113-.07-.258-.125-.461a1.116,1.116,0,0,0-.113-.281,1.143,1.143,0,0,0-.691-.539,2.049,2.049,0,0,1-.832-.312c-.07-.059-.148-.137-.293-.246-.02-.055-.117-.121-.156-.191a2.516,2.516,0,0,0-.332-.262c-.031.02-.059.008-.09,0a1.084,1.084,0,0,0-.387-.078h0a1.079,1.079,0,0,0-.293.039c.01,0,.019,0,.028,0-.009-.031-.021,0-.028,0a2.968,2.968,0,0,1-.773.16,3.145,3.145,0,0,1-.735-.161.741.741,0,0,0-.261-.038h0a1.1,1.1,0,0,0-.388.078c-.031.012-.059.023-.089,0a2.5,2.5,0,0,0-.332.262,1.809,1.809,0,0,1-1.279.75,1.15,1.15,0,0,0-.807.82A6.216,6.216,0,0,1,.9,8.773c-.086.223-.2.32-.564.691a1.023,1.023,0,0,0-.184.242,1.171,1.171,0,0,0-.113.883,1.843,1.843,0,0,1,0,1.5,1.168,1.168,0,0,0,.113.88,1.138,1.138,0,0,0,.184.243c.432.443.511.5.614.839.034.113.07.258.123.46a1.14,1.14,0,0,0,.807.825c.281.076.393.1.456.125a1.2,1.2,0,0,1,.164.07V20L5,18.75,7.5,20V15.531a2.282,2.282,0,0,1,.62-.2,1.134,1.134,0,0,0,.692-.541,1.161,1.161,0,0,0,.114-.285c.054-.2.09-.348.124-.462.1-.341.178-.394.613-.837a1.163,1.163,0,0,0,.3-1.123,1.843,1.843,0,0,1,0-1.5A1.168,1.168,0,0,0,9.664,9.465ZM5,13.75a2.517,2.517,0,0,1-.5-.051,2.486,2.486,0,0,1-.894-.376A2.495,2.495,0,0,1,2.5,11.25,2.5,2.5,0,0,1,4.5,8.8,2.4,2.4,0,0,1,5,8.75a2.5,2.5,0,0,1,0,5Z"
                        transform="translate(0)"/>
                  <path class="b3"
                        d="M138,5V0h-8.125A1.875,1.875,0,0,0,128,1.875V5.193c.068-.015.149-.04.261-.07l.148-.04A2.375,2.375,0,0,1,129.03,5a2.4,2.4,0,0,1,1.7.716l.107.109c.085.087.144.151.2.2.066.022.149.042.262.072l.15.041a2.4,2.4,0,0,1,1.685,1.7l.044.166c.031.118.051.2.072.27.048.055.114.117.2.208l.094.1a2.43,2.43,0,0,1,.62,2.339l-.033.124c-.035.13-.062.221-.077.3.014.069.038.151.069.268l.042.161a2.413,2.413,0,0,1-.614,2.323l-.112.114c-.084.085-.147.145-.193.2-.022.068-.042.154-.073.273l-.038.146a2.4,2.4,0,0,1-1.387,1.62L131.715,20h9.41A1.875,1.875,0,0,0,143,18.125V5Z"
                        transform="translate(-123)"/>
                </g>
              </g>
            </svg>
            <span class="mr-1">مجوز ها</span>
          </a>
          <a href="#"
             class="pr-4 py-3 flex block bg-white border border-[#E1E3EB] text-sm items-center rounded shadow-sm hover:text-gray-800 hover:bg-[#FFFAEB] hover:border-[#2C0531] hover:shadow">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="17.5" viewBox="0 0 20 17.5">
              <defs>
                <style>.a4 {
                  fill: #2C0531;
                }

                .b4 {
                  fill: #ffb508;
                  opacity: 0.4;
                }</style>
              </defs>
              <g transform="translate(0 -32)">
                <g transform="translate(0 32)">
                  <path class="a4"
                        d="M7.5,32H1.25A1.25,1.25,0,0,0,0,33.25v5.625a1.25,1.25,0,0,0,1.25,1.25H7.5a1.25,1.25,0,0,0,1.25-1.25V33.25A1.249,1.249,0,0,0,7.5,32ZM18.75,44.5h-7.5A1.25,1.25,0,0,0,10,45.75v2.5a1.25,1.25,0,0,0,1.25,1.25h7.5A1.25,1.25,0,0,0,20,48.25v-2.5A1.249,1.249,0,0,0,18.75,44.5Zm0-12.5h-7.5A1.25,1.25,0,0,0,10,33.25v2.5A1.25,1.25,0,0,0,11.25,37h7.5A1.25,1.25,0,0,0,20,35.75v-2.5A1.249,1.249,0,0,0,18.75,32Z"
                        transform="translate(0 -32)"/>
                  <path class="b4"
                        d="M7.5,195.125H1.25A1.25,1.25,0,0,0,0,196.375V202a1.25,1.25,0,0,0,1.25,1.25H7.5A1.25,1.25,0,0,0,8.75,202v-5.625A1.249,1.249,0,0,0,7.5,195.125ZM18.75,192h-7.5A1.25,1.25,0,0,0,10,193.25v2.5A1.25,1.25,0,0,0,11.25,197h7.5A1.25,1.25,0,0,0,20,195.75v-2.5A1.249,1.249,0,0,0,18.75,192Z"
                        transform="translate(0 -185.75)"/>
                </g>
              </g>
            </svg>
            <span class="mr-1"> نقشه ها</span>
          </a>
        </div>


      </div>

      <div class="pr-6 md:w-3/4">

        <div class="flex">
          <!--video & tab btns-->
          <div class="mt-6 mb-4 md:mt-0 md:w-2/3">

            <div v-if="product">
              <h3 class="pb-2 text-sm text-[#606060]">
                <!--                دسته‌بندی محصول-->
                {{ product.type.name }}
              </h3>
              <div class="flex justify-between">
                <h2 class="pb-4 font-bold">
                  <!--                   عنوان محصول درب اتوماتیک اسلایدینگ تلسکوپی-->
                  {{ product.title }}
                </h2>
                <p class="flex items-center">

                  <span class="pl-2 text-xs">{{ product.rates }}</span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="15.284" viewBox="0 0 16 15.284">
                    <defs>
                      <style>.as {
                        fill: #ffb508;
                      }</style>
                    </defs>
                    <g transform="translate(-20.005 -0.001)">
                      <g transform="translate(20.005 0.001)">
                        <path class="as"
                              d="M28.861.533l1.953,3.952,4.37.636a.955.955,0,0,1,.53,1.63L32.553,9.8l.748,4.343a.957.957,0,0,1-1.388,1.006L28,13.124,24.1,15.175a.957.957,0,0,1-1.388-1.006l.748-4.343L20.295,6.751a.955.955,0,0,1,.53-1.63l4.37-.636L27.148.533a.956.956,0,0,1,1.713,0Z"
                              transform="translate(-20.005 -0.001)"/>
                      </g>
                    </g>
                  </svg>
                </p>
              </div>
              <video class="py-4 w-full rounded-lg" controls>
                <source :src='product.video' type="video/mp4">
                <!--<source src="#" type="video/ogg">-->
                Your browser does not support HTML video.
              </video>
            </div>

            <!--tab btns-->
            <ul class="pt-8 pb-2 flex md:pb-4 md:pt-16">

              <!--tab1-->
              <li class="mx-3">
                <a class="px-3 py-2.5 inline-block rounded bg-white text-sm text-center rounded md:w-44"
                   :class="{'bg-[#FFFAEB] text-[#212121] border border-[#2C0531]' : tab=== 'tab1' }"
                   href="#"
                   @click.prevent="tab= 'tab1'">توضیحات</a>
              </li>
              <!--END tab1-->

              <!--tab2-->
              <li class="mx-3">
                <a class="px-3 py-2.5 inline-block rounded bg-white text-sm text-center rounded md:w-44"
                   :class="{'bg-[#FFFAEB] text-[#212121] border border-[#2C0531]' : tab=== 'tab2' }"
                   href="#"
                   @click.prevent="tab= 'tab2'">اجزای تشکیل دهنده</a>
              </li>
              <!--END tab2-->

              <!--tab3-->
              <li class="mx-3">
                <a class="px-3 py-2.5 inline-block rounded bg-white text-sm text-center rounded md:w-44"
                   :class="{ 'bg-[#FFFAEB] text-[#212121] border border-[#2C0531]' : tab=== 'tab3' }" href="#"
                   @click.prevent="tab= 'tab3'">نظرات</a>
              </li>
              <!--END tab3-->

            </ul>

          </div>

          <!--left menu-->
          <div class="pr-6 w-full hidden overflow-auto md:pr-12 md:block">
            <!--connect us-->
            <div class="w-full">
              <div class="mb-4 p-3 flex bg-white shadow rounded">
                <img class="" src="@/static/images/connection ways/img1.png">

                <div class="w-full">
                  <P class="pr-3 text-sm ">تماس با واحد تهران</P>
                  <div class="flex text-left items-end justify-end">
                    <P class="mt-4 ml-4 text-sm ">۰۲۱-۲۲۲۴۲</P>
                    <img class="" src="@/static/images/connection ways/Group 190.png">
                  </div>

                </div>

              </div>
              <div class="p-3 flex bg-white shadow rounded">
                <img class="" src="@/static/images/connection ways/img3.png">

                <div class="w-full">
                  <P class="pr-3 text-sm ">تماس با واحد شهرستان</P>
                  <div class="flex text-left items-end justify-end">
                    <P class="mt-4 ml-4 text-sm ">۰۹۱۲۵۴۳۵۴۵۴</P>
                    <img class="" src="@/static/images/connection ways/Group 190.png">
                  </div>

                </div>

              </div>
            </div>

            <!-- price inquery-->
            <div class="w-full relative">
              <svg class="block w-full" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                   width="312" height="192"
                   viewBox="0 0 312 192">
                <defs>
                  <style>.aprice {
                    fill: #2c0531;
                  }

                  .bprice {
                    clip-path: url(#a);
                  }

                  .cprice {
                    fill: #e5e0e6;
                    opacity: 0.24;
                  }

                  .dprice {
                    fill: #fff;
                    opacity: 0.06;
                  }</style>
                  <clipPath id="a">
                    <rect class="aprice" width="312" height="192" rx="4" transform="translate(137.818 167.819)"/>
                  </clipPath>
                </defs>
                <rect class="aprice" width="312" height="192" rx="4"/>
                <g class="bprice" transform="translate(-137.818 -167.819)">
                  <rect class="cprice" width="376" height="192" rx="4" transform="translate(-78 252.872) rotate(-45)"/>
                  <rect class="dprice" width="40" height="40" rx="4"
                        transform="translate(219.497 338.497) rotate(-30)"/>
                  <rect class="dprice" width="55.546" height="55.546" rx="4"
                        transform="translate(367.497 201.27) rotate(-30)"/>
                  <rect class="dprice" width="40" height="40" rx="4"
                        transform="translate(200.497 338.497) rotate(-30)"/>
                  <rect class="dprice" width="55.546" height="55.546" rx="4"
                        transform="translate(348.497 201.27) rotate(-30)"/>
                </g>
              </svg>
              <div class="absolute top-8 right-6 ">
                <h4 class="text-lg font-bold text-white">استعلام قیمت</h4>
                <p class="pl-6 mb-5 text-sm text-white">مشخصات درب مورد نظر خود را انتخاب کرده و قیمت آن را ببینید!</p>
                <a href="/priceInquiry"
                   class="px-5 py-1 bg-[#BA4B30] border border-[#BA4B30] text-sm text-white rounded-md shadow-sm hover:text-gray-800 hover:bg-gray-100 hover:border-gray-300 hover:shadow">
                  استعلام قیمت
                </a>
              </div>
            </div>

            <!--samples-->
            <div>
              <div class="pb-3 flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                  <defs>
                    <style>.asample {
                      fill: #2c0531;
                    }

                    .bsample {
                      fill: #ffb508;
                      opacity: 0.4;
                    }</style>
                  </defs>
                  <g transform="translate(-1338 -2035)">
                    <g transform="translate(1338 2003)">
                      <g transform="translate(0 32)">
                        <path class="asample"
                              d="M64,96v13.714H81.143V96Zm3.429,1.714a1.714,1.714,0,1,1-1.714,1.714A1.718,1.718,0,0,1,67.429,97.714Zm11.9,9.836a.855.855,0,0,1-.755.45h-12a.857.857,0,0,1-.692-1.362l2.5-3.429a.859.859,0,0,1,1.387,0l.657.9,2.866-4.3a.857.857,0,0,1,1.426,0l4.571,6.857A.861.861,0,0,1,79.327,107.55Z"
                              transform="translate(-60.571 -92.571)"/>
                        <path class="bsample"
                              d="M21.429,32H2.571A2.579,2.579,0,0,0,0,34.571V53.429A2.579,2.579,0,0,0,2.571,56H21.429A2.579,2.579,0,0,0,24,53.429V34.571A2.579,2.579,0,0,0,21.429,32Zm-.857,17.143H3.429V35.429H20.571Z"
                              transform="translate(0 -32)"/>
                      </g>
                    </g>
                  </g>
                </svg>
                <h3 class="mr-2 font-bold text-xl underline decoration-4 decoration-[#FFB508] underline-offset-2">
                  نمونه کار ها</h3>
              </div>
              <vueper-slides
                class="no-shadow"
                :visible-slides="3"
                slide-multiple
                :gap="3"
                :rtl="true"
                :bullets="false"
                :arrows-outside="false"
                :dragging-distance="200"
                :breakpoints="{ 800: { visibleSlides: 2, slideMultiple: 2 } }">
                <vueper-slide v-for="(item,i) in items" :key="i" :image="item.image"/>
              </vueper-slides>
            </div>

          </div>
        </div>

        <!--tabs body-->
        <div class="px-4 py-4 border-l border-r border-b content bg-[#F0F0F5]  rounded">
          <!--tab1-->
          <div v-if="tab=== 'tab1'">
            <div >
              {{ product.description }}
            </div>
          </div>

          <!--tab2-->
          <div v-if="tab=== 'tab2'">

            <ul role="list" class="py-3 grid grid-cols-1 gap-4 sm:grid-cols-1 md:grid-cols-2 items-end">
              <label
                class="py-2 block text-[#212121] underline decoration-2 decoration-[#FFB508] underline-offset-2 font-medium ">
                فریم های مناسب برای این درب
              </label>
              <li class="col-span-1" v-for="(i, n) in product.frames" :key="n">
                <span class="p-2 w-full rounded bg-[#F0F0F5] border border-[#999BA3]">{{ i.name }}</span>
              </li>
            </ul>

            <ul role="list" class="py-3 grid grid-cols-1 gap-4 sm:grid-cols-1 md:grid-cols-2 items-end">
              <label
                class="py-2 block text-[#212121] underline decoration-2 decoration-[#FFB508] underline-offset-2 font-medium ">
                شیشه های مناسب برای این درب
              </label>

              <li class="col-span-1" v-for="(i, n) in product.glasses" :key="n">
                <span class="p-2 w-full rounded bg-[#F0F0F5] border border-[#999BA3]">{{ i.name }}</span>
              </li>
            </ul>

            <ul role="list" class="py-3 grid grid-cols-1 gap-4 sm:grid-cols-1 md:grid-cols-2 items-end">
              <label
                class="py-2 block text-[#212121] underline decoration-2 decoration-[#FFB508] underline-offset-2 font-medium ">
                اپراتورهای مناسب برای این درب
              </label>
              <li class="col-span-1" v-for="(i, n) in product.operators" :key="n">
                <span class="p-2 w-full rounded bg-[#F0F0F5] border border-[#999BA3]">{{ i.name }}</span>
              </li>
            </ul>

          </div>

          <!--tab3-->
          <div v-if="tab=== 'tab3'">

            <form action="#" method="POST" class="mt-6 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8">
              <div>
                <label for="first-name" class="block text-sm font-medium text-[#100D14]">نام</label>
                <div class="mt-1">
                  <input type="text" name="first-name" id="first-name" autocomplete="given-name"
                         class="py-3 px-4 block w-full text-[#100D14] focus:ring-teal-500 focus:border-teal-500 border-warm-gray-300 rounded-md">
                </div>
              </div>

              <div>
                <label for="email" class="block text-sm font-medium text-warm-gray-900">ایمیل</label>
                <div class="mt-1">
                  <input id="email" name="email" type="email" autocomplete="email"
                         class="py-3 px-4 block w-full shadow-sm text-warm-gray-900 focus:ring-teal-500 focus:border-teal-500 border-warm-gray-300 rounded-md">
                </div>
              </div>

              <div class="sm:col-span-2">
                <label class="block text-sm font-medium text-warm-gray-900">متن دیدگاه</label>
                <div class="mt-1">
                    <textarea id="message" name="message" rows="4"
                              class="py-3 px-4 block w-full shadow-sm text-warm-gray-900 focus:ring-teal-500 focus:border-teal-500 border border-warm-gray-300 rounded-md"
                              aria-describedby="message-max"></textarea>
                </div>
              </div>
              <div class="flex items-center sm:col-span-2 sm:flex sm:justify-between">
                <div class="space-x-2 flex space-x-reverse">
                  <img src="@/static/images/star/starEmpty.png">
                  <img src="@/static/images/star/starFull.png">
                  <img src="@/static/images/star/starFull.png">
                  <img src="@/static/images/star/starFull.png">
                </div>
                <a href="#"
                   class="px-8 py-2 border inline-flex items-center text-sm text-white rounded-md shadow-sm text-[#100D14] bg-[#2C0531]  hover:text-gray-800 hover:bg-gray-100 hover:border-gray-300 hover:shadow">
                  ثبت نظر
                </a>
              </div>
            </form>

            <!--          <star-ratings></star-ratings>-->

            <div v-for="(i,n) in comments" :key="n" class="mt-8 py-4 border-t">
              <div class="pb-3 flex justify-between">
                <p class="text-[#2C0531]">{{ i.name }}</p>
                <div class="flex items-center">
                  <div class="pl-3 flex items-center">
                    <span class="pl-1 text-xs text-[#393A3D]">{{ i.rate }}</span>
                    <svg class="w-2.5 h-2.5" xmlns="http://www.w3.org/2000/svg" width="24" height="22.926"
                         viewBox="0 0 24 22.926">
                      <defs>
                        <style>.astar1 {
                          fill: #fdc206;
                        }</style>
                      </defs>
                      <g transform="translate(-20.005 -0.001)">
                        <g transform="translate(20.005 0.001)">
                          <path class="astar1"
                                d="M33.29.8l2.93,5.928,6.555.953a1.432,1.432,0,0,1,.795,2.444L38.827,14.7l1.122,6.515a1.435,1.435,0,0,1-2.082,1.509L32,19.685l-5.861,3.076a1.435,1.435,0,0,1-2.082-1.509l1.122-6.515L20.44,10.125a1.433,1.433,0,0,1,.795-2.444l6.555-.953L30.719.8a1.434,1.434,0,0,1,2.57,0Z"
                                transform="translate(-20.005 -0.001)"/>
                        </g>
                      </g>
                    </svg>
                  </div>
                  <p class="pr-3 border-r text-xs text-[#606166]">{{ i.created_at }}</p>
                </div>
              </div>
              <div class="text-[#424242] text-sm font-medium">
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و
                متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است
              </div>
            </div>

          </div>
        </div>

      </div>

    </div>
  </client-only>

</template>

<script>
import {VueperSlide, VueperSlides} from "vueperslides";

export default {
  name: "productCategory",

  components: {
    VueperSlides,
    VueperSlide
  },

  data() {
    return {
      items: [
        {image: require('@/static/images/doors/door1.png')},
        {image: require('@/static/images/doors/door2.png')},
        {image: require('@/static/images/doors/door3.png')},
        {image: require('@/static/images/doors/door2.png')},
        {image: require('@/static/images/doors/door1.png')},
      ],
      rating: 3,

      tab: "tab1",
      comments: [],
    }
  },


  mounted() {
    this.$store.dispatch('singleProduct/getProduct', this.$route.params.id)
  },
  methods: {
    getComments() {
      if (!this.product) return
      this.$store.dispatch('singleProduct/getComments', this.product.id)
      .then(res => {
        this.comments = res
      })
      .catch(err => {
        console.log(err)
      })
    }
  },
  computed: {
    product() {
      return this.$store.getters['singleProduct/getProduct']
    },
  },
  watch: {
    product() {
      this.getComments()
    }
  }
}
</script>

<style scoped>
.ease-custom {
  transition-timing-function: cubic-bezier(.61, -0.53, .43, 1.43);
}


/*right slider*/

.thumbnails {
  margin: auto;
  max-width: 300px;
}

.thumbnails .vueperslide {
  box-sizing: border-box;
  border: 1px solid #fff;
  transition: 0.3s ease-in-out;
  opacity: 0.7;
  cursor: pointer;
}

.thumbnails .vueperslide--active {
  box-shadow: 0 0 6px rgba(0, 0, 0, 0.5);
  opacity: 1;
  border-color: #000;
}
</style>
