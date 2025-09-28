<script setup>
import { ref } from "vue";
import { MagnifyingGlassIcon } from "@heroicons/vue/24/outline";
import { Bars3Icon } from "@heroicons/vue/24/solid";

const navItems = [
  { id: 1, name: "HOME", link: "/" },
  { id: 2, name: "PRODUCTS", link: "/#products" },
  { id: 4, name: "CONTACT", link: "/#contact" },
];

const mobileMenuOpen = ref(false);
function toggleMobileMenu() {
  mobileMenuOpen.value = !mobileMenuOpen.value;
}
</script>

<template>
  <header class="sticky top-0 z-50 bg-white shadow py-4">
    <div class="max-w-6xl mx-auto px-4 flex flex-col gap-2">
      <div class="flex justify-between items-center">
        <a href="/" class="text-2xl font-semibold tracking-wide font-poppins">
          POLKADOT
        </a>
        <div class="flex items-center gap-4">
          <router-link
            to="/cart"
            class="bg-black text-white px-4 py-2 rounded-full text-sm font-semibold hover:bg-gray-800 transition"
          >
            CART
          </router-link>
          <button
            @click="toggleMobileMenu"
            class="md:hidden p-2 rounded-md focus:outline-none"
          >
            <Bars3Icon class="w-6 h-6" />
          </button>
        </div>

        <ul
          class="hidden md:flex md:justify-center gap-6 justify-start font-medium text-sm mt-2"
        >
          <li v-for="item in navItems" :key="item.id">
            <router-link
              :to="item.link"
              class="inline-block hover:scale-110 transition-transform duration-100"
            >
              {{ item.name }}
            </router-link>
          </li>
        </ul>
      </div>
      <div v-if="mobileMenuOpen" class="md:hidden bg-primary-20 px-4 py-2 mt-2">
        <ul class="flex flex-col gap-2">
          <li v-for="item in navItems" :key="item.id">
            <router-link
              :to="item.link"
              class="block py-2 hover:bg-primary-10 rounded"
              @click="mobileMenuOpen = false"
            >
              {{ item.name }}
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </header>
</template>
