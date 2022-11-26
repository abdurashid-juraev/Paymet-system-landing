<template>
  <li
    class="mb-2 flex items-center rounded-lg p-2 last:mb-0 xl:!bg-white sm:bg-lm-stone"
  >
    <img
      class="mr-3 h-6 w-6 select-none object-contain"
      :src="serviseIcon"
      alt=""
    />
    <span class="text-xs font-semibold">
      {{ serviseType }}
    </span>
  </li>
</template>

<script lang="ts" setup>
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const props = defineProps({
  serviseIcon: { type: String, required: true },
  serviseType: { type: String, required: true },
});
</script>
