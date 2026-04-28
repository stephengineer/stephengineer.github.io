import { Helmet } from 'react-helmet-async'
import SkillsSection from '../components/SkillsSection.jsx'
import ProjectsSection from '../components/ProjectsSection.jsx'
import ResearchSection from '../components/ResearchSection.jsx'
import IdeasSection from '../components/IdeasSection.jsx'
import ContactForm from '../components/ContactForm.jsx'
import ExperienceSection from '../components/ExperienceSection.jsx'
import EducationSection from '../components/EducationSection.jsx'
import SocialLinks from '../components/SocialLinks.jsx'
import { siteConfig } from '../data/siteConfig.js'
import profileImg from '../assets/profile.jpeg'
import './Home.css'

export default function Home() {
  return (
    <>
      <Helmet>
        <title>{siteConfig.seo.title}</title>
        <meta name="description" content={siteConfig.seo.description} />
        <meta name="keywords" content={siteConfig.seo.keywords} />
        <meta property="og:title" content={siteConfig.seo.title} />
        <meta property="og:description" content={siteConfig.seo.description} />
        <meta property="og:image" content={siteConfig.seo.image} />
        <meta property="og:url" content={siteConfig.url} />
        <meta name="twitter:card" content={siteConfig.seo.twitterCard} />
        <meta name="twitter:title" content={siteConfig.seo.title} />
        <meta name="twitter:description" content={siteConfig.seo.description} />
        <meta name="twitter:image" content={siteConfig.seo.image} />
      </Helmet>

      <main className="home" role="main">
        {/* Hero Section */}
        <section id="about" className="hero-section" aria-label="About Stephen Wang">
          <div className="container">
            <div className="hero-content">
              <div className="hero-image-wrapper">
                <img
                  alt="Stephen Wang - ML Research Scientist specializing in LLM Training and Agentic AI Systems"
                  className="hero-avatar"
                  src={profileImg}
                  loading="eager"
                  fetchPriority="high"
                />
              </div>

              <div className="hero-text">
                <div className="hero-badge">ML Research Scientist</div>
                <h1 className="hero-name">Stephen Wang</h1>
                <p className="hero-tagline">
                  Building intelligent systems that work in the real world
                </p>
                <p className="hero-description">
                  I focus on generative models, post-training alignment, and agentic AI systems. I
                  build and fine-tune language models, design efficient training pipelines, and turn
                  research ideas into production-ready intelligent systems.
                </p>
              </div>

              <div className="hero-tags">
                <span className="hero-tag">LLM Training</span>
                <span className="hero-tag">Post-Training Alignment</span>
                <span className="hero-tag">Agentic Systems</span>
                <span className="hero-tag">RAG Architectures</span>
              </div>

              <div className="hero-actions">
                <SocialLinks />
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="skills-section" aria-label="Technical Expertise">
          <div className="container">
            <div className="section-header">
              <h2 className="section-title">Technical Expertise</h2>
              <p className="section-description">
                I enjoy working at the intersection of research and deployment — turning foundation
                models into reliable, scalable intelligent systems.
              </p>
            </div>
            <SkillsSection />
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="experience-section" aria-label="Work Experience">
          <div className="container">
            <div className="section-header">
              <h2 className="section-title">Work Experience</h2>
              <p className="section-description">
                My career has focused on turning machine learning research into reliable, real-world
                AI systems — combining deep technical rigor with practical deployment.
              </p>
            </div>
            <ExperienceSection />
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="projects-section" aria-label="Selected Projects">
          <div className="container">
            <div className="section-header">
              <h2 className="section-title">Selected Projects</h2>
              <p className="section-description">
                Technical projects demonstrating end-to-end capabilities in LLM training, RAG
                systems, and multi-agent architectures.
              </p>
            </div>
            <ProjectsSection />
          </div>
        </section>

        {/* Research Section */}
        <section id="research" className="research-section" aria-label="Research Interests">
          <div className="container">
            <div className="section-header">
              <h2 className="section-title">Research Interests</h2>
            </div>
            <ResearchSection />
          </div>
        </section>

        {/* Education Section */}
        <section id="education" className="education-section" aria-label="Education">
          <div className="container">
            <div className="section-header">
              <h2 className="section-title">Education</h2>
              <p className="section-description">
                Academic foundation in computer science and applied mathematics, supporting my work
                in generative models, training systems, and AI research.
              </p>
            </div>
            <EducationSection />
          </div>
        </section>

        {/* Ideas Section */}
        <section id="ideas" className="ideas-section" aria-label="Ideas I'm Exploring">
          <div className="container">
            <div className="section-header">
              <h2 className="section-title">Ideas I&#39;m Exploring</h2>
              <p className="section-description">
                Articles, talks, and conversations that shape how I think about AI systems,
                alignment, and real-world deployment.
              </p>
            </div>
            <IdeasSection />
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="contact-section" aria-label="Contact">
          <div className="container">
            <div className="section-header">
              <h2 className="section-title">Get In Touch</h2>
              <p className="section-description">
                Interested in collaborating on AI research, agentic systems, or applied ML? I&#39;m
                open to conversations around research collaboration, engineering roles, and AI
                product development.
              </p>
            </div>
            <ContactForm />
          </div>
        </section>

        {/* Footer */}
        <footer className="footer" role="contentinfo">
          <div className="footer-container">
            <div className="footer-content">
              <div className="footer-brand">
                <span className="footer-logo">Stephen Wang</span>
                <span className="footer-separator">·</span>
                <span className="footer-tagline">ML Research Scientist</span>
              </div>
              <SocialLinks variant="footer" size={18} />
            </div>
            <div className="footer-bottom">
              <p>&copy; 2026 Stephen Wang</p>
            </div>
          </div>
        </footer>
      </main>
    </>
  )
}
