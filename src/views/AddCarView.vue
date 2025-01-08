<script setup>
import router from '@/router';
import BackButton from '@/components/BackButton.vue';
import { reactive } from 'vue';
import { useToast } from 'vue-toastification';
import axios from 'axios';

const form = reactive({
  type: 'Sedan',
  title: '',
  description: '',
  price: '',
  location: '',
  company: {
    name: '',
    description: '',
    contactEmail: '',
    contactPhone: '',
  },
});

const toast = useToast();

const handleSubmit = async () => {
  const newCar = {
    title: form.title,
    type: form.type,
    location: form.location,
    description: form.description,
    price: form.price,
    company: {
      name: form.company.name,
      description: form.company.description,
      contactEmail: form.company.contactEmail,
      contactPhone: form.company.contactPhone,
    },
  };

  try {
    const response = await axios.post('/api/cars', newCar);
    toast.success('Car Added Successfully');
    router.push(`/cars/${response.data.id}`);
  } catch (error) {
    console.error('Error fetching car', error);
    toast.error('Car Was Not Added');
  }
};
</script>

<template>
  <BackButton />
  <section class="bg-gradient-to-br from-pink-500 via-purple-500 to-red-500 min-h-screen py-12">
    <div class="container m-auto max-w-2xl py-24">
      <div
        class="bg-white shadow-lg rounded-lg px-8 py-10"
      >
        <form @submit.prevent="handleSubmit">
          <h2 class="text-4xl font-bold text-center text-gradient mb-8">
            Add Car
          </h2>

          <div class="mb-4">
            <label for="type" class="block text-gray-700 font-semibold mb-1">Car Type</label>
            <select
              v-model="form.type"
              id="type"
              name="type"
              class="w-full px-4 py-2 border rounded focus:ring-2 focus:ring-pink-400"
              required
            >
              <option value="Sedan">Sedan</option>
              <option value="SUV">SUV</option>
              <option value="Truck">Truck</option>
              <option value="Convertible">Convertible</option>
              <option value="Coupe">Coupe</option>
            </select>
          </div>

          <div class="mb-4">
            <label for="title" class="block text-gray-700 font-semibold mb-1">Car Model Name</label>
            <input
              type="text"
              v-model="form.title"
              id="title"
              class="w-full px-4 py-2 border rounded focus:ring-2 focus:ring-pink-400"
              placeholder="eg. Beautiful 2022 Mustang"
              required
            />
          </div>

          <div class="mb-4">
            <label for="description" class="block text-gray-700 font-semibold mb-1">Description</label>
            <textarea
              id="description"
              v-model="form.description"
              name="description"
              class="w-full px-4 py-2 border rounded focus:ring-2 focus:ring-pink-400"
              rows="4"
              placeholder="Add car details, features, and condition"
            ></textarea>
          </div>

          <div class="mb-4">
            <label for="price" class="block text-white font-semibold mb-2"
              >Price</label
            >
            <select
              v-model="form.price"
              id="price"
              name="price"
              class="border rounded w-full py-2 px-3 bg-pink-50 text-pink-800"
              required
            >
              <option value="Under $50K">Under $50K</option>
              <option value="$50K - $60K">$50K - $60K</option>
              <option value="$60K - $70K">$60K - $70K</option>
              <option value="$70K - $80K">$70K - $80K</option>
              <option value="$80K - $90K">$80K - $90K</option>
              <option value="$90K - $100K">$90K - $100K</option>
              <option value="$100K - $125K">$100K - $125K</option>
              <option value="$125K - $150K">$125K - $150K</option>
              <option value="$150K - $175K">$150K - $175K</option>
              <option value="$175K - $200K">$175K - $200K</option>
              <option value="Over $200K">Over $200K</option>
            </select>
          </div>

          <div class="mb-4">
            <label for="location" class="block text-gray-700 font-semibold mb-1">Location</label>
            <input
              type="text"
              v-model="form.location"
              id="location"
              class="w-full px-4 py-2 border rounded focus:ring-2 focus:ring-pink-400"
              placeholder="Car Location"
              required
            />
          </div>

          <h3 class="text-2xl font-semibold text-pink-600 mb-4">Company Info</h3>

          <div class="mb-4">
            <label for="company_name" class="block text-gray-700 font-semibold mb-1">Company Name</label>
            <input
              type="text"
              v-model="form.company.name"
              id="company_name"
              class="w-full px-4 py-2 border rounded focus:ring-2 focus:ring-pink-400"
              placeholder="Company Name"
            />
          </div>

          <div class="mb-4">
            <label for="company_description" class="block text-gray-700 font-semibold mb-1">Company Description</label>
            <textarea
              id="company_description"
              v-model="form.company.description"
              name="company_description"
              class="w-full px-4 py-2 border rounded focus:ring-2 focus:ring-pink-400"
              rows="4"
              placeholder="What does your company do?"
            ></textarea>
          </div>

          <div class="mb-4">
            <label for="contact_email" class="block text-gray-700 font-semibold mb-1">Contact Email</label>
            <input
              type="email"
              v-model="form.company.contactEmail"
              id="contact_email"
              name="contact_email"
              class="w-full px-4 py-2 border rounded focus:ring-2 focus:ring-pink-400"
              placeholder="Email address for inquiries"
              required
            />
          </div>

          <div class="mb-4">
            <label for="contact_phone" class="block text-gray-700 font-semibold mb-1">Contact Phone</label>
            <input
              type="tel"
              v-model="form.company.contactPhone"
              id="contact_phone"
              name="contact_phone"
              class="w-full px-4 py-2 border rounded focus:ring-2 focus:ring-pink-400"
              placeholder="Optional phone for inquiries"
            />
          </div>

          <div>
            <button
              type="submit"
              class="w-full bg-gradient-to-r from-pink-500 to-red-500 hover:from-red-500 hover:to-purple-500 text-white font-bold py-3 rounded-lg transition duration-300"
            >
              Add Car
            </button>
          </div>
        </form>
      </div>
    </div>
  </section>
</template>
