<script setup>
import { useHead } from '@unhead/vue'
import SkillsSection from '../components/SkillsSection.vue'
import ProjectsSection from '../components/ProjectsSection.vue'
import ResearchSection from '../components/ResearchSection.vue'
import IdeasSection from '../components/IdeasSection.vue'
import ContactForm from '../components/ContactForm.vue'
import ExperienceSection from '../components/ExperienceSection.vue'
import EducationSection from '../components/EducationSection.vue'
import SocialLinks from '../components/SocialLinks.vue'
import { siteConfig } from '../data/siteConfig'

useHead({
  title: siteConfig.seo.title,
  meta: [
    { name: 'description', content: siteConfig.seo.description },
    { name: 'keywords', content: siteConfig.seo.keywords },
    { property: 'og:title', content: siteConfig.seo.title },
    { property: 'og:description', content: siteConfig.seo.description },
  ],
})
</script>

<template>
  <div class="home">
    <!-- Hero Section -->
    <section id="about" class="hero-section">
      <div class="container">
        <div class="hero-content">
          <!-- Profile Image -->
          <div class="hero-image-wrapper">
            <img alt="Stephen Wang" class="hero-avatar" src="../assets/profile.jpeg" />
          </div>

          <!-- Hero Text -->
          <div class="hero-text">
            <div class="hero-badge">ML Research Scientist</div>
            <h1 class="hero-name">Stephen Wang</h1>
            <p class="hero-tagline">
              Building intelligent systems that work in the real world
            </p>
            <p class="hero-description">
              I focus on generative models, post-training alignment, and agentic AI systems.
              I build and fine-tune language models, design efficient training pipelines,
              and turn research ideas into production-ready intelligent systems.
            </p>
          </div>

          <!-- Focus Tags -->
          <div class="hero-tags">
            <span class="hero-tag">LLM Training</span>
            <span class="hero-tag">Post-Training Alignment</span>
            <span class="hero-tag">Agentic Systems</span>
            <span class="hero-tag">RAG Architectures</span>
          </div>

          <!-- Social + CTA -->
          <div class="hero-actions">
            <SocialLinks />
            <a
              href="https://www.buymeacoffee.com/stephengineer"
              target="_blank"
              rel="noopener"
              class="btn-primary"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M2 21h18v-2H2v2zm1-3h16l-1-14H4l-1 14zm2-2h12l.5-7H4.5L4 16zm8-9c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-2.2 0-4-1.8-4-4s1.8-4 4-4 4 1.8 4 4-1.8 4-4 4z"/>
              </svg>
              Buy Me a Coffee
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- Skills Section -->
    <section id="skills" class="skills-section">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">Technical Expertise</h2>
          <p class="section-description">
            I enjoy working at the intersection of research and deployment — 
            turning foundation models into reliable, scalable intelligent systems.
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
            My career has focused on turning machine learning research into reliable, real-world AI
            systems — combining deep technical rigor with practical deployment.
          </p>
        </div>

        <ExperienceSection />
      </div>
    </section>

    <!-- Projects Section -->
    <section id="projects" class="projects-section">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">Selected Projects</h2>
          <p class="section-description">
            Technical projects demonstrating end-to-end capabilities in LLM training, RAG systems,
            and multi-agent architectures.
          </p>
        </div>

        <ProjectsSection />
      </div>
    </section>

    <!-- Research Section -->
    <section id="research" class="research-section">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">Research Interests</h2>
        </div>

        <ResearchSection />
      </div>
    </section>

    <!-- Education Section -->
    <section id="education" class="education-section">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">Education</h2>
          <p class="section-description">
            Academic foundation in computer science and applied mathematics, 
            supporting my work in generative models, training systems, and AI research.
          </p>
        </div>

        <EducationSection />
      </div>
    </section>

    <!-- Ideas Section -->
    <section id="ideas" class="ideas-section">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">Ideas I’m Exploring</h2>
          <p class="section-description">
            Articles, talks, and conversations that shape how I think about AI systems, alignment,
            and real-world deployment.
          </p>
        </div>

        <IdeasSection />
      </div>
    </section>

    <!-- Contact Section -->
    <section id="contact" class="contact-section">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">Get In Touch</h2>
          <p class="section-description">
            Interested in collaborating on AI research, agentic systems, or applied ML?
            I’m open to conversations around research collaboration, engineering roles, and AI product development.
          </p>
        </div>

        <ContactForm />
      </div>
    </section>

    <!-- Footer -->
    <footer class="footer">
      <div class="footer-container">
        <div class="footer-content">
          <div class="footer-brand">
            <span class="footer-logo">Stephen Wang</span>
            <span class="footer-separator">·</span>
            <span class="footer-tagline">ML Research Scientist</span>
          </div>

          <SocialLinks variant="footer" :size="18" />
        </div>

        <div class="footer-bottom">
          <p>&copy; 2026 Stephen Wang</p>
        </div>
      </div>
    </footer>
  </div>
