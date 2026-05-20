import type { ReactElement } from "react";
import { renderToStaticMarkup } from "react-dom/server";

type FlagsState = Record<string, boolean>;
type ProviderOptions = {
  projectId: string;
  agentId: string;
  environmentId: string;
};

const defaultFlags: FlagsState = {
  darkmode: true,
  demo: true,
  docs: true,
  features: true,
  graphs: true,
  hero: true,
  "how it works": true,
  login: true,
  "percentage based": true,
  pricing: true,
  roles: true,
  "targeting rules": true,
  "working flags": true,
};

let flags: FlagsState = { ...defaultFlags };
let initializeCalls: Array<[string, boolean]> = [];
let providerOptions: ProviderOptions[] = [];

export function resetTestState() {
  flags = { ...defaultFlags };
  initializeCalls = [];
  providerOptions = [];
}

export function setFlags(next: Partial<FlagsState>) {
  flags = { ...defaultFlags, ...next };
}

export function isFlagEnabled(name: string) {
  return flags[name] ?? true;
}

export function recordInitializeCall(key: string, value: boolean) {
  initializeCalls.push([key, value]);
}

export function getInitializeCalls() {
  return initializeCalls;
}

export function recordProviderOptions(options: ProviderOptions) {
  providerOptions.push(options);
}

export function getProviderOptions() {
  return providerOptions;
}

export function render(element: ReactElement) {
  return renderToStaticMarkup(element);
}
