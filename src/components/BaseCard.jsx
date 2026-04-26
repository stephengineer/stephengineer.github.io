import './BaseCard.css'

export default function BaseCard({ children, hoverable = true, padding = 'default', glass = true, className = '' }) {
  const classes = [
    'card',
    hoverable ? 'card--hoverable' : '',
    glass ? 'card--glass' : '',
    `card--${padding}`,
    className,
  ]
    .filter(Boolean)
    .join(' ')

  return <div className={classes}>{children}</div>
}
