/* 
Password Validation

Write a program that should check if a password is valid
and returns a boolean

To be valid, a password must:
- Have at least 5 characters.
- Have at least one English uppercase letter (A-Z)
- Have at least one English lowercase letter (a-z)
- Have at least one number (0-9)
- Have at least one of the following non-alphanumeric symbols: ("!", "#", "$", "%", ".", "*", "&")
- Must not be any previous password in the passwords array. 

You must breakdown this problem in order to solve it. Find one test case first and get that working
*/
const isValidPassword = require("./password-validator");


test("password has a unknown character", () => {
  const password = "Mill3@";
  const result = isValidPassword(password);
  expect(result).toBe(false);

})

 test("password has at least 5 characters", () => {
  expect(isValidPassword("12345")).toBe(false);// Fails because no letters or special chars
  expect(isValidPassword("Ab1!")).toBe(false); // Fails because the password is less than 5 characters.
});

test("password has at least one uppercase letter", () => {
  expect(isValidPassword("password1!")).toBe(false); // No uppercase letter
});

test("password has at least one lowercase letter", () => {
  expect(isValidPassword("PASSWORD1!")).toBe(false); // No lowercase letter
});

test("password has at least one number", () => {
  expect(isValidPassword("Password!")).toBe(false); // No number
});

test("password has at least one special character", () => {
  expect(isValidPassword("Password1")).toBe(false); // No special character
});


test("valid password", () => {
  expect(isValidPassword("Valid1!")).toBe(true); // Meets all conditions
  expect(isValidPassword("Valid1!")).toBe(false); // Used before
});

test("password should not be a previously used password", () => {
  expect(isValidPassword("Mill3*")).toBe(false); // banned password
});


// test("valid password", () => {
//   expect(isValidPassword("Mil2!")).toBe(true); // Meets all conditions
// });

// test("password should not be a previously used password", () => {
//   expect(isValidPassword("Mil2!")).toBe(false); // Used before
// });