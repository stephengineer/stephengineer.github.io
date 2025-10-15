<template>
  <div class="skills-section">
    <h2>Skills & Expertise</h2>
    <div class="skills-grid">
      <div class="skill-category">
        <h3>Machine Learning</h3>
        <div class="skill-tags">
          <span class="skill-tag">Deep Learning</span>
          <span class="skill-tag">NLP</span>
          <span class="skill-tag">Generative Models</span>
          <span class="skill-tag">Computer Vision</span>
        </div>
      </div>
      
      <div class="skill-category">
        <h3>Programming</h3>
        <div class="skill-tags">
          <span class="skill-tag">Python</span>
          <span class="skill-tag">PyTorch</span>
          <span class="skill-tag">TensorFlow</span>
          <span class="skill-tag">JavaScript</span>
        </div>
      </div>
      
      <div class="skill-category">
        <h3>Research</h3>
        <div class="skill-tags">
          <span class="skill-tag">AIGC</span>
          <span class="skill-tag">Academic Writing</span>
          <span class="skill-tag">Mentoring</span>
          <span class="skill-tag">Teaching</span>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.skills-section {
  padding: 4rem 0;
  background: var(--color-background-soft);
  position: relative;
}

.skills-section::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: radial-gradient(circle at 30% 20%, rgba(102, 126, 234, 0.05) 0%, transparent 50%),
              radial-gradient(circle at 70% 80%, rgba(118, 75, 162, 0.05) 0%, transparent 50%);
  pointer-events: none;
}

.skills-section h2 {
  text-align: center;
  margin-bottom: 3rem;
  color: var(--color-heading);
  font-size: 2.5rem;
  font-weight: 700;
  position: relative;
  z-index: 1;
}

.skills-section h2::after {
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

.skills-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  position: relative;
  z-index: 1;
}

.skill-category {
  background: var(--color-background);
  border-radius: 16px;
  padding: 2rem;
  border: 1px solid var(--color-border);
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
}

.skill-category:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.1);
}

.skill-category h3 {
  margin-bottom: 1.5rem;
  color: var(--color-heading);
  font-size: 1.3rem;
  font-weight: 600;
  text-align: center;
  position: relative;
}

.skill-category h3::after {
  content: '';
  position: absolute;
  bottom: -8px;
  left: 50%;
  transform: translateX(-50%);
  width: 40px;
  height: 3px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 2px;
}

.skill-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  justify-content: center;
}

.skill-tag {
  background: var(--color-background-mute);
  color: var(--color-text);
  padding: 0.6rem 1.2rem;
  border-radius: 25px;
  font-size: 0.9rem;
  font-weight: 500;
  border: 1px solid var(--color-border);
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}

.skill-tag::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(102, 126, 234, 0.1), transparent);
  transition: left 0.5s ease;
}

.skill-tag:hover {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  transform: translateY(-2px);
  box-shadow: 0 8px 20px rgba(102, 126, 234, 0.3);
  border-color: transparent;
}

.skill-tag:hover::before {
  left: 100%;
}

@media (max-width: 768px) {
  .skills-section {
    padding: 3rem 0;
  }
  
  .skills-section h2 {
    font-size: 2rem;
    margin-bottom: 2rem;
  }
  
  .skills-grid {
    grid-template-columns: 1fr;
    gap: 1.5rem;
    padding: 0 1rem;
  }
  
  .skill-category {
    padding: 1.5rem;
  }
}
</style>
