import { describe, expect, test } from "bun:test";
import Header from "./header";
import { Theme } from "./header/theme";
import { Hero } from "./hero";
import { Sidekick } from "./hero/sidekick";
import { Features } from "./features";
import { HowItWorks } from "./how-it-works";
import { Dashboard } from "./dashboard";
import { Pricing } from "./pricing";
import { Footer } from "./footer";
import {
  getInitializeCalls,
  render,
  setFlags,
} from "../../test/test-utils";

describe("header", () => {
  test("renders all primary navigation links when their flags are enabled", () => {
    const markup = render(<Header />);

    expect(markup).toContain('href="#features"');
    expect(markup).toContain('href="#how-it-works"');
    expect(markup).toContain('href="#pricing"');
    expect(markup).toContain('href="https://docs.flags.gg"');
    expect(markup).toContain('href="https://dashboard.flags.gg"');
    expect(markup).toContain("Log in");
    expect(markup).toContain("Get Started");
  });

  test("hides gated navigation links when their flags are disabled", () => {
    setFlags({
      docs: false,
      features: false,
      "how it works": false,
      login: false,
      pricing: false,
    });

    const markup = render(<Header />);

    expect(markup).not.toContain('href="#features"');
    expect(markup).not.toContain('href="#how-it-works"');
    expect(markup).not.toContain('href="#pricing"');
    expect(markup).not.toContain('href="https://docs.flags.gg"');
    expect(markup).not.toContain("Log in");
    expect(markup).toContain("Get Started");
  });
});

describe("theme switcher", () => {
  test("renders theme choices when dark mode is enabled", () => {
    const markup = render(<Theme />);

    expect(markup).toContain("Light");
    expect(markup).toContain("Dark");
  });

  test("renders nothing when dark mode is disabled", () => {
    setFlags({ darkmode: false });

    expect(render(<Theme />)).toBe("");
  });
});

describe("hero", () => {
  test("renders the marketing copy and calls to action when enabled", () => {
    const markup = render(<Hero />);

    expect(markup).toContain("Feature Flags for Modern Development Teams");
    expect(markup).toContain('href="https://dashboard.flags.gg"');
    expect(markup).toContain('href="https://docs.flags.gg"');
    expect(markup).toContain("No credit card required");
  });

  test("renders nothing when the hero flag is disabled", () => {
    setFlags({ hero: false });

    expect(render(<Hero />)).toBe("");
  });
});

describe("features", () => {
  test("renders always-on and gated feature cards when enabled", () => {
    const markup = render(<Features />);

    expect(markup).toContain("Progressive Rollouts");
    expect(markup).toContain("Targeting Rules");
    expect(markup).toContain("Intuitive Dashboard");
    expect(markup).toContain("SDK Support");
    expect(markup).toContain("Real-time Updates");
    expect(markup).toContain("Secure by Design");
  });

  test("keeps only the always-on cards when optional features are disabled", () => {
    setFlags({
      features: true,
      "percentage based": false,
      roles: false,
      "targeting rules": false,
    });

    const markup = render(<Features />);

    expect(markup).not.toContain("Progressive Rollouts");
    expect(markup).not.toContain("Targeting Rules");
    expect(markup).not.toContain("Secure by Design");
    expect(markup).toContain("Intuitive Dashboard");
    expect(markup).toContain("SDK Support");
    expect(markup).toContain("Real-time Updates");
  });

  test("renders nothing when the features section is disabled", () => {
    setFlags({ features: false });

    expect(render(<Features />)).toBe("");
  });
});

describe("how it works", () => {
  test("initializes offline flags and renders all implementation steps when enabled", () => {
    const markup = render(<HowItWorks />);

    expect(getInitializeCalls()).toEqual([["tester", false]]);
    expect(markup).toContain("Install the SDK");
    expect(markup).toContain("Create Flags");
    expect(markup).toContain("Implement in Code");
    expect(markup).toContain("Secret Menu");
    expect(markup).toContain("npm install @flags-gg/react-library");
  });

  test("renders nothing when the section is disabled but still initializes flags", () => {
    setFlags({ "how it works": false });

    expect(render(<HowItWorks />)).toBe("");
    expect(getInitializeCalls()).toEqual([["tester", false]]);
  });
});

describe("dashboard", () => {
  test("renders all dashboard value props and the demo link when flags are enabled", () => {
    const markup = render(<Dashboard />);

    expect(markup).toContain("Toggle features on/off with a single click");
    expect(markup).toContain("Set percentage rollouts for gradual releases");
    expect(markup).toContain("Create complex targeting rules with our visual editor");
    expect(markup).toContain("Monitor flag usage and performance metrics");
    expect(markup).toContain("Watch demo");
  });

  test("omits optional bullets and demo link when flags are disabled", () => {
    setFlags({
      demo: false,
      graphs: false,
      "percentage based": false,
      "targeting rules": false,
      "working flags": false,
    });

    const markup = render(<Dashboard />);

    expect(markup).not.toContain("Toggle features on/off with a single click");
    expect(markup).not.toContain("Set percentage rollouts for gradual releases");
    expect(markup).not.toContain("Create complex targeting rules with our visual editor");
    expect(markup).not.toContain("Monitor flag usage and performance metrics");
    expect(markup).not.toContain("Watch demo");
    expect(markup).toContain("Try the dashboard");
  });
});

describe("pricing", () => {
  test("renders all pricing tiers when enabled", () => {
    const markup = render(<Pricing />);

    expect(markup).toContain("Developer");
    expect(markup).toContain("Startup");
    expect(markup).toContain("Pro");
    expect(markup).toContain("Enterprise");
    expect(markup).toContain("Most Popular");
  });

  test("renders nothing when the pricing flag is disabled", () => {
    setFlags({ pricing: false });

    expect(render(<Pricing />)).toBe("");
  });
});

describe("sidekick", () => {
  test("renders the closing call to action", () => {
    const markup = render(<Sidekick />);

    expect(markup).toContain("Ready to take control of your feature releases?");
    expect(markup).toContain("Get started for free");
  });
});

describe("footer", () => {
  test("renders all enabled resource links and the current year", () => {
    const year = new Date().getFullYear();
    const markup = render(<Footer />);

    expect(markup).toContain('href="#features"');
    expect(markup).toContain('href="#pricing"');
    expect(markup).toContain('href="https://docs.flags.gg"');
    expect(markup).toContain(`© ${year} Flags.gg. All rights reserved.`);
    expect(markup).toContain('href="https://github.com/flags-gg"');
  });

  test("hides gated footer links when their flags are disabled", () => {
    setFlags({ docs: false, features: false, pricing: false });

    const markup = render(<Footer />);

    expect(markup).not.toContain('href="#features"');
    expect(markup).not.toContain('href="#pricing"');
    expect(markup).not.toContain('href="https://docs.flags.gg"');
    expect(markup).toContain("Dashboard Changelog");
    expect(markup).toContain("Privacy Policy");
  });
});
