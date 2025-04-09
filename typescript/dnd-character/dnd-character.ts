export class DnDCharacter {
  public strength = 0;
  public dexterity = 0;
  public intelligence = 0;
  public wisdom = 0;
  public charisma = 0;
  public constitution = 0;
  public hitpoints = 10;

  constructor() {
    this.strength = DnDCharacter.generateAbilityScore();
    this.dexterity = DnDCharacter.generateAbilityScore();
    this.intelligence = DnDCharacter.generateAbilityScore();
    this.wisdom = DnDCharacter.generateAbilityScore();
    this.charisma = DnDCharacter.generateAbilityScore();
    this.constitution = DnDCharacter.generateAbilityScore();
    this.hitpoints = this.hitpoints + DnDCharacter.getModifierFor(this.constitution);
  }

  public static generateAbilityScore(): number {
    const diceRolls = [
      this.rollDice(),
      this.rollDice(),
      this.rollDice(),
      this.rollDice(),
    ];
    diceRolls.sort((a, b) => a - b);
    diceRolls.shift();

    return diceRolls.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
  }

  public static getModifierFor(abilityValue: number): number {
    return Math.floor((abilityValue - 10) / 2);
  }

  public static rollDice(): number {
    return Math.floor(Math.random() * 6) + 1;
  }
}
