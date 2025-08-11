import { describe, it, expect } from "bun:test";
import { P } from "../utils/proposition";
import { NOT, AND, OR, ABSURD_IMPLY, IFF } from "../utils/operators";

describe("Logic with Absurd System Law Test", () => {
  const p = new P(true, "The Whole Absurd System is True.");
  const q = new P(false, "The Whole Absurd System is False.");

  it("(P ~> Q) === (P ^ Q)", () => {
    expect(ABSURD_IMPLY(p.value, q.value)).toBe(AND(p.value, q.value));
    expect(ABSURD_IMPLY(q.value, p.value)).toBe(AND(q.value, p.value));
    expect(ABSURD_IMPLY(p.value, p.value)).toBe(AND(p.value, p.value));
    expect(ABSURD_IMPLY(q.value, q.value)).toBe(AND(q.value, q.value));
  });
});

