"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Download, AlertCircle, Mail } from "lucide-react"
import { Alert, AlertDescription } from "@/components/ui/alert"
import Link from "next/link"
import { StepNumber } from "@/components/ui/step-number"
import { useMemo } from "react"

const installationSteps = [
	{
		title: "Search for <Microsoft AppSource apps>",
		description:
			"Open Business Central and in the search bar, type <Microsoft AppSource apps> and click on the result.",
		highlight: ["Microsoft AppSource apps"],
	},
	{
		title: "Search for <SiriusPayroll365>",
		description:
			"In the search bar, type <SiriusPayroll365>, locate the result and click on <View on AppSource>.",
		image: "/Installation1.png",
		highlight: ["SiriusPayroll365", "View on AppSource"],
	},
	{
		title: "Install from <Microsoft AppSource>",
		description:
			"Microsoft AppSource will open in a new tab. Click on 'Free Trial' to begin the installation process.",
		highlight: ["Microsoft AppSource"],
	},
	{
		title: "Select <Business Central Environment>",
		description:
			"You'll be guided to select which Business Central environment you want to install Sirius Payroll 365 in <(e.g., Production, Sandbox)>.",
		highlight: ["Business Central Environment", "(e.g., Production, Sandbox)"],
	},
	{
		title: "Select <Language and Install>",
		description:
			"Choose your preferred language and click <Install>. You'll see a message that the extension has been installed.",
		highlight: ["Language and Install", "Install"],
	},
]

function HighlightedText({
	text,
	highlights,
}: {
	text: string
	highlights: string[]
}) {
	const parts = useMemo(() => {
		let parts = text
		highlights.forEach((highlight) => {
			parts = parts.replace(
				`<${highlight}>`,
				`<span class="text-primary font-semibold">${highlight}</span>`
			)
		})

		return parts
	}, [text, highlights])

	// Change this from a div to a span to safely nest inside p tags
	return <span dangerouslySetInnerHTML={{ __html: parts }} />
}

export default function InstallationPage() {
	return (
		<div className="container mx-auto py-8 px-4 md:px-6">
			<div className="mb-8">
				{/* Enhanced Header */}
				<div className="flex items-center gap-3 mb-6">
					<div className="relative group">
						<div className="absolute inset-0 bg-primary/30 rounded-lg blur-md transition-all duration-300 group-hover:bg-primary/40 group-hover:blur-lg" />
						<div className="relative w-12 h-12 bg-gradient-to-br from-primary to-primary/80 rounded-lg flex items-center justify-center shadow-lg transform transition-all duration-300 group-hover:scale-105 group-hover:shadow-primary/25">
							<Download className="h-6 w-6 text-primary-foreground drop-shadow-sm group-hover:rotate-12 transition-transform duration-300" />
						</div>
					</div>
					<div>
						<h1 className="text-3xl font-black text-primary">
							Installation Guide
						</h1>
						<p className="text-muted-foreground text-lg mt-1">
							Complete guide to install Sirius Payroll 365 in your Business
							Central environment.
						</p>
					</div>
				</div>

				{/* Installation Steps Card */}
				<Card className="mb-6 border-border/50 shadow-sm hover:shadow-md transition-all duration-300">
					<CardHeader className="border-b border-border/50 bg-gradient-to-r from-primary/5 to-transparent">
						<CardTitle className="flex items-center gap-3 text-xl text-primary">
							<div className="p-2 rounded-lg bg-primary/10">
								<Download className="h-5 w-5 text-primary" />
							</div>
							Installation Process
						</CardTitle>
					</CardHeader>
					<CardContent className="p-6">
						<div className="space-y-6">
							{installationSteps.map((step, index) => (
								<div
									key={index}
									className="group flex items-start gap-4 p-4 rounded-lg border border-border/50 bg-card hover:bg-primary/5 hover:border-primary/20 transition-all duration-200"
								>
									<StepNumber
										number={index + 1}
										variant="primary"
										size="md"
										className="flex-shrink-0"
									/>
									<div className="space-y-3 flex-1">
										<h3 className="text-lg font-semibold text-primary">
											<HighlightedText
												text={step.title}
												highlights={step.highlight || []}
											/>
										</h3>
										<div className="text-muted-foreground text-base">
											{index === 0 && (
												<HighlightedText
													text="Open Business Configuration"
													highlights={["Business"]}
												/>
											)}
											{index !== 0 && (
												<HighlightedText
													text={step.description}
													highlights={step.highlight || []}
												/>
											)}
										</div>
										{step.image && (
											<div className="mt-4 rounded-lg border-2 border-border overflow-hidden transition-all duration-300 hover:shadow-lg hover:border-primary/30">
												<img
													src={step.image || "/placeholder.svg"}
													alt={step.title}
													className="w-full"
												/>
											</div>
										)}
									</div>
								</div>
							))}
						</div>
					</CardContent>
				</Card>

				{/* Next Step Alert */}
				<Alert className="mb-6 bg-primary/5 border-primary/20">
					<AlertCircle className="h-5 w-5 text-primary" />
					<AlertDescription className="ml-2 text-base">
						<span className="font-semibold text-primary">Next Step:</span> After
						installation, proceed to{" "}
						<Link
							href="/getting-started/configuration"
							className="text-primary hover:text-primary/80 underline-offset-2 hover:underline font-semibold inline-flex items-center group transition-colors duration-200"
						>
							Initial Configuration
							<span className="inline-block transition-transform group-hover:translate-x-1 ml-1">
								→
							</span>
						</Link>
					</AlertDescription>
				</Alert>

				{/* Support Contact Card */}
				<Card className="border-border/50 shadow-sm hover:shadow-md transition-all duration-300">
					<CardContent className="p-6">
						<div className="flex items-center gap-3">
							<div className="relative group">
								<div className="absolute inset-0 bg-primary/20 rounded-full blur-md transition-all duration-300 group-hover:blur-xl" />
								<div className="relative w-10 h-10 bg-gradient-to-br from-primary to-primary/80 rounded-full flex items-center justify-center shadow-sm">
									<Mail className="h-5 w-5 text-primary-foreground" />
								</div>
							</div>
							<div>
								<p className="text-sm text-muted-foreground">Need help?</p>
								<a
									href="mailto:Siriusupport@dogmagroup.co.uk"
									className="text-primary hover:text-primary/80 font-semibold transition-colors duration-200"
								>
									Siriusupport@dogmagroup.co.uk
								</a>
							</div>
						</div>
					</CardContent>
				</Card>
			</div>
		</div>
	)
}
