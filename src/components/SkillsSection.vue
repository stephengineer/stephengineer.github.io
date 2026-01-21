<script setup>
import { skills } from '../data/skills'
import BaseCard from './BaseCard.vue'
</script>

<template>
  <div class="skills-container">
    <div class="skills-grid">
      <BaseCard v-for="skillGroup in skills" :key="skillGroup.category" class="skill-category">
        <h3 class="category-title">{{ skillGroup.category }}</h3>
        <ul class="skill-list">
          <li v-for="skill in skillGroup.items" :key="skill" class="skill-item">
            <span class="bullet">•</span>
            {{ skill }}
          </li>
        </ul>
      </BaseCard>
    </div>
  </div>
</template>

<style scoped>
.skills-container {
  max-width: 1200px;
  margin: 0 auto;
}

.skills-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: var(--spacing-lg);
}

@media (min-width: 768px) {
  .skills-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: var(--spacing-xl);
  }
}

.skill-category {
  height: 100%;
  display: flex;
  flex-direction: column;
}

.category-title {
  font-size: 1.25rem;
  font-weight: 600;
  color: var(--color-heading);
  margin-bottom: var(--spacing-lg);
  padding-bottom: var(--spacing-md);
  border-bottom: 1px solid var(--color-border);
  position: relative;
}

.category-title::after {
  content: '';
  position: absolute;
  bottom: -1px;
  left: 0;
  width: 40px;
  height: 2px;
  background: var(--gradient-primary);
  border-radius: 2px;
}

.skill-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: var(--spacing-md);
  flex: 1;
}

.skill-item {
  display: flex;
  align-items: flex-start;
  gap: var(--spacing-sm);
  color: var(--color-text);
  font-size: 0.9375rem;
  line-height: 1.5;
}

.bullet {
  color: var(--color-primary);
  font-weight: bold;
  line-height: 1.5;
}

@media (max-width: 768px) {
  .skills-grid {
    grid-template-columns: 1fr;
  }
}
</style>
