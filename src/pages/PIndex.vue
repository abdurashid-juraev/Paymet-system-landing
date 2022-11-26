<template>
  <main>
    <section
      class="relative min-h-[465px] border-b-8 border-solid border-lm-orange bg-lm-black"
    >
      <div class="xl:container">
        <span
          class="absolute bottom-0 right-[220px] hidden h-[340px] w-[900px] bg-[url('/src/assets/images/svg/bgMoon.svg')] bg-right bg-no-repeat xl:block"
        ></span>
        <div class="grid xl:grid-cols-3 xl:text-left sm:text-center">
          <div
            class="text-white before:absolute before:top-[208px] before:block before:h-[185px] before:w-full before:bg-[url('/src/assets/images/svg/bgEllipse.svg')] before:bg-no-repeat before:content-[''] xl:relative xl:col-span-2 xl:grid xl:pt-[90px]"
          >
            <h1
              class="mb-8 font-grotesk font-bold xl:!mt-0 xl:w-auto xl:text-left xl:text-[48px] sm:mt-12 sm:text-4xl"
            >
              Наслаждайтесь и платите с лимоном
              <span class="ml-2 text-[#32B141]">:)</span>
            </h1>
            <div class="mb-10 xl:!pl-0 xl:pr-36 xl:text-left sm:px-20">
              <p class="mb-4 font-grotesk font-normal leading-6">
                Мы — онлайн-экосистема, основанная на финансовых и
                лайфстайл-услугах. Клиентами LimonPay стали 19 млн человек по
                всей Узбекистана.
              </p>
              <p class="font-grotesk font-normal leading-6">
                LimonPay третий крупнейший банк страны по количеству активных
                клиентов.
              </p>
            </div>
            <div class="xl:mb-0 xl:text-left sm:mb-10">
              <CButton class="hover:text-lm-black">Подробнее</CButton>
              <CButton class="ml-4 !bg-white text-lm-black hover:text-lm-orange"
                >Войти в кабинет</CButton
              >
            </div>
          </div>
          <div class="hidden text-white md:block">
            <div class="absolute bottom-0 hidden h-[458px] w-[431px] xl:block">
              <img
                class="h-full w-full select-none object-contain"
                src="@/assets/images/png/iPhone.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="xl:!px-0 sm:px-4">
      <div class="xl:container">
        <div class="grid-cols-3 gap-7 py-12 md:grid">
          <CInfoCard
            v-for="card in cards"
            :key="card.id"
            :cardIcon="card.cardIcon"
            :cardTitle="card.cardTitle"
            :cardText="card.cardText"
          />
        </div>
      </div>
    </section>
    <section
      @mousemove="parallax"
      @mouseleave="removeparallax"
      class="bg-lm-stone xl:!py-16 xl:!px-0 sm:px-4 sm:py-10"
    >
      <div class="relative xl:container">
        <div class="flex items-center justify-between">
          <div class="xl:w-[578px] xl:!text-left sm:text-center">
            <h3 class="mb-4 text-2xl font-bold text-lm-black">О LimonPay</h3>
            <p class="mb-2 text-xl text-zinc-800">
              Мы - онлайн-экосистема, основанная на финансовых и
              лайфстайл-услугах. Клиентами LimonPay стали 19 млн человек по всей
              Узбекистана.
            </p>
            <p class="mb-8 text-xl text-zinc-800">
              Банковские депозиты на иных условиях возврата
            </p>
            <CButton class="hover:text-white">Подробнее</CButton>
          </div>
          <div
            class="pillows justify-right t-4 right-0 hidden xl:absolute xl:block xl:h-[362px] xl:w-[426px]"
          >
            <img
              class="h-full w-full select-none object-cover object-right"
              src="@/assets/images/png/pillows.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
    <section class="pb-12 xl:!px-0 xl:!pt-10 sm:px-4 sm:pt-6">
      <div class="xl:container">
        <div
          class="mb-6 flex justify-between xl:!flex-row xl:items-center sm:flex-col"
        >
          <h2 class="text-2xl font-semibold text-lm-black xl:mb-0 sm:mb-5">
            Курс валют
          </h2>
          <div class="flex items-center">
            <span class="mr-3 font-medium text-[#A5AAB4]">На основе:</span>
            <img
              class="select-none"
              src="@/assets/images/svg/mbBank.svg"
              alt=""
            />
          </div>
        </div>
        <div class="grid gap-7 xl:grid-cols-2">
          <CCurrencyConvert />
          <CCurrencyCountryTable />
        </div>
      </div>
    </section>
    <section
      class="grid-cols-2 xl:relative xl:grid xl:h-[434px] xl:!px-0 sm:px-4"
    >
      <div class="h-full bg-lm-stone"></div>
      <div class="h-full bg-[#EFF1F5]"></div>
      <div class="left-0 right-0 xl:container xl:absolute">
        <div class="xl:grid xl:grid-cols-2">
          <div class="pt-10">
            <h2 class="mb-8 text-2xl font-semibold text-lm-black">
              Коммунальные услуги
            </h2>
            <div class="flex xl:!justify-between sm:justify-center">
              <ul class="xl:!w-[282px] sm:w-full">
                <CUtilitServise
                  v-for="service in servises"
                  :key="service.id"
                  :serviseIcon="service.serviseIcon"
                  :serviseType="service.serviseType"
                />
              </ul>
              <div class="w-62 h-70 hidden pr-8 xl:relative xl:block">
                <img
                  class="h-full w-full select-none object-cover object-center"
                  src="@/assets/images/png/comunal.png"
                  alt=""
                />
                <span
                  class="bottom-0 h-20 w-full bg-gradient-to-b from-transparent to-lm-stone xl:absolute"
                ></span>
              </div>
            </div>
          </div>
          <div class="pt-10 xl:pl-12">
            <CFormPay />
          </div>
        </div>
      </div>
    </section>
    <section class="pt-10 pb-12 xl:!px-0 sm:px-4">
      <div class="xl:container">
        <div class="mb-7 flex items-center justify-between">
          <h2 class="text-2xl font-semibold text-lm-black">Другие категории</h2>
          <router-link
            class="text-xl font-semibold text-lm-black duration-150 hover:text-lm-orange"
            to="#!"
            >Все категории</router-link
          >
        </div>
        <div class="sm: grid gap-5 xl:!grid-cols-6 sm:grid-cols-2">
          <CCategoryCard
            v-for="card in categorys"
            :key="card.id"
            :cardIcon="card.cardIcon"
            :cardTitle="card.cardTitle"
          />
        </div>
      </div>
    </section>
    <section class="bg-lm-stone pb-10 xl:!px-0 xl:!pt-[144px] sm:px-4 sm:pt-8">
      <div class="xl:container">
        <div
          class="mb-10 rounded-xl bg-lm-orange bg-right bg-no-repeat xl:relative xl:h-[288px] xl:bg-[url('/src/assets/images/svg/tel-bg.svg')] xl:!pl-12 xl:pb-0 sm:p-5 sm:pt-10"
        >
          <h2
            class="mb-3 w-full font-bold leading-9 text-lm-black xl:max-w-[405px] xl:text-[28px] sm:text-2xl"
          >
            Загрузите приложение для своего устройства
          </h2>
          <div class="mb-12 text-xl font-normal text-[#2B2B30]">
            Приложение поддерживает системы iOS, Android.
          </div>
          <div class="flex xl:!justify-start sm:justify-center">
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
          <span
            class="right-0 bottom-0 inline-block h-[430px] w-[460px] overflow-hidden xl:absolute xl:!block sm:hidden"
            ><img
              class="h-full w-full object-contain object-center"
              src="@/assets/images/png/2-tel.png"
              alt=""
          /></span>
          <span class="absolute bottom-full left-0 inline-block"
            ><img class="mb-10" src="@/assets/images/svg/w-ellipses.svg" alt=""
          /></span>
        </div>
        <div class="grid-cols-2 gap-7 xl:grid">
          <CRatingCard
            v-for="rcard in rcards"
            :key="rcard.id"
            :forMobile="rcard.forMobile"
            :forMobileApp="rcard.forMobileApp"
            :ratingInfo="rcard.ratingInfo"
          />
        </div>
      </div>
    </section>
    <section class="pt-10 pb-12 xl:!px-0 sm:px-4">
      <div class="xl:container">
        <div class="mb-6 flex items-center justify-between">
          <h2 class="text-[32px] font-semibold text-lm-black">Новости</h2>
          <router-link
            class="text-xl font-semibold text-lm-black duration-150 hover:text-lm-orange"
            to="#!"
            >Все новости</router-link
          >
        </div>
        <div class="gap-7 xl:grid xl:grid-cols-4">
          <CNewsCard v-for="ncard in 4" :key="ncard" />
        </div>
      </div>
    </section>
    <section class="bg-lm-stone py-10">
      <div class="xl:container">
        <div class="mb-6 xl:px-0 sm:px-4">
          <h2 class="text-[32px] font-semibold leading-10 text-lm-black">
            Партнеры
          </h2>
        </div>
      </div>
      <div class="mb-7 xl:!block sm:hidden">
        <swiper
          :loop="true"
          :autoplay="{ delay: 2000, disableOnInteraction: false }"
          :breakpoints="{
            '@0.00': {
              slidesPerView: 2.8,
              spaceBetween: 20,
            },
            '@0.75': {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            '@1.00': {
              slidesPerView: 3,
              spaceBetween: 40,
            },
            '@1.50': {
              slidesPerView: 5.8,
              spaceBetween: 28,
            },
          }"
        >
          <swiper-slide v-for="slide in 12" :key="slide.id">
            <router-link
              class="flex h-[120px] w-full items-center justify-center overflow-hidden rounded-xl bg-white p-5"
              to="#!"
            >
              <img
                class="select-none object-contain object-center"
                src="@/assets/images/svg/uic.svg"
                alt=""
              />
            </router-link>
          </swiper-slide>
        </swiper>
      </div>
      <div class="xl:!pl-0 sm:pl-5">
        <swiper
          :loop="true"
          :autoplay="{ delay: 2000, disableOnInteraction: false }"
          :breakpoints="{
            '@0.00': {
              slidesPerView: 2.8,
              spaceBetween: 20,
            },
            '@0.75': {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            '@1.00': {
              slidesPerView: 3,
              spaceBetween: 40,
            },
            '@1.50': {
              slidesPerView: 4.8,
              spaceBetween: 28,
            },
          }"
        >
          <swiper-slide v-for="slide in 15" :key="slide.id">
            <router-link
              class="flex h-[120px] w-full items-center justify-center overflow-hidden rounded-xl bg-white p-5"
              to="#!"
            >
              <img
                class="select-none object-contain object-center"
                src="@/assets/images/svg/express24.svg"
                alt=""
              />
            </router-link>
          </swiper-slide>
        </swiper>
      </div>
    </section>
  </main>
