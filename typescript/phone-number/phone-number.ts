export function clean(input: string): string {
  if (/[a-z]/i.test(input)) throw new Error("Letters not permitted");

  if (/[^0-9\s().+-]/.test(input)) throw new Error("Punctuations not permitted");

  const digits = input.replace(/\D/g, "");

  if (digits.length < 10) throw new Error("Incorrect number of digits");
  if (digits.length > 11) throw new Error("More than 11 digits");

  let number = digits;

  if (number.length === 11) {
    if (number[0] !== "1") throw new Error("11 digits must start with 1");

    number = number.slice(1);
  }

  if (number[0] === "0") throw new Error("Area code cannot start with zero");
  if (number[0] === "1") throw new Error("Area code cannot start with one");

  if (number[3] === "0") throw new Error("Exchange code cannot start with zero");
  if (number[3] === "1") throw new Error("Exchange code cannot start with one");

  return number;
}
