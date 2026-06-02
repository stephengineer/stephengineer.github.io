import { useState } from 'react'
import { projects } from '../data/projects.js'
import BaseCard from './BaseCard.jsx'
import './ProjectsSection.css'

const INITIAL_VISIBLE_PROJECTS = 3

function renderContribution(text) {
  return text.split(/(\*\*[^*]+\*\*)/g).map((part, i) => {
    if (part.startsWith('**') && part.endsWith('**')) {
      return (
        <span key={i} className="contribution-highlight">
          {part.slice(2, -2)}
        </span>
      )
    }
    return part
  })
}

export default function ProjectsSection() {
  const [showAllProjects, setShowAllProjects] = useState(false)
  const visibleProjects = showAllProjects ? projects : projects.slice(0, INITIAL_VISIBLE_PROJECTS)
  const hiddenProjectsCount = projects.length - visibleProjects.length

  return (
    <div className="projects-container">
      <div className="projects-grid">
        {visibleProjects.map((project) => (
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
                    <span className="bullet-icon" aria-hidden="true" />
                    <span className="contribution-text">{renderContribution(item)}</span>
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
              {project.links && project.links.length > 0 && (
                <div className="links-container">
                  {project.links.map((link) => (
                    <a
                      key={link.url}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link"
                    >
                      <svg
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        aria-hidden="true"
                      >
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                        <polyline points="15 3 21 3 21 9" />
                        <line x1="10" y1="14" x2="21" y2="3" />
                      </svg>
                      {link.label}
                    </a>
                  ))}
                </div>
              )}
            </div>
          </BaseCard>
        ))}
      </div>
      {projects.length > INITIAL_VISIBLE_PROJECTS && (
        <button
          type="button"
          className="projects-toggle"
          onClick={() => setShowAllProjects((current) => !current)}
          aria-expanded={showAllProjects}
        >
          {showAllProjects ? 'Show fewer projects' : `Show ${hiddenProjectsCount} more projects`}
        </button>
      )}
    </div>
  )
}
