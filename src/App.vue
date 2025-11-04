<script setup>
import Navbar from './components/Navbar.vue'
import SkillsSection from './components/SkillsSection.vue'
import ContactForm from './components/ContactForm.vue'
import ExperienceSection from './components/ExperienceSection.vue'

const scrollToSection = (sectionId) => {
  const element = document.getElementById(sectionId)
  if (element) {
    // 获取导航栏的实际高度
    const navbar = document.querySelector('.navbar')
    const navbarHeight = navbar ? navbar.offsetHeight : 80
    
    // 在移动端增加额外的偏移量
    const isMobile = window.innerWidth <= 768
    const extraOffset = isMobile ? 20 : 0
    const totalOffset = navbarHeight + extraOffset
    
    // 计算目标位置
    const elementPosition = element.getBoundingClientRect().top + window.pageYOffset - totalOffset
    
    // 平滑滚动到目标位置
    window.scrollTo({
      top: elementPosition,
      behavior: 'smooth'
    })
  }
}
</script>

<template>
  <div class="app">
    <!-- Navigation -->
    <Navbar />
    
    <!-- Hero Section -->
    <section id="about" class="hero-section">
      <div class="container">
        <div class="hero-content">
          <div class="hero-text">
            <h1 class="hero-title">
              I'm <span class="text-primary">Stephen Wang</span>,<br>
              Research Scientist
            </h1>
            <p class="hero-description">
              Focusing on generative AI, large language models, and multi-agent systems. 
              Passionate about advancing intelligent systems that combine reasoning, creativity, and real-world impact.
            </p>
            <div class="hero-buttons">
              <a href="https://www.buymeacoffee.com/stephengineer" target="_blank" rel="noopener" class="btn-primary coffee-btn">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" style="margin-right: 8px;">
                  <path d="M2 21h18v-2H2v2zm1-3h16l-1-14H4l-1 14zm2-2h12l.5-7H4.5L4 16zm8-9c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-2.2 0-4-1.8-4-4s1.8-4 4-4 4 1.8 4 4-1.8 4-4 4z"/>
                </svg>
                Buy Me a Coffee
              </a>
            </div>
            <div class="social-links">
              <a href="https://github.com/stephengineer" target="_blank" rel="noopener" class="social-link">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>
              <a href="https://www.linkedin.com/in/stephengineer" target="_blank" rel="noopener" class="social-link">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <a href="https://x.com/stephengineers" target="_blank" rel="noopener" class="social-link">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
            </div>
          </div>
          
          <div class="hero-image">
            <div class="image-container">
              <img alt="Stephen Wang" class="profile-image" src="./assets/profile.jpeg" />
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Skills Section -->
    <section id="skills" class="skills-section">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">My Technical Skills</h2>
          <p class="section-description">
            I specialize in AI research and development with expertise in large language models, 
            multi-agent systems, and high-performance deployment.
          </p>
        </div>
        
        <SkillsSection />
      </div>
    </section>

    <!-- Experience Section -->
    <section id="experience" class="experience-section">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">Work Experience</h2>
          <p class="section-description">
            My professional journey as an AI researcher and engineer, working with cutting-edge technologies 
            and contributing to the advancement of artificial intelligence.
          </p>
        </div>
        
        <ExperienceSection />
      </div>
    </section>

    <!-- Contact Section -->
    <section id="contact" class="contact-section">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">Get In Touch</h2>
          <p class="section-description">
            Interested in collaborating on AI research or discussing opportunities? 
            Feel free to reach out!
          </p>
        </div>
        
        <ContactForm />
      </div>
    </section>

    <!-- Footer -->
    <footer class="footer">
      <div class="container">
        <div class="footer-content">
          <div class="footer-brand">
            <h3 class="footer-logo">Stephen<span class="text-primary">Wang</span></h3>
            <p class="footer-tagline">Advancing AI research, one breakthrough at a time.</p>
          </div>
          
          <div class="footer-social">
            <a href="https://github.com/stephengineer" target="_blank" rel="noopener" class="footer-social-link">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </a>
            <a href="https://www.linkedin.com/in/stephengineer" target="_blank" rel="noopener" class="footer-social-link">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
            <a href="https://x.com/stephengineers" target="_blank" rel="noopener" class="footer-social-link">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </a>
          </div>
        </div>
        
        <div class="footer-bottom">
          <p>&copy; 2025 Stephen Wang. All rights reserved.</p>
        </div>
      </div>
    </footer>
  </div>
