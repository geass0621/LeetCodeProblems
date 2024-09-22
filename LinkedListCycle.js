class ListNode {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}



var hasCycle = function (head) {
  if (!head) {
    return false;
  }
  let map = new Map();
  let fast = head.next;
  let slow = head;
  while (fast !== null) {
    if (fast === slow) {
      return true;
    }
    if (!fast.next) {
      return false
    } else {
      fast = fast.next.next;
      slow = slow.next;
    }


  }
  return false;
};

