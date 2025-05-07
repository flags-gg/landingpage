import { Check } from "lucide-react";
import {Badge} from "~/components/ui/badge";
import { Button } from "../ui/button";
import {Link} from "react-router";
import {siteConfig} from "~/appconfig";
import {useFlags} from "@flags-gg/react-library";

export const Dashboard = () => {
  const {is} = useFlags()

  return (
    <section className="bg-muted/50 py-20">
      <div className="px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-[1fr_500px] lg:gap-12 xl:grid-cols-[1fr_550px]">
          <img
            src="/images/dashboard.png"
            width={550}
            height={550}
            alt="Dashboard preview"
            className="mx-auto aspect-rectangle overflow-hidden rounded-xl object-cover object-center sm:w-full"
          />
          <div className="flex flex-col justify-center space-y-4">
            <Badge variant="outline" className="w-fit bg-primary/10 text-primary border-primary/20">
              Powerful Dashboard
            </Badge>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Control your features with precision
            </h2>
            <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed">
              Our intuitive dashboard gives you complete control over your feature flags. Toggle features on and
              off, set targeting rules, and monitor usage in real-time.
            </p>
            <ul className="grid gap-2 py-4">
              {is("working flags").enabled() && (
                <li className="flex items-center gap-2">
                  <Check className="h-5 w-5 text-primary" />
                  <span>Toggle features on/off with a single click</span>
                </li>
              )}
              {is("percentage based").enabled() && (
                <li className="flex items-center gap-2">
                  <Check className="h-5 w-5 text-primary" />
                  <span>Set percentage rollouts for gradual releases</span>
                </li>
              )}
              {is("targeting rules").enabled() && (
                <li className="flex items-center gap-2">
                  <Check className="h-5 w-5 text-primary" />
                  <span>Create complex targeting rules with our visual editor</span>
                </li>
              )}
              {is("graphs").enabled() && (
                <li className="flex items-center gap-2">
                  <Check className="h-5 w-5 text-primary" />
                  <span>Monitor flag usage and performance metrics</span>
                </li>
              )}
            </ul>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button size="lg" asChild={true}>
                <Link to={siteConfig.dashboardURL}>
                  Try the dashboard
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild={true}>
                <Link to={siteConfig.demoURL}>
                  Watch demo
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}