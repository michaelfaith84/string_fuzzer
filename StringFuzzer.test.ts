import { StringFuzzer } from "./index";

/**
 * These tests are implemented using an inverse use--matching against the fuzzed
 * strings rather than using the fuzzed strings to find matches.
 */

const simple = "bob";
const punctuation = "ji,";
const proximityLetter = "jum";
const ordinalTransposition = "obb";

const fuzzer = new StringFuzzer("jim bob");

describe("Using test strings to see if the fuzzer catches the cases.", () => {
  test("One word", () => {
    expect(fuzzer.text.some((word) => word === simple)).toBeTruthy();
  });

  const proximity = fuzzer.keyProximity();
  test("Proximity", () => {
    expect(proximity.some((word) => word === proximityLetter)).toBeTruthy();
    expect(proximity.some((word) => word === punctuation)).toBeTruthy();
    expect(proximity.length).toBe(28);
  });

  const ordinal = fuzzer.ordinalTransposition();
  test("Ordinal", () => {
    expect(ordinal.some((word) => word === ordinalTransposition));
    expect(ordinal.length).toBe(6);
  });

  const fullMonty = fuzzer.fuzz();
  test("All methods", () => {
    expect(fullMonty.length).toBe(34);
  });
});

describe("Using typos to see if the fuzzer catches them", () => {
  test("obb", () => {
    const test = new StringFuzzer("obb");
    expect(test.fuzz().some((word) => word === "bob")).toBeTruthy();
  });

  test("jmi bob", () => {
    const test = new StringFuzzer("jmi bob");
    expect(test.fuzz().some((word) => word === "jim")).toBeTruthy();
  });

  test("ji;l", () => {
    const test = new StringFuzzer("ji;l");
    expect(test.fuzz().some((word) => word === "jill")).toBeTruthy();
  });
});

const f = new StringFuzzer("Tmo Sandres");
console.log(f.fuzz().some((word) => word === "tom"));
console.log(f.fuzz().some((word) => word === "sanders"));
