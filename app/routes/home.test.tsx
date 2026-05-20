import { describe, expect, test } from "bun:test";
import Home, { meta } from "./home";
import { flagsConfig } from "~/appconfig";
import { getProviderOptions, render } from "../../test/test-utils";

describe("home route", () => {
  test("returns the expected meta tags", () => {
    expect(meta({} as never)).toEqual([
      { title: "Flags.gg the easy feature flag system" },
      { name: "description", content: "Welcome to Flags.gg!" },
    ]);
  });

  test("wraps the landing page in the flags provider and renders all sections", () => {
    const markup = render(<Home />);

    expect(getProviderOptions()).toEqual([flagsConfig]);
    expect(markup).toContain("Flags.gg");
    expect(markup).toContain("Feature Flags for Modern Development Teams");
    expect(markup).toContain("Everything you need for feature management");
    expect(markup).toContain("Simple to implement, powerful to use");
    expect(markup).toContain("Control your features with precision");
    expect(markup).toContain("Simple, transparent pricing");
    expect(markup).toContain("Ready to take control of your feature releases?");
    expect(markup).toContain("All rights reserved.");
  });
});
