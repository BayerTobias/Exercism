class Node<TElement> {
  value: number;
  next: Node<TElement> | null = null;
  prev: Node<TElement> | null = null;

  constructor(value: number) {
    this.value = value;
  }
}

export class LinkedList<TElement> {
  private head: Node<TElement> | null = null;
  private tail: Node<TElement> | null = null;

  public push(value: number): void {
    const newNode = new Node(value);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
      return;
    }

    newNode.prev = this.tail;
    this.tail!.next = newNode;
    this.tail = newNode;
  }

  public pop(): number | undefined {
    if (!this.tail) return;

    const value = this.tail.value;

    if (this.tail.prev) {
      this.tail = this.tail.prev;
      this.tail.next = null;
    } else {
      this.head = null;
      this.tail = null;
    }

    return value;
  }

  public shift(): unknown {
    if (!this.head) return;

    const value = this.head.value;

    if (this.head.next) {
      this.head = this.head.next;
      this.head.prev = null;
    } else {
      this.head = null;
      this.tail = null;
    }

    return value;
  }

  public unshift(value: number): void {
    const newNode = new Node(value);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
      return;
    }

    newNode.next = this.head;
    this.head.prev = newNode;
    this.head = newNode;
  }

  public delete(value: number): void {
    let current = this.head;

    while (current) {
      if (current.value === value) {
        if (!current.prev) {
          this.head = current.next;
          if (this.head) this.head.prev = null;
        } else if (!current.next) {
          this.tail = current.prev;
          if (this.tail) this.tail.next = null;
        } else {
          current.prev.next = current.next;
          current.next.prev = current.prev;
        }

        return;
      }

      current = current.next;
    }
  }

  public count(): number {
    let count = 0;
    let current = this.head;

    while (current) {
      count++;
      current = current.next;
    }

    return count;
  }
}
