export class Anagram {
  inputLowerCase: string;
  subject: string;

  constructor(input: string) {
    this.inputLowerCase = input.toLowerCase();
    this.subject = this.sort(input);
  }

  sort(word: string): string {
    return word.toLowerCase().split("").sort().join();
  }

  public matches(...potentials: string[]): string[] {
    return potentials.filter((word) => {
      const lowerCase = word.toLocaleLowerCase();

      if (lowerCase === this.inputLowerCase) return false;

      return this.sort(word) === this.subject;
    });
  }
}
