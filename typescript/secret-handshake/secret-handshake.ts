export function commands(number: number): string[] {
  const code: string[] = [];

  if (!number) return code;

  if (number & 1) code.push("wink");
  if (number & 2) code.push("double blink");
  if (number & 4) code.push("close your eyes");
  if (number & 8) code.push("jump");

  if (number & 16) code.reverse();

  return code;
}
