<script setup>
import { experiences } from '../data/experience'
</script>

<template>
  <div class="experience-container">
    <div class="experience-timeline">
      <div v-for="exp in experiences" :key="exp.id" class="experience-item">
        <div class="experience-card">
          <div class="experience-header">
            <div class="date-badge">{{ exp.date }}</div>
            <h3 class="experience-title">{{ exp.title }}</h3>
            <p class="experience-company">{{ exp.company }}</p>
          </div>

          <div class="experience-body">
            <p v-if="exp.summary" class="experience-summary">{{ exp.summary }}</p>
            <ul class="experience-achievements">
              <li v-for="(item, i) in exp.achievements" :key="i" class="achievement-item">
                <span class="bullet-icon">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </span>
                <span class="achievement-text">{{ item }}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.experience-container {
  max-width: 900px;
  margin: 0 auto;
  position: relative;
}

.experience-timeline {
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

/* Timeline line */
.experience-timeline::before {
  content: '';
  position: absolute;
  left: 24px;
  top: 0;
  bottom: 0;
  width: 2px;
  background: linear-gradient(
    to bottom,
    var(--color-primary-alpha-30),
    var(--color-secondary-alpha-15)
  );
  border-radius: 2px;
}

.experience-item {
  position: relative;
  padding-left: 60px;
}

/* Timeline dot */
.experience-item::before {
  content: '';
  position: absolute;
  left: 16px;
  top: 28px;
  width: 18px;
  height: 18px;
  background: var(--gradient-primary);
  border-radius: 50%;
  box-shadow: 0 0 0 4px var(--color-background-mute), var(--shadow-glow);
  z-index: 2;
}

.experience-card {
  background: var(--glass-bg-strong);
  backdrop-filter: blur(var(--glass-blur));
  -webkit-backdrop-filter: blur(var(--glass-blur));
  border: 1px solid var(--glass-border);
  border-radius: var(--radius-lg);
  padding: var(--spacing-xl);
  transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.04);
}

.experience-card:hover {
  transform: translateX(8px);
  box-shadow: var(--shadow-card-hover);
  border-color: var(--color-primary-alpha-20);
}

.experience-header {
  margin-bottom: var(--spacing-lg);
  padding-bottom: var(--spacing-md);
  border-bottom: 1px solid var(--color-border);
}

.date-badge {
  display: inline-block;
  font-size: 0.8125rem;
  font-weight: 600;
  color: white;
  background: var(--gradient-primary);
  padding: 0.25rem 0.875rem;
  border-radius: var(--radius-full);
  margin-bottom: var(--spacing-sm);
  box-shadow: var(--shadow-sm);
}

.experience-title {
  font-size: 1.375rem;
  font-weight: 700;
  color: var(--color-heading);
  margin: 0 0 0.25rem 0;
  line-height: 1.3;
}

.experience-company {
  font-size: 1rem;
  font-weight: 500;
  color: var(--color-text);
  opacity: 0.75;
  margin: 0;
}

.experience-body {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-md);
}

.experience-summary {
  color: var(--color-heading);
  line-height: 1.7;
  font-size: 1rem;
  margin: 0;
  font-weight: 500;
  opacity: 0.9;
  padding-left: var(--spacing-md);
  border-left: 3px solid var(--color-primary);
  background: var(--color-primary-alpha-10);
  padding: var(--spacing-md);
  border-radius: 0 var(--radius-md) var(--radius-md) 0;
}

.experience-achievements {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: var(--spacing-sm);
}

.achievement-item {
  display: flex;
  align-items: flex-start;
  gap: 0.75rem;
  color: var(--color-text);
  font-size: 0.9375rem;
  line-height: 1.65;
}

.bullet-icon {
  color: var(--color-primary);
  flex-shrink: 0;
  margin-top: 2px;
}

.achievement-text {
  flex: 1;
}

@media (max-width: 768px) {
  .experience-timeline::before {
    left: 12px;
  }

  .experience-item {
    padding-left: 40px;
  }

  .experience-item::before {
    left: 6px;
    width: 14px;
    height: 14px;
    top: 24px;
  }

  .experience-card {
    padding: var(--spacing-lg);
  }

  .experience-card:hover {
    transform: translateX(4px);
  }

  .experience-title {
    font-size: 1.125rem;
  }
}

/* Reduced motion */
@media (prefers-reduced-motion: reduce) {
  .experience-card {
    transition: none;
  }

  .experience-card:hover {
    transform: none;
  }
}
</style>
