export function isArmstrongNumber(value: number | bigint): boolean {
  const isBig = typeof value === "bigint";

  const digits = String(value).split("");
  const power = BigInt(digits.length);

  let sum = 0n;

  for (let i = 0; i < digits.length; i++) {
    const digit = BigInt(digits[i]);
    const powered = digit ** power;
    sum += powered;
  }

  const inputAsBigInt = isBig ? value : BigInt(value);

  return sum === inputAsBigInt;
}
