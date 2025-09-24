<script setup>
import HeroSection from "../components/home/HeroSection.vue";
import NewProductsSection from "../components/home/NewProductsSection.vue";
import ProductListSection from "../components/home/ProductListSection.vue";
import MidSection from "../components/home/MidSection.vue";
</script>

<template>
  <HeroSection
    title="Step Into the Season: Autumn Collection"
    imageUrl="https://images.unsplash.com/photo-1675873725360-b15df4950952?q=80&w=1920&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  />
  <NewProductsSection />
  <MidSection
    title="AW / 25"
    :images="[
      {
        url: 'https://images.unsplash.com/photo-1651607238140-cbeed22548b4?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        alt: 'Woman with dark hair and colorful clothes, sitting in a orange studio.',
      },
      {
        url: 'https://images.unsplash.com/photo-1741605037162-b1f475a4a4d3?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        alt: 'Woman with white shirt, grey pants and dark hair sitting on a stool.',
      },
      {
        url: 'https://images.unsplash.com/photo-1639587539304-00f970b18521?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        alt: 'Woman in white suit sittiong on a chair.',
      },
    ]"
  />
  <ProductListSection />
</template>
