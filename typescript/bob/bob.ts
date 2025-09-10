export function hey(message: string): string {
  const sentence = message.trim();

  if (isSilence(sentence)) {
    return "Fine. Be that way!";
  }

  if (isQuestion(sentence) && isShouting(sentence)) {
    return "Calm down, I know what I'm doing!";
  }

  if (isShouting(sentence)) {
    return "Whoa, chill out!";
  }

  if (isQuestion(sentence)) {
    return "Sure.";
  }

  return "Whatever.";
}

function isQuestion(sentence: string): boolean {
  return sentence.endsWith("?");
}

function isShouting(sentence: string): boolean {
  const hasLetters = /[a-z]/i.test(sentence);
  return hasLetters && sentence.toUpperCase() === sentence;
}

function isSilence(sentence: string): boolean {
  return sentence === "";
}
