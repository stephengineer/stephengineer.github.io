<script setup>
import { research } from '../data/research'
import BaseCard from './BaseCard.vue'
</script>

<template>
  <div class="research-container">
    <BaseCard padding="large" class="research-card">
      <p class="research-intro">{{ research.intro }}</p>

      <div class="interests-wrapper">
        <h3 class="interests-label">Primary interests include:</h3>
        <ul class="interests-list">
          <li v-for="(item, index) in research.interests" :key="index" class="interest-item">
            <span class="bullet">•</span>
            <span class="interest-text">{{ item }}</span>
          </li>
        </ul>
      </div>

      <p class="research-closing">{{ research.closing }}</p>
    </BaseCard>
  </div>
</template>

<style scoped>
.research-container {
  max-width: 900px;
  margin: 0 auto;
}

.research-card {
  border-left: 4px solid var(--color-primary);
}

.research-intro {
  font-size: 1.125rem;
  line-height: 1.7;
  color: var(--color-text);
  margin-bottom: var(--spacing-xl);
}

.interests-wrapper {
  margin-bottom: var(--spacing-xl);
  background: var(--color-background-soft);
  padding: var(--spacing-lg);
  border-radius: var(--radius-md);
}

.interests-label {
  font-size: 1rem;
  font-weight: 600;
  color: var(--color-heading);
  margin-bottom: var(--spacing-md);
}

.interests-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: var(--spacing-sm);
}

.interest-item {
  display: flex;
  align-items: flex-start;
  gap: 0.75rem;
  font-size: 1rem;
  line-height: 1.5;
  color: var(--color-text);
}

.bullet {
  color: var(--color-primary);
  font-weight: bold;
  font-size: 1.25rem;
  line-height: 1.2;
}

.research-closing {
  font-size: 1.125rem;
  font-style: italic;
  color: var(--color-heading);
  opacity: 0.9;
  text-align: center;
  margin-top: var(--spacing-lg);
}

@media (max-width: 768px) {
  .research-intro,
  .research-closing {
    font-size: 1rem;
  }

  .interests-wrapper {
    padding: var(--spacing-md);
  }
}
</style>
