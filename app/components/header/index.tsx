import {useFlags} from "@flags-gg/react-library";
import {Link} from "react-router";
import { Button } from "~/components/ui/button";
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "~/components/ui/sheet";
import {Separator} from "~/components/ui/separator";
import {siteConfig} from "~/appconfig";
import {Menu} from "lucide-react";

export default function Header() {
  const {is} = useFlags()

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="flex h-16 items-center justify-between p-3">
        <div className="flex items-center gap-2 p-3">
          <img src={"/images/logo.svg"} className={"h-12 w-12"}  alt={"logo"}/>
          <span className="text-xl font-bold">Flags.gg</span>
        </div>
        <nav className="hidden md:flex gap-6">
          {is("features").enabled() && (
            <Link to="#features" className="text-sm font-medium hover:text-primary">
              Features
            </Link>
          )}
          {is("how it works").enabled() && (
            <Link to="#how-it-works" className="text-sm font-medium hover:text-primary">
              How It Works
            </Link>
          )}
          {is("pricing").enabled() && (
            <Link to="#pricing" className="text-sm font-medium hover:text-primary">
              Pricing
            </Link>
          )}
          {is("docs").enabled() && (
            <Link to={siteConfig.docsURL} className="text-sm font-medium hover:text-primary">
              Documentation
            </Link>
          )}
        </nav>
        <div className="flex items-center gap-4">
          {is("login").enabled() && (
            <Link to={siteConfig.dashboardURL} className="text-sm font-medium hover:text-primary hidden sm:inline-flex">
              Log in
            </Link>
          )}
          <Button asChild={true}>
            <Link to={siteConfig.dashboardURL}>
              Get Started
            </Link>
          </Button>
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <SheetHeader>
                <SheetTitle>Navigation</SheetTitle>
                <SheetDescription>Explore our feature flag platform</SheetDescription>
              </SheetHeader>
              <nav className="flex flex-col gap-4 mt-4">
                {is("features").enabled() && (
                  <Link to="#features" className="text-sm font-medium hover:text-primary">
                    Features
                  </Link>
                )}
                {is("how it works").enabled() && (
                  <Link to="#how-it-works" className="text-sm font-medium hover:text-primary">
                    How It Works
                  </Link>
                )}
                {is("pricing").enabled() && (
                  <Link to="#pricing" className="text-sm font-medium hover:text-primary">
                    Pricing
                  </Link>
                )}
                {is("docs").enabled() && (
                  <Link to={siteConfig.docsURL} className="text-sm font-medium hover:text-primary">
                    Documentation
                  </Link>
                )}
                <Separator />
                {is("login").enabled() && (
                  <Link to={siteConfig.dashboardURL} className="text-sm font-medium hover:text-primary">
                    Log in
                  </Link>
                )}
                <Button asChild={true}>
                  <Link to={siteConfig.dashboardURL}>
                    Get Started
                  </Link>
                </Button>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}