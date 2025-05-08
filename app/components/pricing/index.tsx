import { useFlags } from "@flags-gg/react-library"
import { Badge } from "../ui/badge"
import {FreeTier} from "~/components/pricing/free";
import {StartupTier} from "~/components/pricing/startup";
import {ProTier} from "~/components/pricing/pro";
import {EnterpriseTier} from "~/components/pricing/enterprise";

export const Pricing = () => {
  const {is} = useFlags()

  if (is("pricing").disabled()) return null

  return (
    <section id="pricing" className="py-20">
      <div className="px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <Badge variant="outline" className="bg-primary/10 text-primary border-primary/20">
              Pricing
            </Badge>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Simple, transparent pricing</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed">
              Choose the plan that's right for your team. All plans include core feature flag functionality.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-full gap-6 py-12 lg:grid-cols-4 lg:gap-8">
          <FreeTier />
          <StartupTier />
          <ProTier />
          <EnterpriseTier />
        </div>
      </div>
    </section>
  )
}