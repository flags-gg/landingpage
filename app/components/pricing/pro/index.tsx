import { Check } from "lucide-react"
import { Badge } from "~/components/ui/badge"
import { Button } from "~/components/ui/button"
import {Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle} from "~/components/ui/card"
import {Link} from "react-router";
import {siteConfig} from "~/appconfig";

export const ProTier = () => {
  return (
    <Card className="relative border-primary">
      <Badge className="absolute -top-2 left-0 right-0 mx-auto w-fit">Most Popular</Badge>
      <CardHeader>
        <CardTitle>Pro</CardTitle>
        <CardDescription>For growing teams building multiple applications.</CardDescription>
        <div className="mt-4 flex items-baseline">
          <span className="text-3xl font-bold">$49</span>
          <span className="ml-1 text-muted-foreground">/month</span>
        </div>
      </CardHeader>
      <CardContent>
        <ul className="space-y-3">
          <li className="flex items-center gap-2">
            <Check className="h-4 w-4 text-primary" />
            <span>50 Team Members</span>
          </li>
          <li className="flex items-center gap-2">
            <Check className="h-4 w-4 text-primary" />
            <span>10 Projects</span>
          </li>
          <li className="flex items-center gap-2">
            <Check className="h-4 w-4 text-primary" />
            <span>2 Agents per Project</span>
          </li>
          <li className="flex items-center gap-2">
            <Check className="h-4 w-4 text-primary" />
            <span>3 Environments per Agent</span>
          </li>
          <li className="flex items-center gap-2">
            <Check className="h-4 w-4 text-primary" />
            <span>2m Requests per Environment</span>
          </li>
          <li className="flex items-center gap-2">
            <Check className="h-4 w-4 text-primary" />
            <span>Extended support</span>
          </li>
        </ul>
      </CardContent>
      <CardFooter>
        <Button className="w-full" asChild={true}>
          <Link to={siteConfig.dashboardURL}>Start free trial</Link>
        </Button>
      </CardFooter>
    </Card>
  )
}