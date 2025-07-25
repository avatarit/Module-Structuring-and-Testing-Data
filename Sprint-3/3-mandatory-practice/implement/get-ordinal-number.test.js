
const getOrdinalNumber = require("./get-ordinal-number");
// In this week's prep, we started implementing getOrdinalNumber

// continue testing and implementing getOrdinalNumber for additional cases
// Write your tests using Jest - remember to run your tests often for continual feedback

// Case 1: Identify the ordinal number for 1
// When the number is 1,
// Then the function should return "1st"

test("should return '1st' for 1", () => {
    expect(getOrdinalNumber(1)).toEqual("1st");
    });

// When the number is 2,
// Then the function should return "2nd"  
test("should return '2nd' for 2", () => {
    expect(getOrdinalNumber(2)).toEqual("2nd");
    });

// When the number is 3,
// Then the function should return "3rd

test("should return '3rd' for 3", () => {
    expect(getOrdinalNumber(3)).toEqual("3rd");
     });

// When the number is 4,
// Then the function should return "4th"

test("should return '4th' for 4", () => {
    expect(getOrdinalNumber(4)).toEqual("4th");
      });
          
test("should return '11th' for 11", () => {
     expect(getOrdinalNumber(11)).toEqual("11th");
      });
          
test("should return '12th' for 12", () => {
      expect(getOrdinalNumber(12)).toEqual("12th");
      });
          
test("should return '13th' for 13", () => {
      expect(getOrdinalNumber(13)).toEqual("13th");
       });
          
test("should return '21st' for 21", () => {
       expect(getOrdinalNumber(21)).toEqual("21st");
        });
          
test("should return '102nd' for 102", () => {
       expect(getOrdinalNumber(102)).toEqual("102nd");
          });
          
test("should return '113th' for 113", () => {
        expect(getOrdinalNumber(113)).toEqual("113th");
          });
          
test("should return '101st' for 101", () => {
        expect(getOrdinalNumber(101)).toEqual("101st");
          });
          
test("should return '1000th' for 1000", () => {
         expect(getOrdinalNumber(1000)).toEqual("1000th");
          });

          // case 2: test for negative numbers
          // When the number is negative,
          // Then the function should return "Negative numbers are not supported"
          test("should throw an error for negative numbers", () => {
            expect(() => getOrdinalNumber(-1)).toThrow("Input must be a positive integer");
          });
          // case 3: test for non-integer numbers
          // When the number is a non-integer,
          // Then the function should return "Input must be a positive integer"
          test("should throw an error for non-integer numbers", () => {
            expect(() => getOrdinalNumber(1.5)).toThrow("Input must be a positive integer");
          });
          // case 4: test for zero
          // When the number is zero,
          // Then the function should return "Input must be a positive integer"
          test("should throw an error for zero", () => {
            expect(() => getOrdinalNumber(0)).toThrow("Input must be a positive integer");
          });
        





