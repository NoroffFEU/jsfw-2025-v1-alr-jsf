<script setup>
import { StarIcon as StarSolid } from "@heroicons/vue/24/solid";
import { StarIcon as StarOutline } from "@heroicons/vue/24/outline";

const props = defineProps({
  product: {
    type: Object,
    required: true,
  },
});

const getInitials = (name) => {
  if (!name) return "";
  return name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
};
</script>

<template>
  <section class="mt-8 max-w-4xl mx-auto p-4">
    <h2 class="text-2xl font-semibold text-gray-900 mb-6">Customer Reviews</h2>
    <div
      v-if="!product.reviews || product.reviews.length === 0"
      class="text-gray-500"
    >
      No reviews yet.
    </div>
    <div v-else class="space-y-6">
      <div
        v-for="review in product.reviews"
        :key="review.id"
        class="p-4 bg-white rounded-lg shadow-md border border-gray-200"
      >
        <div class="flex items-center justify-between mb-2">
          <div class="flex items-center gap-2">
            <div
              class="w-10 h-10 rounded-full bg-[#cb997e] text-white flex items-center justify-center font-semibold uppercase"
            >
              {{ getInitials(review.username) }}
            </div>
            <span class="font-semibold text-gray-800">{{
              review.username
            }}</span>
          </div>
          <div class="flex space-x-1">
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
          </div>
        </div>
        <p class="text-gray-700">{{ review.description }}</p>
      </div>
    </div>
  </section>
</template>