</template>

<style scoped>
.app {
  min-height: 100vh;
  background: var(--color-background);
  font-family: 'Inter', system-ui, sans-serif;
}

/* Container */
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
}

@media (min-width: 768px) {
  .container {
    padding: 0 2rem;
  }
}

@media (max-width: 480px) {
  .container {
    padding: 0 0.75rem;
  }
}

/* Hero Section */
.hero-section {
  padding: 6rem 0 4rem;
  background: var(--color-background);
  position: relative;
  overflow: hidden;
}

@media (min-width: 768px) {
  .hero-section {
    padding: 8rem 0 6rem;
  }
}

.hero-section::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: radial-gradient(circle at 20% 80%, rgba(22, 93, 255, 0.05) 0%, transparent 50%),
              radial-gradient(circle at 80% 20%, rgba(54, 207, 201, 0.05) 0%, transparent 50%);
  pointer-events: none;
}

.hero-content {
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  align-items: center;
  position: relative;
  z-index: 1;
}

@media (min-width: 768px) {
  .hero-content {
    grid-template-columns: 1fr 1fr;
    gap: 4rem;
  }
}

@media (max-width: 480px) {
  .hero-content {
    gap: 1.5rem;
    grid-template-rows: auto auto;
    justify-items: center;
    text-align: center;
  }
  
  .hero-image {
    order: 1;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  .hero-text {
    order: 2;
    width: 100%;
    text-align: center;
  }
}

.hero-text {
  text-align: center;
}

@media (min-width: 768px) {
  .hero-text {
    text-align: left;
  }
}

.hero-title {
  font-size: clamp(2rem, 5vw, 4rem);
  font-weight: 700;
  line-height: 1.2;
  margin-bottom: 1.5rem;
  color: var(--color-heading);
}

@media (max-width: 480px) {
  .hero-title {
    font-size: clamp(1.75rem, 6vw, 2.5rem);
    margin-bottom: 1rem;
  }
}

.text-primary {
  background: linear-gradient(135deg, #165DFF 0%, #36CFC9 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.hero-description {
  font-size: 1rem;
  line-height: 1.6;
  color: var(--color-text);
  margin-bottom: 2rem;
  max-width: 500px;
  margin-left: auto;
  margin-right: auto;
}

@media (min-width: 768px) {
  .hero-description {
    font-size: 1.125rem;
    margin-left: 0;
    margin-right: 0;
  }
}

@media (max-width: 480px) {
  .hero-description {
    font-size: 0.95rem;
    margin-bottom: 1.5rem;
  }
}

.hero-buttons {
  display: flex;
  justify-content: flex-start;
  margin-bottom: 2rem;
}

@media (min-width: 768px) {
  .hero-buttons {
    margin-bottom: 2.5rem;
  }
}

@media (max-width: 480px) {
  .hero-buttons {
    margin-bottom: 1.5rem;
    justify-content: center;
  }
}

.btn-primary {
  padding: 0.75rem 1.5rem;
  background: #165DFF;
  color: white;
  border-radius: 0.5rem;
  font-weight: 500;
  text-decoration: none;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(22, 93, 255, 0.3);
  text-align: center;
  min-width: 140px;
}

@media (max-width: 480px) {
  .btn-primary {
    width: 100%;
    max-width: 200px;
  }
  
  .coffee-btn {
    width: 100%;
    max-width: 280px;
    font-size: 0.9rem;
    padding: 0.7rem 1.2rem;
    white-space: nowrap;
  }
  
  .coffee-btn svg {
    width: 18px;
    height: 18px;
    margin-right: 6px;
  }
}

.btn-primary:hover {
  background: #0E4ACC;
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(22, 93, 255, 0.4);
}

.coffee-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #165DFF 0%, #0E4ACC 100%);
  box-shadow: 0 4px 15px rgba(22, 93, 255, 0.3);
  font-weight: 600;
  letter-spacing: 0.5px;
}

.coffee-btn:hover {
  background: linear-gradient(135deg, #0E4ACC 0%, #0A3BB8 100%);
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(22, 93, 255, 0.4);
}

.coffee-btn svg {
  filter: drop-shadow(0 1px 2px rgba(0, 0, 0, 0.1));
}

.btn-secondary {
  padding: 0.75rem 1.5rem;
  background: var(--color-background);
  color: #165DFF;
  border: 1px solid #165DFF;
  border-radius: 0.5rem;
  font-weight: 500;
  text-decoration: none;
  transition: all 0.3s ease;
  text-align: center;
  min-width: 140px;
}

@media (max-width: 480px) {
  .btn-secondary {
    width: 100%;
    max-width: 200px;
  }
}

.btn-secondary:hover {
  background: #165DFF;
  color: white;
}

.social-links {
  display: flex;
  gap: 1.5rem;
  justify-content: center;
}

@media (min-width: 768px) {
  .social-links {
    justify-content: flex-start;
  }
}

.social-link {
  color: var(--color-text);
  transition: all 0.3s ease;
}

.social-link:hover {
  color: #165DFF;
  transform: translateY(-2px);
}

.hero-image {
  display: flex;
  justify-content: center;
  align-items: center;
}

/* Additional mobile centering fixes */
@media (max-width: 768px) {
  .hero-content {
    justify-items: center;
  }
  
  .hero-image {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  .image-container {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}

.image-container {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
}

@media (max-width: 480px) {
  .image-container {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}

.profile-image {
  width: 12rem;
  height: 12rem;
  border-radius: 50%;
  object-fit: cover;
  border: 4px solid white;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
}

@media (min-width: 768px) {
  .profile-image {
    width: 20rem;
    height: 20rem;
  }
}

@media (max-width: 480px) {
  .profile-image {
    width: 10rem;
    height: 10rem;
  }
}

.profile-image:hover {
  transform: scale(1.05);
}

/* Section Styles */
.skills-section {
  padding: 3rem 0;
  background: var(--color-background-soft);
}

@media (min-width: 768px) {
  .skills-section {
    padding: 5rem 0;
  }
}

.contact-section {
  padding: 3rem 0;
  background: var(--color-background);
}

@media (min-width: 768px) {
  .contact-section {
    padding: 5rem 0;
  }
}

.experience-section {
  padding: 3rem 0;
  background: var(--color-background-mute);
}

@media (min-width: 768px) {
  .experience-section {
    padding: 5rem 0;
  }
}

.section-header {
  text-align: center;
  margin-bottom: 3rem;
}

.section-title {
  font-size: clamp(1.8rem, 3vw, 2.5rem);
  font-weight: 700;
  margin-bottom: 1rem;
  color: var(--color-heading);
}

.section-description {
  font-size: 1.125rem;
  color: var(--color-text);
  max-width: 42rem;
  margin: 0 auto;
  line-height: 1.6;
}

/* Footer */
.footer {
  padding: 3rem 0;
  background: var(--color-background-mute);
  border-top: 1px solid var(--color-border);
}

.footer-content {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  align-items: center;
  text-align: center;
}

@media (min-width: 768px) {
  .footer-content {
    flex-direction: row;
    justify-content: space-between;
    text-align: left;
  }
}

.footer-brand {
  flex: 1;
}

.footer-logo {
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--color-heading);
  margin-bottom: 0.5rem;
}

.footer-tagline {
  color: var(--color-text);
  font-size: 0.875rem;
}

.footer-social {
  display: flex;
  gap: 1.5rem;
}

.footer-social-link {
  color: var(--color-text);
  transition: all 0.3s ease;
}

.footer-social-link:hover {
  color: #165DFF;
  transform: translateY(-2px);
}

.footer-bottom {
  margin-top: 2rem;
  padding-top: 2rem;
  border-top: 1px solid var(--color-border);
  text-align: center;
  color: var(--color-text);
  font-size: 0.875rem;
}
</style>

