import { describe, it, expect } from "bun:test";
import { ABSURD_IMPLY } from "../utils/operators";

describe("Absurd Operator Test.", () => {
  it("Absurd Imply Operator Test.", () => {
    expect(ABSURD_IMPLY(true, true)).toBe(true);
    expect(ABSURD_IMPLY(true, false)).toBe(false);
    expect(ABSURD_IMPLY(false, true)).toBe(false);
    expect(ABSURD_IMPLY(false, false)).toBe(false);
  });
});
