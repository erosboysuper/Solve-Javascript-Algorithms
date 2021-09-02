const mergeTwoLists = function(l1, l2) {
    let result = new ListNode(),
    node = result;
    while (l1 && l2) {
        if (l1.val < l2.val) {
            node.next = l1;
            l1 = l1.next;
            node = node.next;
            continue;
        }
        node.next = l2;
        l2 = l2.next;
        node = node.next;
    }
    node.next = l1 || l2;
    return result.next;
};
