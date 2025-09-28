<script setup></script>

<template>
  <footer class="bg-primary-10 text-gray-800 pt-10 pb-6 shadow-lg">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex flex-col text-center gap-12">
        <div>
          <h3 class="text-lg font-semibold mb-3">About Polkadot</h3>
          <p class="text-gray-600 text-sm">
            Polkadot offers a variety of products and aim to provide the best
            shopping experience for our customers. Join us and explore our
            latest collections!
          </p>
        </div>
        <div>
          <h3 class="text-lg font-semibold mb-3">Contact & Follow</h3>
          <p class="text-gray-600 text-sm mb-3">
            Email:
            <a
              href="mailto:info@polkadot.com"
              class="hover:text-primary-600 transition"
              >info@polkadot.com</a
            ><br />
            Phone: +47 123 456 789
          </p>
        </div>
      </div>
      <div class="mt-10 text-center">
        <h3 class="text-lg font-semibold mb-3">Subscribe to Our Newsletter</h3>
        <form
          class="flex flex-col sm:flex-row justify-center items-center gap-2"
        >
          <input
            type="email"
            autocomplete="email"
            id="emailSubscribe"
            placeholder="Your email"
            class="px-4 py-2 rounded border border-gray-500 focus:outline-none focus:ring-1 focus:ring-primary-600"
          />
          <button
            type="submit"
            class="px-6 py-2 rounded-full bg-black text-white font-semibold hover:bg-primary-700 transition"
          >
            Subscribe
          </button>
        </form>
      </div>
      <div
        class="mt-8 border-t border-gray-300 pt-4 text-sm text-gray-600 text-center"
      >
        © 2025 <span class="font-semibold">Polkadot</span>. All Rights Reserved.
      </div>
    </div>
  </footer>
</template>
