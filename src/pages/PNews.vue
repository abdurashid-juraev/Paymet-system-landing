<template>
  <main class="bg-[#1e1e1e0a] pt-8 pb-16 lg:px-0 sm:px-4">
    <div class="xl:container">
      <h2 class="mb-6 text-[32px] font-bold leading-10 text-lm-black">
        Все новости
      </h2>
      <div class="grid lg:!grid-flow-col lg:!gap-7 sm:grid-flow-row sm:gap-4">
        <div class="lg:!col-span-7 md:!order-none sm:order-2 sm:col-span-1">
          <div
            class="mb-7 grid gap-7 lg:!grid-cols-3 md:grid-cols-2 sm:grid-cols-1"
          >
            <CNewsCard v-for="card in 11" :key="card.id" />
          </div>
        </div>
        <div class="col-span-1">
          <CPosterSm />
          <CPosterLg />
        </div>
      </div>
      <div class="flex justify-center">
        <button
          type="button"
          class="rounded-lg border-2 border-solid border-[#E6E9EF] bg-white py-3 px-6 text-sm font-semibold text-lm-black duration-150 hover:bg-lm-orange"
        >
          Загрузить еще
        </button>
      </div>
    </div>
  </main>
</template>

<script lang="ts" setup>
import CNewsCard from "@/components/Cards/NewsCard/CNewsCard.vue";
import CPosterLg from "@/components/poster/CPosterLg.vue";
import CPosterSm from "@/components/poster/CPosterSm.vue";
</script>
