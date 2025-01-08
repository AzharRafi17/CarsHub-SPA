<script setup>
import PulseLoader from 'vue-spinner/src/PulseLoader.vue';
import BackButton from '@/components/BackButton.vue';
import { reactive, onMounted } from 'vue';
import { useRoute, RouterLink, useRouter } from 'vue-router';
import { useToast } from 'vue-toastification';
import axios from 'axios';

const route = useRoute();
const router = useRouter();
const toast = useToast();

const carId = route.params.id;

const state = reactive({
  car: {},
  isLoading: true,
});

const deleteCar = async () => {
  try {
    const confirm = window.confirm('Are you sure you want to delete this car listing?');
    if (confirm) {
      await axios.delete(`/api/cars/${carId}`);
      toast.success('Car Listing Deleted Successfully');
      router.push('/cars');
    }
  } catch (error) {
    console.error('Error deleting car listing', error);
    toast.error('Car Listing Not Deleted');
  }
};

onMounted(async () => {
  try {
    const response = await axios.get(`/api/cars/${carId}`);
    state.car = response.data;
  } catch (error) {
    console.error('Error fetching car listing', error);
  } finally {
    state.isLoading = false;
  }
});
</script>

<template>
  <BackButton />
  <section v-if="!state.isLoading" class="bg-green-50 bg-gradient-to-br from-purple-600 via-pink-500 to-red-900 min-h-screen ">
    >
    <div class="container m-auto py-10 px-6">
      <div class="grid grid-cols-1 md:grid-cols-70/30 w-full gap-6">
        <main>
          <div
            class="bg-gradient-to-r from-purple-200 via-pink-300 to-red-300 border-b border-purple-700 p-6 rounded-lg shadow-md text-center md:text-left"
          >
            <div class="text-black mb-4">{{ state.car.type }}</div>
            <h1 class="text-3xl font-bold mb-4">{{ state.car.title }}</h1>
            <div
              class="text-gray-500 mb-4 flex align-middle justify-center md:justify-start"
            >
              <i class="pi pi-map-marker text-xl text-orange-700 mr-2"></i>
              <p class="text-orange-700">{{ state.car.location }}</p>
            </div>
          </div>

          <div class="bg-gradient-to-r from-purple-200 via-pink-300 to-red-300 border-b border-purple-700 p-6 rounded-lg shadow-md mt-6">
            <h3 class="text-red-900 text-lg font-bold mb-6">
              Car Description
            </h3>

            <p class="mb-4">
              {{ state.car.description }}
            </p>

            <h3 class="text-red-900 text-lg font-bold mb-2">Price</h3>

            <p class="mb-4">{{ state.car.price }} / Year</p>
          </div>
        </main>

        <!-- Sidebar -->
        <aside>
          <!-- Company Info -->
          <div class="bg-gradient-to-r from-purple-200 via-pink-300 to-red-300 border-b border-purple-700 p-6 rounded-lg shadow-md">
            <h3 class="text-xl font-bold mb-6">Seller Info</h3>

            <h2 class="text-2xl">{{ state.car.seller.name }}</h2>

            <p class="my-2">
              {{ state.car.seller.description }}
            </p>

            <hr class="my-4" />

            <h3 class="text-xl">Contact Email:</h3>

            <p class="my-2 bg-purple-300 rounded-lg p-2 font-bold">
              {{ state.car.seller.contactEmail }}
            </p>

            <h3 class="text-xl">Contact Phone:</h3>

            <p class="my-2 bg-purple-300 rounded-lg p-2 font-bold">
              {{ state.car.seller.contactPhone }}
            </p>
          </div>

          <!-- Manage -->
          <div class="bg-gradient-to-r from-purple-200 via-pink-300 to-red-300 border-b border-purple-700  p-6 rounded-lg shadow-md mt-6">
            <h3 class="text-xl font-bold mb-6">Manage Car Listing</h3>
            <RouterLink
              :to="`/cars/edit/${state.car.id}`"
              class="bg-gradient-to-r from-purple-500 via-pink-300 to-purple-500 hover:from-purple-500 hover:to-pink-500  text-white text-center font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline mt-4 block"
              >Edit Car Listing</RouterLink
            >
            <button
              @click="deleteCar"
              class="bg-gradient-to-r from-purple-500 via-pink-300 to-purple-500 hover:from-purple-500 hover:to-pink-500 text-white font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline mt-4 block"
            >
              Delete Car Listing
            </button>
          </div>
        </aside>
      </div>
    </div>
  </section>

  <div v-else class="text-center text-gray-500 py-6">
    <PulseLoader />
  </div>
</template>
