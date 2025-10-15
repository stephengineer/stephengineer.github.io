<template>
  <div class="experience-container">
    <div class="experience-timeline">
      <!-- Experience 1 -->
      <div class="experience-item">
        <div class="experience-timeline-line"></div>
        
        <div class="experience-content">
          <div class="experience-date">
            <span class="date-text">2023 - Present</span>
          </div>
          
          <div class="experience-dot">
            <div class="dot-inner"></div>
          </div>
          
          <div class="experience-details">
            <h3 class="experience-title">Research Scientist</h3>
            <p class="experience-company">VisionFlow AI</p>
            <p class="experience-description">
              Leading research in generative AI, large language models, and multi-agent systems. 
              Focused on LLM post-training techniques including LoRA, PPO, and GRPO. 
              Developing high-performance deployment solutions using vLLM, TensorRT, and Triton.
            </p>
          </div>
        </div>
      </div>
      
      <!-- Experience 2 -->
      <div class="experience-item">
        <div class="experience-timeline-line"></div>
        
        <div class="experience-content">
          <div class="experience-date">
            <span class="date-text">2021 - 2023</span>
          </div>
          
          <div class="experience-dot">
            <div class="dot-inner"></div>
          </div>
          
          <div class="experience-details">
            <h3 class="experience-title">Machine Learning Engineer</h3>
            <p class="experience-company">DeepLang AI</p>
            <p class="experience-description">
              Developed and implemented generative models and applied AIGC solutions. 
              Worked on natural language processing projects and deep learning applications. 
              Collaborated with THUNLP research team on cutting-edge AI research.
            </p>
          </div>
        </div>
      </div>
      
      <!-- Experience 3 -->
      <div class="experience-item">
        <div class="experience-timeline-line"></div>
        
        <div class="experience-content">
          <div class="experience-date">
            <span class="date-text">2019 - 2021</span>
          </div>
          
          <div class="experience-dot">
            <div class="dot-inner"></div>
          </div>
          
          <div class="experience-details">
            <h3 class="experience-title">Adjunct Professor</h3>
            <p class="experience-company">Computer Science Department</p>
            <p class="experience-description">
              Taught courses in natural language processing and computer science. 
              Mentored graduate students in AI research projects. 
              Published research papers in top-tier conferences and journals.
            </p>
          </div>
        </div>
      </div>
      
      <!-- Experience 4 -->
      <div class="experience-item">
        <div class="experience-content">
          <div class="experience-date">
            <span class="date-text">2017 - 2019</span>
          </div>
          
          <div class="experience-dot">
            <div class="dot-inner"></div>
          </div>
          
          <div class="experience-details">
            <h3 class="experience-title">Research Assistant</h3>
            <p class="experience-company">AI Research Lab</p>
            <p class="experience-description">
              Conducted research in machine learning and artificial intelligence. 
              Developed algorithms for natural language understanding and generation. 
              Contributed to multiple research publications and conference presentations.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.experience-container {
  max-width: 800px;
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
  left: 1rem;
  top: 0;
  bottom: -3rem;
  width: 2px;
  background: var(--color-border);
}

.experience-item:last-child .experience-timeline-line {
  display: none;
}

.experience-content {
  display: flex;
  align-items: flex-start;
  gap: 2rem;
  position: relative;
}

.experience-date {
  flex-shrink: 0;
  width: 120px;
  text-align: right;
}

.date-text {
  font-size: 0.875rem;
  font-weight: 600;
  color: #165DFF;
  background: rgba(22, 93, 255, 0.1);
  padding: 0.5rem 1rem;
  border-radius: 1rem;
  display: inline-block;
}

.experience-dot {
  position: absolute;
  left: 0.75rem;
  top: 0.5rem;
  width: 1rem;
  height: 1rem;
  background: #165DFF;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1;
}

.dot-inner {
  width: 0.5rem;
  height: 0.5rem;
  background: white;
  border-radius: 50%;
}

.experience-details {
  flex: 1;
  padding-left: 1rem;
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
  color: #165DFF;
  margin-bottom: 0.75rem;
}

.experience-description {
  color: var(--color-text);
  line-height: 1.6;
  font-size: 0.95rem;
}

@media (max-width: 768px) {
  .experience-content {
    flex-direction: column;
    gap: 1rem;
  }
  
  .experience-date {
    width: auto;
    text-align: left;
  }
  
  .experience-dot {
    position: static;
    align-self: flex-start;
  }
  
  .experience-details {
    padding-left: 0;
  }
  
  .experience-timeline-line {
    left: 0.5rem;
  }
}
</style>
