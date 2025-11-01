/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
const mergeTwoLists = function(list1, list2) {
    let dummy = new ListNode(0);
    let current = dummy;

    let p1 = list1;
    let p2 = list2;

    while (p1 !== null && p2 !== null) {
        if (p1.val < p2.val) {
            current.next = p1;
            current = current.next;
            p1 = p1.next;
        } else {
            current.next = p2;
            current = current.next;
            p2 = p2.next;
        }
    }

    if (p1 === null) {
        current.next = p2;
    } else {
        current.next = p1;
    }

    return dummy.next;
};