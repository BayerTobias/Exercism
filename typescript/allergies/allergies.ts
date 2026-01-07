export class Allergies {
  ALLERGENS: Record<string, number> = {
    eggs: 1,
    peanuts: 2,
    shellfish: 4,
    strawberries: 8,
    tomatoes: 16,
    chocolate: 32,
    pollen: 64,
    cats: 128,
  };

  constructor(private allergenIndex: number) {}

  public list(): string[] {
    return Object.keys(this.ALLERGENS).filter((allergen) =>
      this.allergicTo(allergen)
    );
  }

  public allergicTo(allergen: string): boolean {
    const value = this.ALLERGENS[allergen];

    return (this.allergenIndex & value) === value;
  }
}
