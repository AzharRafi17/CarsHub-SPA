<script setup>
import { ref } from "vue";
import BackButton from "@/components/BackButton.vue";
import { useToast } from "vue-toastification";

const toast = useToast();

const form = ref({
  name: "",
  email: "",
  message: "",
});

// Form submission handler
const submitForm = () => {
  if (form.value.name && form.value.email && form.value.message) {
    // Simulating successful form submission
    toast.success("Your Message Has Been Sent Successfuly!");
    setTimeout(() => {
      showToast.value = false;
    }, 5000);
  } else {
    // Show error message if fields are missing
    toast.error("Please fill in all fields.");
    return;
  }
  setTimeout(() => {
    showToast.value = false;
  }, 5000);

  // Reset form fields after submission
  form.value.name = "";
  form.value.email = "";
  form.value.message = "";

  // Hide toast after 5 seconds
};
</script>

<template>
  <BackButton />
  <div
    class="contact-us-page min-h-screen bg-gradient-to-br from-pink-500 via-purple-500 to-red-50 flex flex-col justify-center items-center py-8"
  >
    <div class="bg-white shadow-md rounded-lg p-8 w-full max-w-2xl">
      <h2 class="text-4xl font-bold text-pink-600 mb-6 text-center">
        Contact Us
      </h2>

      <!-- Contact Form -->
      <form @submit.prevent="submitForm">
        <!-- Name Field -->
        <div class="mb-4">
          <label for="name" class="block text-sm font-semibold text-gray-600"
            >Name</label
          >
          <input
            type="text"
            id="name"
            v-model="form.name"
            class="w-full p-3 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-400"
            placeholder="Enter your full name"
            required
          />
        </div>

        <!-- Email Field -->
        <div class="mb-4">
          <label for="email" class="block text-sm font-semibold text-gray-600"
            >Email</label
          >
          <input
            type="email"
            id="email"
            v-model="form.email"
            class="w-full p-3 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-400"
            placeholder="Enter your email address"
            required
          />
        </div>

        <!-- Message Field -->
        <div class="mb-4">
          <label for="message" class="block text-sm font-semibold text-gray-600"
            >Message</label
          >
          <textarea
            id="message"
            v-model="form.message"
            rows="4"
            class="w-full p-3 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-400"
            placeholder="Write your message"
            required
          ></textarea>
        </div>

        <!-- Submit Button -->
        <button
          type="submit"
          class="w-full bg-gradient-to-r from-purple-500 via-pink-500 to-purple-500 hover:from-pink-700 hover:to-purple-700 text-white py-2 px-4 rounded-md text-lg transition-colors duration-300"
        >
          Send Message
        </button>
      </form>

      <!-- Success or Error Toast Notification -->
      <div v-if="showToast" class="mt-4">
        <div
          :class="[
            'toast-notification',
            toastType === 'success' ? 'toast-success' : 'toast-error',
          ]"
          class="text-center py-2 px-4 rounded-md"
        >
          {{ toastMessage }}
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.contact-us-page {
  font-family: "Roboto", sans-serif;
}

input,
textarea {
  transition: border-color 0.3s ease;
}

input:focus,
textarea:focus {
  border-color: #f7233f;
}
</style>
