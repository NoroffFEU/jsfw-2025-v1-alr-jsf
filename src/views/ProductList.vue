<template>
  <div class="max-w-6xl mx-auto px-4 py-6">
    <h2 class="font-poppins text-2xl text-center font-medium mb-4">NEWS</h2>
    <p v-if="loading">Loading products...</p>
    <p v-else-if="error" class="text-red-500">{{ error }}</p>
    <div v-else class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      <ProductCard
        v-for="product in products"
        :key="product.id"
        :product="product"
      />
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { fetchProducts } from "../services/api";
import ProductCard from "../components/ProductCard.vue";

const products = ref([]);
const loading = ref(true);
const error = ref(null);

onMounted(async () => {
  try {
    products.value = await fetchProducts();
  } catch (err) {
    error.value = err.message || "Unknown error";
  } finally {
    loading.value = false;
  }
});
</script>
