import {useFlags} from "@flags-gg/react-library";
import { Flag, Menu } from "lucide-react";
import {Link} from "react-router";
import { Button } from "~/components/ui/button";
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "~/components/ui/sheet";
import {Separator} from "~/components/ui/separator";

export default function Header() {
  const {is} = useFlags()

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Flag className="h-6 w-6 text-primary" />
          <span className="text-xl font-bold">FeatureFlags</span>
        </div>
        <nav className="hidden md:flex gap-6">
          <Link to="#features" className="text-sm font-medium hover:text-primary">
            Features
          </Link>
          <Link to="#how-it-works" className="text-sm font-medium hover:text-primary">
            How It Works
          </Link>
          <Link to="#pricing" className="text-sm font-medium hover:text-primary">
            Pricing
          </Link>
          <Link to="#docs" className="text-sm font-medium hover:text-primary">
            Documentation
          </Link>
        </nav>
        <div className="flex items-center gap-4">
          <Link to="#login" className="text-sm font-medium hover:text-primary hidden sm:inline-flex">
            Log in
          </Link>
          <Button>Get Started</Button>
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
                <Link to="#features" className="text-sm font-medium hover:text-primary">
                  Features
                </Link>
                <Link to="#how-it-works" className="text-sm font-medium hover:text-primary">
                  How It Works
                </Link>
                <Link to="#pricing" className="text-sm font-medium hover:text-primary">
                  Pricing
                </Link>
                <Link to="#docs" className="text-sm font-medium hover:text-primary">
                  Documentation
                </Link>
                <Separator />
                <Link to="#login" className="text-sm font-medium hover:text-primary">
                  Log in
                </Link>
                <Button className="w-full">Get Started</Button>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}