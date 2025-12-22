<script setup>
import Navbar from './components/Navbar.vue'
import { RouterView } from 'vue-router'
</script>

<template>
  <div class="app">
    <Navbar />
    <RouterView />
  </div>
</template>

<style>
.app {
  min-height: 100vh;
  background: var(--color-background);
  font-family: 'Inter', system-ui, sans-serif;
}
</style>
