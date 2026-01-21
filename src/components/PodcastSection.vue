<script setup>
import { podcasts } from '../data/podcasts'
import BaseCard from './BaseCard.vue'
</script>

<template>
  <div class="podcast-container">
    <div class="podcast-grid">
      <BaseCard v-for="podcast in podcasts" :key="podcast.id" class="podcast-card">
        <div class="podcast-header">
          <div class="podcast-icon">
            <svg
              width="32"
              height="32"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
            >
              <circle cx="12" cy="12" r="10"></circle>
              <polygon points="10 8 16 12 10 16 10 8"></polygon>
            </svg>
          </div>
          <div class="podcast-info">
            <h3 class="podcast-name">{{ podcast.name }}</h3>
            <p class="podcast-platform">{{ podcast.platform }}</p>
          </div>
        </div>
        <p class="podcast-description">{{ podcast.description }}</p>
        <a :href="podcast.url" target="_blank" rel="noopener noreferrer" class="podcast-link">
          <span>Watch on {{ podcast.platform }}</span>
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
          >
            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
            <polyline points="15 3 21 3 21 9"></polyline>
            <line x1="10" y1="14" x2="21" y2="3"></line>
          </svg>
        </a>
      </BaseCard>
    </div>
  </div>
</template>

<style scoped>
.podcast-container {
  max-width: 1000px;
  margin: 0 auto;
}

.podcast-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: var(--spacing-lg);
}

@media (min-width: 768px) {
  .podcast-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: var(--spacing-xl);
  }
}

.podcast-card {
  display: flex;
  flex-direction: column;
}

.podcast-header {
  display: flex;
  align-items: flex-start;
  gap: var(--spacing-md);
  margin-bottom: 1.25rem;
}

.podcast-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 56px;
  height: 56px;
  background: var(--color-primary-alpha-10);
  border-radius: 12px;
  color: var(--color-primary);
  flex-shrink: 0;
  transition: var(--transition-base);
}

.podcast-card:hover .podcast-icon {
  background: var(--color-primary-alpha-15);
  transform: scale(1.05);
}

.podcast-info {
  flex: 1;
}

.podcast-name {
  font-size: 1.25rem;
  font-weight: 600;
  color: var(--color-heading);
  margin: 0 0 0.25rem 0;
  line-height: 1.3;
}

.podcast-platform {
  font-size: 0.875rem;
  color: var(--color-text);
  opacity: 0.7;
  margin: 0;
  font-weight: 500;
}

.podcast-description {
  font-size: 0.9375rem;
  line-height: 1.6;
  color: var(--color-text);
  margin: 0 0 var(--spacing-lg) 0;
  flex: 1;
}

.podcast-link {
  display: inline-flex;
  align-items: center;
  gap: var(--spacing-xs);
  padding: 0.75rem 1.5rem;
  background: var(--color-primary-alpha-10);
  border: 1px solid var(--color-primary-alpha-20);
  border-radius: var(--radius-md);
  color: var(--color-primary);
  text-decoration: none;
  font-weight: 500;
  font-size: 0.875rem;
  transition: var(--transition-base);
  align-self: flex-start;
}

.podcast-link:hover {
  background: var(--color-primary-alpha-15);
  border-color: var(--color-primary-alpha-40);
  transform: translateY(-2px);
  box-shadow: var(--shadow-card);
}

.podcast-link:active {
  transform: translateY(0);
}

.podcast-link svg {
  transition: transform var(--transition-base);
}

.podcast-link:hover svg {
  transform: translate(2px, -2px);
}

@media (max-width: 768px) {
  .podcast-header {
    gap: 0.875rem;
    margin-bottom: 1rem;
  }

  .podcast-icon {
    width: 48px;
    height: 48px;
  }

  .podcast-icon svg {
    width: 24px;
    height: 24px;
  }

  .podcast-name {
    font-size: 1.125rem;
  }

  .podcast-description {
    font-size: 0.875rem;
    margin-bottom: 1.25rem;
  }

  .podcast-link {
    padding: 0.625rem 1.25rem;
    font-size: 0.8125rem;
  }
}

@media (max-width: 480px) {
  .podcast-header {
    flex-direction: column;
    align-items: flex-start;
  }

  .podcast-link {
    width: 100%;
    justify-content: center;
  }
}
</style>
