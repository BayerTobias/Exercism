export const largestProduct = (sequence: string, span: number) => {
  if (span < 0) throw new Error("Span must not be negative");
  if (span > sequence.length) throw new Error("Span must not exceed string length");
  if (!/^\d+$/.test(sequence)) throw new Error("Digits input must only contain digits");

  let largest = 0;

  for (let i = 0; i <= sequence.length - span; i++) {
    const product = sequence
      .slice(i, i + span)
      .split("")
      .reduce((acc, digit) => acc * Number(digit), 1);
    if (product > largest) largest = product;
  }
  return largest;
};
