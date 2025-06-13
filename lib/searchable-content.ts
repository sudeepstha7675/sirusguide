import { type NavItem, sidebarNavItems } from "./sidebar-nav"

export interface SearchableItem {
  id: string
  title: string
  description?: string
  href: string
  category: string
  keywords?: string[]
  content?: string // Added full content field
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

// Static content for search
const staticSearchContent: SearchableItem[] = [
  ...flattenNavItemsForSearch(sidebarNavItems),
  {
    id: "help-payroll-setup",
    title: "How to set up payroll",
    description: "A guide to configuring payroll settings for your company.",
    href: "/help-support/payroll-setup",
    category: "Help",
    keywords: ["payroll setup", "configure payroll", "company settings"],
    content: `Setting up payroll involves configuring your company details, pay elements, fiscal year, and frequency. 
    Navigate to Setup > Payroll Setups > Payroll Setup. Follow the step-by-step guide in our documentation for 
    comprehensive setup instructions. Make sure to complete all required fields and verify your configuration before 
    proceeding to employee setup.`,
  },
  {
    id: "help-add-employee",
    title: "Adding a new employee",
    description: "Step-by-step instructions for adding a new employee to the system.",
    href: "/help-support/add-employee",
    category: "Help",
    keywords: ["add employee", "new employee", "system instructions"],
    content: `To add a new employee, go to Employees > Employees and click 'Add New Employee'. Fill in the general details, 
    payroll information, HMRC details, and bank account information. Make sure to configure their pay elements and work 
    sites if applicable. For bulk employee imports, use the Data Import functionality under the Tools menu.`,
  },
  {
    id: "contact-sales",
    title: "Contact Sales Team",
    description: "Get in touch with our sales team for demos or enterprise solutions.",
    href: "/contact?topic=sales",
    category: "Contact",
    keywords: ["sales team", "demos", "enterprise solutions"],
    content: `Our sales team is ready to help you with demos, pricing information, and enterprise solutions. 
    Contact us at sales@siriusapp.co.uk or call 01296 328689 to speak with a representative.`,
  },
  {
    id: "hmrc-fps",
    title: "HMRC Full Payment Submission (FPS)",
    description: "Learn about submitting FPS to HMRC.",
    href: "/hmrc-integration/setup", // Link to relevant setup page
    category: "HMRC",
    keywords: ["fps", "full payment submission", "real time information", "rti"],
    content: `The Full Payment Submission (FPS) is a Real Time Information (RTI) submission to HMRC that contains details 
    of payments and deductions made to employees. You must send an FPS on or before the day you pay your employees. 
    SiriusPayroll365 handles this automatically during payroll processing once you've set up your HMRC integration with 
    your Employer Gateway ID and password.`,
  },
  {
    id: "hmrc-eps",
    title: "HMRC Employer Payment Summary (EPS)",
    description: "Learn about submitting EPS to HMRC.",
    href: "/hmrc-integration/setup",
    category: "HMRC",
    keywords: ["eps", "employer payment summary", "nil payment"],
    content: `The Employer Payment Summary (EPS) is used to inform HMRC about any Employment Allowance, Construction Industry 
    Scheme (CIS) deductions suffered, or if you have no employees to pay in a specific period (a nil payment). You should 
    submit an EPS if you're claiming Employment Allowance, if you have CIS deductions to recover, or if you're not paying 
    anyone in a tax month but still need to maintain your HMRC records.`,
  },
  {
    id: "p45-report",
    title: "P45 Form Generation",
    description: "Details on generating and managing P45 forms for leaving employees.",
    href: "/reports", // Or a more specific P45 page if created
    category: "Reports",
    keywords: ["p45", "leaving employee", "tax form"],
    content: `The P45 form is given to employees when they leave your company. It shows how much tax they've paid on their 
    salary so far in the tax year. To generate a P45, navigate to Reports > P45 Forms, select the employee who is leaving, 
    and click 'Generate P45'. You can then print the form or email it directly to the employee. The system will automatically 
    mark the employee as a leaver and update their status in HMRC submissions.`,
  },
  {
    id: "p60-report",
    title: "P60 Form Generation",
    description: "Details on generating P60 forms at year-end.",
    href: "/reports",
    category: "Reports",
    keywords: ["p60", "year end summary", "tax form"],
    content: `The P60 is an end-of-year certificate that summarizes an employee's total pay and deductions for the tax year. 
    You must provide P60s to all employees who are working for you on the last day of the tax year (5 April). To generate P60s, 
    go to Reports > P60 Forms after the tax year has ended but before 31 May. You can generate them individually or in bulk, 
    and either print them or distribute them electronically to your employees.`,
  },
  {
    id: "bacs-payment",
    title: "BACS File Export",
    description: "Exporting BACS files for salary disbursement.",
    href: "/payroll-reporting/after-posting",
    category: "Payroll Processing",
    keywords: ["bacs", "salary payment", "bank transfer"],
    content: `After posting a payroll batch, you can generate a BACS file for salary payments. Navigate to Reports > After Posting Reports > 
    Bank Transfer List. Select the payroll period and click 'Export BACS File'. This will generate a file in the standard BACS format 
    that you can upload to your banking system to process payments. The file includes employee bank details, payment amounts, and 
    reference information.`,
  },
  {
    id: "contact-phone",
    title: "Phone: 01296 328689",
    description: "Contact Sirius App by phone.",
    href: "/contact",
    category: "Contact",
    keywords: ["phone number", "call us"],
    content: `You can reach our support team by phone at 01296 328689. Our support hours are Monday to Friday, 9am to 5pm UK time.`,
  },
  {
    id: "contact-email",
    title: "Email: info@siriusapp.co.uk",
    description: "Contact Sirius App by email.",
    href: "/contact",
    category: "Contact",
    keywords: ["email address", "send email"],
    content: `For general inquiries, you can email us at info@siriusapp.co.uk. For sales inquiries, please use sales@siriusapp.co.uk. 
    For technical support, please use support@siriusapp.co.uk.`,
  },
  {
    id: "contact-address-london",
    title: "Address: 483 Green Lanes, London, N13 4BS",
    description: "Sirius App London office address.",
    href: "/contact", // or /about
    category: "Contact",
    keywords: ["london office", "mailing address"],
    content: `Our London office is located at 483 Green Lanes, London, N13 4BS. If you'd like to visit us, please contact us in advance 
    to schedule an appointment.`,
  },
  {
    id: "company-details-dogma",
    title: "Dogma Group Limited",
    description:
      "Sirius App is a company under the Dogma Group Limited. Registered at 6 Portal Business Park, Suite 3 & 4, Eaton Lane, Tarporley, CW6 9DL. VAT No: 330460638. Company No: 12096627.",
    href: "/about",
    category: "About",
    keywords: ["dogma group", "vat registration", "company number", "tarporley address"],
    content: `Sirius App is a proud company under the Dogma Group Limited. We combine industry expertise with innovative technology to 
    deliver exceptional payroll solutions. Registered at 6 Portal Business Park, Suite 3 & 4, Eaton Lane, Tarporley, CW6 9DL. 
    VAT Registration No: 330460638. Company No: 12096627.`,
  },
]

// This would be populated at build time with indexed content from pages
let dynamicPageContent: SearchableItem[] = []

// In a real implementation, this would be populated at build time
// For now, we'll use the static content
export const localSearchableContent: SearchableItem[] = [...staticSearchContent, ...dynamicPageContent]

// Function to update the dynamic content (would be called during build)
export function updateDynamicContent(items: SearchableItem[]) {
  dynamicPageContent = items
}
