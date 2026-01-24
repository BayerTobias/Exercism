type BucketName = "one" | "two";

export class TwoBucket {
  private _goalBucket!: BucketName;
  private _otherBucket!: number;

  constructor(
    private bucketOneCapacity: number,
    private bucketTwoCapacity: number,
    private goalVolume: number,
    private startingBucket: BucketName,
  ) {}

  moves(): number {
    const { startCap, otherCap } = this.getCapacities();
    let startVolume = startCap;
    let otherVolume = 0;
    let moves = 1;

    const seen = new Set<string>();
    seen.add(`${startVolume},${otherVolume}`);

    const special = this.checkImmediateGoal(startVolume, otherVolume, startCap, otherCap);
    if (special) return special;

    while (!this.goalReached(startVolume, otherVolume)) {
      [startVolume, otherVolume] = this.nextStep(
        startVolume,
        otherVolume,
        startCap,
        otherCap,
      );
      moves++;

      const key = `${startVolume},${otherVolume}`;
      if (seen.has(key)) throw new Error("cant reach goal volume with given buckets");
      seen.add(key);
    }

    this.setGoalBuckets(startVolume, otherVolume);
    return moves;
  }

  private getCapacities() {
    return this.startingBucket === "one"
      ? { startCap: this.bucketOneCapacity, otherCap: this.bucketTwoCapacity }
      : { startCap: this.bucketTwoCapacity, otherCap: this.bucketOneCapacity };
  }

  private checkImmediateGoal(
    start: number,
    other: number,
    startCap: number,
    otherCap: number,
  ): number | null {
    if (start === this.goalVolume) {
      this._goalBucket = this.startingBucket;
      this._otherBucket = other;
      return 1;
    }
    if (otherCap === this.goalVolume) {
      this._goalBucket = this.startingBucket === "one" ? "two" : "one";
      this._otherBucket = start;
      return 2;
    }
    return null;
  }

  private goalReached(start: number, other: number): boolean {
    return start === this.goalVolume || other === this.goalVolume;
  }

  private nextStep(
    start: number,
    other: number,
    startCap: number,
    otherCap: number,
  ): [number, number] {
    if (start === 0) return [startCap, other];
    if (other === otherCap) return [start, 0];
    const transfer = Math.min(start, otherCap - other);
    return [start - transfer, other + transfer];
  }

  private setGoalBuckets(start: number, other: number) {
    if (start === this.goalVolume) {
      this._goalBucket = this.startingBucket;
      this._otherBucket = other;
    } else {
      this._goalBucket = this.startingBucket === "one" ? "two" : "one";
      this._otherBucket = start;
    }
  }

  get goalBucket(): BucketName {
    return this._goalBucket;
  }

  get otherBucket(): number {
    return this._otherBucket;
  }
}
