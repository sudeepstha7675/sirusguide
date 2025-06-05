"use client"

import { Card, CardContent, CardHeader, CardDescription, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Plus, Search, Edit, Trash2, Users, Eye, BookUser, Landmark, CloudUpload } from "lucide-react"
import { useState, useCallback, useMemo } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { type SearchableItem } from "@/lib/searchable-content"
import { useDebounce } from "@/hooks/use-debounce"
import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "@/components/ui/command"

export default function EmployeesPage() {
  const [open, setOpen] = useState(false)
  const [globalSearch, setGlobalSearch] = useState("")
  const [tableSearch, setTableSearch] = useState("")
  const debouncedGlobalSearch = useDebounce(globalSearch, 300)
  const debouncedTableSearch = useDebounce(tableSearch, 300)
  const router = useRouter()

  const employees = [
    {
      id: "EMP001",
      name: "John Smith",
      position: "Software Engineer",
      department: "IT",
      status: "Active",
      startDate: "2023-01-15",
      salary: "£45,000",
    },
    {
      id: "EMP002",
      name: "Sarah Johnson",
      position: "HR Manager",
      department: "Human Resources",
      status: "Active",
      startDate: "2022-03-10",
      salary: "£52,000",
    },
    {
      id: "EMP003",
      name: "Michael Brown",
      position: "Accountant",
      department: "Finance",
      status: "Active",
      startDate: "2023-06-01",
      salary: "£38,000",
    },
    {
      id: "EMP004",
      name: "Emma Wilson",
      position: "Marketing Specialist",
      department: "Marketing",
      status: "On Leave",
      startDate: "2022-11-20",
      salary: "£35,000",
    },
    {
      id: "EMP005",
      name: "David Lee",
      position: "Sales Manager",
      department: "Sales",
      status: "Active",
      startDate: "2021-08-15",
      salary: "£48,000",
    },
  ]

  const quickActions = [
    {
      title: "Student Loan Management",
      description: "Manage student loan plans (PGL, SLP1, SLP2, SLP4)",
      href: "/employees/student-loan",
      icon: BookUser,
      color: "bg-sirius-blue",
    },
    {
      title: "Employee Elements",
      description: "Configure payroll elements, deductions, and benefits",
      href: "/employees/elements",
      icon: Users,
      color: "bg-sirius-orange",
    },
    {
      title: "Bank Accounts",
      description: "Manage employee banking details and payment preferences",
      href: "/employees/bank-accounts",
      icon: Landmark,
      color: "bg-sirius-purple",
    },
    {
      title: "HMRC Updates",
      description: "View tax code changes and HMRC document updates",
      href: "/employees/hmrc-updates",
      icon: CloudUpload,
      color: "bg-sirius-green",
    },
  ]

  const handleSelect = useCallback((callback: () => void) => {
    setOpen(false)
    callback()
  }, [])

  // Table filtered employees
  const filteredEmployees = useMemo(() => {
    if (!debouncedTableSearch) return employees
    
    const searchTerm = debouncedTableSearch.toLowerCase()
    return employees.filter((emp) => 
      emp.name.toLowerCase().includes(searchTerm) ||
      emp.position.toLowerCase().includes(searchTerm) ||
      emp.department.toLowerCase().includes(searchTerm) ||
      emp.status.toLowerCase().includes(searchTerm)
    )
  }, [employees, debouncedTableSearch])

  // Global search results for command palette
  const searchResults = useMemo(() => {
    if (!debouncedGlobalSearch) return []
    
    const searchTerm = debouncedGlobalSearch.toLowerCase()
    return [...employees, ...quickActions].filter(item => {
      if ('name' in item) { // Employee
        return (
          item.name.toLowerCase().includes(searchTerm) ||
          item.position.toLowerCase().includes(searchTerm) ||
          item.department.toLowerCase().includes(searchTerm) ||
          item.status.toLowerCase().includes(searchTerm)
        )
      } else { // Quick Action
        return (
          item.title.toLowerCase().includes(searchTerm) ||
          item.description.toLowerCase().includes(searchTerm)
        )
      }
    }).slice(0, 10) // Limit to 10 results
  }, [employees, quickActions, debouncedGlobalSearch])

  // Function to get status badge color
  const getStatusColor = (status: string) => {
    switch (status) {
      case "Active":
        return "bg-sirius-green text-white"
      case "On Leave":
        return "bg-sirius-orange text-white"
      case "Inactive":
        return "bg-gray-500 text-white"
      default:
        return "bg-gray-500 text-white"
    }
  }

  // Handle search selection
  const handleSearchSelection = (href: string) => {
    router.push(href)
  }

  return (
    <div className="container mx-auto py-8 px-4 md:px-6">
      {/* Search Dialog */}
      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput
          placeholder="Type a command or search..."
          value={globalSearch}
          onValueChange={setGlobalSearch}
        />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup heading="Quick Actions">
            {quickActions.map((action) => (
              <CommandItem
                key={action.href}
                onSelect={() => handleSelect(() => router.push(action.href))}
              >
                <action.icon className="mr-2 h-4 w-4" />
                {action.title}
                <span className="ml-2 text-sm text-muted-foreground">
                  {action.description}
                </span>
              </CommandItem>
            ))}
          </CommandGroup>
          <CommandSeparator />
          <CommandGroup heading="Employees">
            {searchResults
              .filter((item): item is typeof employees[0] => 'name' in item)
              .map((emp) => (
                <CommandItem
                  key={emp.id}
                  onSelect={() =>
                    handleSelect(() => router.push(`/employees/manage-employees?id=${emp.id}`))
                  }
                >
                  <Users className="mr-2 h-4 w-4" />
                  {emp.name}
                  <span className="ml-2 text-sm text-muted-foreground">
                    {emp.position}
                  </span>
                </CommandItem>
              ))}
          </CommandGroup>
        </CommandList>
      </CommandDialog>

      {/* Main Content */}
      <div className="mb-8">
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-sirius-blue rounded-lg flex items-center justify-center">
              <Users className="h-6 w-6 text-white" />
            </div>
            <div>
              <h1 className="text-4xl font-bold text-primary">Employee Management</h1>
              <p className="text-muted-foreground">
                Manage employee details, payroll information, and employment records
              </p>
            </div>
          </div>
          <Button
            className="bg-sirius-blue hover:bg-sirius-blue-dark"
            onClick={() => setOpen(true)}
          >
            <Search className="h-4 w-4 mr-2" />
            Search
          </Button>
        </div>
      </div>

      {/* Statistics Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <Card className="bg-gradient-to-r from-sirius-blue to-sirius-blue-dark text-white">
          <CardContent className="p-6">
            <div className="text-2xl font-bold">{employees.length}</div>
            <div className="text-sm opacity-90">Total Employees</div>
          </CardContent>
        </Card>
        <Card className="bg-gradient-to-r from-sirius-green to-sirius-green-dark text-white">
          <CardContent className="p-6">
            <div className="text-2xl font-bold">{employees.filter((e) => e.status === "Active").length}</div>
            <div className="text-sm opacity-90">Active Employees</div>
          </CardContent>
        </Card>
        <Card className="bg-gradient-to-r from-sirius-orange to-sirius-orange-dark text-white">
          <CardContent className="p-6">
            <div className="text-2xl font-bold">{employees.filter((e) => e.status === "On Leave").length}</div>
            <div className="text-sm opacity-90">On Leave</div>
          </CardContent>
        </Card>
        <Card className="bg-gradient-to-r from-sirius-purple to-sirius-purple-dark text-white">
          <CardContent className="p-6">
            <div className="text-2xl font-bold">{new Set(employees.map((e) => e.department)).size}</div>
            <div className="text-sm opacity-90">Departments</div>
          </CardContent>
        </Card>
      </div>

      {/* Quick Actions */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-primary">Quick Actions</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {quickActions.map((action) => (
            <Link key={action.title} href={action.href}>
              <Card className="h-full hover:shadow-lg transition-all duration-300 hover:scale-105 cursor-pointer group">
                <CardContent className="p-6">
                  <div className={`w-10 h-10 rounded-lg ${action.color} flex items-center justify-center mb-3`}>
                    <action.icon className="h-5 w-5 text-white" />
                  </div>
                  <h3 className="font-semibold text-sm mb-2 group-hover:text-primary transition-colors">
                    {action.title}
                  </h3>
                  <p className="text-xs text-muted-foreground">{action.description}</p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>

      {/* Statistics Cards */}

      {/* Employee List */}
      <Card>
        <CardHeader>
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <div>
              <CardTitle className="text-2xl">Employee Directory</CardTitle>
              <CardDescription>Search, create, edit, and manage employee records</CardDescription>
            </div>
            <Button className="bg-sirius-blue hover:bg-sirius-blue-dark">
              <Plus className="h-4 w-4 mr-2" />
              Add New Employee
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-between space-x-2 mb-6">
            <div className="flex-1 max-w-sm">
              <Command className="border rounded-md">
                <CommandInput
                  placeholder="Filter employees..."
                  value={tableSearch}
                  onValueChange={setTableSearch}
                />
              </Command>
            </div>
          </div>

          <div className="rounded-md border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Employee ID</TableHead>
                  <TableHead>Name</TableHead>
                  <TableHead>Position</TableHead>
                  <TableHead>Department</TableHead>
                  <TableHead>Start Date</TableHead>
                  <TableHead>Salary</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredEmployees.map((employee) => (
                  <TableRow key={employee.id}>
                    <TableCell className="font-mono text-sm">{employee.id}</TableCell>
                    <TableCell className="font-medium">{employee.name}</TableCell>
                    <TableCell>{employee.position}</TableCell>
                    <TableCell>{employee.department}</TableCell>
                    <TableCell>{employee.startDate}</TableCell>
                    <TableCell className="font-medium">{employee.salary}</TableCell>
                    <TableCell>
                      <Badge className={getStatusColor(employee.status)}>{employee.status}</Badge>
                    </TableCell>
                    <TableCell className="text-right">
                      <div className="flex justify-end space-x-2">
                        <Button variant="outline" size="sm">
                          <Eye className="h-4 w-4" />
                        </Button>
                        <Button variant="outline" size="sm">
                          <Edit className="h-4 w-4" />
                        </Button>
                        <Button variant="outline" size="sm" className="text-destructive hover:text-destructive">
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
