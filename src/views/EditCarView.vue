<script setup>
import router from '@/router';
import BackButton from '@/components/BackButton.vue';
import { reactive, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import { useToast } from 'vue-toastification';
import axios from 'axios';

const route = useRoute();
const carId = route.params.id;

const form = reactive({
  make: '',
  model: '',
  year: '',
  price: '',
  location: '',
  description: '',
  contact: {
    name: '',
    email: '',
    phone: '',
  },
});

const state = reactive({
  car: {},
  isLoading: true,
});

const toast = useToast();

const handleSubmit = async () => {
  const updatedCar = {
    make: form.make,
    model: form.model,
    year: form.year,
    price: form.price,
    location: form.location,
    description: form.description,
    contact: {
      name: form.contact.name,
      email: form.contact.email,
      phone: form.contact.phone,
    },
  };

  try {
    const response = await axios.put(`/api/cars/${carId}`, updatedCar);
    toast.success('Car Updated Successfully');
    router.push(`/cars/${response.data.id}`);
  } catch (error) {
    console.error('Error updating car', error);
    toast.error('Car Was Not Updated');
  }
};

onMounted(async () => {
  try {
    const response = await axios.get(`/api/cars/${carId}`);
    state.car = response.data;

    form.make = state.car.make || '';
    form.model = state.car.model || '';
    form.year = state.car.year || '';
    form.price = state.car.price || '';
    form.location = state.car.location || '';
    form.description = state.car.description || '';
    form.contact.name = state.car.contact?.name || '';
    form.contact.email = state.car.contact?.email || '';
    form.contact.phone = state.car.contact?.phone || '';
  } catch (error) {
    console.error('Error fetching car details', error);
    toast.error('Error fetching car details');
  } finally {
    state.isLoading = false;
  }
});
</script>

<template>
  <BackButton />
  <section class="bg-gradient-to-br from-purple-500 via-pink-500 to-red-500 min-h-screen py-12">
    <div class="container mx-auto max-w-2xl">
      <div class="bg-white shadow-lg rounded-lg px-8 py-10">
        <form @submit.prevent="handleSubmit">
          <h2 class="text-4xl font-bold text-center text-gradient mb-8">
            Edit Car Listing
          </h2>

          <div class="mb-4">
            <label for="make" class="block text-gray-700 font-semibold mb-1">Car Make</label>
            <input
              type="text"
              v-model="form.make"
              id="make"
              class="w-full px-4 py-2 border rounded focus:ring-2 focus:ring-pink-400"
              placeholder="Car Make (e.g., Toyota)"
              required
            />
          </div>

          <div class="mb-4">
            <label for="model" class="block text-gray-700 font-semibold mb-1">Car Model</label>
            <input
              type="text"
              v-model="form.model"
              id="model"
              class="w-full px-4 py-2 border rounded focus:ring-2 focus:ring-pink-400"
              placeholder="Car Model (e.g., Corolla)"
              required
            />
          </div>

          <div class="mb-4">
            <label for="year" class="block text-gray-700 font-semibold mb-1">Year</label>
            <input
              type="number"
              v-model="form.year"
              id="year"
              class="w-full px-4 py-2 border rounded focus:ring-2 focus:ring-pink-400"
              placeholder="Manufacture Year"
              required
            />
          </div>

          <div class="mb-4">
            <label for="price" class="block text-gray-700 font-semibold mb-1">Price</label>
            
            <input
              type="text"
              v-model="form.price"
              id="price"
              class="w-full px-4 py-2 border rounded focus:ring-2 focus:ring-pink-400"
              placeholder="Price of the Car"
              required
            />
            
          </div>

          <div class="mb-4">
            <label for="location" class="block text-gray-700 font-semibold mb-1">Location</label>
            <input
              type="text"
              v-model="form.location"
              id="location"
              class="w-full px-4 py-2 border rounded focus:ring-2 focus:ring-pink-400"
              placeholder="Location of the Car"
              required
            />
          </div>

          <div class="mb-4">
            <label for="description" class="block text-gray-700 font-semibold mb-1">Description</label>
            <textarea
              v-model="form.description"
              id="description"
              class="w-full px-4 py-2 border rounded focus:ring-2 focus:ring-pink-400"
              rows="4"
              placeholder="Add any details about the car"
              required
            ></textarea>
          </div>

          <h3 class="text-2xl font-semibold text-pink-600 mb-4">Contact Information</h3>

          <div class="mb-4">
            <label for="contact_name" class="block text-gray-700 font-semibold mb-1">Your Name</label>
            <input
              type="text"
              v-model="form.contact.name"
              id="contact_name"
              class="w-full px-4 py-2 border rounded focus:ring-2 focus:ring-pink-400"
              placeholder="Your Name"
              required
            />
          </div>

          <div class="mb-4">
            <label for="contact_email" class="block text-gray-700 font-semibold mb-1">Email</label>
            <input
              type="email"
              v-model="form.contact.email"
              id="contact_email"
              class="w-full px-4 py-2 border rounded focus:ring-2 focus:ring-pink-400"
              placeholder="Email for inquiries"
              required
            />
          </div>

          <div class="mb-4">
            <label for="contact_phone" class="block text-gray-700 font-semibold mb-1">Phone (Optional)</label>
            <input
              type="tel"
              v-model="form.contact.phone"
              id="contact_phone"
              class="w-full px-4 py-2 border rounded focus:ring-2 focus:ring-pink-400"
              placeholder="Phone number for inquiries"
            />
          </div>

          <div>
            <button
              type="submit"
              class="w-full bg-gradient-to-r from-pink-500 to-red-500 hover:from-red-500 hover:to-purple-500 text-white font-bold py-3 rounded-lg transition duration-300"
            >
              Update Car Listing
            </button>
          </div>
        </form>
      </div>
    </div>
  </section>
</template>
