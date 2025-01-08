<script setup>
import { RouterLink } from 'vue-router';
</script>

<template>
    <section>
      <div class="bg-gradient-to-r from-purple-500 via-pink-300 to-purple-500 hover:from-purple-500 hover:to-pink-500 p-4">
        <RouterLink
          to="/cars"
          class="text-white font-bold py-2 px-4 rounded-full flex items-center transition duration-300 ease-in-out"
        >
          <i class="pi pi-arrow-circle-left mr-2"></i> Back to Cars List
        </RouterLink>
      </div>
    </section>
  </template>
  
  