import { faker } from "@faker-js/faker";

export function generateLogin({
  useTwoNames = false,
  useDigits = true,
  useSpecialChars = false,
  separator = "_", // добавим значение по умолчанию
} = {}) {
  const name1 = faker.person.firstName();
  const name2 = useTwoNames ? `${separator}${faker.person.lastName()}` : "";

  let loginBase = name1 + name2;

  if (useDigits) {
    loginBase += faker.number.int({ min: 10, max: 999 }).toString();
  }

  if (useSpecialChars) {
    const specialChars = "!@#$%^&*";
    loginBase += specialChars[Math.floor(Math.random() * specialChars.length)];
  }

  return loginBase;
}
