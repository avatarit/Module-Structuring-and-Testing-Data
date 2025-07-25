
function getCardValue(card) {
  if (!card || typeof card !== "string") return "Invalid card format";  
//extracting the rank of the card
  const rank = card.slice(0, -1);

//parseInt(rank) and Number(rank) are the same thing. parseInt() is a function that parses a string and returns an integer. If the first character in the string can't be converted into a number, then it returns NaN. Number() is a function that converts a string to a number. If the string can't be converted into a number, then it returns NaN.
  if (rank === "A") return 11;
   //For numerical cards, we return the number
   else if (Number(rank) >= 2 && Number(rank) <= 10) return Number(rank);
   //For face cards, we return 10
   else if ( rank === "J" || rank=== "Q" || rank ==="K" ) return 10;
   //If the card is invalid, we throw an error
   else return("Invalid card rank.");
 }

module.exports = getCardValue;