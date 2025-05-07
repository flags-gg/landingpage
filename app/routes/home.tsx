import type { Route } from "./+types/home";
import {FlagsProvider} from "@flags-gg/react-library";
import {flagsConfig} from "~/appconfig";
import Header from "app/components/header";
import {Hero} from "~/components/hero";
import {Features} from "~/components/features";
import {HowItWorks} from "~/components/how-it-works";
import {Dashboard} from "~/components/dashboard";
import {Pricing} from "~/components/pricing";
import {Sidekick} from "~/components/hero/sidekick";
import {Footer} from "~/components/footer";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Flags.gg the easy feature flag system" },
    { name: "description", content: "Welcome to Flags.gg!" },
  ];
}

export default function Home() {
  return (
    <FlagsProvider options={{
      projectId: flagsConfig.projectId,
      agentId: flagsConfig.agentId,
      environmentId: flagsConfig.environmentId,
    }}>
      <div className={"flex min-h-screen flex-col"}>
        <Header />
        <main className={"flex-1"}>
          <Hero />
          <Features />
          <HowItWorks />
          <Dashboard />
          <Pricing />
          <Sidekick />
        </main>
        <Footer />
      </div>
    </FlagsProvider>
  )
}
