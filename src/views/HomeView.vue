<script setup>
import Hero from "@/components/Hero.vue";
import HomeCards from "@/components/HomeCards.vue";
import CarListings from "@/components/CarListings.vue";
</script>

<template>
  <Hero />
  <HomeCards />
  <CarListings :limit="3" :showButton="true" />
</template>
