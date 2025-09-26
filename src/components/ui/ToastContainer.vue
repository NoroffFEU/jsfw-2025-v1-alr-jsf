<script setup>
import { useToastStore } from "../../stores/toastStore.js";
import { computed } from "vue";

const toastStore = useToastStore();
const toasts = computed(() => toastStore.toasts);

const toastTypeClass = (type) => {
  switch (type) {
    case "success":
      return "bg-[#4f7942]";
    case "warning":
      return "bg-[#cb997e]";
    case "error":
      return "bg-[#b31b1b]";
    case "info":
      return "bg-[#0a0a0a]";
    default:
      return "bg-gray-500";
  }
};
</script>

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
