<script setup>
import { experiences } from '../data/experience'
</script>

<template>
  <div class="experience-container">
    <div class="experience-timeline">
      <div v-for="(exp, index) in experiences" :key="exp.id" class="experience-item">
        <div v-if="index < experiences.length - 1" class="experience-timeline-line"></div>

        <div class="experience-content">
          <div class="experience-left">
            <span class="experience-date">{{ exp.date }}</span>
            <h3 class="experience-title">{{ exp.title }}</h3>
            <p class="experience-company">{{ exp.company }}</p>
          </div>

          <div class="experience-dot">
            <div class="dot-inner"></div>
          </div>

          <div class="experience-right">
            <p class="experience-description">{{ exp.description }}</p>
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
  margin-bottom: 3rem;
}

.experience-timeline-line {
  position: absolute;
  left: 50%;
  top: 0;
  bottom: -3rem;
  width: 2px;
  background: #e5e7eb;
  transform: translateX(-50%);
}

.experience-item:last-child .experience-timeline-line {
  display: none;
}

.experience-content {
  display: flex;
  align-items: flex-start;
  position: relative;
}

.experience-left {
  flex: 1;
  padding-right: 2rem;
  text-align: right;
}

.experience-right {
  flex: 1;
  padding-left: 2rem;
}

.experience-dot {
  position: absolute;
  left: 50%;
  top: 0.5rem;
  width: 1.5rem;
  height: 1.5rem;
  background: #165dff;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1;
  transform: translateX(-50%);
}

.dot-inner {
  width: 0.5rem;
  height: 0.5rem;
  background: white;
  border-radius: 50%;
}

.experience-date {
  font-size: 0.875rem;
  font-weight: 600;
  color: #165dff;
  margin-bottom: 0.5rem;
  display: block;
}

.experience-title {
  font-size: 1.25rem;
  font-weight: 600;
  color: var(--color-heading);
  margin-bottom: 0.25rem;
}

.experience-company {
  font-size: 1rem;
  font-weight: 500;
  color: #6b7280;
  margin-bottom: 0;
}

.experience-description {
  color: var(--color-text);
  line-height: 1.6;
  font-size: 0.95rem;
  margin: 0;
}

@media (max-width: 768px) {
  .experience-content {
    flex-direction: column;
    gap: 0.75rem;
    position: relative;
  }

  .experience-left {
    padding-right: 0;
    text-align: left;
    order: 1;
    position: relative;
    padding-left: 1.5rem;
  }

  .experience-dot {
    position: absolute;
    left: 0;
    top: 0.5rem;
    width: 0.75rem;
    height: 0.75rem;
    background: #165dff;
    border-radius: 50%;
    transform: none;
    margin: 0;
    order: 0;
  }

  .dot-inner {
    display: none;
  }

  .experience-right {
    padding-left: 1.5rem;
    order: 2;
  }

  .experience-timeline-line {
    display: none;
  }

  .experience-item {
    margin-bottom: 2rem;
    padding-left: 0;
  }
}
</style>
