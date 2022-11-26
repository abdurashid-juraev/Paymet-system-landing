<template>
  <router-link
    to="#!"
    class="relative mb-6 block overflow-hidden rounded-xl bg-lm-black px-4 pt-4 pb-5"
  >
    <h5 class="mb-7 text-white">LimonPay - наслаждайтесь и платите лимоном</h5>
    <router-link
      to="#!"
      class="inline-block rounded-lg bg-white py-3 px-8 text-sm font-semibold text-lm-neutral duration-150 hover:bg-lm-orange hover:text-white"
      >Войти</router-link
    >
    <span
      class="absolute bottom-0 right-[-9px] h-[80px] w-[90px] overflow-hidden"
      ><img
        class="h-full w-full object-contain"
        src="@/assets/images/svg/sm-bg.svg"
        alt=""
    /></span>
  </router-link>
</template>

<script lang="ts" setup></script>
