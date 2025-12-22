export class SimpleCipher {
  private static readonly A_CODE = "a".charCodeAt(0);
  key: string;

  constructor(key?: string) {
    if (!key) {
      this.key = SimpleCipher.generateRandomKey(100);
    } else {
      if (!/^[a-z]+$/.test(key)) {
        throw new Error("Key must contain only lowercase letters");
      }
      this.key = key;
    }
  }

  encode(plainText: string): string {
    let encodedText = "";

    for (let index = 0; index < plainText.length; index++) {
      const plainLetter = plainText[index];
      const shiftAmount = this.getShiftForIndex(index);

      encodedText += SimpleCipher.shiftLetter(plainLetter, shiftAmount);
    }

    return encodedText;
  }

  decode(cipherText: string): string {
    let decodedText = "";

    for (let index = 0; index < cipherText.length; index++) {
      const cipherLetter = cipherText[index];
      const shiftAmount = this.getShiftForIndex(index);

      decodedText += SimpleCipher.shiftLetter(cipherLetter, -shiftAmount);
    }

    return decodedText;
  }

  private getShiftForIndex(index: number): number {
    const keyLetter = this.key[index % this.key.length];

    return keyLetter.charCodeAt(0) - SimpleCipher.A_CODE;
  }

  private static shiftLetter(letter: string, shift: number): string {
    const letterCode = letter.charCodeAt(0);
    const letterIndex = letterCode - SimpleCipher.A_CODE;

    const shiftedIndex = (letterIndex + shift + 26) % 26;

    return String.fromCharCode(SimpleCipher.A_CODE + shiftedIndex);
  }

  private static generateRandomKey(length: number): string {
    let key = "";

    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * 26);

      key += String.fromCharCode(SimpleCipher.A_CODE + randomIndex);
    }

    return key;
  }
}
