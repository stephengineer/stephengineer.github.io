<template>
  <div v-if="loading" class="loading-overlay">
    <div class="loading-spinner">
      <div class="spinner"></div>
      <p>Loading...</p>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, nextTick } from 'vue'

const loading = ref(true)

onMounted(async () => {
  // Simulate loading time with better performance
  await nextTick()
  
  // Use requestAnimationFrame for smoother loading experience
  requestAnimationFrame(() => {
    setTimeout(() => {
      loading.value = false
    }, 800) // Reduced loading time for better UX
  })
})
</script>

<style scoped>
.loading-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: var(--color-background);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
}

.loading-spinner {
  text-align: center;
}

.spinner {
  width: 40px;
  height: 40px;
  border: 4px solid var(--color-border);
  border-top: 4px solid var(--color-heading);
  border-radius: 50%;
  animation: spin 1s linear infinite;
  margin: 0 auto 1rem;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

.loading-spinner p {
  color: var(--color-text);
  font-size: 1rem;
  margin: 0;
}
</style>
