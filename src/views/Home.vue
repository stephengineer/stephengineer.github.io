<script setup>
import { useHead } from '@unhead/vue'
import SkillsSection from '../components/SkillsSection.vue'
import ProjectsSection from '../components/ProjectsSection.vue'
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
          <div class="hero-text">
            <h1 class="hero-title">
              I'm <span class="text-primary">Stephen Wang</span>,<br />
              <span class="hero-subtitle">ML Research Scientist</span>
            </h1>
            <p class="hero-description">
              focused on generative models, post-training alignment, and agentic AI systems. 
              I build and fine-tune language models, design efficient training pipelines, 
              and turn research ideas into intelligent systems that operate reliably in the real world.
            </p>
            <div class="hero-buttons">
              <a
                href="https://www.buymeacoffee.com/stephengineer"
                target="_blank"
                rel="noopener"
                class="btn-primary coffee-btn"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  style="margin-right: 8px"
                >
                  <path
                    d="M2 21h18v-2H2v2zm1-3h16l-1-14H4l-1 14zm2-2h12l.5-7H4.5L4 16zm8-9c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-2.2 0-4-1.8-4-4s1.8-4 4-4 4 1.8 4 4-1.8 4-4 4z"
                  />
                </svg>
                Buy Me a Coffee
              </a>
            </div>
            <SocialLinks />
          </div>

          <div class="hero-image">
            <div class="image-container">
              <img alt="Stephen Wang" class="profile-image" src="../assets/profile.jpeg" />
            </div>
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

    <!-- Podcasts Section - Link Only -->
    <section id="podcasts" class="podcasts-section">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">Recommended Podcasts</h2>
          <p class="section-description">
            A curated list of podcasts I find valuable for staying updated on product development,
            AI research, and the latest trends in technology.
          </p>
        </div>

        <div class="podcast-link-container">
          <router-link to="/podcasts" class="podcast-link-btn">
            <span>View All Podcasts</span>
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
            >
              <path d="M5 12h14"></path>
              <path d="M12 5l7 7-7 7"></path>
            </svg>
          </router-link>
        </div>
      </div>
    </section>

    <!-- Contact Section -->
    <section id="contact" class="contact-section">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">Get In Touch</h2>
          <p class="section-description">
            Interested in collaborating on AI native applications or discussing opportunities? Feel
            free to reach out!
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

          <SocialLinks variant="footer" />
        </div>

        <div class="footer-bottom">
          <p>&copy; 2016-2026 Stephen Wang. All rights reserved.</p>
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
  background:
    radial-gradient(circle at 20% 80%, rgba(22, 93, 255, 0.05) 0%, transparent 50%),
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

.hero-subtitle {
  font-size: 0.75em;
  font-weight: 600;
  display: block;
  margin-top: 0.25rem;
}

@media (max-width: 480px) {
  .hero-subtitle {
    font-size: 0.7em;
  }
}

.text-primary {
  background: linear-gradient(135deg, #165dff 0%, #36cfc9 100%);
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
  background: #165dff;
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
  background: #0e4acc;
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(22, 93, 255, 0.4);
}

.coffee-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #165dff 0%, #0e4acc 100%);
  box-shadow: 0 4px 15px rgba(22, 93, 255, 0.3);
  font-weight: 600;
  letter-spacing: 0.5px;
}

.coffee-btn:hover {
  background: linear-gradient(135deg, #0e4acc 0%, #0a3bb8 100%);
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(22, 93, 255, 0.4);
}

.coffee-btn svg {
  filter: drop-shadow(0 1px 2px rgba(0, 0, 0, 0.1));
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
  color: #165dff;
  transform: translateY(-2px);
}

.hero-image {
  display: flex;
  justify-content: center;
  align-items: center;
}

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

.education-section {
  padding: 3rem 0;
  background: var(--color-background-mute);
}

@media (min-width: 768px) {
  .education-section {
    padding: 5rem 0;
  }
}

.projects-section {
  padding: 3rem 0;
  background: var(--color-background-soft);
}

@media (min-width: 768px) {
  .projects-section {
    padding: 5rem 0;
  }
}

.podcasts-section {
  padding: 3rem 0;
  background: var(--color-background-soft);
}

@media (min-width: 768px) {
  .podcasts-section {
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
  color: #165dff;
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
