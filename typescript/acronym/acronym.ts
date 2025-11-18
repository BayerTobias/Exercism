export function parse(phrase: string): string {
  const words = phrase.match(/[A-Z]?[a-z]+|[A-Z]+/g);

  if (!words) return "";

  return words.map((w) => w[0].toUpperCase()).join("");
}
