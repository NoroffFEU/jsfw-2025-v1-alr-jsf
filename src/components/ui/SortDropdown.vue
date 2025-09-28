<script setup>
const modelValue = defineModel();
</script>

<template>
  <select
    v-model="modelValue"
    id="filterDropdown"
    class="text-sm border border-gray-200 rounded-full px-3 py-2 focus:outline-none"
  >
    <option value="name-asc">Name A–Z</option>
    <option value="name-desc">Name Z–A</option>
    <option value="price-asc">Price Low → High</option>
    <option value="price-desc">Price High → Low</option>
  </select>
</template>
