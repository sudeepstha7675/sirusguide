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
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { ChevronDown, LogOut } from "lucide-react"

export function AppSidebar() {
  const pathname = usePathname()
  const { state, isMobile } = useSidebar()

  const renderNavItems = (items: NavItem[]) => {
    return items.map((item) => {
      const isActive =
        pathname === item.href || (item.href !== "/" && item.href !== "#" && pathname.startsWith(item.href))

      if (item.items && item.items.length > 0) {
        const isParentActive = item.items.some((subItem) => subItem.href !== "#" && pathname.startsWith(subItem.href))

        return (
          <Collapsible key={item.title} defaultOpen={isParentActive} className="group/collapsible">
            <SidebarMenuItem>
              <CollapsibleTrigger asChild>
                <SidebarMenuButton
                  className={cn(
                    "w-full justify-between hover:bg-sidebar-accent dark:hover:bg-sidebar-accent",
                    isActive &&
                      !isParentActive &&
                      "bg-primary text-primary-foreground dark:bg-primary dark:text-primary-foreground font-semibold",
                  )}
                  variant={"ghost"}
                  tooltip={item.title}
                  disabled={item.href === "#"} // Disable trigger if parent href is "#"
                >
                  <div className="flex items-center">
                    <item.icon className="mr-2 h-5 w-5 flex-shrink-0" />
                    <span className={cn("truncate", { "sr-only": state === "collapsed" && !isMobile })}>
                      {item.title}
                    </span>
                  </div>
                  <ChevronDown className="ml-auto h-4 w-4 shrink-0 transition-transform duration-200 group-data-[state=open]/collapsible:rotate-180" />
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
                              "hover:bg-sidebar-accent dark:hover:bg-sidebar-accent",
                              isSubActive &&
                                "bg-primary text-primary-foreground dark:bg-primary dark:text-primary-foreground font-semibold",
                              "w-full justify-start",
                            )}
                            tooltip={subItem.title}
                            disabled={subItem.href === "#"}
                          >
                            <subItem.icon className="mr-2 h-4 w-4 flex-shrink-0" />
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
                "hover:bg-sidebar-accent dark:hover:bg-sidebar-accent",
                isActive &&
                  "bg-primary text-primary-foreground dark:bg-primary dark:text-primary-foreground font-semibold",
                "w-full justify-start",
              )}
              variant={isActive ? "default" : "ghost"}
              tooltip={item.title}
              disabled={item.href === "#"}
            >
              <item.icon className="mr-2 h-5 w-5 flex-shrink-0" />
              <span className={cn("truncate", { "sr-only": state === "collapsed" && !isMobile })}>{item.title}</span>
            </SidebarMenuButton>
          </Link>
        </SidebarMenuItem>
      )
    })
  }

  return (
    <Sidebar collapsible="icon" side="left" className="border-r bg-card print:hidden">
      <SidebarHeader className="p-4 border-b">
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
      <SidebarContent className="p-2">
        <ScrollArea className="h-[calc(100vh-230px)]">
          {" "}
          {/* Adjusted height for new footer content */}
          <SidebarMenu>{renderNavItems(sidebarNavItems)}</SidebarMenu>
        </ScrollArea>
      </SidebarContent>
      <SidebarFooter className="p-4 border-t text-xs text-muted-foreground">
        <div className="flex flex-col gap-3">
          <div
            className={cn("flex items-center gap-2 px-1", {
              "justify-center": state === "collapsed" && !isMobile,
            })}
          >
            <Image src="/dogma.svg" alt="Dogma Group Logo" width={36} height={36} className="rounded-sm" />
            <span className={cn({ "sr-only": state === "collapsed" && !isMobile })}>
              Sirius App by Dogma Group Ltd.
            </span>
          </div>
          <div className={cn("text-center space-y-0.5", { "sr-only": state === "collapsed" && !isMobile })}>
            <p>Reg: 6 Portal Business Park, Eaton Lane, Tarporley, CW6 9DL</p>
            <p>VAT No: 330460638 | Co No: 12096627</p>
            <p>
              <a href="mailto:info@siriusapp.co.uk" className="hover:text-secondary">
                info@siriusapp.co.uk
              </a>{" "}
              |
              <a href="tel:01296328689" className="hover:text-secondary">
                {" "}
                01296 328689
              </a>
            </p>
            <p>
              <a
                href="https://www.siriusapp.co.uk"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-secondary"
              >
                www.siriusapp.co.uk
              </a>
            </p>
          </div>
        </div>
      </SidebarFooter>
    </Sidebar>
  )
}
