import {Button} from "~/components/ui/button";
import {siteConfig} from "~/appconfig";
import {Link} from "react-router";

export const Sidekick = () => {
  return (
    <section className="bg-primary text-primary-foreground py-20">
      <div className="px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Ready to take control of your feature releases?
            </h2>
            <p className="mx-auto max-w-[700px] md:text-xl/relaxed">
              Join thousands of developers who are shipping faster and more confidently with our feature flag
              platform.
            </p>
          </div>
          <div className="flex flex-col gap-2 min-[400px]:flex-row">
            <Button size="lg" variant="secondary" asChild={true}>
              <Link to={siteConfig.dashboardURL}>Get started for free</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}