<script setup>
defineProps({
  hoverable: {
    type: Boolean,
    default: true,
  },
  padding: {
    type: String,
    default: 'default',
    validator: (v) => ['compact', 'default', 'large'].includes(v),
  },
  glass: {
    type: Boolean,
    default: true,
  },
})
</script>

<template>
  <div
    class="card"
    :class="[
      { 'card--hoverable': hoverable },
      { 'card--glass': glass },
      `card--${padding}`,
    ]"
  >
    <slot />
  </div>
</template>

<style scoped>
.card {
  background: var(--vt-c-white);
  border-radius: var(--bento-radius);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;
  cursor: pointer;
  box-shadow: var(--shadow-card);
}

/* Glass morphism effect */
.card--glass {
  background: var(--vt-c-white);
  box-shadow: var(--shadow-card);
}

.card--compact {
  padding: var(--spacing-lg);
}

.card--default {
  padding: var(--spacing-xl);
}

.card--large {
  padding: var(--spacing-2xl);
}

.card--hoverable:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-card-hover);
}

/* Active/pressed state */
.card--hoverable:active {
  transform: translateY(-2px);
  transition-duration: 0.1s;
}

@media (max-width: 768px) {
  .card--compact {
    padding: var(--spacing-md);
  }

  .card--default {
    padding: var(--spacing-lg);
  }

  .card--large {
    padding: var(--spacing-xl);
  }

  .card--hoverable:hover {
    transform: translateY(-4px);
  }
}

/* Reduced motion */
@media (prefers-reduced-motion: reduce) {
  .card,
  .card::before,
  .card::after {
    transition: none;
  }

  .card--hoverable:hover {
    transform: none;
  }
}
</style>
