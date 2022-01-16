const SLUG_REGEX = /\d{4}-\d{2}-\d{2}-(.*)/

export function extractCleanSlug(slug) {
  const match = SLUG_REGEX.exec(slug)

  if (match) {
    return match[1]
  } else {
    return undefined
  }
}
