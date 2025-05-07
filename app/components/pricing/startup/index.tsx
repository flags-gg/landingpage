import { Check } from "lucide-react"
import {Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle} from "~/components/ui/card"
import {Button} from "~/components/ui/button";
import {siteConfig} from "~/appconfig";
import {Link} from "react-router";

export const StartupTier = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Startup</CardTitle>
        <CardDescription>Perfect for startup or medium sized projects.</CardDescription>
        <div className="mt-4 flex items-baseline">
          <span className="text-3xl font-bold">$15</span>
          <span className="ml-1 text-muted-foreground">/month</span>
        </div>
      </CardHeader>
      <CardContent>
        <ul className="space-y-3">
          <li className="flex items-center gap-2">
            <Check className="h-4 w-4 text-primary" />
            <span>20 Team Members</span>
          </li>
          <li className="flex items-center gap-2">
            <Check className="h-4 w-4 text-primary" />
            <span>5 Projects</span>
          </li>
          <li className="flex items-center gap-2">
            <Check className="h-4 w-4 text-primary" />
            <span>2 Agents per Project</span>
          </li>
          <li className="flex items-center gap-2">
            <Check className="h-4 w-4 text-primary" />
            <span>2 Environments per Agent</span>
          </li>
          <li className="flex items-center gap-2">
            <Check className="h-4 w-4 text-primary" />
            <span>100k Requests per Environment</span>
          </li>
          <li className="flex items-center gap-2">
            <Check className="h-4 w-4 text-primary" />
            <span>Community support</span>
          </li>
        </ul>
      </CardContent>
      <CardFooter>
        <Button className="w-full" variant="outline" asChild={true}>
          <Link to={siteConfig.dashboardURL}>Get started</Link>
        </Button>
      </CardFooter>
    </Card>
  )
}