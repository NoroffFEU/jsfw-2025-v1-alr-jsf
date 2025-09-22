import { defineStore } from "pinia";
import { ref } from "vue";

export const useToastStore = defineStore("toast", () => {
  const toasts = ref([]);
  let idCounter = 1;

  const push = (message, type = "info", duration = 3000) => {
    const toast = { id: idCounter++, message, type, duration };
    toasts.value.push(toast);
    setTimeout(() => remove(toast.id), duration);
  };

  const remove = (id) => {
    toasts.value = toasts.value.filter((t) => t.id !== id);
  };

  return { toasts, push, remove };
});
