<script setup>
import { experiences } from '../data/experience'
</script>

<template>
  <div class="experience-container">
    <div class="experience-timeline">
      <div v-for="(exp, index) in experiences" :key="exp.id" class="experience-item">
        <div class="experience-content">
          <div class="experience-left">
            <span class="experience-date">{{ exp.date }}</span>
            <h3 class="experience-title">{{ exp.title }}</h3>
            <p class="experience-company">{{ exp.company }}</p>
          </div>

          <div class="experience-right">
            <p v-if="exp.summary" class="experience-summary">{{ exp.summary }}</p>
            <ul class="experience-achievements">
              <li v-for="(item, i) in exp.achievements" :key="i" class="achievement-item">
                <span class="bullet">•</span>
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
  max-width: 1000px;
  margin: 0 auto;
  position: relative;
}

.experience-timeline {
  position: relative;
}

.experience-item {
  position: relative;
  margin-bottom: 4rem;
}

.experience-content {
  display: flex;
  align-items: flex-start;
  position: relative;
  z-index: 1;
  gap: 3rem;
}

.experience-left {
  flex: 1;
  text-align: right;
  padding-top: 0;
}

.experience-right {
  flex: 1.5;
  padding-top: 0;
}

.experience-date {
  font-size: 0.875rem;
  font-weight: 600;
  color: var(--color-primary);
  margin-bottom: 0.5rem;
  display: block;
}

.experience-title {
  font-size: 1.25rem;
  font-weight: 700;
  color: var(--color-heading);
  margin-bottom: 0.25rem;
  line-height: 1.3;
}

.experience-company {
  font-size: 1rem;
  font-weight: 500;
  color: var(--color-text);
  opacity: 0.8;
  margin-bottom: 0;
}

.experience-summary {
  color: var(--color-heading);
  line-height: 1.6;
  font-size: 1rem;
  margin: 0 0 1.5rem 0;
  font-weight: 500;
  opacity: 0.9;
  border-left: 3px solid var(--color-primary-alpha-30);
  padding-left: 1rem;
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
  font-size: 0.95rem;
  line-height: 1.6;
}

.bullet {
  color: var(--color-primary);
  font-weight: bold;
  line-height: 1.6;
}

@media (max-width: 768px) {
  .experience-content {
    flex-direction: column;
    gap: 1rem;
    padding-left: 0;
  }

  .experience-left {
    text-align: left;
    width: 100%;
  }

  .experience-right {
    width: 100%;
  }

  .experience-item {
    margin-bottom: 3rem;
  }
}
</style>
