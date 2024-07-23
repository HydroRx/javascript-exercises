const palindromes = function (string) {
  const cleaned = string.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
  const reversed = cleaned.split("").reverse().join("");
  if (cleaned === reversed) {
    return true;
  }
  return false;
};

// Do not edit below this line
module.exports = palindromes;
