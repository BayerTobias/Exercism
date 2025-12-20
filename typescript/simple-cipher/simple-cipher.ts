export class SimpleCipher {
  private static readonly A_CODE = "a".charCodeAt(0);
  key: string;

  constructor(key?: string) {
    if (!key) {
      this.key = SimpleCipher.generateRandomKey(100);
    } else {
      this.key = key;
    }
  }

  encode(text: string): string {
    throw new Error("Remove this line and implement the function");
  }

  decode(text: string): string {
    throw new Error("Remove this line and implement the function");
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
