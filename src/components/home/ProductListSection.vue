<script setup>
import { useProducts } from "../../composables/useProducts.js";
import { useProductSearch } from "../../composables/useSearch.js";
import ProductCard from "../products/ProductCard.vue";
import SearchBar from "../ui/SearchBar.vue";
import SortDropdown from "../ui/SortDropdown.vue";

const { products, loading, error } = useProducts();
const { searchQuery, sortOption, filteredProducts } =
  useProductSearch(products);
</script>

<template>
  <section id="products" class="max-w-6xl mx-auto px-4 py-6">
    <h2 class="font-poppins text-2xl text-center font-medium mb-4">
      All Products
    </h2>
    <div
      class="flex flex-col md:flex-row gap-4 justify-between items-center mb-6"
    >
      <SearchBar v-model="searchQuery" />
      <SortDropdown v-model="sortOption" />
    </div>
    <p v-if="loading">Loading products...</p>
    <p v-else-if="error" class="text-red-500">{{ error }}</p>
    <div v-else class="grid gap-4 grid-cols-2 md:grid-cols-4">
      <ProductCard
        v-for="product in filteredProducts"
        :key="product.id"
        :product="product"
      />
      <p
        v-if="!filteredProducts.length"
        class="col-span-full text-center text-gray-500"
      >
        No products found
      </p>
    </div>
  </section>
</template>
