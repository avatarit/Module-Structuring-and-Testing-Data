function getOrdinalNumber(num) {
  if (num < 1 || !Number.isInteger(num)) throw new Error("Input must be a positive integer");

  const specialCases = [11, 12, 13];
  const suffixes = ["th", "st", "nd", "rd"];
  const lastDigit = num % 10;
  const lastTwoDigits = num % 100;

  return num + (specialCases.includes(lastTwoDigits) ? "th" : suffixes[lastDigit] || "th");
}


module.exports = getOrdinalNumber;