<template>
  <div class="w-full bg-white shadow-sm">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-2">
      <form
        class="w-full max-w-lg mx-auto"
        role="search"
        aria-label="Site search"
      >
        <label class="relative w-full">
          <input
            type="text"
            placeholder="Search Products.."
            class="w-full px-3 py-2 text-sm border border-gray-200 rounded-full focus:outline-none focus:ring-1 focus:ring-primary-500"
          />
          <button
            type="submit"
            class="absolute right-2 top-1/2 -translate-y-1/2 text-gray-500 hover:text-primary-600"
            aria-label="Search button"
          >
            <MagnifyingGlassIcon class="w-4 h-4" />
          </button>
        </label>
      </form>
    </div>
  </div>
</template>

<script setup>
import { MagnifyingGlassIcon } from "@heroicons/vue/24/outline";
</script>
