<template>
  <h2 class="mb-9 text-2xl font-semibold text-lm-black">Экспресс оплата</h2>
  <form action="" @submit.prevent>
    <label for="tel" class="mb-6 flex w-full max-w-[530px] flex-col">
      <span class="mb-3 text-sm font-semibold">Номер телефона</span>
      <input
        id="tel"
        class="duration-250 rounded-lg bg-lm-stone py-3 px-4 text-sm font-semibold outline-offset-0 focus:border-lm-orange focus:outline-4 focus:outline-lm-orange active:outline-0"
        v-maska="'+998(##) ### ##-##'"
        placeholder="+998(__) __ - __ - __"
      />
    </label>
    <label for="sum" class="mb-8 flex w-full max-w-[530px] flex-col">
      <span class="mb-3 text-sm font-semibold">Сумма платежа</span>
      <VueNumberFormat
        v-model:value="value"
        :options="{
          precision: '',
          prefix: ' ',
          suffix: ' ',
          acceptNegative: false,
        }"
        class="duration-250 rounded-lg bg-lm-stone py-3 px-4 text-sm font-semibold outline-offset-0 focus:border-lm-orange focus:outline-4 focus:outline-lm-orange active:outline-0"
      ></VueNumberFormat>
    </label>
    <button
      class="min-w-[164px] rounded-lg border-2 border-solid border-lm-orange bg-white py-[10px] text-center text-sm font-semibold leading-5 duration-150 hover:bg-lm-orange hover:text-white"
    >
      Оплатить
    </button>
  </form>
</template>
