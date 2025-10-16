'use client'

export const GA_MEASUREMENT_ID = 'G-QM42Y2GB9K'

// send custom events
export function trackEvent({ action, category, label, value }) {
  if (!window.gtag) return
  window.gtag('event', action, {
    event_category: category,
    event_label: label,
    value,
  })
}
