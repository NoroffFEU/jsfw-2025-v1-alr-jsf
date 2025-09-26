<script setup>
import { useCartStore } from "../stores/cartStore";
import { useToastStore } from "../stores/toastStore";

const cart = useCartStore();
const toast = useToastStore();

const removeItem = (id) => {
  cart.removeFromCart(id);
  toast.push("Item removed from cart", "info");
};

const updateQty = (item) => {
  cart.setQty(item.product.id, item.qty);
};

const checkout = () => {
  cart.clear();
  toast.push("Checkout successful!", "success");
};
</script>

<template>
  <div class="max-w-4xl mx-auto px-4 py-6">
    <h1 class="text-2xl font-semibold mb-4">Your Cart</h1>
    <div v-if="!cart.items.length">Cart is empty</div>
    <div v-else>
      <div
        v-for="item in cart.items"
        :key="item.product.id"
        class="flex items-center justify-between mb-3 border-b pb-2"
      >
        <div>
          <h2 class="font-medium">{{ item.product.title }}</h2>
          <p class="text-gray-500">{{ item.product.price }} NOK</p>
        </div>
        <div class="flex items-center gap-2">
          <input
            type="number"
            min="1"
            v-model.number="item.qty"
            @change="updateQty(item)"
            class="w-16 border rounded p-1 text-center"
          />
          <button
            @click="removeItem(item.product.id)"
            class="text-red-600 hover:underline"
          >
            Remove
          </button>
        </div>
      </div>
      <div class="mt-4 text-lg font-bold">Total: {{ cart.total }} NOK</div>
      <router-link
        to="/checkout-success"
        @click="checkout"
        class="mt-4 inline-block bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700"
      >
        Checkout
      </router-link>
    </div>
  </div>
</template>
