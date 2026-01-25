<script setup>
import { projects } from '../data/projects'
import BaseCard from './BaseCard.vue'
</script>

<template>
  <div class="projects-container">
    <div class="projects-grid">
      <BaseCard
        v-for="project in projects"
        :key="project.id"
        class="project-card"
        padding="large"
      >
        <div class="project-header">
          <div class="title-row">
            <h3 class="project-title">{{ project.title }}</h3>
            <span v-if="project.badge" class="project-badge">{{ project.badge }}</span>
          </div>
          <p class="project-subtitle">{{ project.subtitle }}</p>
        </div>

        <div class="project-content">
          <h4 class="section-label">Core Contributions:</h4>
          <ul class="contribution-list">
            <li v-for="(item, i) in project.contributions" :key="i" class="contribution-item">
              <span class="bullet-icon">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </span>
              <span class="contribution-text">{{ item }}</span>
            </li>
          </ul>
        </div>

        <div class="project-footer">
          <div class="tags-container">
            <span v-for="tag in project.tags" :key="tag" class="project-tag">
              {{ tag }}
            </span>
          </div>
        </div>
      </BaseCard>
    </div>
  </div>
</template>

<style scoped>
.projects-container {
  max-width: 1000px;
  margin: 0 auto;
}

.projects-grid {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-xl);
}

.project-card {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-lg);
}

.project-header {
  border-bottom: 1px solid var(--color-border);
  padding-bottom: var(--spacing-md);
}

.title-row {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: var(--spacing-md);
  margin-bottom: var(--spacing-sm);
  flex-wrap: wrap;
}

.project-title {
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--color-heading);
  margin: 0;
  line-height: 1.3;
  flex: 1;
}

.project-badge {
  display: inline-block;
  padding: 0.25rem 0.75rem;
  background: var(--gradient-primary);
  color: white;
  font-size: 0.75rem;
  font-weight: 600;
  border-radius: var(--radius-full);
  white-space: nowrap;
  box-shadow: var(--shadow-sm);
}

.project-subtitle {
  font-size: 1.125rem;
  color: var(--color-text);
  line-height: 1.6;
  margin: 0;
  opacity: 0.9;
}

.section-label {
  font-size: 0.875rem;
  font-weight: 600;
  color: var(--color-text);
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin: 0 0 var(--spacing-md) 0;
  opacity: 0.7;
}

.contribution-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: var(--spacing-sm);
}

.contribution-item {
  display: flex;
  align-items: flex-start;
  gap: 0.75rem;
  color: var(--color-text);
  font-size: 1rem;
  line-height: 1.6;
}

.bullet-icon {
  color: var(--color-primary);
  flex-shrink: 0;
  margin-top: 3px;
  transition: transform 0.2s ease;
}

.contribution-item:hover .bullet-icon {
  transform: translateX(3px);
}

.project-footer {
  margin-top: auto;
  padding-top: var(--spacing-md);
  border-top: 1px solid var(--color-border);
}

.tags-container {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.project-tag {
  font-size: 0.8125rem;
  padding: 0.3rem 0.875rem;
  background: var(--color-primary-alpha-10);
  color: var(--color-primary);
  border-radius: var(--radius-full);
  font-weight: 500;
  transition: all 0.2s ease;
  border: 1px solid var(--color-primary-alpha-15);
}

.project-tag:hover {
  background: var(--color-primary-alpha-20);
  transform: translateY(-1px);
}

@media (max-width: 768px) {
  .project-title {
    font-size: 1.25rem;
  }

  .project-subtitle {
    font-size: 1rem;
  }

  .contribution-item {
    font-size: 0.9375rem;
  }
}
</style>
