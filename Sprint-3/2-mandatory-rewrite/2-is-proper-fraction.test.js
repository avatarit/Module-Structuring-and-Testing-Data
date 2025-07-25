const isProperFraction = require("./2-is-proper-fraction");
// Test cases for isProperFraction function
// Case 1: Identify Proper Fractions:
// When the numerator is less than the denominator,
// Then the function should return true indicating a proper fraction.
test("should return true for a proper fraction", () => {
  expect(isProperFraction(2, 3)).toEqual(true);
});

// Case 2: Improper Fractions
test("should return false for an improper fraction", () => {
  expect(isProperFraction(5, 2)).toEqual(false);
});

// Case 3: Zero Numerator
test("should return true for a zero numerator", () => {
  expect(isProperFraction(0, 5)).toEqual(true); 
});

// Case 4: Proper Fractions with Negative Values
test("should return true for a negative proper fraction", () => {
  expect(isProperFraction(-3, -4)).toEqual(true);
});
test("should return true for a proper fraction with negative denominator", () => {
  expect(isProperFraction(3, -4)).toEqual(true);
});

// Case 5: Negative Improper Fractions
test("should return false for a negative improper fraction", () => {
  expect(isProperFraction(-5, -3)).toEqual(false);
});

// Case 6: Equal Numerator and Denominator
test("should return false when numerator equals denominator", () => {
  expect(isProperFraction(5, 5)).toEqual(false);
});

// Case 7: Zero Denominator
test("should return false for a zero denominator", () => {
  expect(isProperFraction(5, 0)).toEqual(false);
});

// Case 8: Invalid Input Types
test("should return false for non-numeric input", () => {
  expect(isProperFraction("a", 3)).toEqual(false);
  expect(isProperFraction(2, "b")).toEqual(false);
  expect(isProperFraction("c", "d")).toEqual(false);
});

// Case 9: Empty Input
test("should return false when no input is provided", () => {
  expect(isProperFraction()).toEqual(false);
  expect(isProperFraction("", "")).toEqual(false);
});
