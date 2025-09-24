<script setup>
import { computed } from "vue";
import { useProducts } from "../../composables/useProducts.js";
import ProductCard from "../products/ProductCard.vue";

const { products, loading, error } = useProducts();

const latestProducts = computed(() => products.value.slice(0, 4));
</script>

<template>
  <div class="max-w-6xl mx-auto px-4 py-6">
    <h2 class="font-poppins text-2xl text-center font-medium mb-4">NEWS</h2>
    <p v-if="loading">Loading products...</p>
    <p v-else-if="error" class="text-red-500">{{ error }}</p>
    <div v-else class="grid gap-2 grid-cols-2 md:grid-cols-4">
      <ProductCard
        v-for="product in latestProducts"
        :key="product.id"
        :product="product"
      />
    </div>
  </div>
</template>
