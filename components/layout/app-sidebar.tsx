"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"
import Image from "next/image"
import { sidebarNavItems, type NavItem } from "@/lib/sidebar-nav"
import { cn } from "@/lib/utils"
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarFooter,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarMenuSub,
  SidebarMenuSubItem,
  SidebarMenuSubButton,
  useSidebar,
} from "@/components/ui/sidebar"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import { ScrollArea } from "@/components/ui/scroll-area"
import { ChevronDown, Mail, Phone } from 'lucide-react'

export function AppSidebar() {
  const pathname = usePathname()
  const { state, isMobile } = useSidebar()

  const renderNavItems = (items: NavItem[]) => {
    return items.map((item) => {
      const isActive =
        pathname === item.href || (item.href !== "/" && item.href !== "#" && pathname.startsWith(item.href))

      if (item.items && item.items.length > 0) {
        const isParentActive = item.items.some((subItem) => subItem.href !== "#" && pathname.startsWith(subItem.href))
        const isOpen = isParentActive || isActive

        return (
          <Collapsible key={item.title} defaultOpen={isOpen} className="group/collapsible">
            <SidebarMenuItem>
              <CollapsibleTrigger asChild>
                <SidebarMenuButton
                  className={cn(
                    "w-full justify-between",
                    (isActive || isParentActive) && 
                      "bg-primary/10 dark:bg-primary/20 text-primary dark:text-primary border-l-2 border-primary dark:border-primary font-medium"
                  )}
                  tooltip={item.title}
                  disabled={item.href === "#"}
                >
                  <div className="flex items-center">
                    <item.icon className={cn(
                      "mr-2 h-4 w-4 flex-shrink-0",
                      (isActive || isParentActive) && "text-primary dark:text-primary"
                    )} />
                    <span className={cn(
                      "truncate", 
                      { "sr-only": state === "collapsed" && !isMobile }
                    )}>
                      {item.title}
                    </span>
                  </div>
                  <ChevronDown className="ml-auto h-3.5 w-3.5 shrink-0 opacity-70 transition-transform duration-200 group-data-[state=open]/collapsible:rotate-180" />
                </SidebarMenuButton>
              </CollapsibleTrigger>
              <CollapsibleContent>
                <SidebarMenuSub>
                  {item.items.map((subItem) => {
                    const isSubActive = subItem.href !== "#" && pathname.startsWith(subItem.href)
                    return (
                      <SidebarMenuSubItem key={subItem.title}>
                        <Link href={subItem.href === "#" ? pathname : subItem.href} legacyBehavior passHref>
                          <SidebarMenuSubButton
                            isActive={isSubActive}
                            className={cn(
                              "w-full justify-start",
                              isSubActive && "bg-primary/10 dark:bg-primary/20 text-primary dark:text-primary border-l-2 border-primary dark:border-primary font-medium pl-[calc(0.75rem-2px)]",
                              subItem.href === "#" && "pointer-events-none opacity-50"
                            )}
                            title={subItem.title}
                            aria-disabled={subItem.href === "#"}
                          >
                            <subItem.icon className={cn(
                              "mr-2 h-3.5 w-3.5 flex-shrink-0",
                              isSubActive && "text-primary dark:text-primary"
                            )} />
                            <span className={cn("truncate", { "sr-only": state === "collapsed" && !isMobile })}>
                              {subItem.title}
                            </span>
                          </SidebarMenuSubButton>
                        </Link>
                      </SidebarMenuSubItem>
                    )
                  })}
                </SidebarMenuSub>
              </CollapsibleContent>
            </SidebarMenuItem>
          </Collapsible>
        )
      }

      return (
        <SidebarMenuItem key={item.title}>
          <Link href={item.href === "#" ? pathname : item.href} legacyBehavior passHref>
            <SidebarMenuButton
              isActive={isActive}
              className={cn(
                "w-full justify-start",
                isActive && "bg-primary/10 dark:bg-primary/20 text-primary dark:text-primary border-l-2 border-primary dark:border-primary font-medium pl-[calc(0.75rem-2px)]"
              )}
              tooltip={item.title}
              disabled={item.href === "#"}
            >
              <item.icon className={cn(
                "mr-2 h-4 w-4 flex-shrink-0",
                isActive && "text-primary dark:text-primary"
              )} />
              <span className={cn("truncate", { "sr-only": state === "collapsed" && !isMobile })}>{item.title}</span>
            </SidebarMenuButton>
          </Link>
        </SidebarMenuItem>
      )
    })
  }

  return (
    <Sidebar 
      collapsible="icon" 
      side="left" 
      className="border-r print:hidden min-w-[281px] w-[281px]" // Updated width
    >
      {/* Professional Header */}
      <SidebarHeader className="p-5 border-b">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/sirius.svg" 
            alt="SiriusApp Logo"
            width={110}
            height={80}
            className="rounded-sm"
          />
          <span
            className={cn("font-bold text-xl text-primary dark:text-primary-foreground", {
              "sr-only": state === "collapsed" && !isMobile,
            })}
          >
          </span>
        </Link>
      </SidebarHeader>

      {/* Clean Content Layout */}
      <SidebarContent>
        <ScrollArea className="h-[calc(100vh-180px)]">
          <SidebarMenu className="px-2 py-2">
            {renderNavItems(sidebarNavItems)}
          </SidebarMenu>
        </ScrollArea>
      </SidebarContent>

      {/* Professional Footer */}
      <SidebarFooter className="border-t">
        <div className="p-3 space-y-2">
          {/* Company Info */}
          <div className={cn(
            "flex items-center gap-3 p-2 rounded-md",
            { "justify-center": state === "collapsed" && !isMobile }
          )}>
            <div className="w-7 h-7 rounded-md bg-muted flex items-center justify-center">
              <Image
                src="/dogma.svg"
                alt="Dogma Group Logo"
                width={16}
                height={16}
                className="w-4 h-4 object-contain"
              />
            </div>
            <div className={cn("flex flex-col", { "sr-only": state === "collapsed" && !isMobile })}>
              <span className="text-xs font-medium">Dogma Group Ltd</span>
              <span className="text-[11px] text-muted-foreground"></span>
            </div>
          </div>
          
        </div>
      </SidebarFooter>
    </Sidebar>
  )
}

function useState(arg0: number): [any, any] {
  throw new Error("Function not implemented.")
}
