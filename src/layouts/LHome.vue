<template>
  <div class="flex h-screen flex-col">
    <header class="bg-lm-black pt-8">
      <CHeader />
    </header>
    <slot />
    <CFooter class="mt-auto" />
  </div>
</template>

<script lang="ts" setup>
import CFooter from "../components/layout/CFooter.vue";
import CHeader from "../components/layout/CHeader.vue";
</script>
