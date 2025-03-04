export const COLORS: string[] = [
  "black",
  "brown",
  "red",
  "orange",
  "yellow",
  "green",
  "blue",
  "violet",
  "grey",
  "white",
];

export function decodedValue(colors: string[]): number {
  return Number(`${COLORS.indexOf(colors[0])}${COLORS.indexOf(colors[1])}`);
}
