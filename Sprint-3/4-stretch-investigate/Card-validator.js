function isValidCreditCard(cardNumber) {
    // Ensure cardNumber is a string
    const str = String(cardNumber);

    // Rule 1: Must be exactly 16 digits (numeric only)
    if (!/^\d{16}$/.test(str)) {
        return false;
    }

    // Rule 2: Must have at least two different digits
    const uniqueDigits = new Set(str);
    if (uniqueDigits.size < 2) {
        return false;
    }

    // Rule 3: Last digit must be even
    const lastDigit = Number(str[str.length - 1]);
    if (lastDigit % 2 !== 0) {
        return false;
    }

    // Rule 4: Sum of digits must be > 16
    const digitSum = str.split('').reduce((sum, digit) => sum + Number(digit), 0);
    if (digitSum <= 16) {
        return false;
    }

    // Passed all checks
    return true;
}
console.log(isValidCreditCard("1234567899876548")); // true (valid card)
console.log(isValidCreditCard("2224446668881118")); // true (valid card)
console.log(isValidCreditCard("a92332119c011112")); // false (contains letters)
console.log(isValidCreditCard("4444444444444444")); // false
console.log(isValidCreditCard("333111111111110")); // false (sum less than 16)

      


    
