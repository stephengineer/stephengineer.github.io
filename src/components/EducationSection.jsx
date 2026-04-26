import { education } from '../data/education.js'
import './EducationSection.css'

export default function EducationSection() {
  return (
    <div className="education-container">
      <div className="education-grid">
        {education.map((edu) => (
          <div key={edu.id} className="education-card">
            <div className="education-header">
              <div className="education-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 10v6M2 10l10-5 10 5-10 5z"></path>
                  <path d="M6 12v5c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2v-5"></path>
                </svg>
              </div>
              <h3 className="education-school">{edu.school}</h3>
            </div>
            <div className="education-details">
              <p className="education-degree">{edu.degree}</p>
              <p className="education-specialization">{edu.specialization}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
