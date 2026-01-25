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
  background: var(--color-background);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-lg);
  transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;
  cursor: pointer;
}

/* Glass morphism effect */
.card--glass {
  background: var(--glass-bg-strong);
  backdrop-filter: blur(var(--glass-blur));
  -webkit-backdrop-filter: blur(var(--glass-blur));
  border: 1px solid var(--glass-border);
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.04), 0 1px 3px rgba(0, 0, 0, 0.08);
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

/* Gradient accent line on top */
.card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 3px;
  background: var(--gradient-primary);
  transform: scaleX(0);
  transform-origin: left;
  transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

/* Subtle glow effect on hover */
.card::after {
  content: '';
  position: absolute;
  inset: 0;
  border-radius: inherit;
  opacity: 0;
  transition: opacity 0.3s ease;
  pointer-events: none;
  background: radial-gradient(
    600px circle at var(--mouse-x, 50%) var(--mouse-y, 50%),
    rgba(22, 93, 255, 0.06),
    transparent 40%
  );
}

.card--hoverable:hover {
  transform: translateY(-6px);
  box-shadow: var(--shadow-card-hover);
  border-color: var(--color-primary-alpha-20);
}

.card--hoverable:hover::before {
  transform: scaleX(1);
}

.card--hoverable:hover::after {
  opacity: 1;
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
