<script setup>
import { RouterLink, useRoute } from 'vue-router';
import logo from '@/assets/img/logo.png';

const isActiveLink = (routePath) => {
  const route = useRoute();
  return route.path === routePath;
};
</script>

<template>
  <nav class="bg-gradient-to-r from-purple-600 via-pink-500 to-red-500 border-b border-purple-700">
    <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
      <div class="flex h-20 items-center justify-between">
        <div
          class="flex flex-1 items-center justify-center md:items-stretch md:justify-start"
        >
          <!-- Logo -->
          <RouterLink class="flex flex-shrink-0 items-center mr-4" to="/">
              <img class="h-16 w-auto" :src="logo" alt="Car Sale" />
            <span class="hidden md:block text-white text-2xl font-bold ml-2"
              >Cars Hub</span
            >
          </RouterLink>
          <div class="md:ml-auto mt-3">
            <div class="flex space-x-2">
              <RouterLink
                to="/"
                :class="[ 
                  isActiveLink('/') 
                    ? 'bg-purple-800'
                    : 'hover:bg-purple-700 hover:text-white',
                  'text-white',
                  'px-3',
                  'py-2',
                  'rounded-md',
                ]"
                >Home</RouterLink
              >
              <RouterLink
                to="/cars"
                :class="[ 
                  isActiveLink('/cars') 
                    ? 'bg-purple-800'
                    : 'hover:bg-purple-700 hover:text-white',
                  'text-white',
                  'px-3',
                  'py-2',
                  'rounded-md',
                ]"
                >Browse Cars</RouterLink
              >
              <RouterLink
                to="/cars/add"
                :class="[ 
                  isActiveLink('/cars/add') 
                    ? 'bg-purple-800'
                    : 'hover:bg-purple-700 hover:text-white',
                  'text-white',
                  'px-3',
                  'py-2',
                  'rounded-md',
                ]"
                >Add Car</RouterLink
              >
              <RouterLink
                to="/contact"
                :class="[ 
                  isActiveLink('/contact') 
                    ? 'bg-purple-800'
                    : 'hover:bg-purple-700 hover:text-white',
                  'text-white',
                  'px-3',
                  'py-2',
                  'rounded-md',
                ]"
                >Contact Us</RouterLink
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>
