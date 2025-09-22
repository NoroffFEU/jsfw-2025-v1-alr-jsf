<template>
  <header class="sticky top-0 z-50 bg-white shadow py-4">
    <div class="max-w-6xl mx-auto px-4 flex flex-col gap-2">
      <div class="flex justify-between items-center">
        <a href="/" class="text-2xl font-semibold tracking-wide font-poppins">
          Polkadot
        </a>
        <form class="relative w-64" role="search" aria-label="Site search">
          <input
            type="text"
            placeholder="Search Products..."
            class="w-full px-3 py-2 text-sm border border-gray-200 rounded-full focus:outline-none"
          />
          <button
            type="submit"
            class="absolute right-2 top-1/2 -translate-y-1/2 text-gray-500 hover:text-primary-600"
            aria-label="Search button"
          >
            <MagnifyingGlassIcon class="w-4 h-4" />
          </button>
        </form>
        <button
          @click="toggleMobileMenu"
          class="md:hidden p-2 rounded-md focus:outline-none"
        >
          <Bars3Icon class="w-6 h-6" />
        </button>
      </div>
      <ul
        class="hidden md:flex md:justify-center gap-6 justify-start font-medium text-lg"
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

    <!-- Mobilmeny -->
    <div v-if="mobileMenuOpen" class="md:hidden bg-primary-20 px-4 py-2">
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
  </header>
</template>

<script setup>
import { ref } from "vue";
import { MagnifyingGlassIcon } from "@heroicons/vue/24/outline";
import { Bars3Icon } from "@heroicons/vue/24/solid";

const navItems = [
  { id: 1, name: "Home", link: "/" },
  { id: 2, name: "Products", link: "/" },
  { id: 3, name: "Cart", link: "/cart" },
  { id: 4, name: "Contact", link: "/contact" },
];

const mobileMenuOpen = ref(false);
function toggleMobileMenu() {
  mobileMenuOpen.value = !mobileMenuOpen.value;
}
</script>
