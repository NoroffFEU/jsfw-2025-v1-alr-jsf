<template>
  <div class="max-w-4xl mx-auto px-4 py-6">
    <div v-if="loading">Loading...</div>
    <div v-else-if="error" class="text-red-500">{{ error }}</div>
    <div v-else class="grid grid-cols-1 md:grid-cols-2 gap-6">
      <img
        :src="product.image.url"
        :alt="product.title"
        class="w-full h-80 object-cover rounded"
      />
      <div>
        <h1 class="text-2xl font-semibold">{{ product.title }}</h1>
        <p class="mt-2 text-gray-700">{{ product.description }}</p>
        <div class="mt-4 text-lg">
          <span
            v-if="product.discountPercentage"
            class="line-through text-gray-500 mr-2"
          >
            {{ product.price }} NOK
          </span>
          <span class="font-bold">{{ discountedPrice }} NOK</span>
        </div>
        <div class="mt-4">
          <button
            @click="addToCart(product)"
            class="bg-primary-600 text-white py-2 px-4 rounded hover:bg-primary-700"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, computed } from "vue";
import { useRoute } from "vue-router";
import { fetchProductById } from "../services/api";
import { useCartStore } from "../stores/cartStore";
import { useToastStore } from "../stores/toastStore";

const route = useRoute();
const product = ref(null);
const loading = ref(true);
const error = ref(null);

const cartStore = useCartStore();
const toast = useToastStore();

const discountedPrice = computed(() => {
  if (!product.value) return 0;
  const discount = product.value.discountPercentage || 0;
  return discount
    ? Math.round(product.value.price * (1 - discount / 100))
    : product.value.price;
});

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
