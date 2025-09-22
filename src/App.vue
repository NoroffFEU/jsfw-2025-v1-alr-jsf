<template>
  <div>
    <DiscountBar />
    <Header />
    <HeroSection
      title="Step Into the Season: Autumn Collection"
      imageUrl="https://images.unsplash.com/photo-1675873725360-b15df4950952?q=80&w=1920&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    />

    <router-view />
    <Footer />
    <ToastContainer />
  </div>
</template>

<script setup>
import DiscountBar from "./components/DiscountBar.vue";
import Header from "./components/Header.vue";
import HeroSection from "./components/HeroSection.vue";
import Footer from "./components/Footer.vue";
import ToastContainer from "./components/ToastContainer.vue";
</script>
