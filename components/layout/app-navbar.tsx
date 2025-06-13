"use client"

import Link from "next/link"
import Image from "next/image"
import { Input } from "@/components/ui/input"
import { SidebarTrigger } from "@/components/ui/sidebar"
import { Search, X } from "lucide-react"
import { useState, useMemo, useRef, useEffect } from "react"
import { localSearchableContent } from "@/lib/searchable-content"
import { searchContent, extractSearchSnippet } from "@/lib/search-engine"
import { Command, CommandEmpty, CommandGroup, CommandItem, CommandList } from "@/components/ui/command"
import { useRouter } from "next/navigation"
import { useOnClickOutside } from "@/hooks/use-click-outside"

export function AppNavbar() {
  const [searchQuery, setSearchQuery] = useState("")
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const [imageError, setImageError] = useState(false)
  const searchRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)
  const router = useRouter()

  // Close search dropdown when clicking outside
  useOnClickOutside(searchRef, () => {
    if (isSearchOpen) setIsSearchOpen(false)
  })

  // Enhanced search with better relevance scoring and content search
  const searchResults = useMemo(() => {
    if (!searchQuery.trim() || !isSearchOpen) return []

    try {
      // Use our enhanced search engine
      return searchContent(localSearchableContent, searchQuery, 10)
    } catch (error) {
      console.error("Search error:", error)
      return []
    }
  }, [searchQuery, isSearchOpen])

  // Group search results by category
  const groupedResults = useMemo(() => {
    const groups: Record<string, typeof searchResults> = {}

    searchResults.forEach((item) => {
      if (!item) return // Skip undefined items

      // Create category groups
      const category = item.category?.includes(">")
        ? "Navigation"
        : item.category === "Main Navigation"
          ? "Main Menu"
          : item.category || "Other"

      if (!groups[category]) {
        groups[category] = []
      }

      groups[category].push(item)
    })

    return groups
  }, [searchResults])

  const handleSelectSearchResult = (href: string) => {
    if (!href) return

    if (href.startsWith("http")) {
      window.open(href, "_blank")
    } else {
      router.push(href)
    }
    setSearchQuery("")
    setIsSearchOpen(false)
  }

  // Clear search and focus input
  const handleClearSearch = () => {
    setSearchQuery("")
    if (inputRef.current) {
      inputRef.current.focus()
    }
  }

  // Handle keyboard shortcuts
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Focus search with Ctrl+K or Cmd+K
      if ((e.ctrlKey || e.metaKey) && e.key === "k") {
        e.preventDefault()
        if (inputRef.current) {
          inputRef.current.focus()
          setIsSearchOpen(true)
        }
      }

      // Close search with Escape
      if (e.key === "Escape" && isSearchOpen) {
        setIsSearchOpen(false)
        inputRef.current?.blur()
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [isSearchOpen])

  // Close dropdown when route changes
  useEffect(() => {
    const handleRouteChange = () => {
      setIsSearchOpen(false)
      setSearchQuery("")
    }

    window.addEventListener("popstate", handleRouteChange)
    return () => window.removeEventListener("popstate", handleRouteChange)
  }, [])

  return (
    <header className="sticky top-0 z-30 flex h-16 items-center gap-4 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 px-4 md:px-6">
      <div className="md:hidden">
        <SidebarTrigger />
      </div>

      {/* Left side empty */}
      <div className="hidden md:flex items-center gap-2" />

      {/* Centered search with increased width */}
      <div className="flex flex-1 items-center justify-center">
        <div ref={searchRef} className="relative w-full max-w-2xl">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            ref={inputRef}
            type="search"
            placeholder="Search Sirius... (Ctrl+K)"
            className="pl-8 pr-8 w-full rounded-full focus-visible:ring-secondary"
            value={searchQuery}
            onChange={(e) => {
              setSearchQuery(e.target.value)
              setIsSearchOpen(true)
            }}
            onFocus={() => setIsSearchOpen(true)}
            onKeyDown={(e) => {
              if (e.key === "Escape") {
                setIsSearchOpen(false)
                inputRef.current?.blur()
              }
            }}
            aria-expanded={isSearchOpen}
            aria-haspopup="listbox"
            aria-controls="search-results"
          />
          {searchQuery && (
            <button
              onClick={handleClearSearch}
              className="absolute right-2.5 top-2.5 h-5 w-5 rounded-full bg-muted/80 flex items-center justify-center hover:bg-muted"
              aria-label="Clear search"
            >
              <X className="h-3 w-3 text-muted-foreground" />
              <span className="sr-only">Clear search</span>
            </button>
          )}

          {isSearchOpen && searchQuery && (
            <div
              className="absolute z-50 w-full mt-2 bg-background rounded-md border shadow-lg overflow-hidden"
              id="search-results"
              role="listbox"
            >
              <Command className="rounded-lg border shadow-md">
                <CommandList className="max-h-[60vh] overflow-auto">
                  {Object.keys(groupedResults).length === 0 ? (
                    <CommandEmpty>No results found for "{searchQuery}"</CommandEmpty>
                  ) : (
                    <>
                      {Object.entries(groupedResults).map(([category, items]) => (
                        <CommandGroup key={category} heading={category}>
                          {items.map((item) => {
                            if (!item) return null

                            // Extract a snippet that includes the search term
                            const snippet = item.content
                              ? extractSearchSnippet(item.content, searchQuery)
                              : item.description || ""

                            return (
                              <CommandItem
                                key={item.id}
                                onSelect={() => handleSelectSearchResult(item.href)}
                                className="cursor-pointer py-2"
                                value={`${item.title}-${item.id}`}
                              >
                                <div className="flex flex-col gap-1 w-full">
                                  <div className="flex items-center justify-between">
                                    <span className="font-medium text-sm">{item.title}</span>
                                    <span className="text-xs text-muted-foreground bg-muted px-1.5 py-0.5 rounded">
                                      {category}
                                    </span>
                                  </div>

                                  {snippet && <p className="text-xs text-muted-foreground line-clamp-2">{snippet}</p>}

                                  <span className="text-xs text-primary truncate">{item.href}</span>
                                </div>
                              </CommandItem>
                            )
                          })}
                        </CommandGroup>
                      ))}
                    </>
                  )}
                </CommandList>

                <div className="border-t px-2 py-2 text-xs text-muted-foreground flex items-center justify-between">
                  <div>
                    <span>Press </span>
                    <kbd className="pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium">
                      ↑
                    </kbd>
                    <span> </span>
                    <kbd className="pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium">
                      ↓
                    </kbd>
                    <span> to navigate</span>
                  </div>
                  <div>
                    <kbd className="pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium">
                      esc
                    </kbd>
                    <span> to close</span>
                  </div>
                </div>
              </Command>
            </div>
          )}
        </div>
      </div>

      {/* Sirius Payroll logo on the right - Using a local fallback image */}
      <div className="flex items-center ml-auto">
                  {
            <Image
              src="/Payroll365.png" // Use a local image instead of external URL
              alt="Sirius Payroll 365"
              width={150}
              height={50}
              className="h-10 w-auto"
              onError={() => setImageError(true)}
              priority
            />
          }
              </div>
    </header>
  )
}
