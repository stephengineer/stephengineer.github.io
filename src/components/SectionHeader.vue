<script setup>
defineProps({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    default: '',
  },
})
</script>

<template>
  <div class="section-header">
    <h2 class="section-title">{{ title }}</h2>
    <p v-if="description" class="section-description">{{ description }}</p>
  </div>
</template>

<style scoped>
.section-header {
  text-align: center;
  margin-bottom: var(--spacing-2xl);
}

.section-title {
  font-size: clamp(1.8rem, 3vw, 2.5rem);
  font-weight: 700;
  margin-bottom: var(--spacing-md);
  color: var(--color-heading);
}

.section-description {
  font-size: 1.125rem;
  color: var(--color-text);
  max-width: 42rem;
  margin: 0 auto;
  line-height: 1.6;
}
</style>
