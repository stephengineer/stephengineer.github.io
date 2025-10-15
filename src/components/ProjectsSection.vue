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
  padding: 4rem 0;
  background: var(--color-background);
  position: relative;
}

.projects-section::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: radial-gradient(circle at 20% 30%, rgba(102, 126, 234, 0.03) 0%, transparent 50%),
              radial-gradient(circle at 80% 70%, rgba(118, 75, 162, 0.03) 0%, transparent 50%);
  pointer-events: none;
}

.projects-section h2 {
  text-align: center;
  margin-bottom: 3rem;
  color: var(--color-heading);
  font-size: 2.5rem;
  font-weight: 700;
  position: relative;
  z-index: 1;
}

.projects-section h2::after {
  content: '';
  position: absolute;
  bottom: -10px;
  left: 50%;
  transform: translateX(-50%);
  width: 60px;
  height: 4px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 2px;
}

.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  position: relative;
  z-index: 1;
}

.project-card {
  background: var(--color-background);
  padding: 2rem;
  border-radius: 16px;
  border: 1px solid var(--color-border);
  transition: all 0.3s ease;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
  position: relative;
  overflow: hidden;
}

.project-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 4px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}

.project-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
  border-color: rgba(102, 126, 234, 0.3);
}

.project-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 1.5rem;
}

.project-header h3 {
  color: var(--color-heading);
  font-size: 1.4rem;
  font-weight: 700;
  margin: 0;
  flex: 1;
}

.project-links {
  display: flex;
  gap: 0.5rem;
  margin-left: 1rem;
}

.project-link {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: var(--color-text);
  text-decoration: none;
  font-size: 0.9rem;
  font-weight: 500;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  background: linear-gradient(135deg, #f8f9ff 0%, #e8f0ff 100%);
  border: 1px solid rgba(102, 126, 234, 0.2);
  transition: all 0.3s ease;
}

.project-link:hover {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  transform: translateY(-2px);
  box-shadow: 0 8px 20px rgba(102, 126, 234, 0.3);
}

.project-card p {
  color: var(--color-text);
  line-height: 1.6;
  margin-bottom: 1.5rem;
  font-size: 0.95rem;
}

.project-tech {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.tech-tag {
  background: linear-gradient(135deg, #f8f9ff 0%, #e8f0ff 100%);
  color: var(--color-text);
  padding: 0.4rem 1rem;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: 500;
  border: 1px solid rgba(102, 126, 234, 0.2);
  transition: all 0.3s ease;
}

.tech-tag:hover {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  transform: translateY(-1px);
}

@media (max-width: 768px) {
  .projects-section {
    padding: 3rem 0;
  }
  
  .projects-section h2 {
    font-size: 2rem;
    margin-bottom: 2rem;
  }
  
  .projects-grid {
    grid-template-columns: 1fr;
    gap: 1.5rem;
    padding: 0 1rem;
  }
  
  .project-card {
    padding: 1.5rem;
  }
  
  .project-header {
    flex-direction: column;
    gap: 1rem;
    align-items: flex-start;
  }
  
  .project-links {
    margin-left: 0;
  }
}
</style>
