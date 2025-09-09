export function isPangram(pangram: string): boolean {
  const letters = new Set<string>();
  const sentence = pangram.toLowerCase();

  for (const char of sentence) {
    if (letters.size === 26) return true;

    if (isLetter(char)) {
      letters.add(char);
    }
  }

  return letters.size === 26;
}

function isLetter(char: string): boolean {
  return char.length === 1 && /[a-z]/i.test(char);
}
