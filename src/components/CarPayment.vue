<script setup>
import BackButton from "@/components/BackButton.vue";
import { reactive, onMounted } from "vue";
import PulseLoader from "vue-spinner/src/PulseLoader.vue";
import { useToast } from "vue-toastification";
import axios from "axios";

const state = reactive({
  cars: [],
  isLoading: true,
});

// Toast setup
const toast = useToast();

// User Info Form State
const userInfo = reactive({
  name: "",
  address: "",
  phone: "",
  email: "",
  paymentMethod: "",
});

// Fetching cars data
onMounted(async () => {
  try {
    const response = await axios.get("/api/cars");
    state.cars = response.data;
  } catch (error) {
    console.error("Error fetching cars", error);
  } finally {
    state.isLoading = false;
  }
});

// Function to handle form submission
const handleSubmit = () => {
  if (
    !userInfo.name ||
    !userInfo.address ||
    !userInfo.phone ||
    !userInfo.email ||
    !userInfo.paymentMethod
  ) {
    toast.error("Please fill in all fields.");
    return;
  }

  if (userInfo.paymentMethod === "cod") {
    toast.success(
      "Great! Your order has been placed, car will be delivered soon!"
    );
  } else if (userInfo.paymentMethod === "card") {
    toast.error(
      "We don’t accept card payments. Please choose Cash on Delivery This Option Is Only For Design."
    );
  }
};

// Handle Payment Option Selection
const selectPayment = (method) => {
  if (method === "cod") {
    userInfo.paymentMethod = "cod";
  } else if (method === "card") {
    userInfo.paymentMethod = "card";
    toast.error(
      "We don’t accept card payments. Please choose Cash on Delivery This Option Is Only For Design."
    );
  }
};
</script>

<template>
  <BackButton />
  <div
    class="min-h-screen bg-gradient-to-br from-pink-500 via-purple-500 to-red-50 flex items-center justify-center"
  >
    <!-- Page Container -->
    <div class="bg-white shadow-md rounded-lg p-6 max-w-lg w-full">
      <h2 class="text-2xl font-bold text-purple-700 mb-6 text-center">
        Enter Your Information
      </h2>
      <div v-if="state.isLoading" class="text-center text-gray-500 py-6">
        <PulseLoader />
      </div>

      <!-- User Info Form -->
      <form @submit.prevent="handleSubmit">
        <!-- Name Field -->
        <div class="mb-4">
          <label for="name" class="block text-gray-700">Full Name</label>
          <input
            type="text"
            id="name"
            v-model="userInfo.name"
            class="w-full p-2 border border-pink-300 rounded-lg"
            placeholder="Enter your full name"
            required
          />
        </div>

        <!-- Address Field -->
        <div class="mb-4">
          <label for="address" class="block text-gray-700">Address</label>
          <input
            type="text"
            id="address"
            v-model="userInfo.address"
            class="w-full p-2 border border-pink-300 rounded-lg"
            placeholder="Enter your address"
            required
          />
        </div>

        <!-- Phone Number Field -->
        <div class="mb-4">
          <label for="phone" class="block text-gray-700">Phone Number</label>
          <input
            type="tel"
            id="phone"
            v-model="userInfo.phone"
            class="w-full p-2 border border-pink-300 rounded-lg"
            placeholder="Enter your phone number"
            required
          />
        </div>

        <!-- Email Address Field -->
        <div class="mb-4">
          <label for="email" class="block text-gray-700">Email Address</label>
          <input
            type="email"
            id="email"
            v-model="userInfo.email"
            class="w-full p-2 border border-pink-300 rounded-lg"
            placeholder="Enter your email address"
            required
          />
        </div>

        <!-- Payment Method Selection -->
        <div class="mb-4">
          <label class="block text-gray-700">Payment Method</label>

          <!-- Cash on Delivery Option -->
          <div
            @click="selectPayment('cod')"
            :class="{
              'bg-pink-400': userInfo.paymentMethod === 'cod',
              'bg-pink-100': userInfo.paymentMethod !== 'cod',
            }"
            class="cursor-pointer p-4 rounded-lg flex items-center justify-between transition duration-300 mb-2"
          >
            <span class="text-lg font-semibold text-black"
              >Cash on Delivery</span
            >
            <i class="pi pi-money-bill text-red text-2xl"></i>
          </div>

          <!-- Card Payment Option -->
          <div
            @click="selectPayment('card')"
            :class="{
              'bg-red-400': userInfo.paymentMethod === 'card',
              'bg-red-100': userInfo.paymentMethod !== 'card',
            }"
            class="cursor-pointer p-4 rounded-lg flex items-center justify-between transition duration-300"
          >
            <span class="text-lg font-semibold text-black">Card Payment</span>
            <i class="pi pi-credit-card text-red text-2xl"></i>
          </div>
        </div>

        <!-- Submit Button -->
        <div class="text-center">
          <button
            type="submit"
            class="h-[36px] bg-gradient-to-r from-purple-500 via-pink-300 to-purple-500 hover:from-purple-500 hover:to-pink-500 text-white text-white px-6 py-2 rounded-lg text-center text-sm transition-colors duration-300"
          >
            Place Order
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<style scoped>
/* Custom styles for a cleaner look */
body {
  font-family: "Roboto", sans-serif;
}
</style>
