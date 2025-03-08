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

const UNITS = ["ohms", "kiloohms", "megaohms", "gigaohms"];

export function decodedResistorValue(colors: string[]): string {
  const firstDigit = COLORS.indexOf(colors[0]);
  const secondDigit = COLORS.indexOf(colors[1]);
  const zeros = COLORS.indexOf(colors[2]);

  const baseValue = Number(`${firstDigit}${secondDigit}`) * 10 ** zeros;

  let unitIndex = 0;
  let displayValue = baseValue;

  while (displayValue >= 1000 && unitIndex < UNITS.length - 1) {
    displayValue /= 1000;
    unitIndex++;
  }

  return `${displayValue} ${UNITS[unitIndex]}`;
}