</template>

<style scoped>
/* Import all styles from App.vue - we'll keep them here for now */
.home {
  min-height: 100vh;
  background: var(--color-background);
  font-family: 'Space Grotesk', system-ui, sans-serif;
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

/* Hero Section - Professional Researcher */
.hero-section {
  padding: 8rem 0 5rem;
  background: var(--vt-c-white);
  position: relative;
}

@media (min-width: 768px) {
  .hero-section {
    padding: 10rem 0 6rem;
  }
}

.hero-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  max-width: 720px;
  margin: 0 auto;
  position: relative;
  z-index: 1;
}

/* Profile Image */
.hero-image-wrapper {
  margin-bottom: 1.5rem;
}

.hero-avatar {
  width: 140px;
  height: 140px;
  border-radius: 50%;
  object-fit: cover;
  border: 3px solid var(--vt-c-white);
  box-shadow: var(--shadow-lg);
  user-select: none;
  -webkit-user-select: none;
  -webkit-user-drag: none;
  pointer-events: none;
}

@media (min-width: 768px) {
  .hero-avatar {
    width: 160px;
    height: 160px;
  }
}

/* Hero Text */
.hero-text {
  margin-bottom: 1.5rem;
}

.hero-badge {
  display: inline-block;
  font-size: 0.8125rem;
  font-weight: 500;
  color: var(--color-primary);
  background: var(--color-primary-alpha-10);
  padding: 0.375rem 0.875rem;
  border-radius: var(--radius-full);
  margin-bottom: 1rem;
}

.hero-name {
  font-size: clamp(2.25rem, 5vw, 3rem);
  font-weight: 700;
  color: var(--vt-c-navy);
  line-height: 1.15;
  letter-spacing: -0.02em;
  margin: 0 0 0.75rem 0;
}

.hero-tagline {
  font-size: 1.125rem;
  font-weight: 500;
  color: var(--vt-c-text-light-2);
  margin: 0 0 1rem 0;
  line-height: 1.5;
}

@media (min-width: 768px) {
  .hero-tagline {
    font-size: 1.25rem;
  }
}

.hero-description {
  font-size: 0.9375rem;
  color: var(--vt-c-text-light-2);
  line-height: 1.7;
  margin: 0;
  max-width: 520px;
}

@media (min-width: 768px) {
  .hero-description {
    font-size: 1rem;
  }
}

/* Focus Tags */
.hero-tags {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 0.5rem;
  margin-bottom: 2rem;
}

.hero-tag {
  font-size: 0.8125rem;
  font-weight: 500;
  color: var(--vt-c-text-light-2);
  background: var(--vt-c-white-soft);
  padding: 0.375rem 0.875rem;
  border-radius: var(--radius-full);
  border: 1px solid var(--vt-c-divider-light-1);
  transition: all 0.2s ease;
}

.hero-tag:hover {
  color: var(--color-primary);
  border-color: var(--color-primary-alpha-30);
  background: var(--color-primary-alpha-10);
}

/* Hero Actions */
.hero-actions {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
}

@media (min-width: 480px) {
  .hero-actions {
    flex-direction: row;
    gap: 2rem;
  }
}

