export function nucleotideCounts(dna: string) {
  const count = { A: 0, C: 0, G: 0, T: 0 };

  for (const nucleotide of dna) {
    if (nucleotide in count) {
      count[nucleotide as keyof typeof count]++;
    } else {
      throw new Error("Invalid nucleotide in strand");
    }
  }

  return count;
}
