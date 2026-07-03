/**
 * Format a USD price value with appropriate precision.
 */
export function formatPrice(price) {
  if (price >= 1) {
    return price.toLocaleString('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    })
  }
  return price.toLocaleString('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 4,
    maximumFractionDigits: 4,
  })
}

/**
 * Format a percentage change value.
 */
export function formatChange(change) {
  if (change === null || change === undefined) return '0.00'
  return Math.abs(change).toFixed(2)
}

/**
 * Truncate a hash string for display.
 */
export function truncateHash(hash, chars = 8) {
  if (!hash) return '...'
  if (hash.length <= chars * 2) return hash
  return `${hash.slice(0, chars)}...${hash.slice(-chars)}`
}

/**
 * Format a date for display.
 */
export function formatTimestamp(date) {
  return new Intl.DateTimeFormat('en-US', {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: true,
  }).format(date)
}
