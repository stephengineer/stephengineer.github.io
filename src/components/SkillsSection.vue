<script setup>
import { skills } from '../data/skills'

// Icons for each category
const categoryIcons = {
  'Model Training & Alignment': `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/></svg>`,
  'Efficient Inference & Systems': `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>`,
  'Distributed Training & Infrastructure': `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8"/><path d="M12 17v4"/><path d="M7 8h2"/><path d="M7 11h2"/><path d="M15 8h2"/><path d="M15 11h2"/></svg>`,
  'Agentic & Reasoning Systems': `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="12" cy="12" r="3"/><path d="M12 2v4"/><path d="M12 18v4"/><path d="M4.93 4.93l2.83 2.83"/><path d="M16.24 16.24l2.83 2.83"/><path d="M2 12h4"/><path d="M18 12h4"/><path d="M4.93 19.07l2.83-2.83"/><path d="M16.24 7.76l2.83-2.83"/></svg>`,
}
</script>

<template>
  <div class="skills-container">
    <div class="skills-bento">
      <div v-for="skillGroup in skills" :key="skillGroup.category" class="skill-card">
        <div class="skill-header">
          <div class="skill-icon" v-html="categoryIcons[skillGroup.category]"></div>
          <h3 class="skill-title">{{ skillGroup.category }}</h3>
        </div>
        <ul class="skill-list">
          <li v-for="skill in skillGroup.items" :key="skill" class="skill-item">
            {{ skill }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style scoped>
.skills-container {
  max-width: 1200px;
  margin: 0 auto;
}

.skills-bento {
  display: grid;
  grid-template-columns: 1fr;
  gap: var(--bento-gap);
}

@media (min-width: 768px) {
  .skills-bento {
    grid-template-columns: repeat(2, 1fr);
  }
}

.skill-card {
  background: var(--color-background);
  border-radius: var(--bento-radius);
  padding: var(--spacing-xl);
  box-shadow: var(--shadow-card);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  display: flex;
  flex-direction: column;
  gap: var(--spacing-lg);
}

.skill-card:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-card-hover);
}

.skill-header {
  display: flex;
  align-items: center;
  gap: var(--spacing-md);
}

.skill-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 52px;
  height: 52px;
  background: var(--color-primary-alpha-10);
  border-radius: var(--radius-lg);
  color: var(--color-primary);
  flex-shrink: 0;
}

.skill-title {
  font-size: 1.0625rem;
  font-weight: 600;
  color: var(--color-heading);
  margin: 0;
  line-height: 1.3;
}

.skill-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 0.625rem;
}

.skill-item {
  font-size: 0.9375rem;
  color: var(--color-text);
  line-height: 1.5;
  padding-left: 1rem;
  position: relative;
  transition: color 0.2s ease;
}

.skill-item::before {
  content: '';
  position: absolute;
  left: 0;
  top: 0.5em;
  width: 5px;
  height: 5px;
  background: var(--color-primary);
  border-radius: 50%;
  opacity: 0.5;
  transition: opacity 0.2s ease;
}

.skill-item:hover {
  color: var(--color-heading);
}

.skill-item:hover::before {
  opacity: 1;
}

@media (max-width: 768px) {
  .skill-card {
    padding: var(--spacing-lg);
  }

  .skill-icon {
    width: 44px;
    height: 44px;
  }

  .skill-icon :deep(svg) {
    width: 22px;
    height: 22px;
  }

  .skill-title {
    font-size: 1rem;
  }
}

/* Reduced motion */
@media (prefers-reduced-motion: reduce) {
  .skill-card {
    transition: none;
  }

  .skill-card:hover {
    transform: none;
  }
}
</style>
