export function valid(digitString: string): boolean {
  if (/[^0-9 ]/.test(digitString)) return false;

  const cleaned = digitString.replace(/\s/g, "");

  if (cleaned.length <= 1) return false;

  let sum = 0;
  let shouldDouble = false;

  for (let i = cleaned.length - 1; i >= 0; i--) {
    let digit = Number(cleaned[i]);

    if (shouldDouble) {
      digit *= 2;
      if (digit > 9) digit -= 9;
    }

    sum += digit;
    shouldDouble = !shouldDouble;
  }

  return sum % 10 === 0;
}
