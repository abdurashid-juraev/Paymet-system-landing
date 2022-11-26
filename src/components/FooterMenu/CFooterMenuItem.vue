<template>
  <li>
    <h4 class="mb-4 text-lg font-semibold text-white">
      {{ footerMenuTitle }}
      <!-- О сервисе -->
    </h4>
    <ul>
      <li v-for="item in menu" :key="item.id" class="xl:!mb-2 sm:last:mb-0">
        <router-link
          class="text-sm font-normal text-lm-zinc duration-150 hover:text-lm-orange hover:underline"
          to="#!"
          >{{ item.link }} <img class="mb-4 select-none" :src="item.img" alt=""
        /></router-link>
      </li>
    </ul>
  </li>
</template>

<script lang="ts" setup>
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const props = defineProps({
  footerMenuTitle: String,
  menu: { type: Array, required: true },
});
</script>
