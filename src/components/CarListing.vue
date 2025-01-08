<script setup>
import { RouterLink } from 'vue-router';
import { defineProps, ref, computed } from 'vue';

const props = defineProps({
  car: Object,
});

const showFullDescription = ref(false);

const toggleFullDescription = () => {
  showFullDescription.value = !showFullDescription.value;
};

const truncatedDescription = computed(() => {
  let description = props.car.description;
  if (!showFullDescription.value) {
    description = description.substring(0, 90) + '...';
  }
  return description;
});
</script>

<template>
  <div class="bg-gradient-to-r from-purple-200 via-pink-300 to-red-300 border-b border-purple-700 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 relative">
    <div class="p-6">
      <div class="mb-6">
        <div class="text-gray-700 font-semibold text-sm mb-2">{{ car.type }}</div>
        <h3 class="text-3xl font-bold text-gray-900">{{ car.title }}</h3>
      </div>

      <div class="mb-5">
        <div class="text-gray-900 text-base">
          {{ truncatedDescription }}
        </div>
        <button
          @click="toggleFullDescription"
          class="text-indigo-600 hover:text-indigo-700 mt-3"
        >
          {{ showFullDescription ? 'Show Less' : 'Show More' }}
        </button>
      </div>

      <h3 class="text-red-600 font-semibold text-lg mb-2">{{ car.price }} USD</h3>

      <div class="border-t border-gray-200 mt-4 mb-5"></div>

      <div class="flex flex-col lg:flex-row justify-between mb-4">
        <div class="text-red-500 flex items-center mb-3">
          <i class="pi pi-map-marker text-red-600 mr-2"></i>
          {{ car.location }}
        </div>
        <RouterLink
          :to="'/cars/' + car.id"
          class="h-[36px] bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-lg text-center text-sm transition-colors duration-300"
        >
          View Details
        </RouterLink>
      </div>
    </div>
  </div>
</template>
