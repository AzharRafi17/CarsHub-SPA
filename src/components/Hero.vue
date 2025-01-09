<script setup>
import { defineProps } from "vue";

defineProps({
  title: {
    type: String,
    default: "Buy & Sell Cars with Ease",
  },
  subtitle: {
    type: String,
    default: "Find your dream car or sell your old one in just a few clicks.",
  },
});
</script>

<template>
  <section
    class="bg-gradient-to-r from-purple-600 via-pink-500 to-red-500 py-15 mb-2"
  >
    <!-- Logo -->
    <div class="flex justify-center w-full">
      <img
        src="@/assets/img/logo.png"
        alt="Car"
        class="w-48 h-48 object-contain"
      />
    </div>

    <!-- Text Section -->
    <div
      class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center"
    >
      <div class="text-center">
        <!-- Stylish Font for Title -->
        <h1
          class="text-4xl font-extrabold text-white sm:text-5xl md:text-6xl font-[Audiowide]"
        >
          {{ title }}
        </h1>
        <p class="my-4 text-xl text-white">
          {{ subtitle }}
        </p>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* Apply custom font to the subtitle as well */
h1 {
  font-family: "Audiowide", sans-serif;
}
p {
  font-family: "Roboto", sans-serif;
}
</style>
