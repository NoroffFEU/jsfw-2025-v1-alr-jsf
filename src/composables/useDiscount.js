import { computed } from "vue";

export function useDiscount(product) {
  const discountPercent = computed(() => {
    if (!product.value) return 0;
    const { price, discountedPrice } = product.value;
    if (!price || !discountedPrice || discountedPrice >= price) return 0;
    return Math.round(((price - discountedPrice) / price) * 100);
  });

  const discountedPrice = computed(() => {
    if (!product.value) return 0;
    return product.value.discountedPrice || product.value.price;
  });

  return { discountPercent, discountedPrice };
}