</template>

<script lang="ts" setup>
import "swiper/css";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Autoplay } from "Swiper";
import { ref } from "vue";
import { Swiper, SwiperSlide } from "vue-awesome-swiper";

import CButton from "@/components/BaseButton/CButton.vue";
import CCategoryCard from "@/components/Cards/CategoryCard/CCategoryCard.vue";
import CInfoCard from "@/components/Cards/InfoCard/CInfoCard.vue";
import CNewsCard from "@/components/Cards/NewsCard/CNewsCard.vue";
import CRatingCard from "@/components/Cards/RatingCard/CRatingCard.vue";
import CCurrencyConvert from "@/components/CurrencyConvert/CCurencyConvert.vue";
import CCurrencyCountryTable from "@/components/CurrencyTable/CCurrencyCountryTable.vue";
import CFormPay from "@/components/FormPay/CFormPay.vue";
import CUtilitServise from "@/components/UtilitServise/CUtilitServise.vue";

const parallax = (event: { pageX: number; pageY: number }) => {
  const Xvalue = (event.pageX * -1) / 30;
  const Yvalue = (event.pageY * 1) / 70;

  const pillows = document.querySelectorAll<HTMLElement>(".pillows");
  pillows.forEach((pillow: object) => {
    if (pillow != null) {
      pillow.style.transform = `translate3d(${Xvalue}px, ${Yvalue}px,0)`;
      pillow.style.transition = "all 0.2s";
    }
  });
};
const removeparallax = () => {
  const pillows = document.querySelectorAll<HTMLElement>(".pillows");
  pillows.forEach((pillow: object) => {
    if (pillow != null) {
      pillow.style.transform = `translate3d(0px, 0px,0)`;
    }
  });
};
const cards = ref([
  {
    cardIcon: new URL("/src/assets/images/svg/monitoring.svg", import.meta.url),
    cardTitle: "Мониторинг",
    cardText:
      "Мы — онлайн-экосистема, основанная на финансовых и лайфстайл-услугах. Клиентами LimonPay стали 19 млн человек по всей Узбекистана.",
  },
  {
    cardIcon: new URL("/src/assets/images/svg/wallet.svg", import.meta.url),
    cardTitle: "Удобные переводы",
    cardText:
      "Мы — онлайн-экосистема, основанная на финансовых и лайфстайл-услугах. Клиентами LimonPay стали 19 млн человек по всей Узбекистана.",
  },
  {
    cardIcon: new URL("/src/assets/images/svg/raketa.svg", import.meta.url),
    cardTitle: "Быстрые действия",
    cardText:
      "Мы — онлайн-экосистема, основанная на финансовых и лайфстайл-услугах. Клиентами LimonPay стали 19 млн человек по всей Узбекистана.",
  },
]);
const servises = ref([
  {
    serviseIcon: new URL(
      "/src/assets/images/svg/coolWater.svg",
      import.meta.url
    ),
    serviseType: "Холодная вода",
  },
  {
    serviseIcon: new URL("/src/assets/images/svg/electr.svg", import.meta.url),
    serviseType: "Электричество",
  },
  {
    serviseIcon: new URL(
      "/src/assets/images/svg/hotwater.svg",
      import.meta.url
    ),
    serviseType: "Горячая вода",
  },
  {
    serviseIcon: new URL("/src/assets/images/svg/trash.svg", import.meta.url),
    serviseType: "Мусор",
  },
  {
    serviseIcon: new URL("/src/assets/images/svg/gas.svg", import.meta.url),
    serviseType: "Газ",
  },
  {
    serviseIcon: new URL("/src/assets/images/svg/sewage.svg", import.meta.url),
    serviseType: "Канализация",
  },
]);
const categorys = ref([
  {
    cardIcon: new URL("/src/assets/images/svg/globus.svg", import.meta.url),
    cardTitle: "Интернет-провайдеры",
  },
  {
    cardIcon: new URL("/src/assets/images/svg/tv.svg", import.meta.url),
    cardTitle: "Телевидение и онлайн-вещание",
  },
  {
    cardIcon: new URL("/src/assets/images/svg/umbrella.svg", import.meta.url),
    cardTitle: "Страхование",
  },
  {
    cardIcon: new URL("/src/assets/images/svg/game.svg", import.meta.url),
    cardTitle: "Игры и социальные сети",
  },
  {
    cardIcon: new URL("/src/assets/images/svg/hosting.svg", import.meta.url),
    cardTitle: "Хостинг- провайдеры",
  },
  {
    cardIcon: new URL("/src/assets/images/svg/ticket.svg", import.meta.url),
    cardTitle: "Авиа- и ЖД-билеты",
  },
]);
const rcards = ref([
  {
    forMobile: new URL("/src/assets/images/svg/apple.svg", import.meta.url),
    forMobileApp: "App Store",
    ratingInfo: "4,6",
  },
  {
    forMobile: new URL("/src/assets/images/svg/playm.svg", import.meta.url),
    forMobileApp: "Google Play",
    ratingInfo: "4,8",
  },
]);
</script>
