import { indexAllContent } from "../lib/content-indexer"
import { updateDynamicContent } from "../lib/searchable-content"
import fs from "fs"
import path from "path"

async function main() {
  console.log("Indexing content for search...")

  try {
    // Index all content from pages
    const indexedContent = await indexAllContent()
    console.log(`Indexed ${indexedContent.length} pages`)

    // Update the dynamic content
    updateDynamicContent(indexedContent)

    // In a real implementation, we would save this to a JSON file
    // that gets imported at build time
    const outputPath = path.join(process.cwd(), "lib", "indexed-content.json")
    fs.writeFileSync(outputPath, JSON.stringify(indexedContent, null, 2))

    console.log(`Content index saved to ${outputPath}`)
  } catch (error) {
    console.error("Error indexing content:", error)
    process.exit(1)
  }
}

main()