/* Text Primary */
.text-primary {
  background: linear-gradient(135deg, #165dff 0%, #36cfc9 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.btn-primary {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 0.75rem 1.25rem;
  background: var(--color-primary);
  color: white;
  border-radius: 0.5rem;
  font-weight: 500;
  font-size: 0.875rem;
  text-decoration: none;
  transition: all 0.2s ease;
  cursor: pointer;
}

.btn-primary:hover {
  background: var(--color-primary-dark);
  transform: translateY(-1px);
  box-shadow: var(--shadow-md);
}

.btn-primary:active {
  transform: translateY(0);
  transition-duration: 0.1s;
}

.social-links {
  display: flex;
  gap: 1rem;
  justify-content: center;
}

.social-link {
  color: var(--vt-c-text-light-2);
  transition: color 0.2s ease;
}

.social-link:hover {
  color: var(--vt-c-navy);
}

/* Section Styles - Apple-inspired */
.skills-section {
  padding: 5rem 0;
  background: var(--vt-c-white);
  position: relative;
}

@media (min-width: 768px) {
  .skills-section {
    padding: 6rem 0;
  }
}

.contact-section {
  padding: 5rem 0;
  background: var(--vt-c-white);
  position: relative;
}

@media (min-width: 768px) {
  .contact-section {
    padding: 6rem 0;
  }
}

.experience-section {
  padding: 5rem 0;
  background: var(--vt-c-white-soft);
  position: relative;
}

@media (min-width: 768px) {
  .experience-section {
    padding: 6rem 0;
  }
}

.education-section {
  padding: 5rem 0;
  background: var(--vt-c-white);
  position: relative;
}

@media (min-width: 768px) {
  .education-section {
    padding: 6rem 0;
  }
}

.projects-section {
  padding: 5rem 0;
  background: var(--vt-c-white-soft);
  position: relative;
}

@media (min-width: 768px) {
  .projects-section {
    padding: 6rem 0;
  }
}

.research-section {
  padding: 5rem 0;
  background: var(--vt-c-white);
  position: relative;
}

@media (min-width: 768px) {
  .research-section {
    padding: 6rem 0;
  }
}

.ideas-section {
  padding: 5rem 0;
  background: var(--vt-c-white-soft);
  position: relative;
}

@media (min-width: 768px) {
  .ideas-section {
    padding: 6rem 0;
  }
}

.section-header {
  text-align: center;
  margin-bottom: 3rem;
}

.section-title {
  font-size: clamp(1.75rem, 3.5vw, 2.25rem);
  font-weight: 700;
  margin-bottom: 0.75rem;
  color: var(--vt-c-navy);
  letter-spacing: -0.02em;
}

.section-description {
  font-size: 1rem;
  color: var(--vt-c-text-light-2);
  max-width: 38rem;
  margin: 0 auto;
  line-height: 1.7;
}

.podcast-link-container {
  display: flex;
  justify-content: center;
  align-items: center;
}

.podcast-link-btn {
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
  padding: 1rem 2rem;
  background: linear-gradient(135deg, #165dff 0%, #0e4acc 100%);
  color: white;
  text-decoration: none;
  border-radius: 0.5rem;
  font-weight: 600;
  font-size: 1rem;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(22, 93, 255, 0.3);
}

.podcast-link-btn:hover {
  background: linear-gradient(135deg, #0e4acc 0%, #0a3bb8 100%);
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(22, 93, 255, 0.4);
}

.podcast-link-btn svg {
  transition: transform 0.3s ease;
}

.podcast-link-btn:hover svg {
  transform: translateX(4px);
}

@media (max-width: 480px) {
  .podcast-link-btn {
    padding: 0.875rem 1.5rem;
    font-size: 0.9375rem;
  }
}

/* Footer - matches navbar style */
.footer {
  padding: 2rem 0;
  background: rgba(255, 255, 255, 0.95);
  border-top: 1px solid var(--vt-c-divider-light-2);
}

.footer-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
}

@media (min-width: 768px) {
  .footer-container {
    padding: 0 2rem;
  }
}

.footer-content {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
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
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.footer-logo {
  font-size: 1.125rem;
  font-weight: 700;
  color: var(--vt-c-navy);
  letter-spacing: -0.02em;
}

.footer-separator {
  color: var(--vt-c-divider-light-1);
  font-weight: 300;
}

.footer-tagline {
  color: var(--vt-c-text-light-2);
  font-size: 0.875rem;
  font-weight: 500;
}

.footer-bottom {
  margin-top: 1.5rem;
  padding-top: 1.5rem;
  border-top: 1px solid var(--vt-c-divider-light-2);
  text-align: center;
}

.footer-bottom p {
  color: var(--vt-c-text-light-2);
  font-size: 0.8125rem;
  margin: 0;
}
</style>
