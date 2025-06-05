"use client"

import Link from "next/link"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { ModeToggle } from "@/components/mode-toggle"
import { SidebarTrigger } from "@/components/ui/sidebar"
import { Bell, Search, UserCircle, Settings, LogOut, LifeBuoy } from "lucide-react"
import { useState, useMemo } from "react"
import { localSearchableContent, type SearchableItem } from "@/lib/searchable-content"
import { Command, CommandEmpty, CommandGroup, CommandItem, CommandList } from "@/components/ui/command"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { useRouter } from "next/navigation"

export function AppNavbar() {
  const [searchQuery, setSearchQuery] = useState("")
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const router = useRouter()

  // Improved search with hierarchy and content search
  const searchResults = useMemo(() => {
    if (!searchQuery.trim()) return []

    const query = searchQuery.toLowerCase()
    
    // First, try to find matches in child items
    let results = localSearchableContent.filter(item => {
      // Check if this is a child item (has a parent category)
      const isChildItem = item.category !== "Main Navigation"
      
      if (!isChildItem) return false

      return (
        item.title.toLowerCase().includes(query) ||
        item.description?.toLowerCase().includes(query) ||
        item.keywords?.some(keyword => keyword?.toLowerCase().includes(query))
      )
    })

    // If no child items found, search in parent items and content
    if (results.length === 0) {
      results = localSearchableContent.filter(item => {
        const isParentItem = item.category === "Main Navigation"
        
        return (
          isParentItem &&
          (item.title.toLowerCase().includes(query) ||
           item.description?.toLowerCase().includes(query) ||
           item.keywords?.some(keyword => keyword?.toLowerCase().includes(query)))
        )
      })
    }

    // Add results from main content search
    const contentResults = localSearchableContent.filter(item => {
      const isContentItem = item.category !== "Main Navigation" && 
                          !item.category.includes(">") // Not a navigation item
      
      return (
        isContentItem && (
          item.title.toLowerCase().includes(query) ||
          item.description?.toLowerCase().includes(query) ||
          item.keywords?.some(keyword => keyword?.toLowerCase().includes(query))
        )
      )
    })

    return [...results, ...contentResults].slice(0, 10)
  }, [searchQuery])

  const handleSelectSearchResult = (href: string) => {
    if (href.startsWith("http")) {
      window.open(href, "_blank")
    } else {
      router.push(href)
    }
    setSearchQuery("")
    setIsSearchOpen(false)
  }

  return (
    <header className="sticky top-0 z-30 flex h-16 items-center gap-4 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 px-4 md:px-6">
      <div className="md:hidden">
        <SidebarTrigger />
      </div>

      <div className="hidden md:flex items-center gap-2">
        <Link href="/" className="flex items-center gap-2">
          <span className="font-semibold text-lg text-primary dark:text-primary-foreground">
            Sirius Payroll 365
          </span>
        </Link>
      </div>

      <div className="flex w-full items-center gap-4 md:ml-auto md:gap-2 lg:gap-4">
        <div className="ml-auto flex-1 sm:flex-initial">
          <div className="relative">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search Sirius..."
              className="pl-8 sm:w-[300px] md:w-[200px] lg:w-[300px] rounded-full focus:ring-secondary"
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value)
                setIsSearchOpen(true)
              }}
              onFocus={() => setIsSearchOpen(true)}
            />
            {searchQuery && (
              <div className="absolute z-50 w-full mt-2 bg-background rounded-md border shadow-lg">
                <Command>
                  <CommandList>
                    {searchResults.length === 0 ? (
                      <CommandEmpty>No results found for "{searchQuery}"</CommandEmpty>
                    ) : (
                      <>
                        {/* Navigation Results */}
                        {searchResults.some(item => item.category.includes(">")) && (
                          <CommandGroup heading="Navigation">
                            {searchResults
                              .filter(item => item.category.includes(">"))
                              .map((item) => (
                                <CommandItem
                                  key={item.id}
                                  onSelect={() => handleSelectSearchResult(item.href)}
                                  className="cursor-pointer"
                                >
                                  <div className="flex flex-col py-1">
                                    <span className="font-medium text-sm">{item.title}</span>
                                    <span className="text-xs text-muted-foreground">
                                      {item.category}
                                    </span>
                                  </div>
                                </CommandItem>
                              ))}
                          </CommandGroup>
                        )}

                        {/* Main Navigation Results */}
                        {searchResults.some(item => item.category === "Main Navigation") && (
                          <CommandGroup heading="Main Menu">
                            {searchResults
                              .filter(item => item.category === "Main Navigation")
                              .map((item) => (
                                <CommandItem
                                  key={item.id}
                                  onSelect={() => handleSelectSearchResult(item.href)}
                                  className="cursor-pointer"
                                >
                                  <div className="flex flex-col py-1">
                                    <span className="font-medium text-sm">{item.title}</span>
                                    {item.description && (
                                      <span className="text-xs text-muted-foreground">
                                        {item.description}
                                      </span>
                                    )}
                                  </div>
                                </CommandItem>
                              ))}
                          </CommandGroup>
                        )}

                        {/* Content Results */}
                        {searchResults.some(item => !item.category.includes(">") && item.category !== "Main Navigation") && (
                          <CommandGroup heading="Related Content">
                            {searchResults
                              .filter(item => !item.category.includes(">") && item.category !== "Main Navigation")
                              .map((item) => (
                                <CommandItem
                                  key={item.id}
                                  onSelect={() => handleSelectSearchResult(item.href)}
                                  className="cursor-pointer"
                                >
                                  <div className="flex flex-col py-1">
                                    <span className="font-medium text-sm">{item.title}</span>
                                    {item.description && (
                                      <span className="text-xs text-muted-foreground">
                                        {item.description}
                                      </span>
                                    )}
                                    <span className="text-xs text-sirius-purple">
                                      {item.category}
                                    </span>
                                  </div>
                                </CommandItem>
                              ))}
                          </CommandGroup>
                        )}
                      </>
                    )}
                  </CommandList>
                </Command>
              </div>
            )}
          </div>
        </div>

        <ModeToggle />
      </div>
    </header>
  )
}
