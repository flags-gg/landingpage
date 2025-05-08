import {useFlags} from "@flags-gg/react-library";
import { Badge } from "../ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import {Code, GitBranch, Globe, LayoutDashboard, Shield, Zap} from "lucide-react";

export const Features = () => {
  const {is} = useFlags()

  if (is("features").disabled()) return null

  return (
    <section id="features" className="bg-muted/50 py-20">
      <div className="px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <Badge variant="outline" className="bg-primary/10 text-primary border-primary/20">
              Features
            </Badge>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              Everything you need for feature management
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed">
              Our platform provides all the tools you need to implement, manage, and analyze feature flags at scale.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 md:grid-cols-2 lg:grid-cols-3 lg:gap-12">
          {is("percentage based").enabled() && (
            <Card className="bg-background">
              <CardHeader className="space-y-1 flex flex-col items-center text-center">
                <div className="rounded-full bg-primary/10 p-3 mb-2">
                  <GitBranch className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Progressive Rollouts</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-muted-foreground">
                  Gradually release features to percentages of your user base to minimize risk.
                </p>
              </CardContent>
            </Card>
          )}
          {is("targeting rules").enabled() && (
            <Card className="bg-background">
              <CardHeader className="space-y-1 flex flex-col items-center text-center">
                <div className="rounded-full bg-primary/10 p-3 mb-2">
                  <Globe className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Targeting Rules</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-muted-foreground">
                  Target specific users, groups, or segments with custom rules and conditions.
                </p>
              </CardContent>
            </Card>
          )}
          <Card className="bg-background">
            <CardHeader className="space-y-1 flex flex-col items-center text-center">
              <div className="rounded-full bg-primary/10 p-3 mb-2">
                <LayoutDashboard className="h-6 w-6 text-primary" />
              </div>
              <CardTitle>Intuitive Dashboard</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-muted-foreground">
                Manage all your feature flags from a single, user-friendly dashboard.
              </p>
            </CardContent>
          </Card>
          <Card className="bg-background">
            <CardHeader className="space-y-1 flex flex-col items-center text-center">
              <div className="rounded-full bg-primary/10 p-3 mb-2">
                <Code className="h-6 w-6 text-primary" />
              </div>
              <CardTitle>SDK Support</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-muted-foreground">
                Integrate with any platform using our SDKs for JavaScript, React, Node.js, and more.
              </p>
            </CardContent>
          </Card>
          <Card className="bg-background">
            <CardHeader className="space-y-1 flex flex-col items-center text-center">
              <div className="rounded-full bg-primary/10 p-3 mb-2">
                <Zap className="h-6 w-6 text-primary" />
              </div>
              <CardTitle>Real-time Updates</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-muted-foreground">
                Changes to flags take effect immediately without requiring redeployments.
              </p>
            </CardContent>
          </Card>
          {is("roles").enabled() && (
            <Card className="bg-background">
              <CardHeader className="space-y-1 flex flex-col items-center text-center">
                <div className="rounded-full bg-primary/10 p-3 mb-2">
                  <Shield className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Secure by Design</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-muted-foreground">
                  Enterprise-grade security with role-based access control and audit logs.
                </p>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </section>
  )
}