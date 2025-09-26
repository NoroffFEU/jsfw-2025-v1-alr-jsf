<script setup>
import { computed } from "vue";
import { useDiscount } from "../../composables/useDiscount.js";
import { StarIcon as StarSolid } from "@heroicons/vue/24/solid";
import { StarIcon as StarOutline } from "@heroicons/vue/24/outline";

const props = defineProps({ product: Object });
const { discountPercent, discountedPrice } = useDiscount(
  computed(() => props.product)
);
</script>

<template>
  <div class="overflow-hidden mb-2">
    <router-link
      :to="`/product/${product.id}`"
      class="block mt-2 text-base-600"
    >
      <div class="relative w-full pb-[155%] overflow-hidden">
        <div
          v-if="discountPercent > 0"
          class="absolute top-2 left-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full shadow-md"
        >
          -{{ discountPercent }}%
        </div>
        <img
          :src="product.image.url"
          :alt="product.image.alt"
          class="absolute top-0 left-0 w-full h-full object-cover"
        />
      </div>
      <div class="mt-1 text-sm md:text-md flex justify-between">
        <div>
          <template v-if="discountPercent > 0">
            <span class="line-through text-base mr-2 font-medium">
              {{ product.price }} NOK
            </span>
            <span class="font-bold text-success">
              {{ discountedPrice }} NOK
            </span>
          </template>
          <template v-else>
            <span class="font-bold">{{ product.price }} NOK</span>
          </template>
        </div>
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
      <h3 class="mt-1 text-sm font-medium text-secondary">
        {{ product.title }}
      </h3>
      <h4 class="mt-1 text-xs text-gray-500">
        {{ product.tags.join(", ") }}
      </h4>
    </router-link>
  </div>
</template>
