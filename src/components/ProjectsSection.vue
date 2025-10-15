<template>
  <div class="projects-section">
    <h2>Featured Projects</h2>
    <div class="projects-grid">
      <div class="project-card">
        <div class="project-header">
          <h3>DeepLang AI Platform</h3>
          <div class="project-links">
            <a href="https://deeplang.ai/" target="_blank" rel="noopener" class="project-link">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M10 6H6a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-4M14 4h6m0 0v6m0-6L10 14"/>
              </svg>
              Live Demo
            </a>
          </div>
        </div>
        <p>Advanced AI platform focusing on generative models and natural language processing, incubated by THUNLP.</p>
        <div class="project-tech">
          <span class="tech-tag">Python</span>
          <span class="tech-tag">PyTorch</span>
          <span class="tech-tag">NLP</span>
        </div>
      </div>
      
      <div class="project-card">
        <div class="project-header">
          <h3>AI Research Publications</h3>
          <div class="project-links">
            <a href="https://github.com/stephengineer" target="_blank" rel="noopener" class="project-link">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
              </svg>
              GitHub
            </a>
          </div>
        </div>
        <p>Research papers and implementations in machine learning, deep learning, and generative AI models.</p>
        <div class="project-tech">
          <span class="tech-tag">Research</span>
          <span class="tech-tag">Academic</span>
          <span class="tech-tag">AI</span>
        </div>
      </div>
      
      <div class="project-card">
        <div class="project-header">
          <h3>Educational Content</h3>
          <div class="project-links">
            <a href="https://x.com/stephengineers" target="_blank" rel="noopener" class="project-link">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"/>
              </svg>
              Twitter
            </a>
          </div>
        </div>
        <p>Sharing insights and knowledge about AI, machine learning, and computer science education.</p>
        <div class="project-tech">
          <span class="tech-tag">Education</span>
          <span class="tech-tag">Content</span>
          <span class="tech-tag">Community</span>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.projects-section {
  margin: 3rem 0;
  padding: 2rem;
  background: var(--color-background-soft);
  border-radius: 12px;
  border: 1px solid var(--color-border);
}

.projects-section h2 {
  text-align: center;
  margin-bottom: 2rem;
  color: var(--color-heading);
  font-size: 1.8rem;
}

.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}

.project-card {
  background: var(--color-background);
  padding: 1.5rem;
  border-radius: 8px;
  border: 1px solid var(--color-border);
  transition: all 0.3s ease;
}

.project-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
}

.project-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 1rem;
}

.project-header h3 {
  color: var(--color-heading);
  font-size: 1.2rem;
  margin: 0;
}

.project-links {
  display: flex;
  gap: 0.5rem;
}

.project-link {
  display: flex;
  align-items: center;
  gap: 0.25rem;
  color: var(--color-text);
  text-decoration: none;
  font-size: 0.9rem;
  padding: 0.25rem 0.5rem;
  border-radius: 4px;
  transition: all 0.3s ease;
}

.project-link:hover {
  background: var(--color-border-hover);
  color: var(--color-heading);
}

.project-card p {
  color: var(--color-text);
  line-height: 1.6;
  margin-bottom: 1rem;
}

.project-tech {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.tech-tag {
  background: var(--color-background-mute);
  color: var(--color-text);
  padding: 0.25rem 0.75rem;
  border-radius: 12px;
  font-size: 0.8rem;
  border: 1px solid var(--color-border);
}

@media (max-width: 768px) {
  .projects-section {
    margin: 2rem 0;
    padding: 1.5rem;
  }
  
  .projects-grid {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
  
  .project-header {
    flex-direction: column;
    gap: 0.5rem;
  }
}
</style>
