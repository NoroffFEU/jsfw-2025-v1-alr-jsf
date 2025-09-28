<script setup>
import { ref, onMounted, computed } from "vue";
import { useRoute } from "vue-router";
import { fetchProductById } from "../services/api";
import { useCartStore } from "../stores/cartStore";
import { useToastStore } from "../stores/toastStore";
import { useDiscount } from "../composables/useDiscount";
import { StarIcon as StarSolid } from "@heroicons/vue/24/solid";
import { StarIcon as StarOutline } from "@heroicons/vue/24/outline";
import ProductReviews from "../components/products/ProductReviews.vue";

const route = useRoute();
const product = ref(null);
const loading = ref(true);
const error = ref(null);

const cartStore = useCartStore();
const toast = useToastStore();

const { discountPercent, discountedPrice } = useDiscount(product);

const addToCart = (prod) => {
  cartStore.addToCart(prod);
  toast.push(`${prod.title} added to cart!`, "success");
};

onMounted(async () => {
  try {
    product.value = await fetchProductById(route.params.id);
  } catch (err) {
    error.value = err.message || "Failed to load product";
  } finally {
    loading.value = false;
  }
});
</script>

<template>
  <div class="max-w-4xl mx-auto px-4 py-6">
    <div v-if="loading">Loading...</div>
    <div v-else-if="error" class="text-red-500">{{ error }}</div>
    <div v-else class="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div class="relative w-full h-80 rounded overflow-hidden">
        <div
          v-if="discountPercent > 0"
          class="absolute z-10 top-4 left-4 bg-black text-white text-xs font-bold px-2 py-1 rounded-full shadow-md"
        >
          -{{ discountPercent }}%
        </div>
        <img
          :src="product.image.url"
          :alt="product.title"
          class="w-full h-full object-cover"
        />
      </div>
      <div>
        <h4 class="text-xs md:text-sm mb-2 text-gray-500">
          {{ product.tags.join(", ") }}
        </h4>
        <h1 class="text-2xl font-semibold">{{ product.title }}</h1>
        <div class="flex items-center">
          <StarSolid
            v-for="n in Math.floor(product.rating)"
            :key="'full-' + n"
            class="w-3 h-3 text-primary-500"
          />
          <StarOutline
            v-for="n in 5 - Math.floor(product.rating)"
            :key="'empty-' + n"
            class="w-3 h-3 text-gray-300"
          />
        </div>
        <p class="mt-4 text-gray-700">{{ product.description }}</p>
        <div class="mt-4 text-lg flex items-center gap-2">
          <span v-if="discountPercent > 0" class="line-through text-gray-500">
            {{ product.price }} NOK
          </span>
          <span class="font-bold">{{ discountedPrice }} NOK</span>
        </div>
        <div class="mt-4">
          <button
            @click="addToCart(product)"
            class="bg-black text-white tracking-wide rounded-full px-8 py-2 cursor-pointer"
          >
            + Add to Cart
          </button>
        </div>
      </div>
    </div>
  </div>
  <div>
    <ProductReviews v-if="product" :product="product" />
  </div>
</template>
