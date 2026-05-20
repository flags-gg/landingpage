import { describe, expect, test } from "bun:test";
import { cn } from "./utils";

describe("cn", () => {
  test("merges class names and resolves Tailwind conflicts", () => {
    expect(cn("px-2", undefined, "px-4", "font-bold")).toBe("px-4 font-bold");
  });

  test("returns an empty string when no classes are provided", () => {
    expect(cn()).toBe("");
  });
});
