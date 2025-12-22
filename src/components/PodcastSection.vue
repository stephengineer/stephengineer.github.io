<template>
  <div class="podcast-container">
    <div class="podcast-grid">
      <!-- Podcast 1 -->
      <div class="podcast-card">
        <div class="podcast-header">
          <div class="podcast-icon">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <circle cx="12" cy="12" r="10"></circle>
              <polygon points="10 8 16 12 10 16 10 8"></polygon>
            </svg>
          </div>
          <div class="podcast-info">
            <h3 class="podcast-name">Lenny's Podcast</h3>
            <p class="podcast-platform">YouTube</p>
          </div>
        </div>
        <p class="podcast-description">
          A podcast about product, growth, and the journey of building great products. 
          Features conversations with product leaders, founders, and operators.
        </p>
        <a 
          href="https://www.youtube.com/@LennysPodcast/videos" 
          target="_blank" 
          rel="noopener noreferrer"
          class="podcast-link"
        >
          <span>Watch on YouTube</span>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
            <polyline points="15 3 21 3 21 9"></polyline>
            <line x1="10" y1="14" x2="21" y2="3"></line>
          </svg>
        </a>
      </div>
      
      <!-- Podcast 2 -->
      <div class="podcast-card">
        <div class="podcast-header">
          <div class="podcast-icon">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <circle cx="12" cy="12" r="10"></circle>
              <polygon points="10 8 16 12 10 16 10 8"></polygon>
            </svg>
          </div>
          <div class="podcast-info">
            <h3 class="podcast-name">Latent Space Podcast</h3>
            <p class="podcast-platform">YouTube</p>
          </div>
        </div>
        <p class="podcast-description">
          A podcast exploring the latest developments in AI, machine learning, and LLMs. 
          Deep dives into research, engineering, and the future of AI.
        </p>
        <a 
          href="https://www.youtube.com/@LatentSpacePod/videos" 
          target="_blank" 
          rel="noopener noreferrer"
          class="podcast-link"
        >
          <span>Watch on YouTube</span>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
            <polyline points="15 3 21 3 21 9"></polyline>
            <line x1="10" y1="14" x2="21" y2="3"></line>
          </svg>
        </a>
      </div>
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
  gap: 2rem;
}

@media (min-width: 768px) {
  .podcast-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 2.5rem;
  }
}

.podcast-card {
  background: var(--color-background);
  border: 1px solid var(--color-border);
  border-radius: 1rem;
  padding: 2rem;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
}

.podcast-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 4px;
  background: linear-gradient(135deg, #165DFF 0%, #36CFC9 100%);
  transform: scaleX(0);
  transform-origin: left;
  transition: transform 0.3s ease;
}

.podcast-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.1);
  border-color: rgba(22, 93, 255, 0.3);
}

.podcast-card:hover::before {
  transform: scaleX(1);
}

.podcast-header {
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  margin-bottom: 1.25rem;
}

.podcast-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 56px;
  height: 56px;
  background: linear-gradient(135deg, rgba(22, 93, 255, 0.1) 0%, rgba(54, 207, 201, 0.1) 100%);
  border-radius: 12px;
  color: #165DFF;
  flex-shrink: 0;
  transition: all 0.3s ease;
}

.podcast-card:hover .podcast-icon {
  background: linear-gradient(135deg, rgba(22, 93, 255, 0.15) 0%, rgba(54, 207, 201, 0.15) 100%);
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
  margin: 0 0 1.5rem 0;
  flex: 1;
}

.podcast-link {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.5rem;
  background: linear-gradient(135deg, rgba(22, 93, 255, 0.1) 0%, rgba(54, 207, 201, 0.1) 100%);
  border: 1px solid rgba(22, 93, 255, 0.2);
  border-radius: 0.5rem;
  color: #165DFF;
  text-decoration: none;
  font-weight: 500;
  font-size: 0.875rem;
  transition: all 0.3s ease;
  align-self: flex-start;
}

.podcast-link:hover {
  background: linear-gradient(135deg, rgba(22, 93, 255, 0.15) 0%, rgba(54, 207, 201, 0.15) 100%);
  border-color: rgba(22, 93, 255, 0.4);
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(22, 93, 255, 0.2);
}

.podcast-link:active {
  transform: translateY(0);
}

.podcast-link svg {
  transition: transform 0.3s ease;
}

.podcast-link:hover svg {
  transform: translate(2px, -2px);
}

@media (max-width: 768px) {
  .podcast-grid {
    gap: 1.5rem;
  }
  
  .podcast-card {
    padding: 1.5rem;
  }
  
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
  .podcast-card {
    padding: 1.25rem;
  }
  
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

