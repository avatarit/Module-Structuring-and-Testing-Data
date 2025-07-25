const bannedPasswords = ["Password123", "Mill3*", "M56!h"];

function passwordValidator(password) {
  if (password.length < 5) return false;

  if (!/[A-Z]/.test(password)) return false;
  if (!/[a-z]/.test(password)) return false;
  if (!/[0-9]/.test(password)) return false;

  const specialCharacters = ["!", "#", "$", "%", ".", "*", "&"];
  if (!specialCharacters.some(char => password.includes(char))) return false;
  if (/[^a-zA-Z0-9!#$%.*&]/.test(password)) return false;

  if (bannedPasswords.includes(password)) return false;

  bannedPasswords.push(password);
  return true;
};


module.exports = passwordValidator;