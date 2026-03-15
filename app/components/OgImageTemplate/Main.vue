<script setup lang="ts">
// inherited attrs can mess up the satori parser
defineOptions({
  inheritAttrs: false,
})

const bgGradientStyle = {
  backgroundImage: 'linear-gradient(to right, #dc2626, #be185d)',
}

</script>
<template>
  <div class="p-4 h-full w-full flex justify-center items-center" :style="bgGradientStyle">
    <div class="p-10 bg-zinc-900 h-full w-full flex-col gap-0" style="background-image: url(https://img.lichter.io/website-og/main-article.png); display: flex; flex-direction: column; justify-content: space-between;">
      <h1 :style="{ ...bgGradientStyle, backgroundClip: 'text', fontSize: '5.7rem', lineHeight: 1, fontWeight: 800, color: 'transparent' }">
        Build <span style="padding-left: 30px; padding-right: 30px;">//</span> Lead <span style="padding-left: 30px; padding-right: 30px;">//</span> Teach
      </h1>
      <div class="flex-row flex-nowrap gap-0" style="display: flex;">
        <div class="mr-auto flex-row flex-nowrap gap-0" style="display: flex;">
          <img width="64" height="64" class="mr-4 rounded-full mt-2" src="/img/me@2x.jpg" />
          <div class="flex-col gap-0" style="display: flex; justify-content: center;">
            <div class="text-2xl leading-none text-white flex-nowrap gap-0">Alexander Lichter</div>
            <div class="text-white/50 text-lg leading-none mt-2 flex-nowrap gap-0">https://lichter.io</div>
          </div>
        </div>
        <img width="64" src="/img/logo/glyph-white-colored.svg" />
      </div>
    </div>
  </div>
</template>