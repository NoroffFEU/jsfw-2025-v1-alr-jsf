<template>
  <div class="overflow-hidden">
    <div class="relative w-full pb-[155%] overflow-hidden">
      <img
        :src="product.image.url"
        :alt="product.title"
        class="absolute top-0 left-0 w-full h-full object-cover"
      />
    </div>
    <h3 class="mt-2 font-medium">{{ product.title }}</h3>
    <div class="mt-1">
      <span
        v-if="product.discountPercentage"
        class="line-through text-gray-500 mr-2"
      >
        {{ product.price }} NOK
      </span>
      <span class="font-bold">{{ discountedPrice }} NOK</span>
    </div>
    <router-link
      :to="`/product/${product.id}`"
      class="block mt-2 text-primary-600 hover:underline"
    >
      View Details
    </router-link>
  </div>
</template>

<script setup>
import { computed } from "vue";
const props = defineProps({ product: Object });

const discountedPrice = computed(() => {
  if (!props.product) return 0;
  const discount = props.product.discountPercentage || 0;
  return discount
    ? Math.round(props.product.price * (1 - discount / 100))
    : props.product.price;
});
</script>
