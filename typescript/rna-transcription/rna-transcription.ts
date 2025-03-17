export function toRna(DNA: string): string {
  if (!/^[GCTA]+$/.test(DNA)) throw new Error('Invalid input DNA.');

  return DNA.replace(/./g, (nucleotide) => {
    return { G: 'C', C: 'G', T: 'A', A: 'U' }[nucleotide]!;
  });
}