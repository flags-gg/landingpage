import {useFlags} from "@flags-gg/react-library";
import { Link } from "react-router";
import {siteConfig} from "~/appconfig";

export const Footer = () => {
  const {is} = useFlags()

  return (
    <footer className="border-t bg-muted/50">
      <div className="flex flex-col gap-6 py-12 px-4 md:px-6 md:flex-row md:gap-8">
        <div className="flex flex-col gap-3 md:w-1/3">
          <div className="flex items-center gap-2">
            <span className="text-xl font-bold">Flags.gg</span>
          </div>
          <p className="text-sm text-muted-foreground">
            Ship features safely and confidently with our powerful feature flag platform.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 md:flex-1">
          <div className="space-y-3">
            <h4 className="text-sm font-medium">Product</h4>
            <ul className="space-y-2">
              {is("features").enabled() && (
                <li>
                  <Link to="#features" className="text-sm text-muted-foreground hover:text-foreground">
                    Features
                  </Link>
                </li>
              )}
              {is("pricing").enabled() && (
                <li>
                  <Link to="#pricing" className="text-sm text-muted-foreground hover:text-foreground">
                    Pricing
                  </Link>
                </li>
              )}
              <li>
                <Link to="https://github.com/flags-gg/dashboard" className="text-sm text-muted-foreground hover:text-foreground">
                  Dashboard Changelog
                </Link>
              </li>
              <li>
                <Link to="https://github.com/flags-gg/orchestrator" className="text-sm text-muted-foreground hover:text-foreground">
                  Flags Engine Changelog
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-3">
            <h4 className="text-sm font-medium">Resources</h4>
            <ul className="space-y-2">
              {is("docs").enabled() && (
                <li>
                  <Link to={siteConfig.docsURL} className="text-sm text-muted-foreground hover:text-foreground">
                    Documentation
                  </Link>
                </li>
              )}
            </ul>
          </div>
          <div className="space-y-3">
            <h4 className="text-sm font-medium">Company</h4>
            <ul className="space-y-2">
              <li>
                <Link to="https://chewedfeed.com" className="text-sm text-muted-foreground hover:text-foreground">
                  About
                </Link>
              </li>
              {/*<li>*/}
              {/*  <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">*/}
              {/*    Careers*/}
              {/*  </Link>*/}
              {/*</li>*/}
              {/*<li>*/}
              {/*  <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">*/}
              {/*    Contact*/}
              {/*  </Link>*/}
              {/*</li>*/}
              <li>
                <Link to="https://chewedfeed.com/privacy.html" className="text-sm text-muted-foreground hover:text-foreground">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="border-t py-6">
        <div className="container flex flex-col items-center justify-between gap-4 px-4 md:flex-row md:px-6">
          <p className="text-center text-sm text-muted-foreground md:text-left">
            © {new Date().getFullYear()} Flags.gg. All rights reserved.
          </p>
          <div className="flex gap-4">
            <Link to="https://github.com/flags-gg" className="text-muted-foreground hover:text-foreground">
              <span className="sr-only">GitHub</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-5 w-5"
              >
                <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                <path d="M9 18c-4.51 2-5-2-7-2" />
              </svg>
            </Link>
            {/*<Link to="https://" className="text-muted-foreground hover:text-foreground">*/}
            {/*  <span className="sr-only">LinkedIn</span>*/}
            {/*  <svg*/}
            {/*    xmlns="http://www.w3.org/2000/svg"*/}
            {/*    width="24"*/}
            {/*    height="24"*/}
            {/*    viewBox="0 0 24 24"*/}
            {/*    fill="none"*/}
            {/*    stroke="currentColor"*/}
            {/*    strokeWidth="2"*/}
            {/*    strokeLinecap="round"*/}
            {/*    strokeLinejoin="round"*/}
            {/*    className="h-5 w-5"*/}
            {/*  >*/}
            {/*    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />*/}
            {/*    <rect width="4" height="12" x="2" y="9" />*/}
            {/*    <circle cx="4" cy="4" r="2" />*/}
            {/*  </svg>*/}
            {/*</Link>*/}
          </div>
        </div>
      </div>
    </footer>
  )
}