const getCardValue = require("./3-get-card-value");

test("should return 11 for Ace of Spades", () => {
  const aceofSpades = getCardValue("A♠");
  expect(aceofSpades).toEqual(11);
  });

// Case 2: Handle Number Cards (2-10):


test("should return the correct value for number cards (2-10)", () => {
  expect(getCardValue("2♦")).toEqual(2);
  expect(getCardValue("5♣")).toEqual(5);
  expect(getCardValue("10♥")).toEqual(10);
});

// Case 3: Handle Face Cards (J, Q, K):


test("should return 10 for face cards (J, Q, K)", () => {
  expect(getCardValue("J♠")).toEqual(10);
  expect(getCardValue("Q♦")).toEqual(10);
  expect(getCardValue("K♣")).toEqual(10);
});

// Case 4: Handle Ace (A):

test("should return 11 for Ace", () => {
    expect(getCardValue("A♠")).toEqual(11);
  });

  // Case 5: Handle Invalid Cards:

test("should throw an error for invalid cards", () => {
  expect(getCardValue("Z♦")).toEqual("Invalid card rank.");
  expect(getCardValue("15♥")).toEqual("Invalid card rank.");
  expect(getCardValue("X♣")).toEqual("Invalid card rank.");
});