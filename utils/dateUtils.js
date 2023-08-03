export function formatDate(date) {
  const options = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }

  const formattedDate = date.toLocaleDateString('en-US', options)
  return addDaySuffix(formattedDate)
}

function addDaySuffix(dateString) {
  const day = parseInt(dateString.split(' ')[1], 10)
  const suffix = getDaySuffix(day)
  return dateString.replace(/\b\d+\b/, `${day}${suffix}`)
}

function getDaySuffix(day) {
  if (day >= 11 && day <= 13) {
    return 'th'
  }
  switch (day % 10) {
    case 1:
      return 'st'
    case 2:
      return 'nd'
    case 3:
      return 'rd'
    default:
      return 'th'
  }
}
