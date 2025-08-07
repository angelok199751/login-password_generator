export function generatePassword({
  length = 12,
  useUppercase = true,
  useLowercase = true,
  useDigits = true,
  useSpecialChars = true,
} = {}) {
  const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const lower = "abcdefghijklmnopqrstuvwxyz";
  const digits = "0123456789";
  const special = "!@#$%^&*()_+-=[]{}|;:,.<>?";

  let allowedChars = "";
  const guaranteedChars = [];

  if (useUppercase) {
    allowedChars += upper;
    guaranteedChars.push(upper[Math.floor(Math.random() * upper.length)]);
  }
  if (useLowercase) {
    allowedChars += lower;
    guaranteedChars.push(lower[Math.floor(Math.random() * lower.length)]);
  }
  if (useDigits) {
    allowedChars += digits;
    guaranteedChars.push(digits[Math.floor(Math.random() * digits.length)]);
  }
  if (useSpecialChars) {
    allowedChars += special;
    guaranteedChars.push(special[Math.floor(Math.random() * special.length)]);
  }

  if (!allowedChars) return "";

  // Количество символов, которое осталось дозаполнить
  const remainingLength = length - guaranteedChars.length;
  let passwordChars = [...guaranteedChars];

  for (let i = 0; i < remainingLength; i++) {
    const randomIndex = Math.floor(Math.random() * allowedChars.length);
    passwordChars.push(allowedChars[randomIndex]);
  }

  // Перемешиваем массив символов
  for (let i = passwordChars.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [passwordChars[i], passwordChars[j]] = [passwordChars[j], passwordChars[i]];
  }

  return passwordChars.join("");
}

