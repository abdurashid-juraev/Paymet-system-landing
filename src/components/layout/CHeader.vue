<template>
  <div class="xl:container">
    <nav
      class="relative items-center justify-between xl:!px-0 xl:pb-[30px] md:flex md:!flex-row md:px-7 sm:flex-col sm:border-b sm:border-solid sm:border-[#2B2B30] sm:px-7"
    >
      <div class="justify-between xl:!mb-0 sm:mb-6 sm:flex">
        <router-link to="/">
          <img class="select-none" src="@/assets/images/svg/logo.svg" alt="" />
          <!-- Icon 2 -->
        </router-link>
        <button @click="openMenu" class="relative z-30 h-10 w-10 md:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="white"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="white"
            class="h-full w-full"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M3.75 6.75h16.5M3.75 12H12m-8.25 5.25h16.5"
            />
          </svg>
        </button>
      </div>

      <ul
        class="h-full pl-7 duration-200 xl:!ml-16 md:!static md:top-auto md:flex md:!h-auto md:!w-auto md:!flex-row md:!bg-transparent md:!p-0 sm:fixed sm:left-[-60%] sm:top-[97px] sm:z-20 sm:h-screen sm:w-[60%] sm:flex-col sm:bg-lm-orange sm:pt-8 sm:text-left"
        :class="{ ['sm:left-[0]']: isOpen }"
      >
        <li class="md:!mb-0 sm:mb-6">
          <router-link
            :to="{ name: 'About' }"
            class="cursor-pointer text-base font-semibold duration-150 xl:hover:!text-lm-orange md:!text-white sm:text-lm-black sm:hover:text-white"
            >О проекте</router-link
          >
        </li>
        <li class="md:mx-6 md:!mb-0 sm:mb-6">
          <router-link
            :to="{ name: 'News' }"
            class="cursor-pointer text-base font-semibold duration-150 xl:hover:!text-lm-orange md:!text-white sm:text-lm-black sm:hover:text-white"
            >Новости</router-link
          >
        </li>
        <li class="">
          <router-link
            :to="{ name: 'Partners' }"
            class="cursor-pointer text-base font-semibold duration-150 xl:hover:!text-lm-orange md:!text-white sm:text-lm-black sm:hover:text-white"
            >Партнеры</router-link
          >
        </li>
      </ul>
      <div class="relative hidden xl:flex">
        <ul class="group absolute top-2 left-[-50px] text-white">
          <li>
            <a
              class="inline-block font-medium duration-150 hover:text-lm-orange"
              href="#!"
              >Uz</a
            >
          </li>
          <li>
            <a
              class="inline-block translate-y-0 font-medium opacity-0 duration-150 hover:text-lm-orange group-hover:translate-y-2 group-hover:opacity-100"
              href="#!"
              >Ru</a
            >
          </li>
        </ul>
        <router-link to="#!" class="mr-6 cursor-pointer">
          <img
            class="select-none"
            src="@/assets/images/svg/appStore.svg"
            alt=""
          />
        </router-link>
        <router-link to="#!" class="cursor-pointer">
          <img
            class="select-none"
            src="@/assets/images/svg/googlePlay.svg"
            alt=""
          />
        </router-link>
      </div>
    </nav>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";

const isOpen = ref(false);
const openMenu = () => {
  isOpen.value = !isOpen.value;
  const body = document.querySelector<HTMLBodyElement>("body");
  body?.classList.toggle("overflow-hidden");
};
</script>
