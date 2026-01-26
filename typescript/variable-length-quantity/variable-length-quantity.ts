export function encode(values: number[]): number[] {
  const result: number[] = [];

  for (const value of values) {
    result.push(...encodeSingle(value));
  }

  return result;
}

function encodeSingle(value: number): number[] {
  if (value === 0) return [0];

  const bytes: number[] = [];

  while (value > 0) {
    bytes.unshift(value % 128);
    value = Math.floor(value / 128);
  }

  for (let i = 0; i < bytes.length - 1; i++) {
    bytes[i] += 128;
  }

  return bytes;
}

export function decode(bytes: number[]): number[] {
  const result: number[] = [];
  let current = 0;
  let expectingMore = false;

  for (const byte of bytes) {
    current = current * 128 + (byte % 128);
    expectingMore = byte >= 128;

    if (!expectingMore) {
      result.push(current);
      current = 0;
    }
  }

  if (expectingMore) {
    throw new Error("Incomplete sequence");
  }

  return result;
}
