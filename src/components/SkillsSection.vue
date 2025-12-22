<script setup>
// No animation needed for the new design
</script>

<template>
  <div class="skills-container">
    <div class="skills-grid">
      <div class="skill-category">
        <h3 class="category-title">Machine Learning & AI</h3>
        <div class="skill-tags">
          <span class="skill-tag">Large Language Models</span>
          <span class="skill-tag">Natural Language Processing</span>
          <span class="skill-tag">Reinforcement Learning</span>
          <span class="skill-tag">Deep Learning</span>
        </div>
      </div>
      
      <div class="skill-category">
        <h3 class="category-title">Programming & Tools</h3>
        <div class="skill-tags">
          <span class="skill-tag">Python</span>
          <span class="skill-tag">PyTorch</span>
          <span class="skill-tag">vLLM</span>
          <span class="skill-tag">C++</span>
        </div>
      </div>
      
      <div class="skill-category">
        <h3 class="category-title">Research & Development</h3>
        <div class="skill-tags">
          <span class="skill-tag">Multi-agents</span>
          <span class="skill-tag">Post-training</span>
          <span class="skill-tag">Teaching</span>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.skills-container {
  max-width: 1000px;
  margin: 0 auto;
}

.skills-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
}

@media (min-width: 768px) {
  .skills-grid {
    grid-template-columns: repeat(3, 1fr);
    gap: 3rem;
  }
}

.skill-category {
  background: var(--color-background);
  border-radius: 1rem;
  padding: 2rem;
  border: 1px solid var(--color-border);
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
}

.skill-category:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.1);
  border-color: rgba(22, 93, 255, 0.3);
}

.category-title {
  font-size: 1.25rem;
  font-weight: 600;
  color: var(--color-heading);
  margin-bottom: 1.5rem;
  text-align: center;
  position: relative;
}

.category-title::after {
  content: '';
  position: absolute;
  bottom: -8px;
  left: 50%;
  transform: translateX(-50%);
  width: 40px;
  height: 3px;
  background: linear-gradient(135deg, #165DFF 0%, #36CFC9 100%);
  border-radius: 2px;
}

.skill-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  justify-content: center;
  align-items: center;
}

@media (min-width: 768px) {
  .skill-tags {
    justify-content: flex-start;
  }
}

.skill-tag {
  display: inline-flex;
  align-items: center;
  padding: 0.625rem 1.25rem;
  background: linear-gradient(135deg, rgba(22, 93, 255, 0.1) 0%, rgba(54, 207, 201, 0.1) 100%);
  border: 1px solid rgba(22, 93, 255, 0.2);
  border-radius: 2rem;
  font-size: 0.875rem;
  font-weight: 500;
  color: var(--color-heading);
  transition: all 0.3s ease;
  cursor: default;
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
  background: linear-gradient(135deg, rgba(22, 93, 255, 0.15) 0%, rgba(54, 207, 201, 0.15) 100%);
  transition: left 0.3s ease;
}

.skill-tag:hover {
  transform: translateY(-2px);
  border-color: rgba(22, 93, 255, 0.4);
  box-shadow: 0 4px 12px rgba(22, 93, 255, 0.2);
  background: linear-gradient(135deg, rgba(22, 93, 255, 0.15) 0%, rgba(54, 207, 201, 0.15) 100%);
}

.skill-tag:hover::before {
  left: 100%;
}

.skill-tag:active {
  transform: translateY(0);
}

@media (max-width: 768px) {
  .skills-grid {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
  
  .skill-category {
    padding: 1.5rem;
  }
  
  .skill-tags {
    gap: 0.625rem;
  }
  
  .skill-tag {
    padding: 0.5rem 1rem;
    font-size: 0.8125rem;
  }
}

@media (max-width: 480px) {
  .skill-tag {
    padding: 0.5rem 0.875rem;
    font-size: 0.75rem;
  }
}
</style>
