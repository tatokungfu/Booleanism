import { describe, it, expect } from "bun:test";
import { P } from "../utils/proposition";
import { AND, NOT, OR, IMPLY, IFF } from "../utils/operators";

describe("Logic Test", () => {
  let p = new P(true, "This Sentence is True.");
  let q = new P(false, "This Sentence is False.");
  let r = new P(true, "This Sentence is Not False");
  let s = new P(false, "This Sentence is Not True");

  it("P v ~P === T", () => {
    expect(OR(p.value, NOT(p.value))).toBe(true);
    expect(OR(q.value, NOT(q.value))).toBe(true);
  });

  it("P ^ ~P === F", () => {
    expect(AND(p.value, NOT(p.value))).toBe(false);
    expect(AND(q.value, NOT(p.value))).toBe(false);
  });

  it("P ^ P === P", () => {
    expect(AND(p.value, p.value)).toBe(p.value);
    expect(AND(q.value, q.value)).toBe(q.value);
  })

  it("P v P === P", () => {
    expect(OR(p.value, p.value)).toBe(p.value);
    expect(OR(q.value, q.value)).toBe(q.value);
  })

  it("(P -> Q) === (~P v Q)", () => {
    expect(IMPLY(p.value, q.value)).toBe(OR(NOT(p.value), q.value));
    expect(IMPLY(q.value, p.value)).toBe(OR(NOT(q.value), p.value));
  })

  it("~(P ^ Q) === (~P v ~Q)", () => {
    expect(NOT(AND(p.value, q.value))).toBe(OR(NOT(p.value), NOT(q.value)));
    expect(NOT(AND(q.value, p.value))).toBe(OR(NOT(q.value), NOT(p.value)));
  });

  it("~(P v Q) === (~P ^ ~Q)", () => {
    expect(NOT(OR(p.value, q.value))).toBe(AND(NOT(p.value), NOT(q.value)));
    expect(NOT(OR(q.value, p.value))).toBe(AND(NOT(q.value), NOT(p.value)));
  });

  it("(P <-> Q) === (P -> Q) ^ (Q -> P)", () => {
    expect(IFF(p.value, q.value))
      .toBe(AND(IMPLY(p.value, q.value), IMPLY(q.value, p.value)));
    expect(IFF(q.value, p.value))
      .toBe(AND(IMPLY(q.value, p.value), IMPLY(p.value, q.value)));
  });

});
