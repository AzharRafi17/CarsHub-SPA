<script setup>
import { RouterLink } from 'vue-router';
import CarListing from './CarListing.vue';
import { reactive, defineProps, onMounted } from 'vue';
import PulseLoader from 'vue-spinner/src/PulseLoader.vue';
import axios from 'axios';

defineProps({
  limit: Number,
  showButton: {
    type: Boolean,
    default: false,
  },
});

const state = reactive({
  cars: [],
  isLoading: true,
});

onMounted(async () => {
  try {
    const response = await axios.get('/api/cars');
    state.cars = response.data;
  } catch (error) {
    console.error('Error fetching cars', error);
  } finally {
    state.isLoading = false;
  }
});
</script>

<template>
  <section class="bg-purple-500 px-4 py-10">
    <div class="container-xl lg:container m-auto">
      <h2 class="text-4xl font-bold text-white mb-6 text-center">
        Browse Cars for Sale
      </h2>
      <!-- Show loading spinner while loading is true -->
      <div v-if="state.isLoading" class="text-center text-gray-500 py-6">
        <PulseLoader />
      </div>

      <!-- Show car listing when done loading -->
      <div v-else class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <CarListing
          v-for="car in state.cars.slice(0, limit || state.cars.length)"
          :key="car.id"
          :car="car"
        />
      </div>
    </div>
  </section>
  <section v-if="showButton" class="w-full my-4">
  <RouterLink
    to="/cars"
    class="block w-full bg-gradient-to-r from-purple-500 via-red-500 to-purple-500 hover:from-pink-500 hover:to-purple-400 text-white text-center py-4 px-6  hover:bg-red-600"
    >View All Cars</RouterLink
  >
</section>


</template>
