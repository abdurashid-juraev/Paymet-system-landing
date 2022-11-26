<template>
  <article class="flex w-full flex-col items-center md:!mb-0 sm:mb-8">
    <div class="mb-6 h-[148px] w-[148px]">
      <img
        class="h-full w-full select-none object-contain object-center"
        :src="cardIcon"
        alt=""
      />
    </div>
    <h3 class="mb-3 text-center text-2xl font-bold leading-8 text-lm-black">
      <!-- Мониторинг -->
      {{ cardTitle }}
    </h3>
    <p class="text-center text-sm leading-5 text-lm-zinc">
      {{ cardText }}
      <!-- Мы — онлайн-экосистема, основанная на финансовых и лайфстайл-услугах.
      Клиентами LimonPay стали 19 млн человек по всей Узбекистана. -->
    </p>
  </article>
</template>

<script lang="ts" setup>
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const props = defineProps({
  cardIcon: { type: String, required: true },
  cardTitle: { type: String, required: true },
  cardText: { type: String, required: true },
});
</script>
