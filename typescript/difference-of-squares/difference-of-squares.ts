export class Squares {
  constructor(private count: number) {}

  get sumOfSquares(): number {
    return (this.count * (this.count + 1) * (2 * this.count + 1)) / 6;
  }

  get squareOfSum(): number {
    const sum = (this.count * (this.count + 1)) / 2;
    return sum ** 2;
  }

  get difference(): number {
    return this.squareOfSum - this.sumOfSquares;
  }
}
