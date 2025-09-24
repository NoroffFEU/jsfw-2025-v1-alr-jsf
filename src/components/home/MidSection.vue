<script setup>
import { defineProps } from "vue";

const props = defineProps({
  title: { type: String, required: true },
  images: { type: Array, required: true, default: () => [] },
});
</script>

<template>
  <section class="w-full relative">
    <div
      class="absolute inset-x-0 top-0 h-80 md:h-100 bg-gradient-to-b from-black/70 to-transparent z-10 flex items-center justify-center"
    >
      <h2
        class="text-2xl md:text-4xl text-white font-regular italic text-center px-4"
      >
        {{ title }}
      </h2>
    </div>
    <div class="w-full flex flex-wrap">
      <div
        v-for="(img, index) in images"
        :key="index"
        class="w-1/3 overflow-hidden h-80 md:h-96 lg:h-[40rem]"
      >
        <img
          :src="img.url"
          :alt="img.alt || 'Image'"
          class="w-full h-full object-cover"
        />
      </div>
    </div>
  </section>
</template>
