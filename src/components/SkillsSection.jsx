import { skills } from '../data/skills.js'
import './SkillsSection.css'

const categoryIcons = {
  'Model Training & Alignment': `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/></svg>`,
  'Efficient Inference & Systems': `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>`,
  'Distributed Training & Infrastructure': `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8"/><path d="M12 17v4"/><path d="M7 8h2"/><path d="M7 11h2"/><path d="M15 8h2"/><path d="M15 11h2"/></svg>`,
  'Agentic & Reasoning Systems': `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="12" cy="12" r="3"/><path d="M12 2v4"/><path d="M12 18v4"/><path d="M4.93 4.93l2.83 2.83"/><path d="M16.24 16.24l2.83 2.83"/><path d="M2 12h4"/><path d="M18 12h4"/><path d="M4.93 19.07l2.83-2.83"/><path d="M16.24 7.76l2.83-2.83"/></svg>`,
}

export default function SkillsSection() {
  return (
    <div className="skills-container">
      <div className="skills-bento">
        {skills.map((skillGroup) => (
          <div key={skillGroup.category} className="skill-card">
            <div className="skill-header">
              <div
                className="skill-icon"
                dangerouslySetInnerHTML={{ __html: categoryIcons[skillGroup.category] }}
              />
              <h3 className="skill-title">{skillGroup.category}</h3>
            </div>
            <ul className="skill-list">
              {skillGroup.items.map((skill) => (
                <li key={skill} className="skill-item">
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  )
}
