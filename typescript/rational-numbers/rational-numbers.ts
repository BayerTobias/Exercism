export class Rational {
  public readonly numerator: number
  public readonly denominator: number

  constructor(numerator: number, denominator: number) {
    if (denominator === 0) {
      throw new Error('Denominator must not be zero')
    }

    const [normalizedNumerator, normalizedDenominator] =
      Rational.normalize(numerator, denominator)

    this.numerator = normalizedNumerator
    this.denominator = normalizedDenominator
  }

  add(other: Rational): Rational {
    const newNumerator =
      this.numerator * other.denominator +
      other.numerator * this.denominator

    const newDenominator =
      this.denominator * other.denominator

    return new Rational(newNumerator, newDenominator)
  }

  sub(other: Rational): Rational {
    const newNumerator =
      this.numerator * other.denominator -
      other.numerator * this.denominator

    const newDenominator =
      this.denominator * other.denominator

    return new Rational(newNumerator, newDenominator)
  }

  mul(other: Rational): Rational {
    return new Rational(
      this.numerator * other.numerator,
      this.denominator * other.denominator
    )
  }

  div(other: Rational): Rational {
    return new Rational(
      this.numerator * other.denominator,
      this.denominator * other.numerator
    )
  }

  abs(): Rational {
    return new Rational(
      Math.abs(this.numerator),
      Math.abs(this.denominator)
    )
  }

  exprational(power: number): Rational {
    if (power === 0) {
      return new Rational(1, 1)
    }

    if (power > 0) {
      return new Rational(
        this.numerator ** power,
        this.denominator ** power
      )
    }

    const positivePower = Math.abs(power)

    return new Rational(
      this.denominator ** positivePower,
      this.numerator ** positivePower
    )
  }

  expreal(base: number): number {
    const exponent = this.numerator / this.denominator
    return Math.pow(base, exponent)
  }

  reduce(): Rational {
    return new Rational(this.numerator, this.denominator)
  }


  private static normalize(
    numerator: number,
    denominator: number
  ): [number, number] {

    if (numerator === 0) {
      return [0, 1]
    }


    if (denominator < 0) {
      numerator = -numerator
      denominator = -denominator
    }

    const greatestCommonDivisor =
      Rational.greatestCommonDivisor(
        Math.abs(numerator),
        Math.abs(denominator)
      )

    return [
      numerator / greatestCommonDivisor,
      denominator / greatestCommonDivisor
    ]
  }

  private static greatestCommonDivisor(
    firstNumber: number,
    secondNumber: number
  ): number {
    while (secondNumber !== 0) {
      const remainder = firstNumber % secondNumber
      firstNumber = secondNumber
      secondNumber = remainder
    }

    return firstNumber
  }
}
