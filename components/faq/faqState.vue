<template>
  <div>

    <div @click="status = !status" class="flex items-center justify-between">
      <div class="flex items-center">

        <div>
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
            <defs>
              <style>.asq {
                fill: #2c0531;
              }</style>
            </defs>
            <g transform="translate(0 -32)">
              <g transform="translate(0 32)">
                <path class="asq"
                      d="M11.321,36.286H8.679A2.968,2.968,0,0,0,5.714,39.25v.429a.714.714,0,0,0,1.429,0V39.25a1.536,1.536,0,0,1,1.536-1.536h2.645a1.536,1.536,0,0,1,.772,2.862L9.4,41.924a1.613,1.613,0,0,0-.826,1.406v.813a.714.714,0,1,0,1.429,0V43.33a.178.178,0,0,1,.064-.142l2.7-1.349a2.963,2.963,0,0,0-1.44-5.554ZM9.286,45.929A1.071,1.071,0,1,0,10.357,47,1.072,1.072,0,0,0,9.286,45.929ZM17.143,32H2.857A2.857,2.857,0,0,0,0,34.857V49.143A2.857,2.857,0,0,0,2.857,52H17.143A2.857,2.857,0,0,0,20,49.143V34.857A2.858,2.858,0,0,0,17.143,32Zm1.429,17.143a1.43,1.43,0,0,1-1.429,1.429H2.857a1.43,1.43,0,0,1-1.429-1.429V34.857a1.43,1.43,0,0,1,1.429-1.429H17.143a1.43,1.43,0,0,1,1.429,1.429Z"
                      transform="translate(0 -32)"/>
              </g>
            </g>
          </svg>
        </div>

        <p class="pr-3 font-medium">{{ title }}</p>

      </div>

      <span v-if="status">

                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="3.077" viewBox="0 0 20 3.077">
                  <defs>
                    <style>.aminus {
                      fill: #999ba3;
                    }</style>
                  </defs>
                  <g transform="translate(-16 -224)">
                    <g transform="translate(16 224)">
                      <path class="aminus"
                            d="M34.462,227.077H17.538a1.538,1.538,0,0,1,0-3.077H34.462a1.538,1.538,0,0,1,0,3.077Z"
                            transform="translate(-16 -224)"/>
                    </g>
                  </g>
                </svg>

              </span>
      <span v-else>

                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
                  <defs>
                     <style>.aplus {
                       fill: #999ba3;
                     }</style>
                  </defs>
                  <g transform="translate(-16 -48)">
                    <g transform="translate(16 48)">
                      <path class="aplus"
                            d="M36,58a1.538,1.538,0,0,1-1.538,1.539H27.538v6.923a1.538,1.538,0,0,1-3.077,0V59.539H17.538a1.538,1.538,0,1,1,0-3.077h6.923V49.539a1.538,1.538,0,1,1,3.077,0v6.923h6.923A1.536,1.536,0,0,1,36,58Z"
                            transform="translate(-16 -48)"/>
                    </g>
                  </g>
                </svg>

              </span>
    </div>
    <div v-if="status" class=" mt-4 p-4 border-t">
      {{ body }}
    </div>

  </div>
</template>

<script>
export default {
  name: "faqState",

  props: ['title', 'body'],

  data() {
    return {
      status: false
    }
  }
}
</script>

<style scoped>

</style>
