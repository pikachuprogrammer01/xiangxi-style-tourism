export function formatPrice(price) {
  if (price === 0) return '免费'
  return '¥' + price
}

export function formatDate(dateStr) {
  if (!dateStr) return ''
  const parts = dateStr.split('-')
  return parts.join('年').replace(/(\d{4})年(\d{2})/, '$1年$2月') + '日'
}

export function formatNumber(num) {
  if (num >= 10000) {
    return (num / 10000).toFixed(1) + '万'
  }
  if (num >= 1000) {
    return (num / 1000).toFixed(1) + 'k'
  }
  return num.toString()
}

export function truncateText(text, maxLen = 60) {
  if (!text) return ''
  if (text.length <= maxLen) return text
  return text.slice(0, maxLen) + '…'
}
