export function isIsogram(phrase: string): boolean {
  const cleaned = phrase.toLowerCase().replace(/[^a-z]/g, "");

  const set = new Set<string>();

  for (const letter of cleaned) {
    if (set.has(letter)) return false;

    set.add(letter);
  }

  return true;
}
