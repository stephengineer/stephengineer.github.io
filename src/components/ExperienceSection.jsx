import { experiences } from '../data/experience.js'
import './ExperienceSection.css'

export default function ExperienceSection() {
  return (
    <div className="experience-container">
      <div className="experience-grid">
        {experiences.map((exp) => (
          <div key={exp.id} className="experience-card">
            <div className="experience-header">
              <div className="date-badge">{exp.date}</div>
              <h3 className="experience-title">{exp.title}</h3>
              <p className="experience-company">{exp.company}</p>
            </div>
            <div className="experience-body">
              {exp.summary && <p className="experience-summary">{exp.summary}</p>}
              <ul className="experience-achievements">
                {exp.achievements.map((item, i) => (
                  <li key={i} className="achievement-item">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
