

export class GameOfLife {
  private grid: number[][];

  constructor(matrix: number[][]) {
    this.grid = matrix.map(row => [...row]); 
  }

  public state(): number[][] {
    return this.grid.map(row => [...row]); 
  }

  public tick(): void {
    const rows = this.grid.length;
    const cols = rows === 0 ? 0 : this.grid[0].length;

    const next = Array.from({ length: rows }, () =>
      Array(cols).fill(0)
    );

    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < cols; c++) {

        const liveNeighbors = this.countNeighbors(r, c);
        const cell = this.grid[r][c];

        if (cell === 1) {
    
          if (liveNeighbors === 2 || liveNeighbors === 3) {
            next[r][c] = 1;
          } else {
            next[r][c] = 0;
          }
        } else {
 
          if (liveNeighbors === 3) {
            next[r][c] = 1;
          }
        }
      }
    }

    this.grid = next;
  }

  private countNeighbors(r: number, c: number): number {
    let sum = 0;
    const dirs = [
      [-1, -1], [-1, 0], [-1, 1],
      [ 0, -1],          [ 0, 1],
      [ 1, -1], [ 1, 0], [ 1, 1],
    ];

    for (const [dr, dc] of dirs) {
      const rr = r + dr;
      const cc = c + dc;

      if (
        rr >= 0 &&
        cc >= 0 &&
        rr < this.grid.length &&
        cc < this.grid[0].length
      ) {
        sum += this.grid[rr][cc];
      }
    }

    return sum;
  }
}
