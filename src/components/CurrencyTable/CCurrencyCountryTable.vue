<template>
  <table class="grid grid-cols-2 rounded-xl bg-lm-stone p-5">
    <tbody
      class="grid-row-auto mr-2 grid gap-5 border-r-2 border-solid border-[#E6E9EF] pr-2"
    >
      <CCurrencyCountryTableRow
        v-for="row in data.slice(0, 3)"
        :key="row.id"
        :currencyCountryFlag="row.currencyCountryFlag"
        :currencyCountry="row.currencyCountry"
        :currencySum="row.currencySum"
        :currencyInfo="row.currencyInfo"
        :currencyInfoType="row.currencyInfoType"
      />
    </tbody>
    <tbody class="grid-row-3 ml-2 grid gap-5">
      <CCurrencyCountryTableRow
        v-for="row in data.slice(3, 6)"
        :key="row.id"
        :currencyCountryFlag="row.currencyCountryFlag"
        :currencyCountry="row.currencyCountry"
        :currencySum="row.currencySum"
        :currencyInfo="row.currencyInfo"
        :currencyInfoType="row.currencyInfoType"
      />
    </tbody>
  </table>
</template>

<script lang="ts" setup>
import { ref } from "vue";

import CCurrencyCountryTableRow from "./CCurrencyCountryTableRow/CCurrencyCountryTableRow.vue";

const data = ref([
  {
    currencyCountryFlag: new URL(
      "/src/assets/images/svg/Feuro.svg",
      import.meta.url
    ),
    currencyCountry: "EUR",
    currencySum: "11 150.14",
    currencyInfo: "-15.78",
    currencyInfoType: new URL(
      "/src/assets/images/svg/redArrow.svg",
      import.meta.url
    ),
  },
  {
    currencyCountryFlag: new URL(
      "/src/assets/images/svg/Frus.svg",
      import.meta.url
    ),
    currencyCountry: "RUB",
    currencySum: "172.50",
    currencyInfo: "+2.42",
    currencyInfoType: new URL(
      "/src/assets/images/svg/redArrow.svg",
      import.meta.url
    ),
  },
  {
    currencyCountryFlag: new URL(
      "/src/assets/images/svg/Fusa.svg",
      import.meta.url
    ),
    currencyCountry: "USD",
    currencySum: "11 150.14",
    currencyInfo: "-15.78",
    currencyInfoType: new URL(
      "/src/assets/images/svg/redArrow.svg",
      import.meta.url
    ),
  },
  {
    currencyCountryFlag: new URL(
      "/src/assets/images/svg/Feng.svg",
      import.meta.url
    ),
    currencyCountry: "GBP",
    currencySum: "13 577.53",
    currencyInfo: "-30.38",
    currencyInfoType: new URL(
      "/src/assets/images/svg/redArrow.svg",
      import.meta.url
    ),
  },
  {
    currencyCountryFlag: new URL(
      "/src/assets/images/svg/Fjpn.svg",
      import.meta.url
    ),
    currencyCountry: "JPY",
    currencySum: "86.54",
    currencyInfo: "-0.2",
    currencyInfoType: new URL(
      "/src/assets/images/svg/redArrow.svg",
      import.meta.url
    ),
  },
  {
    currencyCountryFlag: new URL(
      "/src/assets/images/svg/Fchf.svg",
      import.meta.url
    ),
    currencyCountry: "CHF",
    currencySum: "11 135.66",
    currencyInfo: "-77.35",
    currencyInfoType: new URL(
      "/src/assets/images/svg/redArrow.svg",
      import.meta.url
    ),
  },
]);
</script>
