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
  margin: 3rem 0;
  padding: 2rem;
  background: var(--color-background-soft);
  border-radius: 12px;
  border: 1px solid var(--color-border);
}

.skills-section h2 {
  text-align: center;
  margin-bottom: 2rem;
  color: var(--color-heading);
  font-size: 1.8rem;
}

.skills-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
}

.skill-category h3 {
  margin-bottom: 1rem;
  color: var(--color-heading);
  font-size: 1.2rem;
  border-bottom: 2px solid var(--color-border);
  padding-bottom: 0.5rem;
}

.skill-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.skill-tag {
  background: var(--color-background-mute);
  color: var(--color-text);
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-size: 0.9rem;
  border: 1px solid var(--color-border);
  transition: all 0.3s ease;
}

.skill-tag:hover {
  background: var(--color-border-hover);
  transform: translateY(-2px);
}

@media (max-width: 768px) {
  .skills-section {
    margin: 2rem 0;
    padding: 1.5rem;
  }
  
  .skills-grid {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
}
</style>
