<template>
  <div class="bg-[#F7F8FA]">

    <div class="mx-auto px-5 max-w-7xl">
      <!-- BreadCrumbs -->
      <div class="px-4 py-2.5 flex text-sm text-[#100D14] rounded items-center bg-[#F0F0F5]">

        <nuxt-link to="" class="px-1">آچیلان دُر</nuxt-link>

        <svg class="font-bold text-[#100D14]" fill="black" width="10px" height="10px" viewBox="0 0 32 32"
             xmlns="http://www.w3.org/2000/svg">
          <path d="M 26 6 L 6 15.21875 L 6 16.78125 L 26 26 L 26 23.84375 L 9.46875 16 L 26 8.15625 Z"/>
        </svg>

        <nuxt-link to="" class="px-1">مجله ها</nuxt-link>

      </div>


      <div class="md:flex">

        <div class="pt-6 md:w-1/4">

          <div class="p-6 w-full bg-white rounded">

            <svg class="mx-auto block" xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48">
              <defs>
                <style>.amagazin{fill:#fff;stroke:#decff6;}.bmagazin,.cmagazin{fill:#591262;}.cmagazin{opacity:0.4;}.dmagazin{stroke:none;}.emagazin{fill:none;}</style>
              </defs>
              <g transform="translate(-1316 -308)">
                <g class="amagazin" transform="translate(1316 308)">
                  <rect class="dmagazin" width="48" height="48" rx="4"/>
                  <rect class="emagazin" x="0.5" y="0.5" width="47" height="47" rx="3.5"/>
                </g>
                <g transform="translate(1329.25 320)">
                  <path class="bmagazin"
                        d="M4.5,18H19.875A1.125,1.125,0,0,0,21,16.875V1.5A1.5,1.5,0,0,0,19.5,0H4.5A4.5,4.5,0,0,0,0,4.5v15A4.5,4.5,0,0,0,4.5,24H19.875A1.125,1.125,0,0,0,21,22.875v-.75A1.125,1.125,0,0,0,19.875,21H4.5a1.5,1.5,0,0,1,0-3ZM6.708,6h9a.762.762,0,0,1,.792.75.752.752,0,0,1-.75.75h-9A.751.751,0,0,1,6.708,6Zm0,3h9a.762.762,0,0,1,.792.75.752.752,0,0,1-.75.75h-9A.751.751,0,0,1,6.708,9Z"/>
                  <path class="cmagazin" d="M80.5,384v3h-15a1.5,1.5,0,1,1,0-3Z" transform="translate(-61 -366)"/>
                </g>
              </g>
            </svg>
            <h3 class="py-4 text-lg text-center text-[#282828] font-bold">مجله ها</h3>

            <div class="text-[#282828] text-center">
              از این بخش می‌توانید به فایل کاتالوگ‌های فنی و دیگر اطلاعات هر محصول دسترسی داشته باشید. به کمک فیلتر زیر می‌توانید محصولات مورد نظر خود را بیابید
            </div>

          </div>

          <div class="mt-6 p-4 rounded bg-white">

            <div class="pb-3 flex justify-between">
              <div class="flex">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="17.499" viewBox="0 0 20 17.499">
                  <defs>
                    <style>.afilter {
                      fill: #424242;
                    }</style>
                  </defs>
                  <g transform="translate(-0.001 -32)">
                    <g transform="translate(0.001 32)">
                      <path class="afilter"
                            d="M19.832,33.043A1.8,1.8,0,0,0,18.176,32H1.823A1.8,1.8,0,0,0,.168,33.043a1.75,1.75,0,0,0,.248,1.878l6.461,7.933V45.5a1.494,1.494,0,0,0,.645,1.228l3.216,2.482a1.436,1.436,0,0,0,.88.289A1.5,1.5,0,0,0,13.125,48V42.855l6.465-7.941a1.738,1.738,0,0,0,.243-1.871Zm-8.3,8.765a1.252,1.252,0,0,0-.281.79v4.639l-2.5-1.929V42.632a1.251,1.251,0,0,0-.281-.79L1.984,33.877H18.015Z"
                            transform="translate(-0.001 -32)"/>
                    </g>
                  </g>
                </svg>
                <h3 class="pr-4 font-medium">فیلتر</h3>
              </div>
              <div class="p-1.5 text-xs bg-[#F7F8FA] rounded">
                54 نتیجه
              </div>
            </div>

            <div @click="state = !state" class="flex py-4 items-center justify-between border-t">
              <div class="text-black text-sm">
                بر اساس نوع درب
              </div>

              <div v-if="state" class="px-3 flex text-black items-center rounded-3xl">
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="8" viewBox="0 0 14 8">
                  <defs>
                    <style>.ad {
                      fill: #606060;
                    }</style>
                  </defs>
                  <g transform="translate(14.005 168) rotate(180)">
                    <g transform="translate(0.005 160)">
                      <path class="ad"
                            d="M7,168a1,1,0,0,1-.707-.293l-6-6a1,1,0,0,1,1.414-1.414L7,165.587l5.294-5.294a1,1,0,1,1,1.414,1.414l-6,6A1,1,0,0,1,7,168Z"
                            transform="translate(-0.005 -160)"/>
                    </g>
                  </g>
                </svg>
              </div>

              <div v-else class="px-3 flex text-black items-center rounded-3xl">
                <svg class="rotate-180" xmlns="http://www.w3.org/2000/svg" width="14" height="8" viewBox="0 0 14 8">
                  <defs>
                    <style>.ad {
                      fill: #606060;
                    }</style>
                  </defs>
                  <g transform="translate(14.005 168) rotate(180)">
                    <g transform="translate(0.005 160)">
                      <path class="ad"
                            d="M7,168a1,1,0,0,1-.707-.293l-6-6a1,1,0,0,1,1.414-1.414L7,165.587l5.294-5.294a1,1,0,1,1,1.414,1.414l-6,6A1,1,0,0,1,7,168Z"
                            transform="translate(-0.005 -160)"/>
                    </g>
                  </g>
                </svg>
              </div>

            </div>

            <div v-if="state" class="py-2 max-h-52 space-y-4 border-t overflow-auto">

              <div class="flex items-center">
                <input id="filter-type-0" type="checkbox"
                       class="h-4 w-4 border-gray-300 rounded text-[#2C0531] focus:ring-[#2C0531]">
                <label for="filter-type-0" class="px-2 text-sm text-[#282828]">
                  اسلایدینگ
                </label>
              </div>

              <div class="flex items-center">
                <input id="filter-type-1" type="checkbox"
                       class="h-4 w-4 border-gray-300 rounded text-[#2C0531] focus:ring-[#2C0531]">
                <label for="filter-type-1" class="px-2 text-sm text-[#282828]">
                  چرخشی
                </label>
              </div>

              <div class="flex items-center">
                <input id="filter-type-2" type="checkbox"
                       class="h-4 w-4 border-gray-300 rounded text-[#2C0531] focus:ring-[#2C0531]">
                <label for="filter-type-2" class="px-2 text-sm text-[#282828]">
                  مثلثی
                </label>
              </div>

              <div class="flex items-center">
                <input id="filter-type-4" type="checkbox"
                       class="h-4 w-4 border-gray-300 rounded text-[#2C0531] focus:ring-[#2C0531]">
                <label for="filter-type-4" class="px-2 text-sm text-[#282828]">
                  هرماتیک
                </label>
              </div>

              <div class="flex items-center">
                <input id="filter-type-5" type="checkbox"
                       class="h-4 w-4 border-gray-300 rounded text-[#2C0531] focus:ring-[#2C0531]">
                <label for="filter-type-5" class="px-2 text-sm text-[#282828]">
                  تلسکوپی
                </label>
              </div>

              <div class="flex items-center">
                <input id="filter-type-3" type="checkbox"
                       class="h-4 w-4 border-gray-300 rounded text-[#2C0531] focus:ring-[#2C0531]">
                <label for="filter-type-3" class="px-2 text-sm text-[#282828]">
                  جک پارکینگی
                </label>
              </div>

            </div>

          </div>

        </div>

        <div class="py-6 md:pr-6 md:w-3/4">
          <div class="">

            <div
              class="mb-6 px-6 py-5 group border border-[#D7D7E0] flex justify-between rounded bg-[#F7F8FA] hover:bg-[#F0F2F5] hover:border-[#D7D7E0]">

              <div class="px-2 flex">
                <p class="pl-4 border-l">Prime Drive 240-H</p>
                <p class="mr-4 pt-1 px-2 text-xs text-[#282828] rounded-3xl bg-[#E4E4EB]">sliding</p>
              </div>

              <div class="group-hover:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
                  <defs>
                    <style>.adownlod {
                      fill: #999ba3;
                    }</style>
                  </defs>
                  <path class="adownlod"
                        d="M17.5,11.875H15.41L13.535,13.75H17.5a.626.626,0,0,1,.625.625V17.5a.626.626,0,0,1-.625.625H2.5a.626.626,0,0,1-.625-.625V14.375A.626.626,0,0,1,2.5,13.75H6.465L4.59,11.875H2.5a2.5,2.5,0,0,0-2.5,2.5V17.5A2.5,2.5,0,0,0,2.5,20h15A2.5,2.5,0,0,0,20,17.5V14.375A2.5,2.5,0,0,0,17.5,11.875Zm-.625,4.063a.938.938,0,1,0-.937.938A.937.937,0,0,0,16.875,15.938ZM9.336,14.379a.842.842,0,0,0,.664.309.931.931,0,0,0,.663-.275L15.975,9.1A.937.937,0,0,0,14.65,7.775l-3.712,3.714V.938a.938.938,0,0,0-1.875,0V11.488L5.316,7.773A.937.937,0,0,0,3.991,9.1Z"/>
                </svg>
              </div>

              <nuxt-link to="" class="hidden group-hover:block group-hover:flex">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
                  <defs>
                    <style>.acolored {
                      fill: #ba4b30;
                    }</style>
                  </defs>
                  <path class="acolored"
                        d="M17.5,11.875H15.41L13.535,13.75H17.5a.626.626,0,0,1,.625.625V17.5a.626.626,0,0,1-.625.625H2.5a.626.626,0,0,1-.625-.625V14.375A.626.626,0,0,1,2.5,13.75H6.465L4.59,11.875H2.5a2.5,2.5,0,0,0-2.5,2.5V17.5A2.5,2.5,0,0,0,2.5,20h15A2.5,2.5,0,0,0,20,17.5V14.375A2.5,2.5,0,0,0,17.5,11.875Zm-.625,4.063a.938.938,0,1,0-.937.938A.937.937,0,0,0,16.875,15.938ZM9.336,14.379a.842.842,0,0,0,.664.309.931.931,0,0,0,.663-.275L15.975,9.1A.937.937,0,0,0,14.65,7.775l-3.712,3.714V.938a.938.938,0,0,0-1.875,0V11.488L5.316,7.773A.937.937,0,0,0,3.991,9.1Z"/>
                </svg>
                <p class="pr-2 text-sm">دانلود</p>
              </nuxt-link>

            </div>

            <div
              class="mb-6 px-6 py-5 group border border-[#D7D7E0] flex justify-between rounded bg-[#F7F8FA] hover:bg-[#F0F2F5] hover:border-[#D7D7E0]">

              <div class="px-2 flex">
                <p class="pl-4 border-l">Prime Drive 240-H</p>
                <p class="mr-4 pt-1 px-2 text-xs text-[#282828] rounded-3xl bg-[#E4E4EB]">sliding</p>
              </div>

              <div class="group-hover:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
                  <defs>
                    <style>.adownlod {
                      fill: #999ba3;
                    }</style>
                  </defs>
                  <path class="adownlod"
                        d="M17.5,11.875H15.41L13.535,13.75H17.5a.626.626,0,0,1,.625.625V17.5a.626.626,0,0,1-.625.625H2.5a.626.626,0,0,1-.625-.625V14.375A.626.626,0,0,1,2.5,13.75H6.465L4.59,11.875H2.5a2.5,2.5,0,0,0-2.5,2.5V17.5A2.5,2.5,0,0,0,2.5,20h15A2.5,2.5,0,0,0,20,17.5V14.375A2.5,2.5,0,0,0,17.5,11.875Zm-.625,4.063a.938.938,0,1,0-.937.938A.937.937,0,0,0,16.875,15.938ZM9.336,14.379a.842.842,0,0,0,.664.309.931.931,0,0,0,.663-.275L15.975,9.1A.937.937,0,0,0,14.65,7.775l-3.712,3.714V.938a.938.938,0,0,0-1.875,0V11.488L5.316,7.773A.937.937,0,0,0,3.991,9.1Z"/>
                </svg>
              </div>

              <nuxt-link to="" class="hidden group-hover:block group-hover:flex">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
                  <defs>
                    <style>.acolored {
                      fill: #ba4b30;
                    }</style>
                  </defs>
                  <path class="acolored"
                        d="M17.5,11.875H15.41L13.535,13.75H17.5a.626.626,0,0,1,.625.625V17.5a.626.626,0,0,1-.625.625H2.5a.626.626,0,0,1-.625-.625V14.375A.626.626,0,0,1,2.5,13.75H6.465L4.59,11.875H2.5a2.5,2.5,0,0,0-2.5,2.5V17.5A2.5,2.5,0,0,0,2.5,20h15A2.5,2.5,0,0,0,20,17.5V14.375A2.5,2.5,0,0,0,17.5,11.875Zm-.625,4.063a.938.938,0,1,0-.937.938A.937.937,0,0,0,16.875,15.938ZM9.336,14.379a.842.842,0,0,0,.664.309.931.931,0,0,0,.663-.275L15.975,9.1A.937.937,0,0,0,14.65,7.775l-3.712,3.714V.938a.938.938,0,0,0-1.875,0V11.488L5.316,7.773A.937.937,0,0,0,3.991,9.1Z"/>
                </svg>
                <p class="pr-2 text-sm">دانلود</p>
              </nuxt-link>

            </div>

            <div
              class="mb-6 px-6 py-5 group border border-[#D7D7E0] flex justify-between rounded bg-[#F7F8FA] hover:bg-[#F0F2F5] hover:border-[#D7D7E0]">

              <div class="px-2 flex">
                <p class="pl-4 border-l">TL240-H</p>
                <p class="mr-4 pt-1 px-2 text-xs text-[#282828] rounded-3xl bg-[#E4E4EB]">Telscope</p>
              </div>

              <div class="group-hover:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
                  <defs>
                    <style>.adownlod {
                      fill: #999ba3;
                    }</style>
                  </defs>
                  <path class="adownlod"
                        d="M17.5,11.875H15.41L13.535,13.75H17.5a.626.626,0,0,1,.625.625V17.5a.626.626,0,0,1-.625.625H2.5a.626.626,0,0,1-.625-.625V14.375A.626.626,0,0,1,2.5,13.75H6.465L4.59,11.875H2.5a2.5,2.5,0,0,0-2.5,2.5V17.5A2.5,2.5,0,0,0,2.5,20h15A2.5,2.5,0,0,0,20,17.5V14.375A2.5,2.5,0,0,0,17.5,11.875Zm-.625,4.063a.938.938,0,1,0-.937.938A.937.937,0,0,0,16.875,15.938ZM9.336,14.379a.842.842,0,0,0,.664.309.931.931,0,0,0,.663-.275L15.975,9.1A.937.937,0,0,0,14.65,7.775l-3.712,3.714V.938a.938.938,0,0,0-1.875,0V11.488L5.316,7.773A.937.937,0,0,0,3.991,9.1Z"/>
                </svg>
              </div>

              <nuxt-link to="" class="hidden group-hover:block group-hover:flex">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
                  <defs>
                    <style>.acolored {
                      fill: #ba4b30;
                    }</style>
                  </defs>
                  <path class="acolored"
                        d="M17.5,11.875H15.41L13.535,13.75H17.5a.626.626,0,0,1,.625.625V17.5a.626.626,0,0,1-.625.625H2.5a.626.626,0,0,1-.625-.625V14.375A.626.626,0,0,1,2.5,13.75H6.465L4.59,11.875H2.5a2.5,2.5,0,0,0-2.5,2.5V17.5A2.5,2.5,0,0,0,2.5,20h15A2.5,2.5,0,0,0,20,17.5V14.375A2.5,2.5,0,0,0,17.5,11.875Zm-.625,4.063a.938.938,0,1,0-.937.938A.937.937,0,0,0,16.875,15.938ZM9.336,14.379a.842.842,0,0,0,.664.309.931.931,0,0,0,.663-.275L15.975,9.1A.937.937,0,0,0,14.65,7.775l-3.712,3.714V.938a.938.938,0,0,0-1.875,0V11.488L5.316,7.773A.937.937,0,0,0,3.991,9.1Z"/>
                </svg>
                <p class="pr-2 text-sm">دانلود</p>
              </nuxt-link>

            </div>

            <div
              class="mb-6 px-6 py-5 group border border-[#D7D7E0] flex justify-between rounded bg-[#F7F8FA] hover:bg-[#F0F2F5] hover:border-[#D7D7E0]">

              <div class="px-2 flex">
                <p class="pl-4 border-l">Prime Drive 240-H</p>
                <p class="mr-4 pt-1 px-2 text-xs text-[#282828] rounded-3xl bg-[#E4E4EB]">sliding</p>
              </div>

              <div class="group-hover:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
                  <defs>
                    <style>.adownlod {
                      fill: #999ba3;
                    }</style>
                  </defs>
                  <path class="adownlod"
                        d="M17.5,11.875H15.41L13.535,13.75H17.5a.626.626,0,0,1,.625.625V17.5a.626.626,0,0,1-.625.625H2.5a.626.626,0,0,1-.625-.625V14.375A.626.626,0,0,1,2.5,13.75H6.465L4.59,11.875H2.5a2.5,2.5,0,0,0-2.5,2.5V17.5A2.5,2.5,0,0,0,2.5,20h15A2.5,2.5,0,0,0,20,17.5V14.375A2.5,2.5,0,0,0,17.5,11.875Zm-.625,4.063a.938.938,0,1,0-.937.938A.937.937,0,0,0,16.875,15.938ZM9.336,14.379a.842.842,0,0,0,.664.309.931.931,0,0,0,.663-.275L15.975,9.1A.937.937,0,0,0,14.65,7.775l-3.712,3.714V.938a.938.938,0,0,0-1.875,0V11.488L5.316,7.773A.937.937,0,0,0,3.991,9.1Z"/>
                </svg>
              </div>

              <nuxt-link to="" class="hidden group-hover:block group-hover:flex">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
                  <defs>
                    <style>.acolored {
                      fill: #ba4b30;
                    }</style>
                  </defs>
                  <path class="acolored"
                        d="M17.5,11.875H15.41L13.535,13.75H17.5a.626.626,0,0,1,.625.625V17.5a.626.626,0,0,1-.625.625H2.5a.626.626,0,0,1-.625-.625V14.375A.626.626,0,0,1,2.5,13.75H6.465L4.59,11.875H2.5a2.5,2.5,0,0,0-2.5,2.5V17.5A2.5,2.5,0,0,0,2.5,20h15A2.5,2.5,0,0,0,20,17.5V14.375A2.5,2.5,0,0,0,17.5,11.875Zm-.625,4.063a.938.938,0,1,0-.937.938A.937.937,0,0,0,16.875,15.938ZM9.336,14.379a.842.842,0,0,0,.664.309.931.931,0,0,0,.663-.275L15.975,9.1A.937.937,0,0,0,14.65,7.775l-3.712,3.714V.938a.938.938,0,0,0-1.875,0V11.488L5.316,7.773A.937.937,0,0,0,3.991,9.1Z"/>
                </svg>
                <p class="pr-2 text-sm">دانلود</p>
              </nuxt-link>

            </div>

            <div
              class="mb-6 px-6 py-5 group border border-[#D7D7E0] flex justify-between rounded bg-[#F7F8FA] hover:bg-[#F0F2F5] hover:border-[#D7D7E0]">

              <div class="px-2 flex">
                <p class="pl-4 border-l">Revolving Undergrund RVU400 C</p>
                <p class="mr-4 pt-1 px-2 text-xs text-[#282828] rounded-3xl bg-[#E4E4EB]">Revolving</p>
              </div>

              <div class="group-hover:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
                  <defs>
                    <style>.adownlod {
                      fill: #999ba3;
                    }</style>
                  </defs>
                  <path class="adownlod"
                        d="M17.5,11.875H15.41L13.535,13.75H17.5a.626.626,0,0,1,.625.625V17.5a.626.626,0,0,1-.625.625H2.5a.626.626,0,0,1-.625-.625V14.375A.626.626,0,0,1,2.5,13.75H6.465L4.59,11.875H2.5a2.5,2.5,0,0,0-2.5,2.5V17.5A2.5,2.5,0,0,0,2.5,20h15A2.5,2.5,0,0,0,20,17.5V14.375A2.5,2.5,0,0,0,17.5,11.875Zm-.625,4.063a.938.938,0,1,0-.937.938A.937.937,0,0,0,16.875,15.938ZM9.336,14.379a.842.842,0,0,0,.664.309.931.931,0,0,0,.663-.275L15.975,9.1A.937.937,0,0,0,14.65,7.775l-3.712,3.714V.938a.938.938,0,0,0-1.875,0V11.488L5.316,7.773A.937.937,0,0,0,3.991,9.1Z"/>
                </svg>
              </div>

              <nuxt-link to="" class="hidden group-hover:block group-hover:flex">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
                  <defs>
                    <style>.acolored {
                      fill: #ba4b30;
                    }</style>
                  </defs>
                  <path class="acolored"
                        d="M17.5,11.875H15.41L13.535,13.75H17.5a.626.626,0,0,1,.625.625V17.5a.626.626,0,0,1-.625.625H2.5a.626.626,0,0,1-.625-.625V14.375A.626.626,0,0,1,2.5,13.75H6.465L4.59,11.875H2.5a2.5,2.5,0,0,0-2.5,2.5V17.5A2.5,2.5,0,0,0,2.5,20h15A2.5,2.5,0,0,0,20,17.5V14.375A2.5,2.5,0,0,0,17.5,11.875Zm-.625,4.063a.938.938,0,1,0-.937.938A.937.937,0,0,0,16.875,15.938ZM9.336,14.379a.842.842,0,0,0,.664.309.931.931,0,0,0,.663-.275L15.975,9.1A.937.937,0,0,0,14.65,7.775l-3.712,3.714V.938a.938.938,0,0,0-1.875,0V11.488L5.316,7.773A.937.937,0,0,0,3.991,9.1Z"/>
                </svg>
                <p class="pr-2 text-sm">دانلود</p>
              </nuxt-link>

            </div>


            <div
              class="mb-6 px-6 py-5 group border border-[#D7D7E0] flex justify-between rounded bg-[#F7F8FA] hover:bg-[#F0F2F5] hover:border-[#D7D7E0]">

              <div class="px-2 flex">
                <p class="pl-4 border-l">Prime Drive 240-H</p>
                <p class="mr-4 pt-1 px-2 text-xs text-[#282828] rounded-3xl bg-[#E4E4EB]">sliding</p>
              </div>

              <div class="group-hover:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
                  <defs>
                    <style>.adownlod {
                      fill: #999ba3;
                    }</style>
                  </defs>
                  <path class="adownlod"
                        d="M17.5,11.875H15.41L13.535,13.75H17.5a.626.626,0,0,1,.625.625V17.5a.626.626,0,0,1-.625.625H2.5a.626.626,0,0,1-.625-.625V14.375A.626.626,0,0,1,2.5,13.75H6.465L4.59,11.875H2.5a2.5,2.5,0,0,0-2.5,2.5V17.5A2.5,2.5,0,0,0,2.5,20h15A2.5,2.5,0,0,0,20,17.5V14.375A2.5,2.5,0,0,0,17.5,11.875Zm-.625,4.063a.938.938,0,1,0-.937.938A.937.937,0,0,0,16.875,15.938ZM9.336,14.379a.842.842,0,0,0,.664.309.931.931,0,0,0,.663-.275L15.975,9.1A.937.937,0,0,0,14.65,7.775l-3.712,3.714V.938a.938.938,0,0,0-1.875,0V11.488L5.316,7.773A.937.937,0,0,0,3.991,9.1Z"/>
                </svg>
              </div>

              <nuxt-link to="" class="hidden group-hover:block group-hover:flex">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
                  <defs>
                    <style>.acolored {
                      fill: #ba4b30;
                    }</style>
                  </defs>
                  <path class="acolored"
                        d="M17.5,11.875H15.41L13.535,13.75H17.5a.626.626,0,0,1,.625.625V17.5a.626.626,0,0,1-.625.625H2.5a.626.626,0,0,1-.625-.625V14.375A.626.626,0,0,1,2.5,13.75H6.465L4.59,11.875H2.5a2.5,2.5,0,0,0-2.5,2.5V17.5A2.5,2.5,0,0,0,2.5,20h15A2.5,2.5,0,0,0,20,17.5V14.375A2.5,2.5,0,0,0,17.5,11.875Zm-.625,4.063a.938.938,0,1,0-.937.938A.937.937,0,0,0,16.875,15.938ZM9.336,14.379a.842.842,0,0,0,.664.309.931.931,0,0,0,.663-.275L15.975,9.1A.937.937,0,0,0,14.65,7.775l-3.712,3.714V.938a.938.938,0,0,0-1.875,0V11.488L5.316,7.773A.937.937,0,0,0,3.991,9.1Z"/>
                </svg>
                <p class="pr-2 text-sm">دانلود</p>
              </nuxt-link>

            </div>

            <div
              class="mb-6 px-6 py-5 group border border-[#D7D7E0] flex justify-between rounded bg-[#F7F8FA] hover:bg-[#F0F2F5] hover:border-[#D7D7E0]">

              <div class="px-2 flex">
                <p class="pl-4 border-l">Prime Drive 240-H</p>
                <p class="mr-4 pt-1 px-2 text-xs text-[#282828] rounded-3xl bg-[#E4E4EB]">sliding</p>
              </div>

              <div class="group-hover:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
                  <defs>
                    <style>.adownlod {
                      fill: #999ba3;
                    }</style>
                  </defs>
                  <path class="adownlod"
                        d="M17.5,11.875H15.41L13.535,13.75H17.5a.626.626,0,0,1,.625.625V17.5a.626.626,0,0,1-.625.625H2.5a.626.626,0,0,1-.625-.625V14.375A.626.626,0,0,1,2.5,13.75H6.465L4.59,11.875H2.5a2.5,2.5,0,0,0-2.5,2.5V17.5A2.5,2.5,0,0,0,2.5,20h15A2.5,2.5,0,0,0,20,17.5V14.375A2.5,2.5,0,0,0,17.5,11.875Zm-.625,4.063a.938.938,0,1,0-.937.938A.937.937,0,0,0,16.875,15.938ZM9.336,14.379a.842.842,0,0,0,.664.309.931.931,0,0,0,.663-.275L15.975,9.1A.937.937,0,0,0,14.65,7.775l-3.712,3.714V.938a.938.938,0,0,0-1.875,0V11.488L5.316,7.773A.937.937,0,0,0,3.991,9.1Z"/>
                </svg>
              </div>

              <nuxt-link to="" class="hidden group-hover:block group-hover:flex">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
                  <defs>
                    <style>.acolored {
                      fill: #ba4b30;
                    }</style>
                  </defs>
                  <path class="acolored"
                        d="M17.5,11.875H15.41L13.535,13.75H17.5a.626.626,0,0,1,.625.625V17.5a.626.626,0,0,1-.625.625H2.5a.626.626,0,0,1-.625-.625V14.375A.626.626,0,0,1,2.5,13.75H6.465L4.59,11.875H2.5a2.5,2.5,0,0,0-2.5,2.5V17.5A2.5,2.5,0,0,0,2.5,20h15A2.5,2.5,0,0,0,20,17.5V14.375A2.5,2.5,0,0,0,17.5,11.875Zm-.625,4.063a.938.938,0,1,0-.937.938A.937.937,0,0,0,16.875,15.938ZM9.336,14.379a.842.842,0,0,0,.664.309.931.931,0,0,0,.663-.275L15.975,9.1A.937.937,0,0,0,14.65,7.775l-3.712,3.714V.938a.938.938,0,0,0-1.875,0V11.488L5.316,7.773A.937.937,0,0,0,3.991,9.1Z"/>
                </svg>
                <p class="pr-2 text-sm">دانلود</p>
              </nuxt-link>

            </div>

            <div
              class="mb-6 px-6 py-5 group border border-[#D7D7E0] flex justify-between rounded bg-[#F7F8FA] hover:bg-[#F0F2F5] hover:border-[#D7D7E0]">

              <div class="px-2 flex">
                <p class="pl-4 border-l">TL240-H</p>
                <p class="mr-4 pt-1 px-2 text-xs text-[#282828] rounded-3xl bg-[#E4E4EB]">Telscope</p>
              </div>

              <div class="group-hover:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
                  <defs>
                    <style>.adownlod {
                      fill: #999ba3;
                    }</style>
                  </defs>
                  <path class="adownlod"
                        d="M17.5,11.875H15.41L13.535,13.75H17.5a.626.626,0,0,1,.625.625V17.5a.626.626,0,0,1-.625.625H2.5a.626.626,0,0,1-.625-.625V14.375A.626.626,0,0,1,2.5,13.75H6.465L4.59,11.875H2.5a2.5,2.5,0,0,0-2.5,2.5V17.5A2.5,2.5,0,0,0,2.5,20h15A2.5,2.5,0,0,0,20,17.5V14.375A2.5,2.5,0,0,0,17.5,11.875Zm-.625,4.063a.938.938,0,1,0-.937.938A.937.937,0,0,0,16.875,15.938ZM9.336,14.379a.842.842,0,0,0,.664.309.931.931,0,0,0,.663-.275L15.975,9.1A.937.937,0,0,0,14.65,7.775l-3.712,3.714V.938a.938.938,0,0,0-1.875,0V11.488L5.316,7.773A.937.937,0,0,0,3.991,9.1Z"/>
                </svg>
              </div>

              <nuxt-link to="" class="hidden group-hover:block group-hover:flex">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
                  <defs>
                    <style>.acolored {
                      fill: #ba4b30;
                    }</style>
                  </defs>
                  <path class="acolored"
                        d="M17.5,11.875H15.41L13.535,13.75H17.5a.626.626,0,0,1,.625.625V17.5a.626.626,0,0,1-.625.625H2.5a.626.626,0,0,1-.625-.625V14.375A.626.626,0,0,1,2.5,13.75H6.465L4.59,11.875H2.5a2.5,2.5,0,0,0-2.5,2.5V17.5A2.5,2.5,0,0,0,2.5,20h15A2.5,2.5,0,0,0,20,17.5V14.375A2.5,2.5,0,0,0,17.5,11.875Zm-.625,4.063a.938.938,0,1,0-.937.938A.937.937,0,0,0,16.875,15.938ZM9.336,14.379a.842.842,0,0,0,.664.309.931.931,0,0,0,.663-.275L15.975,9.1A.937.937,0,0,0,14.65,7.775l-3.712,3.714V.938a.938.938,0,0,0-1.875,0V11.488L5.316,7.773A.937.937,0,0,0,3.991,9.1Z"/>
                </svg>
                <p class="pr-2 text-sm">دانلود</p>
              </nuxt-link>

            </div>

            <div
              class="mb-6 px-6 py-5 group border border-[#D7D7E0] flex justify-between rounded bg-[#F7F8FA] hover:bg-[#F0F2F5] hover:border-[#D7D7E0]">

              <div class="px-2 flex">
                <p class="pl-4 border-l">Prime Drive 240-H</p>
                <p class="mr-4 pt-1 px-2 text-xs text-[#282828] rounded-3xl bg-[#E4E4EB]">sliding</p>
              </div>

              <div class="group-hover:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
                  <defs>
                    <style>.adownlod {
                      fill: #999ba3;
                    }</style>
                  </defs>
                  <path class="adownlod"
                        d="M17.5,11.875H15.41L13.535,13.75H17.5a.626.626,0,0,1,.625.625V17.5a.626.626,0,0,1-.625.625H2.5a.626.626,0,0,1-.625-.625V14.375A.626.626,0,0,1,2.5,13.75H6.465L4.59,11.875H2.5a2.5,2.5,0,0,0-2.5,2.5V17.5A2.5,2.5,0,0,0,2.5,20h15A2.5,2.5,0,0,0,20,17.5V14.375A2.5,2.5,0,0,0,17.5,11.875Zm-.625,4.063a.938.938,0,1,0-.937.938A.937.937,0,0,0,16.875,15.938ZM9.336,14.379a.842.842,0,0,0,.664.309.931.931,0,0,0,.663-.275L15.975,9.1A.937.937,0,0,0,14.65,7.775l-3.712,3.714V.938a.938.938,0,0,0-1.875,0V11.488L5.316,7.773A.937.937,0,0,0,3.991,9.1Z"/>
                </svg>
              </div>

              <nuxt-link to="" class="hidden group-hover:block group-hover:flex">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
                  <defs>
                    <style>.acolored {
                      fill: #ba4b30;
                    }</style>
                  </defs>
                  <path class="acolored"
                        d="M17.5,11.875H15.41L13.535,13.75H17.5a.626.626,0,0,1,.625.625V17.5a.626.626,0,0,1-.625.625H2.5a.626.626,0,0,1-.625-.625V14.375A.626.626,0,0,1,2.5,13.75H6.465L4.59,11.875H2.5a2.5,2.5,0,0,0-2.5,2.5V17.5A2.5,2.5,0,0,0,2.5,20h15A2.5,2.5,0,0,0,20,17.5V14.375A2.5,2.5,0,0,0,17.5,11.875Zm-.625,4.063a.938.938,0,1,0-.937.938A.937.937,0,0,0,16.875,15.938ZM9.336,14.379a.842.842,0,0,0,.664.309.931.931,0,0,0,.663-.275L15.975,9.1A.937.937,0,0,0,14.65,7.775l-3.712,3.714V.938a.938.938,0,0,0-1.875,0V11.488L5.316,7.773A.937.937,0,0,0,3.991,9.1Z"/>
                </svg>
                <p class="pr-2 text-sm">دانلود</p>
              </nuxt-link>

            </div>

            <div
              class="mb-6 px-6 py-5 group border border-[#D7D7E0] flex justify-between rounded bg-[#F7F8FA] hover:bg-[#F0F2F5] hover:border-[#D7D7E0]">

              <div class="px-2 flex">
                <p class="pl-4 border-l">Revolving Undergrund RVU400 C</p>
                <p class="mr-4 pt-1 px-2 text-xs text-[#282828] rounded-3xl bg-[#E4E4EB]">Revolving</p>
              </div>

              <div class="group-hover:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
                  <defs>
                    <style>.adownlod {
                      fill: #999ba3;
                    }</style>
                  </defs>
                  <path class="adownlod"
                        d="M17.5,11.875H15.41L13.535,13.75H17.5a.626.626,0,0,1,.625.625V17.5a.626.626,0,0,1-.625.625H2.5a.626.626,0,0,1-.625-.625V14.375A.626.626,0,0,1,2.5,13.75H6.465L4.59,11.875H2.5a2.5,2.5,0,0,0-2.5,2.5V17.5A2.5,2.5,0,0,0,2.5,20h15A2.5,2.5,0,0,0,20,17.5V14.375A2.5,2.5,0,0,0,17.5,11.875Zm-.625,4.063a.938.938,0,1,0-.937.938A.937.937,0,0,0,16.875,15.938ZM9.336,14.379a.842.842,0,0,0,.664.309.931.931,0,0,0,.663-.275L15.975,9.1A.937.937,0,0,0,14.65,7.775l-3.712,3.714V.938a.938.938,0,0,0-1.875,0V11.488L5.316,7.773A.937.937,0,0,0,3.991,9.1Z"/>
                </svg>
              </div>

              <nuxt-link to="" class="hidden group-hover:block group-hover:flex">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
                  <defs>
                    <style>.acolored {
                      fill: #ba4b30;
                    }</style>
                  </defs>
                  <path class="acolored"
                        d="M17.5,11.875H15.41L13.535,13.75H17.5a.626.626,0,0,1,.625.625V17.5a.626.626,0,0,1-.625.625H2.5a.626.626,0,0,1-.625-.625V14.375A.626.626,0,0,1,2.5,13.75H6.465L4.59,11.875H2.5a2.5,2.5,0,0,0-2.5,2.5V17.5A2.5,2.5,0,0,0,2.5,20h15A2.5,2.5,0,0,0,20,17.5V14.375A2.5,2.5,0,0,0,17.5,11.875Zm-.625,4.063a.938.938,0,1,0-.937.938A.937.937,0,0,0,16.875,15.938ZM9.336,14.379a.842.842,0,0,0,.664.309.931.931,0,0,0,.663-.275L15.975,9.1A.937.937,0,0,0,14.65,7.775l-3.712,3.714V.938a.938.938,0,0,0-1.875,0V11.488L5.316,7.773A.937.937,0,0,0,3.991,9.1Z"/>
                </svg>
                <p class="pr-2 text-sm">دانلود</p>
              </nuxt-link>

            </div>

          </div>
        </div>
      </div>


    </div>

  </div>
</template>

<script>
export default {
  name: "magazine",
  data() {
    return {
      state: '',
    }
  }
}
</script>

<style scoped>

</style>
