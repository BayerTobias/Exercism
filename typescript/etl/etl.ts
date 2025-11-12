export function transform(old: { [key: string]: string[] }): { [key: string]: number } {
  const newObject: { [key: string]: number } = {};

  for (const key in old) {
    const letters = old[key];

    for (const letter of letters) {
      newObject[letter.toLocaleLowerCase()] = Number(key);
    }
  }

  return newObject;
}
