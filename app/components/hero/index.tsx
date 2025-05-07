import {ArrowRight, Check, Flag} from "lucide-react";
import {Badge} from "~/components/ui/badge";
import {Button} from "~/components/ui/button";
import {Card, CardContent, CardHeader} from "~/components/ui/card";
import {useFlags} from "@flags-gg/react-library";
import {Link} from "react-router";
import {siteConfig} from "~/appconfig";

export const Hero = () => {
  const {is} = useFlags()

  if (!is("hero").enabled()) return null

  return (
    <section className="py-20 md:py-28">
      <div className="px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
          <div className="flex flex-col justify-center space-y-4">
            <Badge variant="outline" className="w-fit bg-primary/10 text-primary border-primary/20">
              Ship faster with confidence
            </Badge>
            <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
              Feature Flags for Modern Development Teams
            </h1>
            <p className="max-w-[600px] text-muted-foreground md:text-xl">
              Deploy code safely, test in production, and roll out features gradually with our powerful feature flag
              platform.
            </p>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button size="lg" className="gap-1.5" asChild={true}>
                <Link to={siteConfig.dashboardURL}>
                  Start for free
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild={true}>
                <Link to={siteConfig.docsURL}>
                  View documentation
                </Link>
              </Button>
            </div>
            <div className="flex items-center gap-4 text-sm">
              <div className="flex items-center gap-1">
                <Check className="h-4 w-4 text-primary" />
                <span>No credit card required</span>
              </div>
              <div className="flex items-center gap-1">
                <Check className="h-4 w-4 text-primary" />
                <span>Free developer tier</span>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <Card className="relative h-[350px] w-full overflow-hidden sm:h-[400px] lg:h-[500px] border-0 shadow-xl">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-muted p-4">
                <Card className="h-full w-full bg-background/80 backdrop-blur-sm shadow-lg">
                  <CardHeader className="pb-2">
                    <div className="flex items-center gap-2">
                      <Flag className="h-5 w-5 text-primary" />
                      <span className="font-semibold">Flags.gg Dashboard</span>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <Card className="border bg-background p-3">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <div className="h-4 w-4 rounded-full bg-green-500"></div>
                          <span className="font-medium">New UI</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="text-xs text-muted-foreground">Production: 50%</span>
                          <div className="h-6 w-12 rounded-full bg-muted p-0.5">
                            <div className="h-full w-1/2 rounded-full bg-green-500"></div>
                          </div>
                        </div>
                      </div>
                    </Card>
                    <Card className="border bg-background p-3">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <div className="h-4 w-4 rounded-full bg-amber-500"></div>
                          <span className="font-medium">Beta Feature</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="text-xs text-muted-foreground">Testing: 10%</span>
                          <div className="h-6 w-12 rounded-full bg-muted p-0.5">
                            <div className="h-full w-1/5 rounded-full bg-amber-500"></div>
                          </div>
                        </div>
                      </div>
                    </Card>
                    <Card className="border bg-background p-3">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <div className="h-4 w-4 rounded-full bg-blue-500"></div>
                          <span className="font-medium">Dark Mode</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="text-xs text-muted-foreground">All users</span>
                          <div className="h-6 w-12 rounded-full bg-muted p-0.5">
                            <div className="h-full w-full rounded-full bg-blue-500"></div>
                          </div>
                        </div>
                      </div>
                    </Card>
                  </CardContent>
                </Card>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}