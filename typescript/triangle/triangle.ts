export class Triangle {
  sideA: number;
  sideB: number;
  sideC: number;

  constructor(a: number, b: number, c: number) {
    this.sideA = a;
    this.sideB = b;
    this.sideC = c;
  }

  isTriangle(): boolean {
    return (
      this.sideA > 0 &&
      this.sideB > 0 &&
      this.sideC > 0 &&
      this.sideA + this.sideB > this.sideC &&
      this.sideA + this.sideC > this.sideB &&
      this.sideB + this.sideC > this.sideA
    );
  }

  get isEquilateral(): boolean {
    return this.isTriangle() && this.sideA === this.sideB && this.sideB === this.sideC;
  }

  get isIsosceles(): boolean {
    return (
      this.isTriangle() &&
      (this.sideA === this.sideB ||
        this.sideB === this.sideC ||
        this.sideA === this.sideC)
    );
  }

  get isScalene(): boolean {
    return (
      this.isTriangle() &&
      this.sideA !== this.sideB &&
      this.sideA !== this.sideC &&
      this.sideB !== this.sideC
    );
  }
}
