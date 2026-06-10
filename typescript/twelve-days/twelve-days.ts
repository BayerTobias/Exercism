const days = [
  "first",
  "second",
  "third",
  "fourth",
  "fifth",
  "sixth",
  "seventh",
  "eighth",
  "ninth",
  "tenth",
  "eleventh",
  "twelfth",
];

const gifts = [
  "a Partridge in a Pear Tree",
  "two Turtle Doves",
  "three French Hens",
  "four Calling Birds",
  "five Gold Rings",
  "six Geese-a-Laying",
  "seven Swans-a-Swimming",
  "eight Maids-a-Milking",
  "nine Ladies Dancing",
  "ten Lords-a-Leaping",
  "eleven Pipers Piping",
  "twelve Drummers Drumming",
];

function createVerse(day: number): string {
  const verseGifts: string[] = [];

  for (let i = day - 1; i >= 0; i--) {
    if (i === 0 && day > 1) {
      verseGifts.push(`and ${gifts[i]}`);
    } else {
      verseGifts.push(gifts[i]);
    }
  }

  return `On the ${days[day - 1]} day of Christmas my true love gave to me: ${verseGifts.join(", ")}.\n`;
}

export function recite(startVerse: number, endVerse: number): string {
  let result = "";

  for (let day = startVerse; day <= endVerse; day++) {
    result += createVerse(day);
  }

  return result;
}
