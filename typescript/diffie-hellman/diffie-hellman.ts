function isPrime(n: number): boolean {
  if (n <= 1) return false;
  if (n <= 3) return true;
  if (n % 2 === 0 || n % 3 === 0) return false;

  for (let i = 5; i * i <= n; i += 6) {
    if (n % i === 0 || n % (i + 2) === 0) return false;
  }

  return true;
}

export class DiffieHellman {
  constructor(
    private p: number,
    private g: number
  ) {
    if (!isPrime(p) || !isPrime(g)) {
      throw new Error("Arguments must be prime numbers");
    }

    if (p <= 1) throw new Error("p must be > 1");
  }

  public getPublicKey(privateKey: number): number {
    if (privateKey <= 1) throw new Error("private key must be > 1");
    if (privateKey >= this.p) throw new Error("private key must be < p");

    return Math.pow(this.g, privateKey) % this.p;
  }

  public getSecret(theirPublicKey: number, myPrivateKey: number): number {
    return Math.pow(theirPublicKey, myPrivateKey) % this.p;
  }
}
