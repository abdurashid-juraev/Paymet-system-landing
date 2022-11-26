<!-- eslint-disable no-irregular-whitespace -->
<template>
  <main class="bg-[#1e1e1e0a] pb-14 pt-8 sm:px-4">
    <div class="xl:container">
      <div class="mb-8 grid gap-7 md:!grid-flow-col sm:grid-flow-row">
        <div class="md:!col-span-4 sm:col-span-1">
          <section class="rounded-xl bg-white lg:!p-7 sm:p-0">
            <h2 class="mb-3 text-2xl font-bold text-lm-black">
              LimonPay теперь также осуществляет денежные средства
            </h2>
            <div
              class="mb-5 border-b border-solid border-[#E6E9EF] pb-5 text-sm font-normal text-lm-zinc"
            >
              23 Января, 2022
            </div>
            <p class="mb-5 text-sm font-normal text-lm-gray">
              827 млрд 182 млн сумов чистой прибыли АО «Озмиллийбанк» в 2021
              году, оставшейся на счете нераспределенной прибыли, направить на
              выплату дивидендов, при этом в виде дивидендных акций она будет
              направлена ​на увеличение доли акционеров банка. Об этом говорится
              в решении общего собрания акционеров Узмиллийбанка, состоявшегося
              29 июля текущего года.
            </p>
            <div class="mb-5 h-[532px] w-full overflow-hidden rounded-xl">
              <img
                src="@/assets/images/png/visa.png"
                alt=""
                class="h-full w-full object-cover object-center"
              />
            </div>
            <div
              class="border-b border-solid border-[#E6E9EF] text-sm font-normal text-lm-gray [&>*]:mb-7"
            >
              <p>
                Бунда, юқоридаги маблағдан 41,4 млрд. сўми солиқ (дивиденддан
                солиқ) тўловларига сарфланади, қолган 785 млрд. 823 млн. сўм
                қўшимча акциялар чиқарувига йўналтирилади.
              </p>
              <p>
                Бунда, номинал қиймати 1 000 (бир минг) сўм бўлган 785 822 905
                дона эгасининг номи ёзилган оддий ҳужжатсиз шаклдаги қўшимча
                акциялар чиқариладм ва уларнинг 465 810 106 донаси Тикланиш ва
                тараққиёт жамғармасига, 320 012 799 донаси Молия вазирлигига 60
                (олтмиш) кун давомида биржадан ташқари уюшмаган қимматли
                қоғозлар бозорида тўғридан-тўғри битимлар тузиш орқали
                жойлаштирилади.
              </p>
              <p>
                Қайд этилишича, ушбу чиқарилиш амалга ошмаган деб топилган
                тақдирда, акциялар учун қабул қилинган тўлов воситалари ушбу
                чиқарилиш амалга ошмаган деб топилган кундан бошлаб 10 (ўн) кун
                давомида қайтарилади. Шунингдек, ушбу акциядорлар умумий
                йиғилишида “Ўзмиллийбанк” АЖ тафтиш комиссиясининг фаолиятини
                тугатилиши ҳақида ҳам қарор қабул қилинган.
              </p>
            </div>
            <div
              class="mt-6 flex items-center xl:!p-0 md:!flex-nowrap md:!justify-between md:p-5 sm:flex-wrap sm:justify-center"
            >
              <div>
                <button
                  type="button"
                  class="flex items-center rounded-xl bg-[#EFF1F5] py-2 px-3 text-lg font-semibold text-lm-black duration-150 hover:bg-lm-orange md:!mb-0 sm:mb-7"
                >
                  <img
                    class="mr-2"
                    src="@/assets/images/svg/share.svg"
                    alt=""
                  />
                  <span>Поделиться</span>
                </button>
              </div>
              <div>
                <a
                  href="#!"
                  class="flex items-center rounded-xl bg-[#EFF1F5] py-2 pr-2 pl-3 text-lg font-semibold text-lm-black duration-150 hover:bg-lm-orange md:!mb-0 sm:mb-7"
                  ><span>limonpay.uz/po...</span>
                  <img class="ml-2" src="@/assets/images/svg/copy.svg" alt=""
                /></a>
              </div>
            </div>
          </section>
        </div>
        <div class="col-span-1">
          <CPosterSm />
          <CPosterLg />
        </div>
      </div>
      <h2 class="mb-6 text-[32px] font-bold text-lm-black">Похожие новости</h2>
      <divm
        class="grid xl:!grid-cols-4 xl:!gap-7 md:grid-cols-3 sm:grid-cols-1 sm:gap-4"
      >
        <CNewsCard v-for="card in 4" :key="card.id" />
      </divm>
    </div>
  </main>
</template>

<script lang="ts" setup>
import CNewsCard from "@/components/Cards/NewsCard/CNewsCard.vue";
import CPosterLg from "@/components/poster/CPosterLg.vue";
import CPosterSm from "@/components/poster/CPosterSm.vue";
</script>
