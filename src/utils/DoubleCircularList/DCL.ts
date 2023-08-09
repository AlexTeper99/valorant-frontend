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

class MyCircularDoubleLinkedList<
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
        console.log(currentNode.data);
        currentNode = currentNode.next;

        if (currentNode === this.head) break;
      }
    }
  }
  remove(data: T): void {
    if (!this.head) {
      throw new Error("List is empty.");
    }

    let currentNode = this.head;

    // Traverse the list to find the node with the specified data
    while (currentNode && currentNode.next) {
      if (currentNode.data === data) {
        if (currentNode === this.head && currentNode === this.tail) {
          // Case 1: Only one node in the list
          this.head = null;
          this.tail = null;
        } else if (currentNode === this.head) {
          // Case 2: Node to remove is the head
          this.head = currentNode.next;
          this.head!.prev = this.tail;
          this.tail!.next = this.head;
        } else if (currentNode === this.tail) {
          // Case 3: Node to remove is the tail
          this.tail = currentNode.prev;
          this.tail!.next = this.head;
          this.head!.prev = this.tail;
        } else {
          // Case 4: Node to remove is in the middle
          const prevNode = currentNode.prev;
          const nextNode = currentNode.next;
          prevNode!.next = nextNode;
          nextNode!.prev = prevNode;
        }

        return; // Node found and removed
      }

      currentNode = currentNode.next;

      // If we have looped back to the head, then the data is not in the list
      if (currentNode === this.head) {
        throw new Error("Node not found in the list.");
      }
    }
  }

  toArray(): T[] {
    const result: T[] = [];

    let currentNode = this.head;

    while (currentNode) {
      result.push(currentNode.data);
      currentNode = currentNode.next;

      if (currentNode === this.head) break;
    }

    return result;
  }
}
