/** Node: node for a queue. */
// QUEUE = FIFO

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/** Queue: chained-together nodes where you can
 *  remove from the front or add to the back. */

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  /** enqueue(val): add new value to end of the queue. Returns undefined. */

  enqueue(val) {
    const newNode = new Node(val);
    
    // If there is no first node then add the new node to the first
    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else {
      // If there is a first node, then we set the last node's next value to the new node
      // and we set the last node to be the new node
      this.last.next = newNode;
      this.last = newNode;
    }
    this.size++;
  }

  /** dequeue(): remove the node from the start of the queue
   * and return its value. Should throw an error if the queue is empty. */

  dequeue() {
    if (!this.first) throw new Error(`No items in queue`);

    const firstNodeVal = this.first.val;
    if (this.first == this.last) {
      this.last = null;
    }
    // Set the first node to be the second node
    this.first = this.first.next;
    this.size--;
    return firstNodeVal;

  }

  /** peek(): return the value of the first node in the queue. */

  peek() {
    return this.first.val;
  }

  /** isEmpty(): return true if the queue is empty, otherwise false */

  isEmpty() {
    return this.size === 0;
  }
}

module.exports = Queue;
