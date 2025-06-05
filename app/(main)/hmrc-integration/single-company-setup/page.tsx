"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { AlertCircle, Building2, CheckCircle } from "lucide-react"
import { Badge } from "@/components/ui/badge"

export default function SingleCompanySetupPage() {
  return (
    <div className="container mx-auto py-8 px-4 md:px-6">
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 bg-sirius-purple rounded-lg flex items-center justify-center">
            <Building2 className="h-6 w-6 text-white" />
          </div>
          <div>
            <h1 className="text-4xl font-bold text-primary">Single Company HMRC Setup</h1>
            <p className="text-muted-foreground text-lg mt-1">
              Configure HMRC integration settings for your company
            </p>
          </div>
        </div>

        <div className="mb-8 p-4 rounded-lg bg-amber-50 dark:bg-amber-950/20 border-l-4 border-amber-500">
          <div className="flex gap-2">
            <AlertCircle className="h-5 w-5 text-amber-500 flex-shrink-0 mt-0.5" />
            <div>
              <span className="font-semibold text-amber-700 dark:text-amber-400 block mb-1">Important:</span>
              <span className="text-amber-700 dark:text-amber-400">
                Ensure all employer details match exactly with your HMRC records to avoid submission errors.
              </span>
            </div>
          </div>
        </div>

        {/* Required Information Section */}
        <Card className="mb-8">
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle className="text-2xl">Required Information</CardTitle>
                <p className="text-muted-foreground mt-2">
                  The following details are required for HMRC integration
                </p>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="divide-y divide-border">
              {/* Required Information */}
              <div className="space-y-6 pb-6">
                <h3 className="font-semibold text-lg text-primary">Essential Details</h3>
                <div className="grid gap-6">
                  <div className="bg-muted/50 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">Sender ID</h4>
                    <p className="text-sm text-muted-foreground mb-2">
                      Your HMRC Online Services ID.
                    </p>
                    <div className="bg-background p-2 rounded border font-mono text-sm">
                      Format: ABC123456789
                    </div>
                  </div>

                  <div className="bg-muted/50 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">Password</h4>
                    <p className="text-sm text-muted-foreground mb-2">
                      Your HMRC portal password.
                    </p>
                    <div className="bg-background p-2 rounded border font-mono text-sm">
                      Format: ••••••••••••
                    </div>
                  </div>

                  <div className="bg-muted/50 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">Tax Office Number</h4>
                    <p className="text-sm text-muted-foreground mb-2">
                      A 3-digit number assigned by HMRC to identify your tax office.
                    </p>
                    <div className="bg-background p-2 rounded border font-mono text-sm">
                      Example: 123
                    </div>
                  </div>

                  <div className="bg-muted/50 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">PAYE Reference</h4>
                    <p className="text-sm text-muted-foreground mb-2">
                      Your unique PAYE reference number from HMRC.
                    </p>
                    <div className="bg-background p-2 rounded border font-mono text-sm">
                      Format: AB12345
                    </div>
                  </div>

                  <div className="bg-muted/50 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">Accounts Office Reference</h4>
                    <p className="text-sm text-muted-foreground mb-2">
                      A 13-character reference used for HMRC payments and correspondence.
                    </p>
                    <div className="bg-background p-2 rounded border font-mono text-sm">
                      Format: 123PX00123456
                    </div>
                  </div>
                </div>
              </div>

              {/* Optional Information */}
              <div className="space-y-6 pt-6">
                <div className="flex items-center gap-2">
                  <h3 className="font-semibold text-lg text-primary">Additional Details</h3>
                  <Badge variant="secondary">Optional</Badge>
                </div>
                <div className="grid gap-6">
                  <div className="bg-muted/50 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">Co Tax Reference</h4>
                    <p className="text-sm text-muted-foreground mb-2">
                      Required only if your company is registered for Corporation Tax.
                    </p>
                    <div className="bg-background p-2 rounded border font-mono text-sm">
                      Format: 1234567890
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-6 mb-8 border rounded-lg overflow-hidden shadow-sm transition-all duration-300 hover:shadow-lg hover:scale-[1.02]">
            <img
              src="/HMRCSetup2.png"
              alt="Step by Step guide to Bank Account Setup"
              className="w-full object-contain"
            />
          </div>
            </div>
          </CardContent>
        </Card>

        {/* Important Notes */}
        <Card className="overflow-hidden">
          <CardContent className="p-0">
            <div className="divide-y divide-border">
              <div className="flex items-start gap-4 p-4 bg-gradient-to-r from-sirius-blue/5 to-transparent border-l-2 border-sirius-blue hover:from-sirius-blue/10 transition-colors">
                <AlertCircle className="h-5 w-5 text-sirius-blue mt-1 shrink-0" />
                <div>
                  <p className="font-medium mb-1">Keep Your Information Secure</p>
                  <p className="text-sm text-muted-foreground">
                    Store your HMRC documentation in a safe place and only share with authorized personnel
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 bg-gradient-to-r from-sirius-blue/5 to-transparent border-l-2 border-sirius-blue hover:from-sirius-blue/10 transition-colors">
                <AlertCircle className="h-5 w-5 text-sirius-blue mt-1 shrink-0" />
                <div>
                  <p className="font-medium mb-1">Contact HMRC</p>
                  <p className="text-sm text-muted-foreground">
                    If you can't locate your reference numbers, contact HMRC's employer helpline at 0300 200 3200
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
