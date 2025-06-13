import type { SearchableItem } from "./searchable-content"

// Simple relevance scoring for search results
export function scoreSearchResult(item: SearchableItem, query: string): number {
  const queryLower = query.toLowerCase()
  const queryTerms = queryLower.split(/\s+/).filter((term) => term.length > 1)
  let score = 0

  // Title match (highest weight)
  if (item.title.toLowerCase().includes(queryLower)) {
    score += 100
    // Exact title match is even better
    if (item.title.toLowerCase() === queryLower) {
      score += 50
    }
  }

  // Check for title matches with individual terms
  queryTerms.forEach((term) => {
    if (item.title.toLowerCase().includes(term)) {
      score += 30
    }
  })

  // Category match
  if (item.category.toLowerCase().includes(queryLower)) {
    score += 40
  }

  // Description match
  if (item.description?.toLowerCase().includes(queryLower)) {
    score += 30
  }

  // Keyword match
  if (item.keywords?.some((keyword) => keyword.toLowerCase().includes(queryLower))) {
    score += 60
  }

  // Content match (lowest weight but still important)
  if (item.content?.toLowerCase().includes(queryLower)) {
    score += 20

    // Count occurrences in content for additional relevance
    const contentMatches = (item.content.toLowerCase().match(new RegExp(queryLower, "g")) || []).length
    score += Math.min(contentMatches * 2, 20) // Cap at 20 additional points
  }

  // Check for content matches with individual terms
  if (item.content) {
    queryTerms.forEach((term) => {
      if (item.content?.toLowerCase().includes(term)) {
        score += 5
      }
    })
  }

  return score
}

// Search function that returns results with relevance scores
export function searchContent(items: SearchableItem[], query: string, maxResults = 10): SearchableItem[] {
  if (!query.trim()) return []

  const queryLower = query.toLowerCase()

  // Score all items
  const scoredResults = items
    .map((item) => ({
      item,
      score: scoreSearchResult(item, queryLower),
    }))
    .filter((result) => result.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, maxResults)

  return scoredResults.map((result) => result.item)
}

// Extract a snippet of text around the search term for better context
export function extractSearchSnippet(content: string, query: string, maxLength = 150): string {
  if (!content) return ""

  const queryLower = query.toLowerCase()
  const contentLower = content.toLowerCase()
  const index = contentLower.indexOf(queryLower)

  if (index === -1) return content.substring(0, maxLength) + "..."

  // Calculate start and end positions for the snippet
  const snippetStart = Math.max(0, index - 60)
  const snippetEnd = Math.min(content.length, index + queryLower.length + 60)

  // Create the snippet
  let snippet = content.substring(snippetStart, snippetEnd)

  // Add ellipsis if we're not at the beginning or end
  if (snippetStart > 0) snippet = "..." + snippet
  if (snippetEnd < content.length) snippet = snippet + "..."

  return snippet
}
