const FIRST_LETTER_CODE = 'a'.charCodeAt(0)
const LAST_LETTER_CODE = 'z'.charCodeAt(0)
const GROUP_SIZE = 5

function isLetter(character: string): boolean {
  return character >= 'a' && character <= 'z'
}

function isDigit(character: string): boolean {
  return character >= '0' && character <= '9'
}

function mirrorLetter(letter: string): string {
  const charCode = letter.charCodeAt(0)
  const mirroredCode =
    LAST_LETTER_CODE - (charCode - FIRST_LETTER_CODE)

  return String.fromCharCode(mirroredCode)
}

export function encode(input: string): string {
  const cleanedCharacters: string[] = []

  for (const character of input.toLowerCase()) {
    if (isLetter(character)) {
      cleanedCharacters.push(mirrorLetter(character))
    } else if (isDigit(character)) {
      cleanedCharacters.push(character)
    }
  }

  const groups: string[] = []
  for (let i = 0; i < cleanedCharacters.length; i += GROUP_SIZE) {
    groups.push(
      cleanedCharacters.slice(i, i + GROUP_SIZE).join('')
    )
  }

  return groups.join(' ')
}

export function decode(input: string): string {
  let decoded = ''

  for (const character of input.toLowerCase()) {
    if (isLetter(character)) {
      decoded += mirrorLetter(character)
    } else if (isDigit(character)) {
      decoded += character
    }
  }

  return decoded
}