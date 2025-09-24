<template>
  <div>
    <DiscountBar />
    <Header />
    <router-view />
    <Footer />
    <ToastContainer />
  </div>
</template>

<script setup>
import DiscountBar from "./components/layout/DiscountBar.vue";
import Header from "./components/layout/Header.vue";
import Footer from "./components/layout/Footer.vue";
import ToastContainer from "./components/ui/ToastContainer.vue";
</script>
