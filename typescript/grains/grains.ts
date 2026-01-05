export const square = (number: number) => {
  if (number < 1 || number > 64) throw new Error("Square must be between 1 and 64");

  return 2n ** BigInt(number - 1);
};

export const total = () => {
  return 2n ** 64n - 1n;
};
