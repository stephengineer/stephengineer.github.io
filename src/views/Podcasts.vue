<template>
  <div class="podcasts-page">
    <div class="container">
      <div class="page-header">
        <router-link to="/" class="back-link">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M19 12H5"></path>
            <path d="M12 19l-7-7 7-7"></path>
          </svg>
          <span>Back to Home</span>
        </router-link>
        <h1 class="page-title">Recommended Podcasts</h1>
        <p class="page-description">
          A curated list of podcasts I find valuable for staying updated on product development, 
          AI research, and the latest trends in technology.
        </p>
      </div>
      
      <PodcastSection />
    </div>
  </div>
</template>

<script setup>
import PodcastSection from '../components/PodcastSection.vue'
</script>

<style scoped>
.podcasts-page {
  min-height: 100vh;
  background: var(--color-background);
  padding: 6rem 0 4rem;
}

@media (min-width: 768px) {
  .podcasts-page {
    padding: 8rem 0 6rem;
  }
}

.container {
  max-width: 1000px;
  margin: 0 auto;
  padding: 0 1rem;
}

@media (min-width: 768px) {
  .container {
    padding: 0 2rem;
  }
}

@media (max-width: 480px) {
  .container {
    padding: 0 0.75rem;
  }
}

.page-header {
  text-align: center;
  margin-bottom: 4rem;
}

.back-link {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  color: var(--color-text);
  text-decoration: none;
  font-size: 0.9375rem;
  margin-bottom: 2rem;
  transition: all 0.3s ease;
  opacity: 0.8;
}

.back-link:hover {
  color: #165DFF;
  opacity: 1;
  transform: translateX(-4px);
}

.back-link svg {
  transition: transform 0.3s ease;
}

.back-link:hover svg {
  transform: translateX(-2px);
}

.page-title {
  font-size: clamp(2rem, 5vw, 3.5rem);
  font-weight: 700;
  color: var(--color-heading);
  margin-bottom: 1rem;
}

.page-description {
  font-size: 1.125rem;
  color: var(--color-text);
  max-width: 42rem;
  margin: 0 auto;
  line-height: 1.6;
}

@media (max-width: 480px) {
  .page-description {
    font-size: 1rem;
  }
}
</style>

