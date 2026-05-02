const animals = [
  {
    name: "fly",
    remark: null,
  },
  {
    name: "spider",
    remark: "It wriggled and jiggled and tickled inside her.",
  },
  {
    name: "bird",
    remark: "How absurd to swallow a bird!",
  },
  {
    name: "cat",
    remark: "Imagine that, to swallow a cat!",
  },
  {
    name: "dog",
    remark: "What a hog, to swallow a dog!",
  },
  {
    name: "goat",
    remark: "Just opened her throat and swallowed a goat!",
  },
  {
    name: "cow",
    remark: "I don't know how she swallowed a cow!",
  },
  {
    name: "horse",
    remark: "She's dead, of course!",
  },
];

export function verse(n: number): string {
  const animal = animals[n - 1];

  if (animal.name === "horse") {
    return `I know an old lady who swallowed a horse.
${animal.remark}
`;
  }

  let result = `I know an old lady who swallowed a ${animal.name}.
`;

  if (animal.remark) {
    result += `${animal.remark}
`;
  }

  for (let i = n - 1; i > 0; i--) {
    const current = animals[i];
    const prev = animals[i - 1];

    if (prev.name === "spider") {
      result += `She swallowed the ${current.name} to catch the ${prev.name} that wriggled and jiggled and tickled inside her.
`;
    } else {
      result += `She swallowed the ${current.name} to catch the ${prev.name}.
`;
    }
  }

  result += `I don't know why she swallowed the fly. Perhaps she'll die.
`;

  return result;
}

export function verses(start: number, end: number): string {
  let result = "";

  for (let i = start; i <= end; i++) {
    result += verse(i);

    if (i !== end) {
      result += "\n";
    }
  }

  return result;
}
