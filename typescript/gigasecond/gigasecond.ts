export class Gigasecond {
  startDate: Date;

  constructor(date: Date) {
    this.startDate = date;
  }

  public date() {
    const GIGASECOND = 1e12;

    return new Date(this.startDate.getTime() + GIGASECOND);
  }
}
