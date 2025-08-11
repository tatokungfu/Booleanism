import { describe, it, expect } from "bun:test";
import { P } from "../utils/proposition";

describe("proposition", () => {
  const p = new P(true, "I love you.");

  it("Value display right.", () => {
    expect(p.value).toBe(true);
  });

  it("Sentence display right.", () => {
    expect(p.sentence).toBe("I love you.");
  });
  
});
