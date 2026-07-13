import { describe, expect, it } from "vitest";
import { cn } from "@/utils";

describe("cn", () => {
  it("joins class names and filters falsy values", () => {
    expect(cn("a", false, null, undefined, "b")).toBe("a b");
  });
});
