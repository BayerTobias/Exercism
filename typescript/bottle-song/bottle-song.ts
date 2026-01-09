const NUMBER_WORDS: Record<number, string> = {
  0: "no",
  1: "one",
  2: "two",
  3: "three",
  4: "four",
  5: "five",
  6: "six",
  7: "seven",
  8: "eight",
  9: "nine",
  10: "ten",
};

function bottle(count: number): string {
  return count === 1 ? "bottle" : "bottles";
}

function capitalize(word: string): string {
  return word[0].toUpperCase() + word.slice(1);
}

function verse(count: number): string[] {
  const current = NUMBER_WORDS[count];
  const next = NUMBER_WORDS[count - 1];

  return [
    `${capitalize(current)} green ${bottle(count)} hanging on the wall,`,
    `${capitalize(current)} green ${bottle(count)} hanging on the wall,`,
    `And if one green bottle should accidentally fall,`,
    `There'll be ${next} green ${bottle(count - 1)} hanging on the wall.`,
  ];
}

export const recite = (initialBottleCount: number, takeDownCount: number): string[] => {
  const result: string[] = [];

  for (let i = 0; i < takeDownCount; i++) {
    const count = initialBottleCount - i;
    
    result.push(...verse(count));

    if (i < takeDownCount - 1) {
      result.push("");
    }
  }

  return result;
};
