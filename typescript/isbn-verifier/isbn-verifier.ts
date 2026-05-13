export function isValid(isbn: string): boolean {
  const cleanIsbn = isbn.replace(/-/g, "");

  if (cleanIsbn.length !== 10) {
    return false;
  }

  let sum = 0;

  for (let i = 0; i < 10; i++) {
    const char = cleanIsbn[i];
    let value: number;

    if (char === "X" && i === 9) {
      value = 10;
    } else if (char >= "0" && char <= "9") {
      value = parseInt(char, 10);
    } else {
      return false;
    }

    sum += value * (10 - i);
  }

  return sum % 11 === 0;
}
