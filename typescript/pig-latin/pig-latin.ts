export function translate(phrase: string): string {
  return phrase.split(" ").map(translateWord).join(" ");
}

function translateWord(word: string): string {
  if (/^(?:[aeiou]|xr|yt)/.test(word)) {
    return word + "ay";
  }

  const yIndex = word.slice(1).search(/y/);

  if (yIndex !== -1 && !/[aeiou]/.test(word.slice(0, yIndex + 1))) {
    const splitIndex = yIndex + 1;

    return word.slice(splitIndex) + word.slice(0, splitIndex) + "ay";
  }

  const match = word.match(/^(?:squ|sch|thr|ch|th|qu|[^aeiou]*qu|[^aeiou]+)/);

  if (match) {
    const prefix = match[0];

    return word.slice(prefix.length) + prefix + "ay";
  }

  return word + "ay";
}
