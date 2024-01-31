/**
 * Typos tend to occur relative to home row. Numeric miss-strikes and far
 * right punctuation are extremely rare.
 */
export const proximityMap = {
  a: ["q", "w", "s", "z"],
  b: ["v", "f", "g", "h", "n"],
  c: ["x", "s", "d", "f", "v"],
  d: ["x", "s", "e", "d", "f", "c"],
  e: ["r", "f", "d", "s", "w"],
  f: ["c", "d", "r", "t", "g", "v"],
  g: ["v", "f", "t", "y", "h", "b"],
  h: ["b", "g", "y", "u", "j", "n"],
  i: ["o", "k", "j", "u"],
  j: ["n", "h", "u", "i", "k", "m"],
  k: ["m", "j", "i", "o", "l", ","],
  l: ["k", "o", "p", ";", "."],
  m: ["n", "j", "k", ","],
  n: ["b", "h", "j", "m"],
  o: ["p", "l", "k", "i"],
  p: ["l", "o", "[", ";"],
  q: ["w", "a"],
  r: ["t", "f", "d", "e"],
  s: ["z", "a", "w", "e", "d", "x"],
  t: ["y", "g", "f", "r"],
  u: ["i", "j", "h", "y"],
  v: ["c", "f", "g", "b"],
  w: ["a", "q", "e", "s"],
  x: ["z", "s", "d", "c"],
  y: ["t", "u", "h", "g"],
  z: ["a", "s", "x"],
  "[": ["p"],
  ";": ["p", "l"],
  ".": ["l"],
  ",": ["l", "k", "m"],
};

export const swapValues = (arr: any[], one: any, two: any): any[] => {
  // Empty array
  if (arr.length === 0) {
    return [];
  }

  // indices out of range
  if (one < 0 || one > arr.length - 1 || two < 0 || two > arr.length) {
    throw new RangeError();
  }
  const newArr = [...arr];

  // Store the first value temporarily
  const temp = arr[one];

  // Assign the second value to position one
  newArr[one] = arr[two];
  // Assign the temp (value one) to  position two
  newArr[two] = temp;

  return newArr;
};
