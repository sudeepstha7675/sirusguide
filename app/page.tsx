import React from "react"
import { Button } from "@/components/ui/button"
import { Check, Shield, Cloud, Calculator, ArrowRight, Sparkles } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function HomePage() {
  return (<div className="fixed inset-0 flex items-center justify-center bg-gradient-to-br from-slate-50 via-white to-blue-50">
    <div className="text-center px-8 max-w-3xl w-full">
      {/* Logo */}
      <div className="mb-10 pt-12">
        <div className="inline-block relative mb-10">
          <div className="absolute -inset-4 bg-gradient-to-r from-blue-100 to-blue-50 rounded-full blur-xl opacity-75"></div>
          <div className="relative bg-white rounded-3xl shadow-xl transition-transform hover:scale-105">
            <Image
              src="/sirius.svg"
              alt="Sirius Logo"
              width={100}
              height={100}
              priority
              className="p-6"
            />
          </div>
        </div>
        <h1 className="text-5xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent mb-2">
          Sirius Payroll 365
        </h1>
        <p className="text-lg text-gray-500 font-light">Modern Payroll Solution</p>
      </div>

      {/* Main Content */}
      <div className="mb-12">
        <h2 className="text-3xl font-semibold text-gray-800 mb-6">
          Payroll Management Made Simple
        </h2>
        <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
          SiriusPayroll365 is your comprehensive cloud-based payroll solution.
          Streamline your processes, ensure HMRC compliance, and manage your
          workforce with confidence - all for just <span className="font-semibold text-blue-600">£1.00</span> per
          employee per month.
        </p>

        {/* Features */}
        <div className="flex justify-center gap-8 text-base">
          <div className="flex items-center gap-2.5 bg-green-50 px-4 py-2 rounded-full">
            <Shield className="w-5 h-5 text-green-600" />
            <span className="text-gray-700 font-medium">HMRC Compliant</span>
          </div>
          <div className="flex items-center gap-2.5 bg-blue-50 px-4 py-2 rounded-full">
            <Cloud className="w-5 h-5 text-blue-600" />
            <span className="text-gray-700 font-medium">Cloud-Based</span>
          </div>
          <div className="flex items-center gap-2.5 bg-purple-50 px-4 py-2 rounded-full">
            <Calculator className="w-5 h-5 text-purple-600" />
            <span className="text-gray-700 font-medium">Auto-Calculate</span>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-100 to-purple-100 rounded-2xl blur-xl opacity-50"></div>
        <div className="relative bg-white rounded-2xl p-10 shadow-xl border border-gray-100">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Sparkles className="w-5 h-5 text-yellow-500" />
            <h3 className="text-2xl font-semibold text-gray-900">
              Ready to get started?
            </h3>
          </div>
          <p className="text-gray-600 mb-6">
            Access our comprehensive guide for detailed setup instructions.
          </p>
          <Button
            asChild
            size="lg"
            className="w-full max-w-sm mx-auto bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-medium py-6 text-base shadow-lg hover:shadow-xl transition-all duration-200"
          >
            <Link href="/introduction/overview">
              Continue to Setup <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>

      {/* Footer */}
      <p className="text-sm text-gray-500 mt-10 font-light">
        Trusted by businesses across the UK for efficient payroll management
      </p>
    </div>
  </div>
  )
}