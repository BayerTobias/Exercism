export function squareRoot(number: number): number {
  let low = 1;
  let high = number;

  while (low <= high) {
    const mid = Math.floor((low + high) / 2);
    const squared = mid * mid;

    if (squared === number) return mid;

    if (squared < number) low = mid + 1;
    else high = mid - 1;
  }

  throw new Error("No integer square root found");
}
