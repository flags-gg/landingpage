import { describe, expect, test } from "bun:test";
import { flagsConfig, siteConfig } from "./appconfig";

describe("appconfig", () => {
  test("exports the configured flags identifiers", () => {
    expect(flagsConfig).toEqual({
      projectId: "b0c5020e-760e-4156-a88b-344fb725a9b7",
      agentId: "a7978e82-bee0-4357-808d-53ee33d3bc55",
      environmentId: "f8f84114-0706-40b7-a929-995d675f1f6d",
    });
  });

  test("falls back to production site URLs when env vars are missing", () => {
    expect(siteConfig).toEqual({
      dashboardURL: "https://dashboard.flags.gg",
      docsURL: "https://docs.flags.gg",
      demoURL: "https://youtube.com",
    });
  });
});
