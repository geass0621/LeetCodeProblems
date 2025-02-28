// Given the head of a sorted linked list, delete all duplicates such that each element appears only once.Return the linked list sorted as well.

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function (head) {
  let unique = new Set();
  let current = head;

  while (current) {
    unique.add(current.val);
    if (current.next && unique.has(current.next.val)) {
      current.next = current.next.next;
    } else {
      current = current.next;
    }
  }

  return head;
};

// Example 1:
console.log(deleteDuplicates([1, 1, 2])); // [1, 2]