//https://www.hackerrank.com/challenges/detect-whether-a-linked-list-contains-a-cycle

    // Complete the hasCycle function below.

    /*
     * For your reference:
     *
     * SinglyLinkedListNode {
     *     int data;
     *     SinglyLinkedListNode next;
     * }
     *
     */
    static bool hasCycle(SinglyLinkedListNode head) {

IDictionary<SinglyLinkedListNode, bool> dict = new Dictionary<SinglyLinkedListNode, bool>();
    var next = head.next;
    while(next!=null){     
    bool temp;
    if(dict.TryGetValue(next, out temp)) return true;
    else {dict[next] = true;next=next.next;}
    }
    return false;
    }

