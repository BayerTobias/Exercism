export class Series {
  constructor(private series: string) {
    if (!series) throw new Error("series cannot be empty");
  }

  slices(sliceLength: number): number[][] {
    if (sliceLength <= 0) {
      throw new Error(
        sliceLength === 0
          ? "slice length cannot be zero"
          : "slice length cannot be negative"
      );
    }

    if (sliceLength > this.series.length) {
      throw new Error("slice length cannot be greater than series length");
    }

    const digits = this.series.split("").map(Number);
    const result: number[][] = [];

    for (let i = 0; i <= digits.length - sliceLength; i++) {
      const slice = digits.slice(i, i + sliceLength);

      result.push(slice);
    }

    return result;
  }
}
