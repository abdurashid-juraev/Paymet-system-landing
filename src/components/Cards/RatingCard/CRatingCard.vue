<template>
  <article
    class="rounded-xl p-8 shadow-lm-shadow xl:mb-0 xl:bg-none sm:mb-5 sm:bg-white"
  >
    <div class="mb-10 flex items-center justify-between">
      <div><img class="select-none" :src="forMobile" alt="" /></div>
      <div>
        <vue3-star-ratings
          class="!m-0 !p-0"
          v-model="rating"
          :showControl="false"
          :starColor="'#FFC007'"
          :inactiveColor="'#32B141'"
          :step="1"
          :starSize="20"
        />
      </div>
    </div>
    <div class="flex items-center justify-between">
      <div>
        <div class="mb-1 text-base font-semibold text-lm-zinc">Рейтинг в</div>
        <div class="text-xl font-bold text-lm-black">{{ forMobileApp }}</div>
      </div>
      <div class="text-xl font-semibold text-lm-black">
        <span
          class="text-bold mr-3 leading-[114px] text-lm-orange xl:!text-[84px] sm:text-4xl"
          >{{ ratingInfo }}</span
        >из 5
      </div>
    </div>
  </article>
</template>

<script lang="ts" setup>
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const props = defineProps({
  forMobile: { type: String, require: true },
  forMobileApp: { type: String, require: true },
  ratingInfo: { type: String, require: true },
});
</script>
