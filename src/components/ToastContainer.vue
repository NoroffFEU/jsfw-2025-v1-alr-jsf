<template>
  <div class="fixed top-4 right-4 z-50 flex flex-col gap-2">
    <div
      v-for="toast in toasts"
      :key="toast.id"
      :class="[
        'px-4 py-2 rounded shadow text-white min-w-[200px]',
        toastTypeClass(toast.type),
      ]"
    >
      {{ toast.message }}
    </div>
  </div>
</template>

<script setup>
import { useToastStore } from "../stores/toastStore";
import { computed } from "vue";

const toastStore = useToastStore();
const toasts = computed(() => toastStore.toasts);

const toastTypeClass = (type) => {
  switch (type) {
    case "success":
      return "bg-green-500";
    case "error":
      return "bg-red-500";
    case "info":
      return "bg-blue-500";
    default:
      return "bg-gray-500";
  }
};
</script>

<style scoped>
/* Kan justeres om ønskelig */
</style>
