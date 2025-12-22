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
              Leading research in LLMs and multi-agent systems. 
              Focused on LLM post-training techniques including LoRA PPO, DPO, and GRPO.
              Developing high-performance deployment solutions using vLLM, TensorRT, and Megatron.
            </p>
          </div>
        </div>
      </div>
      
      <!-- Experience 2 -->
      <div class="experience-item">
        <div class="experience-timeline-line"></div>
        
        <div class="experience-content">
          <div class="experience-left">
            <span class="experience-date">2016 - 2023</span>
            <h3 class="experience-title">Machine Learning Engineer</h3>
            <p class="experience-company">Northrop Grumman Corporation</p>
          </div>
          
          <div class="experience-dot">
            <div class="dot-inner"></div>
          </div>
          
          <div class="experience-right">
            <p class="experience-description">
              Developed and implemented generative models and applied AIGC solutions. 
              Worked on NLP projects and deep learning applications with RNNs and LSTMs. 
              Collaborated with research team on cutting-edge AI research.
            </p>
          </div>
        </div>
      </div>
      
      <!-- Experience 3 -->
      <div class="experience-item">
        <div class="experience-timeline-line"></div>
        
        <div class="experience-content">
          <div class="experience-left">
            <span class="experience-date">2021 - 2023</span>
            <h3 class="experience-title">Adjunct Professor</h3>
            <p class="experience-company">California State University, Los Angeles</p>
          </div>
          
          <div class="experience-dot">
            <div class="dot-inner"></div>
          </div>
          
          <div class="experience-right">
            <p class="experience-description">
              Taught courses in NLP and AI courses.
              Mentored graduate students in AI research projects.
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
    gap: 0.75rem;
    position: relative;
  }
  
  .experience-left {
    padding-right: 0;
    text-align: left;
    order: 1;
    position: relative;
    padding-left: 1.5rem;
  }
  
  .experience-dot {
    position: absolute;
    left: 0;
    top: 0.5rem;
    width: 0.75rem;
    height: 0.75rem;
    background: #165DFF;
    border-radius: 50%;
    transform: none;
    margin: 0;
    order: 0;
  }
  
  .dot-inner {
    display: none;
  }
  
  .experience-right {
    padding-left: 1.5rem;
    order: 2;
  }
  
  .experience-timeline-line {
    display: none;
  }
  
  .experience-item {
    margin-bottom: 2rem;
    padding-left: 0;
  }
}
</style>
