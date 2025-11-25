export function encode(input: string): string {
  if (!input) return "";

  let encodedString = "";
  let count = 1;
  let currentChar = input[0];

  for (let i = 1; i < input.length; i++) {
    if (input[i] === currentChar) {
      count++;
    } else {
      encodedString += (count > 1 ? count : "") + currentChar;
      currentChar = input[i];
      count = 1;
    }
  }

  encodedString += (count > 1 ? count : "") + currentChar;

  return encodedString;
}

export function decode(input: string): string {
  if (!input) return "";

  let decodedString = "";
  let count = "";

  for (const character of input) {
    if (/[0-9]/.test(character)) {
      count += character;
    } else {
      const times = count === "" ? 1 : Number(count);
      decodedString += character.repeat(times);
      count = "";
    }
  }

  return decodedString;
}
