export class Matrix {
  private matrixRows: number[][];

  constructor(matrix: string) {
    this.matrixRows = matrix.split("\n").map((row) => row.split(" ").map(Number));
  }

  get rows(): number[][] {
    return this.matrixRows;
  }

  get columns(): number[][] {
    return this.matrixRows[0].map((_, colIndex) =>
      this.matrixRows.map((row) => row[colIndex])
    );
  }
}
