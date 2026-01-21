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
})
</script>

<template>
  <div class="card" :class="[{ 'card--hoverable': hoverable }, `card--${padding}`]">
    <slot />
  </div>
</template>

<style scoped>
.card {
  background: var(--color-background);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-lg);
  transition: var(--transition-base);
  position: relative;
  overflow: hidden;
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

.card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 4px;
  background: var(--gradient-primary);
  transform: scaleX(0);
  transform-origin: left;
  transition: transform var(--transition-base);
}

.card--hoverable:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-card);
  border-color: var(--color-primary-alpha-30);
}

.card--hoverable:hover::before {
  transform: scaleX(1);
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
}
</style>
