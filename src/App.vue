<script setup>
import HelloWorld from './components/HelloWorld.vue'
import TheWelcome from './components/TheWelcome.vue'
import SkillsSection from './components/SkillsSection.vue'
import ProjectsSection from './components/ProjectsSection.vue'
import ThemeToggle from './components/ThemeToggle.vue'
</script>

<template>
  <div class="app">
    <ThemeToggle />
    
    <!-- Hero Section -->
    <section class="hero">
      <div class="hero-content">
        <div class="profile-section">
          <div class="profile-image-container">
            <img alt="Stephen Wang" class="profile-image" src="./assets/profile.jpeg" />
            <div class="profile-badge">AI Researcher</div>
          </div>
        </div>
        
        <div class="hero-text">
          <HelloWorld msg="Stephen Wang" />
        </div>
      </div>
    </section>

    <!-- Main Content -->
    <main class="main-content">
      <TheWelcome />
      <SkillsSection />
      <ProjectsSection />
    </main>
    
    <!-- Footer -->
    <footer class="footer">
      <p>&copy; 2024 Stephen Wang. All rights reserved.</p>
    </footer>
  </div>
</template>

<style scoped>
.app {
  min-height: 100vh;
  background: linear-gradient(135deg, var(--color-background) 0%, var(--color-background-soft) 100%);
}

/* Hero Section */
.hero {
  padding: 4rem 2rem;
  text-align: center;
  background: linear-gradient(135deg, var(--color-background) 0%, var(--color-background-soft) 100%);
  position: relative;
  overflow: hidden;
}

.hero::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: radial-gradient(circle at 20% 80%, rgba(120, 119, 198, 0.1) 0%, transparent 50%),
              radial-gradient(circle at 80% 20%, rgba(255, 119, 198, 0.1) 0%, transparent 50%);
  pointer-events: none;
}

.hero-content {
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr;
  gap: 3rem;
  align-items: center;
  position: relative;
  z-index: 1;
}

.profile-section {
  display: flex;
  justify-content: center;
}

.profile-image-container {
  position: relative;
  display: inline-block;
}

.profile-image {
  width: 200px;
  height: 200px;
  border-radius: 50%;
  object-fit: cover;
  border: 4px solid var(--color-border);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
}

.profile-image:hover {
  transform: scale(1.05);
  box-shadow: 0 25px 50px rgba(0, 0, 0, 0.15);
}

.profile-badge {
  position: absolute;
  bottom: -10px;
  left: 50%;
  transform: translateX(-50%);
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 0.5rem 1.5rem;
  border-radius: 25px;
  font-size: 0.9rem;
  font-weight: 600;
  box-shadow: 0 10px 20px rgba(102, 126, 234, 0.3);
}

.hero-text {
  text-align: center;
}

/* Main Content */
.main-content {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem 4rem;
}

/* Footer */
.footer {
  background: var(--color-background-mute);
  text-align: center;
  padding: 2rem;
  border-top: 1px solid var(--color-border);
  color: var(--color-text);
  font-size: 0.9rem;
}

/* Responsive Design */
@media (min-width: 768px) {
  .hero {
    padding: 6rem 2rem;
  }
  
  .hero-content {
    grid-template-columns: 1fr 2fr;
    text-align: left;
  }
  
  .hero-text {
    text-align: left;
  }
  
  .profile-image {
    width: 250px;
    height: 250px;
  }
}

@media (min-width: 1024px) {
  .hero {
    padding: 8rem 2rem;
  }
  
  .main-content {
    padding: 0 2rem 6rem;
  }
}
</style>
