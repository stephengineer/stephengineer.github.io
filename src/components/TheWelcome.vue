<script setup>
import WelcomeItem from './WelcomeItem.vue'
import DocumentationIcon from './icons/IconDocumentation.vue'
import ToolingIcon from './icons/IconTooling.vue'
import EcosystemIcon from './icons/IconEcosystem.vue'
import CommunityIcon from './icons/IconCommunity.vue'
import SupportIcon from './icons/IconSupport.vue'
</script>

<template>
  <section class="welcome-section">
    <div class="container">
      <h2 class="section-title">Connect With Me</h2>
      <div class="links-grid">
        <WelcomeItem>
          <template #icon>
            <DocumentationIcon />
          </template>
          <template #heading>GitHub</template>
          <p>Explore my projects and open source contributions</p>
          <a href="https://github.com/stephengineer" target="_blank" rel="noopener" class="link-button">
            View Profile
          </a>
        </WelcomeItem>

        <WelcomeItem>
          <template #icon>
            <EcosystemIcon />
          </template>
          <template #heading>Twitter</template>
          <p>Follow my latest thoughts and AI insights</p>
          <a href="https://x.com/stephengineers" target="_blank" rel="noopener" class="link-button">
            Follow Me
          </a>
        </WelcomeItem>

        <WelcomeItem>
          <template #icon>
            <ToolingIcon />
          </template>
          <template #heading>LinkedIn</template>
          <p>Connect with me professionally</p>
          <a href="https://www.linkedin.com/in/stephengineer" target="_blank" rel="noopener" class="link-button">
            Connect
          </a>
        </WelcomeItem>

        <WelcomeItem>
          <template #icon>
            <CommunityIcon />
          </template>
          <template #heading>Contact</template>
          <p>Get in touch for collaborations</p>
          <a href="mailto:zhongqi1112@gmail.com" target="_blank" rel="noopener" class="link-button">
            Send Email
          </a>
        </WelcomeItem>

        <WelcomeItem>
          <template #icon>
            <SupportIcon />
          </template>
          <template #heading>Support</template>
          <p>Support my research and development work</p>
          <a href="https://www.buymeacoffee.com/stephengineer" target="_blank" rel="noopener" class="link-button">
            Buy Coffee
          </a>
        </WelcomeItem>
      </div>
    </div>
  </section>
</template>

<style scoped>
.welcome-section {
  padding: 4rem 0;
  background: var(--color-background);
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}

.section-title {
  text-align: center;
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 3rem;
  color: var(--color-heading);
  position: relative;
}

.section-title::after {
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

.links-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 3rem;
}

.link-button {
  display: inline-block;
  margin-top: 1rem;
  padding: 0.75rem 1.5rem;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  text-decoration: none;
  border-radius: 25px;
  font-weight: 600;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(102, 126, 234, 0.3);
}

.link-button:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(102, 126, 234, 0.4);
}

@media (max-width: 768px) {
  .welcome-section {
    padding: 3rem 0;
  }
  
  .section-title {
    font-size: 2rem;
    margin-bottom: 2rem;
  }
  
  .links-grid {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
}
</style>
