import { projects } from '../data/projects.js'
import BaseCard from './BaseCard.jsx'
import './ProjectsSection.css'

export default function ProjectsSection() {
  return (
    <div className="projects-container">
      <div className="projects-grid">
        {projects.map((project) => (
          <BaseCard key={project.id} className="project-card" padding="large">
            <div className="project-header">
              <div className="title-row">
                <h3 className="project-title">{project.title}</h3>
                {project.badge && <span className="project-badge">{project.badge}</span>}
              </div>
              <p className="project-subtitle">{project.subtitle}</p>
            </div>

            <div className="project-content">
              <h4 className="section-label">Core Contributions:</h4>
              <ul className="contribution-list">
                {project.contributions.map((item, i) => (
                  <li key={i} className="contribution-item">
                    <span className="bullet-icon">
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                      >
                        <path d="M5 12h14M12 5l7 7-7 7" />
                      </svg>
                    </span>
                    <span className="contribution-text">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="project-footer">
              <div className="tags-container">
                {project.tags.map((tag) => (
                  <span key={tag} className="project-tag">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </BaseCard>
        ))}
      </div>
    </div>
  )
}
