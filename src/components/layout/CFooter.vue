<template>
  <footer class="bg-lm-neutral pt-8 xl:!px-0 sm:px-4">
    <div class="xl:container">
      <nav
        class="flex border-b-2 border-solid border-zinc-700 pb-7 xl:!flex-row xl:items-center xl:justify-between sm:flex-col"
      >
        <router-link to="/">
          <img class="select-none" src="@/assets/images/svg/logo.svg" alt="" />
        </router-link>
        <ul class="flex xl:mt-0 md:!flex-row sm:mt-8 sm:flex-col">
          <li class="mr-9 flex items-center xl:mb-0 sm:mb-6">
            <img src="@/assets/images/svg/location.svg" alt="" />
            <span class="ml-3 text-sm font-medium text-white"
              >122/1 Mirzo Ulug'bek ko'chasi, Tashkent, Uzbekistan 100015</span
            >
          </li>
          <li>
            <a class="flex" href="tel:+998 78 200 00 07">
              <img src="@/assets/images/svg/phone.svg" alt="" />
              <span class="ml-3 text-sm font-medium text-white"
                >+998 78 200 00 07</span
              ></a
            >
          </li>
        </ul>
      </nav>
      <div class="py-8">
        <ul class="grid xl:grid-cols-4">
          <CFooterMenuItem
            class="xl:last:!block sm:last:hidden"
            v-for="menuItem in menuItems"
            :key="menuItem.id"
            :footerMenuTitle="menuItem.footerMenuTitle"
            :menu="menuItem.menu"
          />
        </ul>
      </div>
    </div>
    <div class="bg-lm-orange py-5">
      <div class="xl:container">
        <div
          class="flex items-center justify-between xl:!flex-row sm:flex-col-reverse"
        >
          <div class="text-base font-semibold text-lm-black">
            © ООО LimonPay. Все права защищены.
          </div>
          <a href="#!" class="group relative flex items-center xl:!mb-0 sm:mb-4"
            ><img
              class="absolute h-5 w-10 object-contain duration-300 group-hover:translate-x-[-100px] xl:!left-auto xl:!mr-2 sm:right-0 sm:left-0 sm:mx-auto"
              src="@/assets/images/svg/uiclogo.svg"
              alt=""
            />
            <img
              class="origin-right scale-0 duration-300 group-hover:scale-110"
              src="@/assets/images/svg/uicgroup.svg"
              alt=""
            />
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script lang="ts" setup>
import { ref } from "vue";

import CFooterMenuItem from "@/components/FooterMenu/CFooterMenuItem.vue";

const menuItems = ref([
  {
    footerMenuTitle: "О сервисе",
    menu: [
      {
        link: "О компании",
      },
      {
        link: "О возможностях приложения",
      },
      {
        link: "Новости",
      },
      {
        link: "Безопасность",
      },
      {
        link: "Тарифы",
      },
    ],
  },
  {
    footerMenuTitle: "Партнёрам",
    menu: [
      {
        link: "Как стать партнером?",
      },
      {
        link: "Автоматизация бизнеса",
      },
      {
        link: "Выгоды ",
      },
      {
        link: "Интеграции платежной системы",
      },
    ],
  },
  {
    footerMenuTitle: "Помощь",
    menu: [
      {
        link: "Публичная оферта",
      },
      {
        link: "Часто задаваемые вопросы",
      },
      {
        link: "Обратная связь ",
      },
    ],
  },
  {
    footerMenuTitle: "Скачайте приложение:",
    menu: [
      {
        img: new URL("../../assets/images/svg/appStore.svg", import.meta.url),
      },
      {
        img: new URL("../../assets/images/svg/googlePlay.svg", import.meta.url),
      },
    ],
  },
]);
</script>
