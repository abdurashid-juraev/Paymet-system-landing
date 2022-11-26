<template>
  <tr class="flex justify-between">
    <td>
      <div class="flex items-center">
        <img
          class="mr-3 h-7 w-7 select-none rounded-full object-cover"
          :src="currencyCountryFlag"
          alt=""
        />
        <div>
          <div class="font-bold uppercase text-lm-black">
            {{ currencyCountry }}
          </div>
          <div class="text-xs text-[#A5AAB4]">{{ currencySum }}</div>
        </div>
      </div>
    </td>
    <td>
      <div class="mt-2 flex items-center">
        <span class="text-xs font-semibold text-red-500">
          {{ currencyInfo }}</span
        >
        <span class="ml-2">
          <img class="select-none" :src="currencyInfoType" alt="" />
          <!-- <Inlinesvg src="/src/assets/images/svg/greenArrow.svg" /> -->
        </span>
      </div>
    </td>
  </tr>
</template>

<script lang="ts" setup>
// import InlineSvg from "vue-inline-svg";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const props = defineProps({
  currencyCountryFlag: { type: String, required: true },
  currencyCountry: { type: String, required: true },
  currencySum: { type: Number, required: true },
  currencyInfo: { type: Number, required: true },
  currencyInfoType: { type: String, required: true },
});
</script>
