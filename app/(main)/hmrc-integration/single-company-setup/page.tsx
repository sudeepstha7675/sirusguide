"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { AlertCircle, Building2, Info, Key, Check } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

export default function SingleCompanySetupPage() {
  const requiredFields = [
    {
      name: "Sender ID",
      description: "Your HMRC Online Services ID",
      format: "ABC123456789",
      required: true,
    },
    {
      name: "Password",
      description: "Your HMRC portal password",
      format: "••••••••••••",
      required: true,
    },
    {
      name: "Tax Office Number",
      description: "3-digit tax office identifier",
      format: "123",
      required: true,
    },
    {
      name: "PAYE Reference",
      description: "Your unique PAYE reference number",
      format: "AB12345",
      required: true,
    },
    {
      name: "Accounts Office Reference",
      description: "13-character HMRC reference",
      format: "123PX00123456",
      required: true,
    },
    {
      name: "Co Tax Reference",
      description: "Company Tax Reference (if applicable)",
      format: "1234567890",
      required: false,
    },
  ]

  return (
    <div className="container mx-auto py-8 px-4 md:px-6">
      <div className="space-y-6">
        {/* Enhanced Header */}
        <div className="flex items-center gap-3 mb-6">
          <div className="relative group">
            <div className="absolute inset-0 bg-primary/30 rounded-lg blur-md transition-all duration-300 group-hover:bg-primary/40 group-hover:blur-lg" />
            <div className="relative w-12 h-12 bg-gradient-to-br from-primary to-primary/80 rounded-lg flex items-center justify-center shadow-lg transform transition-all duration-300 group-hover:scale-105 group-hover:shadow-primary/25">
              <Building2 className="h-6 w-6 text-primary-foreground drop-shadow-sm group-hover:rotate-12 transition-transform duration-300" />
            </div>
          </div>
          <div>
            <h1 className="text-3xl font-black text-primary">Single Company HMRC Setup</h1>
            <p className="text-lg text-muted-foreground mt-1">Configure HMRC integration settings for your company</p>
          </div>
        </div>

        {/* Important Notice */}
        <Alert className="mb-6 bg-primary/5 border-primary/20">
          <AlertCircle className="h-5 w-5 text-primary" />
          <AlertDescription className="ml-2 text-base">
            <span className="font-semibold">Important:</span> Ensure all employer details match exactly with your HMRC
            records to avoid submission errors.
          </AlertDescription>
        </Alert>

        {/* Required Information */}
        <Card className="mb-6 border-border/50 shadow-sm hover:shadow-md transition-all duration-300">
          <CardHeader className="border-b border-border/50 bg-gradient-to-r from-primary/5 to-transparent">
            <CardTitle className="flex items-center gap-3 text-xl text-primary">
              <div className="p-2 rounded-lg bg-primary/10">
                <Key className="h-5 w-5 text-primary" />
              </div>
              Required Information
            </CardTitle>
            <p className="text-muted-foreground mt-2">Essential details required for HMRC integration</p>
          </CardHeader>
          <CardContent className="p-6">
            <div className="rounded-md border overflow-hidden">
              <Table>
                <TableHeader>
                  <TableRow className="bg-muted/50">
                    <TableHead className="font-semibold">Field</TableHead>
                    <TableHead className="font-semibold">Description</TableHead>
                    <TableHead className="font-semibold">Format</TableHead>
                    <TableHead className="font-semibold">Required</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {requiredFields.map((field, index) => (
                    <TableRow key={index} className="hover:bg-muted/30 transition-colors">
                      <TableCell className="font-medium">{field.name}</TableCell>
                      <TableCell>{field.description}</TableCell>
                      <TableCell className="font-mono">{field.format}</TableCell>
                      <TableCell>
                        {field.required ? (
                          <Badge className="bg-primary text-primary-foreground hover:bg-primary/90">Required</Badge>
                        ) : (
                          <Badge variant="secondary">Optional</Badge>
                        )}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>

            <div className="mt-6 mb-8 border rounded-lg overflow-hidden shadow-sm transition-all duration-300 hover:shadow-lg hover:scale-[1.02]">
              <img src="/HMRCSetup2.png" alt="Step by Step guide to HMRC Setup" className="w-full object-contain" />
            </div>
          </CardContent>
        </Card>

        {/* Authentication Fields */}
        <Card className="mb-6 border-border/50 shadow-sm hover:shadow-md transition-all duration-300">
          <CardHeader className="border-b border-border/50 bg-gradient-to-r from-primary/5 to-transparent">
            <CardTitle className="flex items-center gap-3 text-xl text-primary">
              <div className="p-2 rounded-lg bg-primary/10">
                <Key className="h-5 w-5 text-primary" />
              </div>
              Authentication Details
            </CardTitle>
            <p className="text-muted-foreground mt-2">Your HMRC Online Services login information</p>
          </CardHeader>
          <CardContent className="p-6 space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="sender-id" className="font-medium">
                    Sender ID
                  </Label>
                  <Input id="sender-id" placeholder="ABC123456789" />
                  <p className="text-sm text-muted-foreground">Your HMRC Online Services ID</p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="password" className="font-medium">
                    Password
                  </Label>
                  <Input id="password" type="password" placeholder="••••••••••••" />
                  <p className="text-sm text-muted-foreground">Your HMRC portal password</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Reference Numbers */}
        <Card className="mb-6 border-border/50 shadow-sm hover:shadow-md transition-all duration-300">
          <CardHeader className="border-b border-border/50 bg-gradient-to-r from-primary/5 to-transparent">
            <CardTitle className="flex items-center gap-3 text-xl text-primary">
              <div className="p-2 rounded-lg bg-primary/10">
                <Info className="h-5 w-5 text-primary" />
              </div>
              Reference Numbers
            </CardTitle>
            <p className="text-muted-foreground mt-2">Essential HMRC reference numbers for your company</p>
          </CardHeader>
          <CardContent className="p-6 space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="space-y-2">
                <Label htmlFor="tax-office" className="font-medium">
                  Tax Office Number
                </Label>
                <Input id="tax-office" placeholder="123" />
                <p className="text-sm text-muted-foreground">3-digit tax office identifier</p>
              </div>

              <div className="space-y-2">
                <Label htmlFor="paye-ref" className="font-medium">
                  PAYE Reference
                </Label>
                <Input id="paye-ref" placeholder="AB12345" />
                <p className="text-sm text-muted-foreground">Your unique PAYE reference number</p>
              </div>

              <div className="space-y-2">
                <Label htmlFor="accounts-ref" className="font-medium">
                  Accounts Office Reference
                </Label>
                <Input id="accounts-ref" placeholder="123PX00123456" />
                <p className="text-sm text-muted-foreground">13-character HMRC reference</p>
              </div>

              <div className="space-y-2">
                <Label htmlFor="co-tax-ref" className="font-medium">
                  Co Tax Reference
                </Label>
                <Input id="co-tax-ref" placeholder="1234567890" />
                <p className="text-sm text-muted-foreground">Company Tax Reference (if applicable)</p>
                <Badge variant="secondary" className="mt-1">
                  Optional
                </Badge>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Important Notes */}
        <Card className="overflow-hidden border-border/50 shadow-sm hover:shadow-md transition-all duration-300">
          <CardHeader className="border-b border-border/50 bg-gradient-to-r from-primary/5 to-transparent">
            <CardTitle className="flex items-center gap-3 text-xl text-primary">
              <div className="p-2 rounded-lg bg-primary/10">
                <Info className="h-5 w-5 text-primary" />
              </div>
              Important Notes
            </CardTitle>
          </CardHeader>
          <CardContent className="p-6 space-y-4">
            <div className="flex items-start gap-3">
              <Check className="h-5 w-5 text-primary mt-0.5 shrink-0" />
              <p className="text-sm text-muted-foreground">
                Keep your HMRC documentation in a safe place and only share with authorized personnel
              </p>
            </div>
            <div className="flex items-start gap-3">
              <Check className="h-5 w-5 text-primary mt-0.5 shrink-0" />
              <p className="text-sm text-muted-foreground">
                Contact HMRC's employer helpline at 0300 200 3200 if you need assistance locating your reference numbers
              </p>
            </div>

          </CardContent>
        </Card>
      </div>
    </div>
  )
}
