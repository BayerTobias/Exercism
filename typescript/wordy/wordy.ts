export const answer = (sentence: string) => {
  if (!sentence.startsWith("What is")) {
    throw new Error("Unknown operation");
  }

  if (!sentence.endsWith("?")) {
    throw new Error("Syntax error");
  }

  const cleaned = sentence.replace("What is ", "").replace("?", "").trim();

  if (cleaned.length === 0) {
    throw new Error("Syntax error");
  }

  const tokens = cleaned.split(" ");

  const operations: Record<string, (a: number, b: number) => number> = {
    plus: (a, b) => a + b,
    minus: (a, b) => a - b,
    multiplied: (a, b) => a * b,
    divided: (a, b) => a / b,
  };

  let result = Number(tokens[0]);

  if (Number.isNaN(result)) throw new Error("Syntax error");

  let index = 1;

  while (index < tokens.length) {
    const operationToken = tokens[index];
    const operation = operations[operationToken];

    if (!operation) {
      if (!Number.isNaN(Number(operationToken))) {
        throw new Error("Syntax error");
      }

      throw new Error("Unknown operation");
    }

    index++;

    if (operationToken === "multiplied" || operationToken === "divided") {
      if (tokens[index] !== "by") {
        throw new Error("Syntax error");
      }
      index++;
    }

    const nextNumber = Number(tokens[index]);

    if (Number.isNaN(nextNumber)) {
      throw new Error("Syntax error");
    }

    result = operation(Number(result), nextNumber);
    index++;
  }

  return result;
};
