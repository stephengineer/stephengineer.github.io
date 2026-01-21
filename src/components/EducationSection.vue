<script setup>
import { education } from '../data/education'
</script>

<template>
  <div class="education-container">
    <div class="education-grid">
      <div v-for="edu in education" :key="edu.id" class="education-card">
        <div class="education-header">
          <div class="education-icon">
            <svg
              width="32"
              height="32"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
            >
              <path d="M22 10v6M2 10l10-5 10 5-10 5z"></path>
              <path d="M6 12v5c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2v-5"></path>
            </svg>
          </div>
          <h3 class="education-school">{{ edu.school }}</h3>
        </div>
        <div class="education-details">
          <p class="education-degree">{{ edu.degree }}</p>
          <p class="education-specialization">{{ edu.specialization }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.education-container {
  max-width: 900px;
  margin: 0 auto;
}

.education-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
}

@media (min-width: 768px) {
  .education-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 2.5rem;
  }
}

.education-card {
  background: var(--color-background);
  border: 1px solid var(--color-border);
  border-radius: 1rem;
  padding: 2rem;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}

.education-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 4px;
  background: linear-gradient(135deg, #165dff 0%, #36cfc9 100%);
  transform: scaleX(0);
  transform-origin: left;
  transition: transform 0.3s ease;
}

.education-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.1);
  border-color: rgba(22, 93, 255, 0.3);
}

.education-card:hover::before {
  transform: scaleX(1);
}

.education-header {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1.5rem;
}

.education-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
  background: linear-gradient(135deg, rgba(22, 93, 255, 0.1) 0%, rgba(54, 207, 201, 0.1) 100%);
  border-radius: 12px;
  color: #165dff;
  flex-shrink: 0;
  transition: all 0.3s ease;
}

.education-card:hover .education-icon {
  background: linear-gradient(135deg, rgba(22, 93, 255, 0.15) 0%, rgba(54, 207, 201, 0.15) 100%);
  transform: scale(1.05);
}

.education-school {
  font-size: 1.25rem;
  font-weight: 600;
  color: var(--color-heading);
  margin: 0;
  line-height: 1.3;
}

.education-details {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.education-degree {
  font-size: 1rem;
  font-weight: 500;
  color: var(--color-text);
  margin: 0;
}

.education-specialization {
  font-size: 0.875rem;
  color: var(--color-text);
  opacity: 0.8;
  margin: 0;
}

@media (max-width: 768px) {
  .education-grid {
    gap: 1.5rem;
  }

  .education-card {
    padding: 1.5rem;
  }

  .education-header {
    gap: 0.875rem;
    margin-bottom: 1.25rem;
  }

  .education-icon {
    width: 40px;
    height: 40px;
  }

  .education-icon svg {
    width: 24px;
    height: 24px;
  }

  .education-school {
    font-size: 1.125rem;
  }

  .education-degree {
    font-size: 0.9375rem;
  }

  .education-specialization {
    font-size: 0.8125rem;
  }
}

@media (max-width: 480px) {
  .education-card {
    padding: 1.25rem;
  }

  .education-header {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.75rem;
  }
}
</style>
