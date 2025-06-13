import {
  LayoutDashboard,
  Users,
  FileText,
  LifeBuoy,
  Phone,
  type LucideIcon,
  Building,
  UserCircle,
  Settings2,
  DollarSign,
  CalendarDays,
  Repeat,
  ShieldCheck,
  BookUser,
  Landmark,
  CloudUpload,
  Clock,
  CalendarOff,
  Layers,
  Mail,
  RotateCcw,
  FileCog,
  Info,
  FileSliders,
  UsersRound,
  ShieldQuestion,
  CloudCog,
  PlayCircle,
  BarChart3,
  BookOpen,
  Compass,
  Rocket,
  Download,
  Key
} from "lucide-react"

export interface NavItem {
  title: string
  href: string
  icon: LucideIcon
  label?: string
  items?: NavItem[]
  keywords?: string[] // For better searchability
}

export const sidebarNavItems: NavItem[] = [
   {
    title: "Introduction",
    href: "/introduction",
    icon: BookOpen, // Changed to BookOpen - represents documentation/guide
    keywords: ["introduction", "guide", "overview"],
    items: [
      {
        title: "Overview",
        href: "/introduction/overview",
        icon: Compass, // Changed to Compass - represents navigation/overview
        keywords: ["overview", "summary", "introduction"],
      },
    ],
  },
  {
    title: "Getting Started",
    href: "/getting-started",
    icon: Rocket, // Changed to Rocket - represents launch/starting point
    keywords: ["configuration", "initial setup"],
    items: [
      {
        title: "Installation",
        href: "/getting-started/installation",
        icon: Download, // Changed from Settings2 to Download - more intuitive for installation
        keywords: ["main settings", "core payroll config"],
      },
      {
        title: "Initial Configuration",
        href: "/getting-started/configuration",
        icon: Settings2,
        keywords: ["setup", "activation"],
      },
      {
        title: "Activation & Licensing",
        href: "/getting-started/activation-licensing",
        icon: Key, // Changed from DollarSign to Key - better represents activation/licensing
        keywords: ["earnings", "deductions", "basic pay", "bonus", "allowance"],
      },
    ],
  },
   {
    title: "Payroll Setup",
    href: "/payroll-setup",
    icon: FileSliders,
    keywords: ["configuration", "company payroll", "initial setup"],
    items: [
      {
        title: "General Payroll Setup",
        href: "/payroll-setup/general",
        icon: Settings2,
        keywords: ["main settings", "core payroll config"],
      },
      {
        title: "Pay Element Setup",
        href: "/payroll-setup/pay-elements",
        icon: DollarSign,
        keywords: ["earnings", "deductions", "basic pay", "bonus", "allowance"],
      },
      {
        title: "Payroll Fiscal Year",
        href: "/payroll-setup/payroll-fiscal-year",
        icon: CalendarDays,
        keywords: ["tax year", "financial year"],
      },
      {
        title: "Payroll Frequency",
        href: "/payroll-setup/payroll-frequency",
        icon: Clock,
        keywords: ["pay cycle", "weekly", "monthly", "payment schedule"],
      },
      {
        title: "Recurring Adj. Class",
        href: "/payroll-setup/recurring-adj-class",
        icon: Repeat,
        keywords: ["deduction types", "court orders", "child support"],
      },
    ],
  },
  {
    title: "Pension Setup",
    href: "/pension-setup",
    icon: ShieldQuestion,
    keywords: ["retirement", "contributions", "pension schemes"],
    items: [
      {
        title: "Pension Sets",
        href: "/pension-setup/pension-sets",
        icon: ShieldCheck,
        keywords: ["pension plans", "earning types", "qualifying earnings"],
      },
      {
        title: "Pension Enrollment",
        href: "/pension-setup/pension-enrollment",
        icon: UserCircle, // Or UserCheck
        keywords: ["auto-enrollment", "hmrc guidelines", "eligibility"],
      },
    ],
  },
  {
    title: "Employees",
    href: "/employees",
    icon: UsersRound,
    keywords: ["staff", "personnel", "workforce management"],
    items: [
      {
        title: "Manage Employees", // Combines Search/Create/Delete
        href: "/employees/manage-employees",
        icon: Users,
        keywords: ["employee list", "add new employee", "edit employee"],
      },
      {
        title: "Student Loan",
        href: "/employees/student-loan", // Conceptually, this would be part of an employee's record
        icon: BookUser,
        keywords: ["loan plans", "pgl", "slp1"],
      },
      {
        title: "Employee Elements",
        href: "/employees/employee-elements", // Part of an employee's record
        icon: DollarSign,
        keywords: ["payroll details", "deductions", "benefits in kind"],
      },
      {
        title: "Bank Accounts",
        href: "/employees/bank-accounts", // Part of an employee's record
        icon: Landmark,
        keywords: ["payment details", "employee bank"],
      },
      {
        title: "HMRC Updates-Employee",
        href: "/employees/hmrc-updates-employee", // Part of an employee's record or a general log
        icon: CloudUpload,
        keywords: ["tax code changes", "p6", "p9", "rti"],
      },
    ],
  },
  {
    title: "HMRC Integration",
    href: "/hmrc-integration",
    icon: CloudCog,
    keywords: ["tax office", "government reporting", "fps", "eps"],
    items: [
      {
        title: "General HMRC Setup", // Main page for this section
        href: "/hmrc-integration/general-hmrc-setup",
        icon: CloudCog,
        keywords: ["gateway id", "password", "employer details"],
      },
      {
        title: "Single Company Setup",
        href: "/hmrc-integration/single-company-setup",
        icon: Building,
        keywords: ["one company hmrc", "standalone"],
      },
      {
        title: "Multi-Company Setup",
        href: "/hmrc-integration/multi-company-setup",
        icon: Building, // Could use a different icon like 'Network' or 'Share2'
        keywords: ["group companies", "multiple payrolls"],
      },
    ],
  },
  {
    title: "Processing",
    href: "/processing",
    icon: PlayCircle,
    keywords: ["payroll run", "pay cycle", "execution"],
    items: [
      {
        title: "Timesheets",
        href: "/processing/timesheets",
        icon: Clock,
        keywords: ["work hours", "time tracking", "flexible rate", "fixed rate"],
      },
      {
        title: "Statutory Leave",
        href: "/processing/statutory-leave",
        icon: CalendarOff,
        keywords: ["sickness", "maternity", "paternity", "entitlement"],
      },
      {
        title: "Pay Adjustments",
        href: "/processing/pay-adjustments",
        icon: DollarSign,
        keywords: ["salary changes", "expenses", "holiday pay"],
      },
      {
        title: "Recurring Adjustments",
        href: "/processing/recurring-adjustments",
        icon: Repeat,
        keywords: ["ongoing deductions", "court orders", "advances"],
      },
      {
        title: "Payroll Batches",
        href: "/processing/payroll-batches",
        icon: Layers,
        keywords: ["batch processing", "net pay calculation", "payslips"],
      },
    ],
  },
  {
    title: "Payroll Reporting", // Distinct from general "Reports"
    href: "/payroll-reporting",
    icon: BarChart3,
    keywords: ["batch reports", "post-processing", "payslip generation"],
    items: [
      {
        title: "Before Posting Reports",
        href: "/payroll-reporting/before-posting-reports",
        icon: FileText,
        keywords: ["draft payslip", "bacs draft", "pre-payroll summary"],
      },
      {
        title: "After Posting Reports",
        href: "/payroll-reporting/after-posting-reports",
        icon: FileText,
        keywords: ["final payslip", "p45", "pension report", "bacs final"],
      },
      {
        title: "Email Functions",
        href: "/payroll-reporting/email-functions",
        icon: Mail,
        keywords: ["send payslips", "email p45"],
      },
      {
        title: "Reversal Functions",
        href: "/payroll-reporting/reversal-functions",
        icon: RotateCcw,
        keywords: ["undo payroll", "correct errors", "reset p45"],
      },
    ],
  },
  {
    title: "Timesheet Setup", // Specific setup pages for Timesheets
    href: "/timesheet-setup",
    icon: FileCog,
    keywords: ["time tracking configuration", "rate setup"],
    items: [
      {
        title: "Flexible Rate Setup",
        href: "/timesheet-setup/flexible-rate-setup",
        icon: Settings2,
        keywords: ["dynamic pay rate", "excel import"],
      },
      {
        title: "Fixed Rate Setup",
        href: "/timesheet-setup/fixed-rate-setup",
        icon: Settings2,
        keywords: ["constant pay rate", "work sites"],
      },
    ],
  },
  {
    title: "General Reports", // The "Reports" section from page 10 of PDF
    href: "/reports",
    icon: FileText, // Re-using, or a more generic report icon
    keywords: ["p45", "p60", "payslips general", "payroll summary general"],
  },
  {
    title: "FAQs",
    href: "/help-support",
    icon: LifeBuoy,
    keywords: ["documentation", "faq", "assistance", "guidance"],
  },
  {
    title: "Contact Us",
    href: "/contact",
    icon: Phone,
    keywords: ["support", "sales", "inquiries", "phone", "email"],
  },
  {
    title: "About Sirius",
    href: "/about",
    icon: Info,
    keywords: ["company information", "dogma group", "vat", "address"],
  },
]
