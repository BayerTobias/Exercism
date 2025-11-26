export class ValueError extends Error {
  constructor(erroerMessage: string) {
    super(erroerMessage);
  }
}

export class BankAccount {
  status: "open" | "closed" = "closed";
  _balance = 0;

  open(): void {
    if (this.status === "closed") {
      this.status = "open";
      this._balance = 0;
    } else {
      throw new ValueError("Account already open");
    }
  }

  close(): void {
    if (this.status === "open") {
      this.status = "closed";
    } else {
      throw new ValueError("Account already closed");
    }
  }

  deposit(amount: number): void {
    this.assertOpen();
    if (amount < 0) throw new ValueError("Cannot deposit negative amount");
    this._balance += amount;
  }

  withdraw(amount: number): void {
    this.assertOpen();
    if (amount < 0) throw new ValueError("Cannot withdraw negative amount");
    if (amount > this._balance)
      throw new ValueError("Cannot withdraw more than the available balance");
    this._balance -= amount;
  }

  get balance(): number {
    this.assertOpen();
    return this._balance;
  }

  assertOpen(): void {
    if (this.status !== "open") throw new ValueError("Account is closed");
  }
}
