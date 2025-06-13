import fs from "fs"
import path from "path"
import { remark } from "remark"
import strip from "strip-markdown"
import type { SearchableItem } from "./searchable-content"

// Function to extract text content from MDX/JSX files
export async function extractTextFromFile(filePath: string): Promise<string> {
  try {
    const content = fs.readFileSync(filePath, "utf8")

    // Extract text from JSX/TSX by removing tags and props
    const textContent = content
      // Remove imports
      .replace(/import\s+.*?from\s+['"].*?['"]/g, "")
      // Remove export statements
      .replace(/export\s+default\s+function.*?\{/g, "")
      // Remove JSX tags
      .replace(/<[^>]*>/g, " ")
      // Remove props and attributes
      .replace(/\{.*?\}/g, " ")
      // Remove extra whitespace
      .replace(/\s+/g, " ")
      .trim()

    // Use remark to further clean markdown-like content
    const processed = await remark().use(strip).process(textContent)

    return String(processed)
  } catch (error) {
    console.error(`Error extracting text from ${filePath}:`, error)
    return ""
  }
}

// Function to recursively scan directories for content files
export async function scanDirectoryForContent(dir: string, baseDir: string = dir): Promise<SearchableItem[]> {
  const items: SearchableItem[] = []
  const files = fs.readdirSync(dir)

  for (const file of files) {
    const filePath = path.join(dir, file)
    const stat = fs.statSync(filePath)

    if (stat.isDirectory()) {
      // Recursively scan subdirectories
      const subDirItems = await scanDirectoryForContent(filePath, baseDir)
      items.push(...subDirItems)
    } else if (file.endsWith(".tsx") || file.endsWith(".jsx") || file.endsWith(".mdx") || file.endsWith(".md")) {
      // Skip component files and focus on page files
      if (file === "layout.tsx" || file === "loading.tsx" || file.startsWith("_") || filePath.includes("components/")) {
        continue
      }

      // Extract route from file path
      const relativePath = filePath.replace(baseDir, "").replace(/\\/g, "/")
      const route = relativePath
        .replace(/\.(tsx|jsx|mdx|md)$/, "")
        .replace(/\/page$/, "")
        .replace(/\/index$/, "")
        .replace(/^\/?app/, "")

      // Extract title from file content
      const content = await extractTextFromFile(filePath)

      // Try to extract a title from the content
      const titleMatch = content.match(/<h1[^>]*>(.*?)<\/h1>|# (.*?)(\r?\n)/)
      const title = titleMatch
        ? titleMatch[1] || titleMatch[2]
        : path.basename(file, path.extname(file)).replace(/-/g, " ")

      // Create a searchable item
      items.push({
        id: route || "/",
        title: title.charAt(0).toUpperCase() + title.slice(1),
        description: content.substring(0, 200) + "...",
        href: route || "/",
        category: "Page Content",
        keywords: [],
        content: content, // Store full content for searching
      })
    }
  }

  return items
}

// Main function to index all content
export async function indexAllContent(): Promise<SearchableItem[]> {
  const appDir = path.join(process.cwd(), "app")
  return await scanDirectoryForContent(appDir)
}
