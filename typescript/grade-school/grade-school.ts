export class GradeSchool {
  private db: Record<string, string[]> = {};

  roster(): Record<string, string[]> {
    return structuredClone(this.db)
  }

  add(name: string, grade: number): void {
    for (const [schoolGrade, students] of Object.entries(this.db)) {
      this.db[schoolGrade] = students.filter((student) => student !== name);
    }

    if (!this.db[grade]) {
      this.db[grade] = [];
    }

    this.db[grade].push(name);
    this.db[grade].sort();
  }

  grade(grade: number): string[] {
    if (!this.db[grade]) return [];

    return structuredClone(this.db[grade])
  }
}
