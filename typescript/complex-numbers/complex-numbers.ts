export class ComplexNumber {
  constructor(
    private _real: number,
    private _imaginary: number
  ) {}

  public get real(): number {
    return this._real;
  }

  public get imag(): number {
    return this._imaginary;
  }

  public add(other: ComplexNumber): ComplexNumber {
    return new ComplexNumber(this._real + other.real, this.imag + other.imag);
  }

  public sub(other: ComplexNumber): ComplexNumber {
    return new ComplexNumber(this._real - other.real, this.imag - other.imag);
  }

  public mul(other: ComplexNumber): ComplexNumber {
    return new ComplexNumber(
      this.real * other.real - this.imag * other.imag,
      this.real * other.imag + this.imag * other.real
    );
  }

  public div(other: ComplexNumber): ComplexNumber {
    const denom = other.real ** 2 + other.imag ** 2;
    return new ComplexNumber(
      (this.real * other.real + this.imag * other.imag) / denom,
      (this.imag * other.real - this.real * other.imag) / denom
    );
  }

  public get abs(): number {
    return Math.hypot(this.real, this.imag);
  }

  public get conj(): ComplexNumber {
    return new ComplexNumber(this.real, this.imag ? this.imag * -1 : 0);
  }

  public get exp(): ComplexNumber {
    const factor = Math.exp(this.real);
    return new ComplexNumber(factor * Math.cos(this.imag), factor * Math.sin(this.imag));
  }
}
