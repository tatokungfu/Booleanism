import { describe, it, expect, test } from "bun:test";
import { NOT, AND, OR, IMPLY, IFF } from "../utils/operators";

describe("Logical Operation Test.", () => {

  it("AND Test", () => {
    expect(AND(true, true)).toBe(true);
    expect(AND(true, false)).toBe(false);
    expect(AND(false, true)).toBe(false);
    expect(AND(false, false)).toBe(false);
  });

  it("OR Test", () => {
    expect(OR(true, true)).toBe(true);
    expect(OR(true, false)).toBe(true);
    expect(OR(false, true)).toBe(true);
    expect(OR(false, false)).toBe(false);
  });

  it("IMPLY Test", () => {
    expect(IMPLY(true, true)).toBe(true);
    expect(IMPLY(true, false)).toBe(false);
    expect(IMPLY(false, true)).toBe(true);
    expect(IMPLY(false, false)).toBe(true);
  });

  it("If and Only If (IFF) Test", () => {
    expect(IFF(true, true)).toBe(true);
    expect(IFF(true, false)).toBe(false);
    expect(IFF(false, true)).toBe(false);
    expect(IFF(false, false)).toBe(true);
  });
});
