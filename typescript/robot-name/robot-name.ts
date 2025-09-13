export class Robot {
  private static usedNames = new Set<string>();
  private static MAX_NAMES = 26 * 26 * 1000;
  private _name!: string;

  constructor() {
    this.nameThisRobot();
  }

  public get name(): string {
    return this._name;
  }

  public resetName(): void {
    this._name = "";
    this.nameThisRobot();
  }

  public static releaseNames(): void {
    this.usedNames.clear();
  }

  private nameThisRobot(): void {
    if (Robot.usedNames.size === Robot.MAX_NAMES) return;

    while (true) {
      const name = this.generateName();

      if (!Robot.usedNames.has(name)) {
        Robot.usedNames.add(name);
        this._name = name;
        return;
      }
    }
  }

  private generateName(): string {
    const letters = this.generateRandomLetter() + this.generateRandomLetter();
    const numbers = this.generateRandomNumbers();
    const name = letters + numbers;

    return name;
  }

  private generateRandomLetter(): string {
    return String.fromCharCode(65 + Math.floor(Math.random() * 26));
  }

  private generateRandomNumbers(): string {
    return String(Math.floor(Math.random() * 1000)).padStart(3, "0");
  }
}
