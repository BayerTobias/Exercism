export function count(sentence: string) : Map<string, number>{
  const lowerCase = sentence.toLocaleLowerCase();
  const words = lowerCase.match(/[a-z0-9]+(?:'[a-z0-9]+)?/g);
  const counts = new Map<string, number>();

  if (!words) return counts;

  for (const word of words) {
    counts.set(word, (counts.get(word) || 0) + 1);
  }

  return counts;
}
