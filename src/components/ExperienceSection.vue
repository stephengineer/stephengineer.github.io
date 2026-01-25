<script setup>
import { experiences } from '../data/experience'
</script>

<template>
  <div class="experience-container">
    <div class="experience-grid">
      <div v-for="exp in experiences" :key="exp.id" class="experience-card">
        <div class="experience-header">
          <div class="date-badge">{{ exp.date }}</div>
          <h3 class="experience-title">{{ exp.title }}</h3>
          <p class="experience-company">{{ exp.company }}</p>
        </div>

        <div class="experience-body">
          <p v-if="exp.summary" class="experience-summary">{{ exp.summary }}</p>
          <ul class="experience-achievements">
            <li v-for="(item, i) in exp.achievements" :key="i" class="achievement-item">
              {{ item }}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.experience-container {
  max-width: 900px;
  margin: 0 auto;
}

.experience-grid {
  display: flex;
  flex-direction: column;
  gap: var(--bento-gap);
}

.experience-card {
  background: var(--color-background);
  border-radius: var(--bento-radius);
  padding: var(--spacing-xl);
  box-shadow: var(--shadow-card);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  display: flex;
  flex-direction: column;
  gap: var(--spacing-lg);
}

.experience-card:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-card-hover);
}

.experience-header {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-xs);
}

.date-badge {
  display: inline-flex;
  align-items: center;
  font-size: 0.8125rem;
  font-weight: 600;
  color: var(--color-primary);
  background: var(--color-primary-alpha-10);
  padding: 0.375rem 1rem;
  border-radius: var(--radius-full);
  width: fit-content;
}

.experience-title {
  font-size: 1.25rem;
  font-weight: 600;
  color: var(--color-heading);
  margin: 0;
  line-height: 1.3;
}

.experience-company {
  font-size: 1rem;
  font-weight: 500;
  color: var(--color-text);
  margin: 0;
}

.experience-body {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-md);
}

.experience-summary {
  font-size: 1rem;
  line-height: 1.7;
  color: var(--color-text);
  margin: 0;
  padding-left: var(--spacing-md);
  border-left: 3px solid var(--color-primary-alpha-30);
}

.experience-achievements {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 0.625rem;
}

.achievement-item {
  font-size: 0.9375rem;
  color: var(--color-text);
  line-height: 1.6;
  padding-left: 1rem;
  position: relative;
}

.achievement-item::before {
  content: '';
  position: absolute;
  left: 0;
  top: 0.5em;
  width: 5px;
  height: 5px;
  background: var(--color-primary);
  border-radius: 50%;
  opacity: 0.5;
}

@media (max-width: 768px) {
  .experience-card {
    padding: var(--spacing-lg);
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
