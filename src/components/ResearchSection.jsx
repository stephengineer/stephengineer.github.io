import { research } from '../data/research.js'
import BaseCard from './BaseCard.jsx'
import './ResearchSection.css'

export default function ResearchSection() {
  return (
    <div className="research-container">
      <p className="research-intro">{research.intro}</p>

      <BaseCard padding="large" className="research-card">
        <div className="interests-wrapper">
          <h3 className="interests-label">Primary interests include:</h3>
          <ul className="interests-list">
            {research.interests.map((item, index) => (
              <li key={index} className="interest-item">
                <span className="bullet" aria-hidden="true" />
                <span className="interest-text">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </BaseCard>

      <p className="research-closing">{research.closing}</p>
    </div>
  )
}
