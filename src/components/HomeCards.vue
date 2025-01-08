<script setup>
import { RouterLink } from 'vue-router';
import Card from '@/components/Card.vue';
</script>

<template>
  <section class="py-4" >
    <div class="container-xl lg:container m-auto">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 rounded-lg">
        <!-- For Buyers Card -->
        <Card>
          <h2 class="text-2xl font-bold text-gray-800">For Buyers</h2>  
          <p class="mt-2 mb-4 text-black">
            Browse our car listings and find the perfect vehicle today
          </p>
          <RouterLink
            to="/cars"
            class="inline-block bg-black text-white rounded-lg px-4 py-2 hover:bg-red-600"
          >
            Browse Cars
          </RouterLink>
        </Card>

        <!-- For Sellers Card -->
        <Card bg="bg-pink-400">
          <h2 class="text-2xl font-bold text-gray-800">For Sellers</h2>
          <p class="mt-2 mb-4 text-black">
            List your car to find the perfect buyer for your vehicle
          </p>
          <RouterLink
            to="/cars/add"
            class="inline-block bg-black text-white rounded-lg px-4 py-2 hover:bg-red-600"
          >
            Add Car
          </RouterLink>
        </Card>
      </div>
    </div>
  </section>
</template>
