import type { Route } from "./+types/home";
import {FlagsProvider} from "@flags-gg/react-library";
import {flagsConfig} from "~/appconfig";
import Header from "~/header";

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
      </div>
    </FlagsProvider>
  )
}
