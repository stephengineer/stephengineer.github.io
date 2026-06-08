import { useState } from 'react'
import { ideas } from '../data/ideas.js'
import { trackEvent } from '../utils/analytics.js'
import './IdeasSection.css'

const INITIAL_VISIBLE_IDEAS = 4

function getMeta(item) {
  if (item.year) return item.year
  if (item.company) return item.company
  if (item.author) return item.author
  if (item.medium) return item.medium
  return null
}

function TypeIcon({ type }) {
  if (type === 'Paper') {
    return (
      <svg
        width="14"
        height="14"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
        <polyline points="14 2 14 8 20 8"></polyline>
        <line x1="16" y1="13" x2="8" y2="13"></line>
        <line x1="16" y1="17" x2="8" y2="17"></line>
        <polyline points="10 9 9 9 8 9"></polyline>
      </svg>
    )
  }
  if (type === 'Podcast') {
    return (
      <svg
        width="14"
        height="14"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"></path>
        <path d="M19 10v2a7 7 0 0 1-14 0v-2"></path>
        <line x1="12" y1="19" x2="12" y2="23"></line>
        <line x1="8" y1="23" x2="16" y2="23"></line>
      </svg>
    )
  }
  if (type === 'Blog' || type === 'Article') {
    return (
      <svg
        width="14"
        height="14"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
        <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
      </svg>
    )
  }
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <circle cx="12" cy="12" r="10"></circle>
      <line x1="12" y1="16" x2="12" y2="12"></line>
      <line x1="12" y1="8" x2="12.01" y2="8"></line>
    </svg>
  )
}

export default function IdeasSection() {
  const [expandedCategories, setExpandedCategories] = useState({})

  const toggleCategory = (category) => {
    const isExpanded = Boolean(expandedCategories[category])

    trackEvent(isExpanded ? 'ideas_show_fewer_click' : 'ideas_show_more_click', {
      idea_category: category,
    })

    setExpandedCategories((prev) => ({
      ...prev,
      [category]: !prev[category],
    }))
  }

  return (
    <div className="ideas-container">
      <div className="ideas-grid">
        {ideas.map((category) => {
          const isExpanded = Boolean(expandedCategories[category.category])
          const visibleItems = isExpanded
            ? category.items
            : category.items.slice(0, INITIAL_VISIBLE_IDEAS)
          const hiddenCount = category.items.length - visibleItems.length

          return (
            <div key={category.category} className="idea-column">
              <div className="idea-column-header">
                <h3 className="column-title">{category.category}</h3>
                <span className="idea-count">{category.items.length}</span>
              </div>
              <div className="idea-list">
                {visibleItems.map((item) => (
                  <a
                    key={item.id}
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="idea-card"
                    onClick={() =>
                      trackEvent('idea_link_click', {
                        idea_id: item.id,
                        idea_category: category.category,
                        idea_type: item.type,
                        link_text: item.title,
                        link_url: item.url,
                      })
                    }
                  >
                    <div className="idea-header">
                      <span className="idea-type">
                        <TypeIcon type={item.type} />
                        {item.type}
                      </span>
                      {getMeta(item) && (
                        <span className="idea-meta">
                          <span className="meta-dot">•</span>
                          {getMeta(item)}
                        </span>
                      )}
                    </div>
                    <h4 className="idea-title">{item.title}</h4>
                    <p className="idea-takeaway">{item.takeaway}</p>
                    <div className="idea-footer">
                      <span className="read-more">
                        View
                        <svg
                          width="14"
                          height="14"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                        >
                          <line x1="5" y1="12" x2="19" y2="12"></line>
                          <polyline points="12 5 19 12 12 19"></polyline>
                        </svg>
                      </span>
                    </div>
                  </a>
                ))}
              </div>
              {category.items.length > INITIAL_VISIBLE_IDEAS && (
                <button
                  type="button"
                  className="ideas-toggle"
                  onClick={() => toggleCategory(category.category)}
                  aria-expanded={isExpanded}
                >
                  {isExpanded ? 'Show fewer' : `Show ${hiddenCount} more`}
                </button>
              )}
            </div>
          )
        })}
      </div>
    </div>
  )
}
