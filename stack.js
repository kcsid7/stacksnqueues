/** Node: node for a stack. */
// STACK = LIFO

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/** Stack: chained-together nodes where you can
 *  remove from the top or add to the top. */

class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  /** push(val): add new value to end of the stack. Returns undefined. */
  // Adds a value to the top of the stack

  push(val) {
    const newNode = new Node(val);

    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else {
      const prevFirstNode = this.first;
      this.first = newNode; // Add a new node to the top of the stack
      this.first.next = prevFirstNode // Point the newNode's next pointer to the previous first node
    }
    this.size++;
  }

  /** pop(): remove the node from the top of the stack
   * and return its value. Should throw an error if the stack is empty. */

  pop() {
    if (!this.first) throw new Error(`No items in stack`)
    
    const firstNodeVal = this.first.val;

    if (this.first == this.last) {
      this.last = null;
    }

    this.first = this.first.next;
    this.size--;
    return firstNodeVal;
  }

  /** peek(): return the value of the first node in the stack. */

  peek() {
    return this.first.val;
  }

  /** isEmpty(): return true if the stack is empty, otherwise false */

  isEmpty() {
    return this.size === 0;
  }
}

module.exports = Stack;
