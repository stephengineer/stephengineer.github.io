<script setup>
import { ideas } from '../data/ideas'

const getMeta = (item) => {
  if (item.year) return item.year
  if (item.company) return item.company
  if (item.author) return item.author
  if (item.medium) return item.medium
  return null
}
</script>

<template>
  <div class="ideas-container">
    <div class="ideas-grid">
      <div v-for="category in ideas" :key="category.category" class="idea-column">
        <h3 class="column-title">{{ category.category }}</h3>
        <div class="idea-list">
          <a
            v-for="item in category.items"
            :key="item.id"
            :href="item.url"
            target="_blank"
            rel="noopener noreferrer"
            class="idea-card"
          >
            <div class="idea-header">
              <span class="idea-type">
                <svg
                  v-if="item.type === 'Paper'"
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path
                    d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"
                  ></path>
                  <polyline points="14 2 14 8 20 8"></polyline>
                  <line x1="16" y1="13" x2="8" y2="13"></line>
                  <line x1="16" y1="17" x2="8" y2="17"></line>
                  <polyline points="10 9 9 9 8 9"></polyline>
                </svg>
                <svg
                  v-else-if="item.type === 'Podcast'"
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"></path>
                  <path d="M19 10v2a7 7 0 0 1-14 0v-2"></path>
                  <line x1="12" y1="19" x2="12" y2="23"></line>
                  <line x1="8" y1="23" x2="16" y2="23"></line>
                </svg>
                <svg
                  v-else-if="item.type === 'Blog' || item.type === 'Article'"
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
                  <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
                </svg>
                <svg
                  v-else
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <circle cx="12" cy="12" r="10"></circle>
                  <line x1="12" y1="16" x2="12" y2="12"></line>
                  <line x1="12" y1="8" x2="12.01" y2="8"></line>
                </svg>
                {{ item.type }}
              </span>
              <span v-if="getMeta(item)" class="idea-meta">
                <span class="meta-dot">•</span>
                {{ getMeta(item) }}
              </span>
            </div>
            <h4 class="idea-title">{{ item.title }}</h4>
            <p class="idea-takeaway">{{ item.takeaway }}</p>
            <div class="idea-footer">
              <span class="read-more">
                View
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </span>
            </div>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.ideas-container {
  max-width: 1200px;
  margin: 0 auto;
}

.ideas-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: var(--spacing-xl);
}

@media (min-width: 768px) {
  .ideas-grid {
    grid-template-columns: repeat(3, 1fr);
    gap: var(--spacing-lg);
  }
}

.column-title {
  font-size: 1rem;
  font-weight: 600;
  color: var(--color-text);
  margin-bottom: var(--spacing-md);
  padding-bottom: var(--spacing-xs);
  border-bottom: 2px solid var(--color-border);
  text-transform: uppercase;
  letter-spacing: 0.05em;
  opacity: 0.8;
}

.idea-list {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-md);
}

.idea-card {
  display: block;
  background: var(--vt-c-white);
  border-radius: var(--bento-radius);
  padding: var(--spacing-lg);
  text-decoration: none;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  box-shadow: var(--shadow-card);
}

.idea-card:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-card-hover);
}

.idea-card:active {
  transform: translateY(-2px);
  transition-duration: 0.1s;
}

.idea-header {
  margin-bottom: var(--spacing-xs);
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.idea-meta {
  font-size: 0.75rem;
  color: var(--color-text);
  opacity: 0.7;
  font-weight: 500;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.meta-dot {
  opacity: 0.5;
}

.idea-type {
  display: inline-flex;
  align-items: center;
  gap: 0.25rem;
  font-size: 0.75rem;
  font-weight: 600;
  color: var(--color-primary);
  background: var(--color-primary-alpha-10);
  padding: 0.125rem 0.5rem;
  border-radius: var(--radius-full);
}

.idea-title {
  font-size: 1rem;
  font-weight: 600;
  color: var(--color-heading);
  margin: 0 0 0.5rem 0;
  line-height: 1.4;
}

.idea-takeaway {
  font-size: 0.875rem;
  color: var(--color-text);
  opacity: 0.9;
  margin: 0 0 0.75rem 0;
  line-height: 1.5;
}

.idea-footer {
  display: flex;
  justify-content: flex-end;
}

.read-more {
  display: inline-flex;
  align-items: center;
  gap: 0.375rem;
  font-size: 0.8125rem;
  font-weight: 600;
  color: var(--color-text);
  opacity: 0.7;
  transition: all 0.25s ease;
}

.read-more svg {
  transition: transform 0.25s ease;
}

.idea-card:hover .read-more {
  color: var(--color-primary);
  opacity: 1;
}

.idea-card:hover .read-more svg {
  transform: translateX(4px);
}
</style>
