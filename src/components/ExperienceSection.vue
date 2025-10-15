<template>
  <div class="experience-container">
    <div class="experience-timeline">
      <!-- Experience 1 -->
      <div class="experience-item">
        <div class="experience-timeline-line"></div>
        
        <div class="experience-content">
          <div class="experience-left">
            <span class="experience-date">2023 - Present</span>
            <h3 class="experience-title">Research Scientist</h3>
            <p class="experience-company">VisionFlow AI</p>
          </div>
          
          <div class="experience-dot">
            <div class="dot-inner"></div>
          </div>
          
          <div class="experience-right">
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
          <div class="experience-left">
            <span class="experience-date">2021 - 2023</span>
            <h3 class="experience-title">Machine Learning Engineer</h3>
            <p class="experience-company">DeepLang AI</p>
          </div>
          
          <div class="experience-dot">
            <div class="dot-inner"></div>
          </div>
          
          <div class="experience-right">
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
          <div class="experience-left">
            <span class="experience-date">2019 - 2021</span>
            <h3 class="experience-title">Adjunct Professor</h3>
            <p class="experience-company">Computer Science Department</p>
          </div>
          
          <div class="experience-dot">
            <div class="dot-inner"></div>
          </div>
          
          <div class="experience-right">
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
          <div class="experience-left">
            <span class="experience-date">2017 - 2019</span>
            <h3 class="experience-title">Research Assistant</h3>
            <p class="experience-company">AI Research Lab</p>
          </div>
          
          <div class="experience-dot">
            <div class="dot-inner"></div>
          </div>
          
          <div class="experience-right">
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
  max-width: 1000px;
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
  left: 50%;
  top: 0;
  bottom: -3rem;
  width: 2px;
  background: #E5E7EB;
  transform: translateX(-50%);
}

.experience-item:last-child .experience-timeline-line {
  display: none;
}

.experience-content {
  display: flex;
  align-items: flex-start;
  position: relative;
}

.experience-left {
  flex: 1;
  padding-right: 2rem;
  text-align: right;
}

.experience-right {
  flex: 1;
  padding-left: 2rem;
}

.experience-dot {
  position: absolute;
  left: 50%;
  top: 0.5rem;
  width: 1.5rem;
  height: 1.5rem;
  background: #165DFF;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1;
  transform: translateX(-50%);
}

.dot-inner {
  width: 0.5rem;
  height: 0.5rem;
  background: white;
  border-radius: 50%;
}

.experience-date {
  font-size: 0.875rem;
  font-weight: 600;
  color: #165DFF;
  margin-bottom: 0.5rem;
  display: block;
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
  color: #6B7280;
  margin-bottom: 0;
}

.experience-description {
  color: var(--color-text);
  line-height: 1.6;
  font-size: 0.95rem;
  margin: 0;
}

@media (max-width: 768px) {
  .experience-content {
    flex-direction: column;
    gap: 1rem;
  }
  
  .experience-left {
    padding-right: 0;
    text-align: left;
  }
  
  .experience-right {
    padding-left: 0;
  }
  
  .experience-dot {
    position: static;
    align-self: flex-start;
    transform: none;
    margin: 0 auto;
  }
  
  .experience-timeline-line {
    left: 1rem;
    transform: none;
  }
}
</style>
