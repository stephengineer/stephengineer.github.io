function cleanParams(params) {
  return Object.fromEntries(
    Object.entries(params).filter(
      ([, value]) => value !== undefined && value !== null && value !== ''
    )
  )
}

export function trackEvent(eventName, params = {}) {
  if (typeof window === 'undefined' || typeof window.gtag !== 'function') {
    return
  }

  window.gtag(
    'event',
    eventName,
    cleanParams({
      event_category: 'engagement',
      transport_type: 'beacon',
      ...params,
    })
  )
}
