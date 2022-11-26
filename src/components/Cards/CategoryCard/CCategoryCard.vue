<template>
  <router-link
    to="#!"
    class="relative inline-block min-h-[130px] rounded-xl border border-solid border-[#E6E9EF] py-6 px-4 text-center duration-150 after:absolute after:right-0 after:left-0 after:bottom-0 after:mx-auto after:h-[3px] after:w-5 after:bg-[#32B141] after:content-[''] hover:border-lm-orange"
  >
    <div class="mx-auto mb-4 h-9 w-9 select-none overflow-hidden">
      <img class="h-full w-full object-contain" :src="cardIcon" alt="" />
    </div>
    <h4 class="text-base font-semibold text-lm-black">
      {{ cardTitle }}
      <!-- Интернет-провайдеры -->
    </h4>
  </router-link>
</template>

<script lang="ts" setup>
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const props = defineProps({
  cardIcon: { type: String, required: true },
  cardTitle: { type: String, required: true },
});
</script>
