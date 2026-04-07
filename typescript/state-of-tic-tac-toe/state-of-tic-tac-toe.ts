export const gamestate = (board: string[]): string => {
  const flat = board.join("");

  const xCount = [...flat].filter((c) => c === "X").length;
  const oCount = [...flat].filter((c) => c === "O").length;

  const winLine = (a: string, b: string, c: string) => a !== " " && a === b && b === c;

  const checkWin = (player: string) =>
    (winLine(board[0][0], board[0][1], board[0][2]) && board[0][0] === player) ||
    (winLine(board[1][0], board[1][1], board[1][2]) && board[1][0] === player) ||
    (winLine(board[2][0], board[2][1], board[2][2]) && board[2][0] === player) ||
    (winLine(board[0][0], board[1][0], board[2][0]) && board[0][0] === player) ||
    (winLine(board[0][1], board[1][1], board[2][1]) && board[0][1] === player) ||
    (winLine(board[0][2], board[1][2], board[2][2]) && board[0][2] === player) ||
    (winLine(board[0][0], board[1][1], board[2][2]) && board[0][0] === player) ||
    (winLine(board[0][2], board[1][1], board[2][0]) && board[0][2] === player);

  const xWon = checkWin("X");
  const oWon = checkWin("O");

  if (oCount > xCount) {
    throw new Error("Wrong turn order: O started");
  }

  if (xCount > oCount + 1) {
    throw new Error("Wrong turn order: X went twice");
  }

  if (xWon && oWon) {
    throw new Error("Impossible board: game should have ended after the game was won");
  }

  if (xWon && xCount !== oCount + 1) {
    throw new Error("Impossible board: game should have ended after the game was won");
  }

  if (oWon && xCount !== oCount) {
    throw new Error("Impossible board: game should have ended after the game was won");
  }

  if (xWon || oWon) return "win";

  if (!flat.includes(" ")) return "draw";

  return "ongoing";
};
