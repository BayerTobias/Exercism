export class Clock {
  private totalMinutes: number;

  constructor(hour: number, minute?: number) {
    this.totalMinutes = hour * 60 + (minute ?? 0);
    this.normalizeMinutes();
  }

  public toString(): string {
    const hours = Math.floor(this.totalMinutes / 60);
    const minutes = this.totalMinutes % 60;

    const hh = String(hours).padStart(2, "0")
    const mm = String(minutes).padStart(2, "0")

    return  `${hh}:${mm}`;
  }

  public plus(minutes: number): Clock {
    this.totalMinutes += minutes;
    this.normalizeMinutes();
    return this;
  }

  public minus(minutes: number): Clock {
    this.totalMinutes -= minutes;
    this.normalizeMinutes();
    return this;
  }

  public equals(other: Clock): boolean {
    return other.totalMinutes === this.totalMinutes
  }

  normalizeMinutes(): void {
    this.totalMinutes = ((this.totalMinutes % 1440) + 1440) % 1440;
  }
}
