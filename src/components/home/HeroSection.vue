<script setup>
import { defineProps } from "vue";

const props = defineProps({
  title: { type: String, required: true },
  imageUrl: { type: String, required: true },
});
</script>

<template>
  <section class="relative w-full h-[500px] md:h-[600px]">
    <img :src="imageUrl" :alt="title" class="w-full h-full object-cover z-0" />
    <div
      class="absolute inset-0 bg-gradient-to-t from-black/60 to-black/10"
      style="background-color: rgba(0, 0, 0, 0.4)"
    >
      <h1
        class="absolute top-2/3 w-full flex justify-center text-3xl md:text-5xl text-white font-light italic text-center px-4"
      >
        {{ title }}
      </h1>
    </div>
  </section>
</template>
