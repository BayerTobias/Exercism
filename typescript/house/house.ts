const parts: [string, string][] = [
  ["house that Jack built.", ""],
  ["malt", "lay in"],
  ["rat", "ate"],
  ["cat", "killed"],
  ["dog", "worried"],
  ["cow with the crumpled horn", "tossed"],
  ["maiden all forlorn", "milked"],
  ["man all tattered and torn", "kissed"],
  ["priest all shaven and shorn", "married"],
  ["rooster that crowed in the morn", "woke"],
  ["farmer sowing his corn", "kept"],
  ["horse and the hound and the horn", "belonged to"],
];

export function verse(number: number): string[] {
  const lines: string[] = [];

  lines.push(`This is the ${parts[number - 1][0]}`);

  for (let i = number - 1; i > 0; i--) {
    lines.push(`that ${parts[i][1]} the ${parts[i - 1][0]}`);
  }

  return lines;
}

export function verses(startVerse: number, endVerse: number): string[] {
  const result: string[] = [];

  for (let i = startVerse; i <= endVerse; i++) {
    result.push(...verse(i));

    if (i < endVerse) {
      result.push("");
    }
  }

  return result;
}
