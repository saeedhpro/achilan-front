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

        <nuxt-link to="" class="px-1">اطلاعات فنی</nuxt-link>

      </div>


      <div class="md:flex">

        <div class="pt-6 md:w-1/4">

          <div class="p-6 w-full bg-white rounded">

            <svg class="mx-auto block" xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48">
              <defs>
                <style>.atechnical{fill:#fff;stroke:#decff6;}.btechnical,.ctechnical{fill:#591262;}.ctechnical{opacity:0.4;}.dtechnical{stroke:none;}.etechnical{fill:none;}</style>
              </defs>
              <g transform="translate(-1316 -308)">
                <g class="atechnical" transform="translate(1316 308)">
                  <rect class="dtechnical" width="48" height="48" rx="4"/>
                  <rect class="etechnical" x="0.5" y="0.5" width="47" height="47" rx="3.5"/>
                </g>
                <g transform="translate(1316.06 320)">
                  <g transform="translate(12.527)">
                    <path class="btechnical"
                          d="M35.354,15.563a.769.769,0,0,0-.385-.66l-2.185-1.261A9.341,9.341,0,0,0,32.94,12a9.391,9.391,0,0,0-.157-1.642L34.968,9.1a.769.769,0,0,0,.385-.66c0-.661-1.968-4.642-2.993-4.642a.773.773,0,0,0-.387.1l-2.19,1.265a9,9,0,0,0-2.843-1.64V1a.754.754,0,0,0-.587-.742,11.5,11.5,0,0,0-4.826,0A.756.756,0,0,0,20.94,1V3.523A9,9,0,0,0,18.1,5.161L15.907,3.9a.77.77,0,0,0-.386-.1c-.924,0-2.993,3.841-2.993,4.643a.769.769,0,0,0,.385.66L15.1,10.358a8.683,8.683,0,0,0,0,3.284L12.912,14.9a.769.769,0,0,0-.385.66c0,.661,1.968,4.642,2.993,4.642a.773.773,0,0,0,.387-.1l2.19-1.265a8.978,8.978,0,0,0,2.843,1.638V23a.754.754,0,0,0,.587.742A11.6,11.6,0,0,0,23.9,24a12.055,12.055,0,0,0,2.413-.256A.788.788,0,0,0,26.94,23V20.476a8.985,8.985,0,0,0,2.843-1.639l2.19,1.265a.773.773,0,0,0,.387.1C33.282,20.2,35.354,16.364,35.354,15.563ZM23.94,15.75A3.75,3.75,0,1,1,27.69,12,3.754,3.754,0,0,1,23.94,15.75Z"
                          transform="translate(-12.527)"/>
                    <path class="ctechnical" d="M225.5,227a1.5,1.5,0,1,1,1.5-1.5A1.5,1.5,0,0,1,225.5,227Z"
                          transform="translate(-214.087 -213.5)"/>
                  </g>
                </g>
              </g>
            </svg>
            <h3 class="py-4 text-lg text-center text-[#282828] font-bold">اطلاعات فنی</h3>

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
  name: "technicalInformation",
  data() {
    return {
      state: '',
    }
  }
}
</script>

<style scoped>

</style>
