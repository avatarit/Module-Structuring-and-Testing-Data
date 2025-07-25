
// Implement a function getAngleType
// Build up your function case by case, writing tests as you go
// The first test and case is written for you. The next case has a test, but no code.
// Execute this script in your terminal
//node 1-get-angle-type.js
// The assertion error will tell you what the expected output is
// Write the code to pass the test
// Then, write the next test! :) Go through this process until all the cases are implemented

function getAngleType(angle) {
  if (angle === 90) return "Right angle";
  if (angle > 0 && angle < 90) return "Acute angle"; 
  if (angle > 90 && angle < 180) return "Obtuse angle"; 
  if (angle === 180) return "Straight angle"; 
  if (angle > 180 && angle < 360) return "Reflex angle"; 
  // If the angle is not in any of the above categories, we can return a default value 
  return "Unknown angle type"; 
   // read to the end, complete line 36, then pass your test here
}

// we're going to use this helper function to make our assertions easier to read
// if the actual output matches the target output, the test will pass
function assertEquals(actualOutput, targetOutput) {
  console.assert(
    actualOutput === targetOutput,
    `Expected ${actualOutput} to equal ${targetOutput}`
  );
}

// Acceptance criteria:

// Given an angle in degrees,
// When the function getAngleType is called with this angle,
// Then it should:

// Case 1: Identify Right Angles:
// When the angle is exactly 90 degrees,
// Then the function should return "Right angle"
const rightAngle = getAngleType(90);
assertEquals(rightAngle, "Right angle");

// Case 2: Identify Acute Angles:
// When the angle is less than 90 degrees,
// Then the function should return "Acute angle"
const acuteAngle = getAngleType(45);
assertEquals(acuteAngle, "Acute angle");

// Case 3: Identify Obtuse Angles:
// When the angle is greater than 90 degrees and less than 180 degrees,
// Then the function should return "Obtuse angle"
const obtuseAngle = getAngleType(120); 
assertEquals(obtuseAngle,"Obtuse angle"); 

// Case 4: Identify Straight Angles:
// When the angle is exactly 180 degrees,
// Then the function should return "Straight angle"
 const straightAngle  = getAngleType(180); 
 assertEquals(straightAngle,"Straight angle"); 

// Case 5: Identify Reflex Angles:
// When the angle is greater than 180 degrees and less than 360 degrees,
// Then the function should return "Reflex angle"
 const reflexAngle = getAngleType(200); 
 assertEquals(reflexAngle,"Reflex angle"); 

// Case 6: Handle Unknown Angles:
// When the angle is not in any of the above categories (e.g., negative angles or angles greater than or equal to 360 degrees),
// Then the function should return "Unknown angle type"
const unknownAngle = getAngleType(400);
assertEquals(unknownAngle, "Unknown angle type"); 