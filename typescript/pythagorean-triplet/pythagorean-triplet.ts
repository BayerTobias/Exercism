type Options = {
  minFactor?: number;
  maxFactor?: number;
  sum: number;
};

export function triplets({ sum, minFactor = 1, maxFactor = sum }: Options): Triplet[] {
  const result: Triplet[] = [];

  for (let a = minFactor; a < sum; a++) {
    for (let b = a + 1; b < sum; b++) {
      const c = sum - a - b;

      if (c <= b) continue;

      if (a < minFactor || b < minFactor || c < minFactor) continue;
      if (a > maxFactor || b > maxFactor || c > maxFactor) continue;

      if (a * a + b * b === c * c) {
        result.push(new Triplet(a, b, c));
      }
    }
  }

  return result;
}

class Triplet {
  constructor(
    private a: number,
    private b: number,
    private c: number
  ) {}

  toArray(): [number, number, number] {
    return [this.a, this.b, this.c];
  }
}
