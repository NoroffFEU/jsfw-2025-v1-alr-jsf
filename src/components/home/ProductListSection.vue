<script setup>
import { useProducts } from "../../composables/useProducts.js";
import ProductCard from "../products/ProductCard.vue";

const { products, loading, error } = useProducts();
</script>

<template>
  <section id="products" class="max-w-6xl mx-auto px-4 py-6">
    <h2 class="font-poppins text-2xl text-center font-medium mb-4">
      All Products
    </h2>

    <p v-if="loading">Loading products...</p>
    <p v-else-if="error" class="text-red-500">{{ error }}</p>

    <div v-else class="grid gap-6 sm:grid-cols-2 md:grid-cols-4">
      <ProductCard
        v-for="product in products"
        :key="product.id"
        :product="product"
      />
    </div>
  </section>
</template>
