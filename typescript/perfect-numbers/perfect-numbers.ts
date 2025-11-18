function getDivisors(number: number): number[] {
  const properDivisors: number[] = [];

  for (let i = 1; i < number; i++) {
    if (number % i === 0) properDivisors.push(i);
  }

  return properDivisors;
}

export function classify(number: number): string {
  if (number <= 0)
    throw new Error("Classification is only possible for natural numbers.");

  const divisors = getDivisors(number);

  const sum = divisors.reduce((acc, num) => acc + num, 0);

  if (sum === number) return "perfect";
  if (sum > number) return "abundant";
  return "deficient";
}
