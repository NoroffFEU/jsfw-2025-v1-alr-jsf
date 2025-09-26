<script setup>
import DiscountBar from "./components/layout/DiscountBar.vue";
import Header from "./components/layout/Header.vue";
import Footer from "./components/layout/Footer.vue";
import ToastContainer from "./components/ui/ToastContainer.vue";
</script>

<template>
  <div class="flex flex-col min-h-screen">
    <DiscountBar />
    <Header />
    <main class="flex-1">
      <router-view />
    </main>
    <Footer />
    <ToastContainer />
  </div>
</template>
