<template>
  <div class="rounded-xl bg-lm-stone px-5 pb-6 pt-8">
    <div class="mb-9 flex xl:!flex-row xl:!items-start sm:flex-col">
      <div
        class="solid inline-flex items-center border-b-2 border-[#E6E9EF] pb-3"
      >
        <input
          v-model.number="sum"
          class="taxt-[#A5AAB4] w-full flex-1 bg-transparent text-4xl font-bold focus:outline-none"
          type="text"
          placeholder="0"
        />

        <div>
          <span class="inline-flex" v-show="show">
            <img
              class="mr-2 inline-block h-6 w-6"
              src="@/assets/images/svg/usa.svg"
              alt=""
            /><span
              class="inline-block text-xl font-bold uppercase text-lm-black"
              >USD</span
            >
          </span>
          <span class="inline-flex" v-show="!show">
            <img
              class="mr-2 inline-block h-6 w-6"
              src="@/assets/images/svg/uzb.svg"
              alt=""
            /><span
              class="inline-block text-xl font-bold uppercase text-lm-black"
              >UZS</span
            >
          </span>
        </div>
      </div>
      <div class="xl:mx-6 xl:!rotate-0 sm:flex sm:rotate-90 sm:justify-center">
        <button
          @click="selectBtn"
          class="h-10 w-10 overflow-hidden xl:!my-0 sm:my-5"
          type="button"
        >
          <img
            class="inline-block h-full w-full object-contain"
            src="@/assets/images/svg/convertBtn.svg"
            alt=""
          />
        </button>
      </div>
      <div
        class="solid inline-flex items-center border-b-2 border-[#E6E9EF] pb-3"
      >
        <input
          v-model.number="dollar"
          class="taxt-[#A5AAB4] w-full flex-1 bg-transparent text-4xl font-bold focus:outline-none"
          type="text"
          placeholder="0"
        />
        <div>
          <span class="inline-flex" v-show="show">
            <img
              class="mr-2 inline-block h-6 w-6"
              src="@/assets/images/svg/uzb.svg"
              alt=""
            /><span
              class="inline-block text-xl font-bold uppercase text-lm-black"
              >UZS</span
            >
          </span>
          <span class="inline-flex" v-show="!show">
            <img
              class="mr-2 inline-block h-6 w-6"
              src="@/assets/images/svg/usa.svg"
              alt=""
            /><span
              class="inline-block text-xl font-bold uppercase text-lm-black"
              >USD</span
            >
          </span>
        </div>
      </div>
    </div>
    <div class="mb-4 flex items-center">
      <div class="mr-2">
        <img src="@/assets/images/svg/bankNote.svg" alt="" />
      </div>
      <div class="text-sm font-semibold text-[#2B2B30]">
        <span>1 </span><span>USD</span> = <span>11 150 </span><span>UZS</span>
      </div>
    </div>
    <div class="flex items-center">
      <div class="mr-2">
        <img src="@/assets/images/svg/update.svg" alt="" />
      </div>
      <div class="text-sm font-semibold">
        Курс автоматически обновляется каждые 10 минут
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";

const sum = ref("");
const dollar = ref("");
const show = ref(false);

// const pul = dollar.value;
const selectBtn = () => {
  show.value = !show.value;
  // sum.value = dollar.value;
  dollar.value = sum.value;
};
</script>
