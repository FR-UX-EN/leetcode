/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

function reverseLinkedList(ll) {
    let prev = null;
    let cur = ll;

    while (cur) {
        let next = cur.next;
        cur.next = prev;
        prev = cur;
        cur = next;
    }

    return prev;
}

var addTwoNumbers = function (l1, l2) {

    let rl1 = reverseLinkedList(l1);
    let rl2 = reverseLinkedList(l2);

    let dummy = new ListNode(0);
    let cur = dummy;
    let carry = 0;

    while (rl1 !== null || rl2 !== null || carry !== 0) {
        const sum = (rl1 ? rl1.val : 0) + (rl2 ? rl2.val : 0) + carry;
        carry = Math.floor(sum / 10);

        cur.next = new ListNode(sum % 10);
        cur = cur.next;

        if (rl1) rl1 = rl1.next;
        if (rl2) rl2 = rl2.next;
    }

    return reverseLinkedList(dummy.next);
};