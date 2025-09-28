<script setup>
import { MagnifyingGlassIcon } from "@heroicons/vue/24/outline";

const modelValue = defineModel();
</script>

<template>
  <label class="relative w-full">
    <input
      v-model="modelValue"
      type="text"
      id="searchInput"
      placeholder="Search Products.."
      class="w-full px-3 py-2 text-sm border border-gray-200 rounded-full focus:outline-none focus:ring-1 focus:ring-primary-500"
    />
    <MagnifyingGlassIcon
      class="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500"
    />
  </label>
</template>
