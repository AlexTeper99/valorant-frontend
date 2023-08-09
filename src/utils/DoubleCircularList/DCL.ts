interface INode<T> {
  data: T;
  next: INode<T> | null;
  prev: INode<T> | null;
}

interface CircularDoubleLinkedList<T> {
  head: INode<T> | null;
  tail: INode<T> | null;
}

abstract class AbstractCircularDoubleLinkedList<T>
  implements CircularDoubleLinkedList<T>
{
  head: INode<T> | null = null;
  tail: INode<T> | null = null;

  abstract append(data: T): void;
  abstract prepend(data: T): void;
  abstract remove(data: T): void;
  //   abstract add(data: T, index : number): void;
  abstract display(): void;
  abstract toArray(): T[];
}

export class MyCircularDoubleLinkedList<
  T
> extends AbstractCircularDoubleLinkedList<T> {
  append(data: T): void {
    const newNode: INode<T> = { data, next: null, prev: null };

    if (!this.head || !this.tail) {
      this.head = newNode;
      this.tail = newNode;
      newNode.next = newNode;
      newNode.prev = newNode;
    } else {
      newNode.prev = this.tail;
      newNode.next = this.head;
      this.head.prev = newNode;
      this.tail.next = newNode;
      this.tail = newNode;
    }
  }

  prepend(data: T): void {
    const newNode: INode<T> = { data, next: null, prev: null };

    if (!this.head || !this.tail) {
      this.head = newNode;
      this.tail = newNode;
      newNode.next = newNode;
      newNode.prev = newNode;
    } else {
      newNode.next = this.head;
      newNode.prev = this.tail;
      this.head.prev = newNode;
      this.tail.next = newNode;
      this.head = newNode;
    }
  }

  display(): void {
    let currentNode = this.head;

    if (!currentNode) {
      console.log("Your DCL is empty");
    } else {
      while (currentNode) {
        console.log(currentNode);
        currentNode = currentNode.next;

        if (currentNode === this.head) break;
      }
    }
  }

  remove(_data: T): void {
    throw new Error("Method not implemented.");
  }

  toArray(): T[] {
    throw new Error("Method not implemented.");
  }
}
