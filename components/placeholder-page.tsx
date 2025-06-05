import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

interface PlaceholderPageProps {
  title: string
  description: string
}

export default function PlaceholderPage({ title, description }: PlaceholderPageProps) {
  return (
    <div className="container mx-auto py-8 px-4 md:px-6">
      <Card className="max-w-4xl mx-auto shadow-xl">
        <CardHeader className="text-center border-b pb-6">
          <CardTitle className="text-3xl font-bold">
            <span className="text-primary dark:text-primary-foreground">{title}</span>
          </CardTitle>
          <CardDescription className="text-lg mt-2 text-muted-foreground">{description}</CardDescription>
        </CardHeader>
        <CardContent className="pt-8 text-center">
          <p className="text-muted-foreground">
            This page is a placeholder. Functionality for "{title}" will be implemented here.
          </p>
          <p className="mt-4 text-sm text-muted-foreground">
            Please refer to the SiriusPayroll365 documentation for more details on this section.
          </p>
        </CardContent>
      </Card>
    </div>
  )
}
