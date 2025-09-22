import { defineStore } from "pinia";
import { ref, computed } from "vue";

export const useCartStore = defineStore("cart", () => {
  const items = ref([]);

  const addToCart = (product, qty = 1) => {
    const found = items.value.find((i) => i.product.id === product.id);
    if (found) found.qty += qty;
    else items.value.push({ product, qty });
  };

  const removeFromCart = (productId) => {
    items.value = items.value.filter((i) => i.product.id !== productId);
  };

  const setQty = (productId, qty) => {
    const item = items.value.find((i) => i.product.id === productId);
    if (!item) return;
    item.qty = Math.max(1, qty);
  };

  const clear = () => (items.value = []);

  const itemCount = computed(() =>
    items.value.reduce((sum, i) => sum + i.qty, 0)
  );
  const total = computed(() =>
    items.value.reduce((sum, i) => {
      const orig = i.product.price;
      const discount = i.product.discountPercentage || 0;
      const price = discount ? Math.round(orig * (1 - discount / 100)) : orig;
      return sum + price * i.qty;
    }, 0)
  );

  return { items, addToCart, removeFromCart, setQty, clear, itemCount, total };
});
