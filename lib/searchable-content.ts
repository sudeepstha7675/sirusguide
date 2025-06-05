import { type NavItem, sidebarNavItems } from "./sidebar-nav"

export interface SearchableItem {
  id: string
  title: string
  description?: string
  href: string
  category: string
  keywords?: string[]
}

// Flatten sidebarNavItems for searching, including keywords
function flattenNavItemsForSearch(items: NavItem[], parentPath = "", parentTitle = ""): SearchableItem[] {
  let flatList: SearchableItem[] = []
  items.forEach((item) => {
    const currentPath = item.href
    const fullTitle = parentTitle ? `${parentTitle} > ${item.title}` : item.title
    flatList.push({
      id: currentPath,
      title: item.title, // Use item title for display
      description: `Navigate to ${fullTitle}`, // More descriptive
      href: currentPath,
      category: parentTitle || "Main Navigation",
      keywords: item.keywords || [],
    })
    if (item.items) {
      flatList = flatList.concat(flattenNavItemsForSearch(item.items, currentPath, item.title))
    }
  })
  return flatList
}

export const localSearchableContent: SearchableItem[] = [
  ...flattenNavItemsForSearch(sidebarNavItems),
  {
    id: "help-payroll-setup",
    title: "How to set up payroll",
    description: "A guide to configuring payroll settings for your company.",
    href: "/help-support/payroll-setup",
    category: "Help",
    keywords: ["payroll setup", "configure payroll", "company settings"],
  },
  {
    id: "help-add-employee",
    title: "Adding a new employee",
    description: "Step-by-step instructions for adding a new employee to the system.",
    href: "/help-support/add-employee",
    category: "Help",
    keywords: ["add employee", "new employee", "system instructions"],
  },
  {
    id: "contact-sales",
    title: "Contact Sales Team",
    description: "Get in touch with our sales team for demos or enterprise solutions.",
    href: "/contact?topic=sales",
    category: "Contact",
    keywords: ["sales team", "demos", "enterprise solutions"],
  },
  {
    id: "hmrc-fps",
    title: "HMRC Full Payment Submission (FPS)",
    description: "Learn about submitting FPS to HMRC.",
    href: "/hmrc-integration/setup", // Link to relevant setup page
    category: "HMRC",
    keywords: ["fps", "full payment submission", "real time information", "rti"],
  },
  {
    id: "hmrc-eps",
    title: "HMRC Employer Payment Summary (EPS)",
    description: "Learn about submitting EPS to HMRC.",
    href: "/hmrc-integration/setup",
    category: "HMRC",
    keywords: ["eps", "employer payment summary", "nil payment"],
  },
  {
    id: "p45-report",
    title: "P45 Form Generation",
    description: "Details on generating and managing P45 forms for leaving employees.",
    href: "/reports", // Or a more specific P45 page if created
    category: "Reports",
    keywords: ["p45", "leaving employee", "tax form"],
  },
  {
    id: "p60-report",
    title: "P60 Form Generation",
    description: "Details on generating P60 forms at year-end.",
    href: "/reports",
    category: "Reports",
    keywords: ["p60", "year end summary", "tax form"],
  },
  {
    id: "bacs-payment",
    title: "BACS File Export",
    description: "Exporting BACS files for salary disbursement.",
    href: "/payroll-reporting/after-posting",
    category: "Payroll Processing",
    keywords: ["bacs", "salary payment", "bank transfer"],
  },
  {
    id: "contact-phone",
    title: "Phone: 01296 328689",
    description: "Contact Sirius App by phone.",
    href: "/contact",
    category: "Contact",
    keywords: ["phone number", "call us"],
  },
  {
    id: "contact-email",
    title: "Email: info@siriusapp.co.uk",
    description: "Contact Sirius App by email.",
    href: "/contact",
    category: "Contact",
    keywords: ["email address", "send email"],
  },
  {
    id: "contact-address-london",
    title: "Address: 483 Green Lanes, London, N13 4BS",
    description: "Sirius App London office address.",
    href: "/contact", // or /about
    category: "Contact",
    keywords: ["london office", "mailing address"],
  },
  {
    id: "company-details-dogma",
    title: "Dogma Group Limited",
    description:
      "Sirius App is a company under the Dogma Group Limited. Registered at 6 Portal Business Park, Suite 3 & 4, Eaton Lane, Tarporley, CW6 9DL. VAT No: 330460638. Company No: 12096627.",
    href: "/about",
    category: "About",
    keywords: ["dogma group", "vat registration", "company number", "tarporley address"],
  },
]
