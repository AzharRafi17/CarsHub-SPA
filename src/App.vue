<script setup>
import Navbar from '@/components/Navbar.vue';
import { RouterView } from 'vue-router';
</script>

<template>
  <head>
    <!-- Add this inside your <head> tag in index.html or globally -->
<link href="https://fonts.googleapis.com/css2?family=Audiowide&display=swap" rel="stylesheet">

  </head>
  <Navbar />
  <RouterView />
</template>