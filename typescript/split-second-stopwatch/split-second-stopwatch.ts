export class SplitSecondStopwatch {
  private _state: "ready" | "running" | "stopped" = "ready";

  private _currentLap: string = "00:00:00";
  private _total: string = "00:00:00";
  private _previousLaps: string[] = [];

  constructor() {}

  public get state(): "ready" | "running" | "stopped" {
    return this._state;
  }

  public get currentLap(): string {
    return this._currentLap;
  }

  public get total(): string {
    return this._total;
  }

  public get previousLaps(): string[] {
    return this._previousLaps;
  }

  public start(): void {
    if (this.state === "running")
      throw new Error("cannot start an already running stopwatch");

    this._state = "running";
  }

  public stop(): void {
    if (this.state !== "running")
      throw new Error("cannot stop a stopwatch that is not running");

    this._state = "stopped";
  }

  public lap(): void {
    if (this.state !== "running")
      throw new Error("cannot lap a stopwatch that is not running");

    this._previousLaps.push(this._currentLap);
    this._currentLap = "00:00:00";
  }

  public reset(): void {
    if (this.state !== "stopped")
      throw new Error("cannot reset a stopwatch that is not stopped");

    this._state = "ready";
    this._currentLap = "00:00:00";
    this._total = "00:00:00";
    this._previousLaps = [];
  }

  public advanceTime(duration: string): void {
    if (this.state !== "running") return;

    const durationInSeconds = this.stringToSeconds(duration);
    const currentLapInSeconds = this.stringToSeconds(this._currentLap);
    const totalInSeconds = this.stringToSeconds(this._total);

    this._currentLap = this.secondsToString(currentLapInSeconds + durationInSeconds);
    this._total = this.secondsToString(totalInSeconds + durationInSeconds);
  }

  private stringToSeconds(time: string): number {
    const [hours, minutes, seconds] = time.split(":").map(Number);
    return hours * 3600 + minutes * 60 + seconds;
  }

  private secondsToString(seconds: number): string {
    const hours = Math.floor(seconds / 3600)
      .toString()
      .padStart(2, "0");
    const minutes = Math.floor((seconds % 3600) / 60)
      .toString()
      .padStart(2, "0");
    const secs = (seconds % 60).toString().padStart(2, "0");
    return `${hours}:${minutes}:${secs}`;
  }
}
