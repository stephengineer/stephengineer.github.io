<template>
  <div class="skills-container">
    <div class="skills-grid">
      <div class="skill-category">
        <h3 class="category-title">Machine Learning & AI</h3>
        <div class="skill-list">
          <div class="skill-item">
            <div class="skill-header">
              <span class="skill-name">Large Language Models</span>
              <span class="skill-percentage">95%</span>
            </div>
            <div class="skill-bar">
              <div class="skill-progress" data-width="95%"></div>
            </div>
          </div>
          
          <div class="skill-item">
            <div class="skill-header">
              <span class="skill-name">Natural Language Processing</span>
              <span class="skill-percentage">90%</span>
            </div>
            <div class="skill-bar">
              <div class="skill-progress" data-width="90%"></div>
            </div>
          </div>
          
          <div class="skill-item">
            <div class="skill-header">
              <span class="skill-name">Reinforcement Learning</span>
              <span class="skill-percentage">85%</span>
            </div>
            <div class="skill-bar">
              <div class="skill-progress" data-width="85%"></div>
            </div>
          </div>
          
          <div class="skill-item">
            <div class="skill-header">
              <span class="skill-name">Deep Learning</span>
              <span class="skill-percentage">90%</span>
            </div>
            <div class="skill-bar">
              <div class="skill-progress" data-width="90%"></div>
            </div>
          </div>
        </div>
      </div>
      
      <div class="skill-category">
        <h3 class="category-title">Programming & Tools</h3>
        <div class="skill-list">
          <div class="skill-item">
            <div class="skill-header">
              <span class="skill-name">Python</span>
              <span class="skill-percentage">95%</span>
            </div>
            <div class="skill-bar">
              <div class="skill-progress" data-width="95%"></div>
            </div>
          </div>
          
          <div class="skill-item">
            <div class="skill-header">
              <span class="skill-name">PyTorch</span>
              <span class="skill-percentage">90%</span>
            </div>
            <div class="skill-bar">
              <div class="skill-progress" data-width="90%"></div>
            </div>
          </div>
          
          <div class="skill-item">
            <div class="skill-header">
              <span class="skill-name">vLLM</span>
              <span class="skill-percentage">85%</span>
            </div>
            <div class="skill-bar">
              <div class="skill-progress" data-width="85%"></div>
            </div>
          </div>
          
          <div class="skill-item">
            <div class="skill-header">
              <span class="skill-name">C++</span>
              <span class="skill-percentage">80%</span>
            </div>
            <div class="skill-bar">
              <div class="skill-progress" data-width="80%"></div>
            </div>
          </div>
        </div>
      </div>
      
      <div class="skill-category">
        <h3 class="category-title">Research & Development</h3>
        <div class="skill-list">
          <div class="skill-item">
            <div class="skill-header">
              <span class="skill-name">Multi-agents</span>
              <span class="skill-percentage">85%</span>
            </div>
            <div class="skill-bar">
              <div class="skill-progress" data-width="85%"></div>
            </div>
          </div>
          
          <div class="skill-item">
            <div class="skill-header">
              <span class="skill-name">Post-training</span>
              <span class="skill-percentage">90%</span>
            </div>
            <div class="skill-bar">
              <div class="skill-progress" data-width="90%"></div>
            </div>
          </div>
          
          <div class="skill-item">
            <div class="skill-header">
              <span class="skill-name">Teaching</span>
              <span class="skill-percentage">85%</span>
            </div>
            <div class="skill-bar">
              <div class="skill-progress" data-width="85%"></div>
            </div>
          </div>
          
          <div class="skill-item">
            <div class="skill-header">
              <span class="skill-name">Academic Writing</span>
              <span class="skill-percentage">80%</span>
            </div>
            <div class="skill-bar">
              <div class="skill-progress" data-width="80%"></div>
            </div>
          </div>
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

.skill-list {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.skill-item {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.skill-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.skill-name {
  font-weight: 500;
  color: var(--color-heading);
  font-size: 0.875rem;
}

.skill-percentage {
  font-weight: 600;
  color: #165DFF;
  font-size: 0.875rem;
}

.skill-bar {
  height: 8px;
  background: var(--color-background-mute);
  border-radius: 4px;
  overflow: hidden;
  position: relative;
}

.skill-progress {
  height: 100%;
  background: linear-gradient(135deg, #165DFF 0%, #36CFC9 100%);
  border-radius: 4px;
  width: 0%;
  transition: width 1.5s ease;
  position: relative;
}

.skill-progress::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent);
  animation: shimmer 2s infinite;
}

@keyframes shimmer {
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(100%);
  }
}

/* Animation trigger when in viewport */
.skill-progress.animate {
  width: var(--target-width);
}

@media (max-width: 768px) {
  .skills-grid {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
  
  .skill-category {
    padding: 1.5rem;
  }
}
</style>
