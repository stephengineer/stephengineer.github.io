import { research } from '../data/research.js'
import BaseCard from './BaseCard.jsx'
import './ResearchSection.css'

export default function ResearchSection() {
  return (
    <div className="research-container">
      <BaseCard padding="large" className="research-card">
        <p className="research-intro">{research.intro}</p>

        <div className="interests-wrapper">
          <h3 className="interests-label">Primary interests include:</h3>
          <ul className="interests-list">
            {research.interests.map((item, index) => (
              <li key={index} className="interest-item">
                <span className="bullet">•</span>
                <span className="interest-text">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <p className="research-closing">{research.closing}</p>
      </BaseCard>
    </div>
  )
}
