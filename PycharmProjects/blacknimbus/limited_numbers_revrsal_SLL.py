'''
Given a linked list of size N. The task is to reverse every k nodes (where k is an input to the function) in the linked list.

Input:
First line of input contains number of testcases T. For each testcase, first line contains length of linked list and next line contains the linked list elements.

Output:
For each testcase, there will be a single line of output which contains the linked list with every k group elements reversed.

User Task:
The task is to complete the function reverse() which should reverse the linked list in group of size k.

Example:
Input:
2
8
1 2 2 4 5 6 7 8
4
5
1 2 3 4 5
3

Output:
4 2 2 1 8 7 6 5
3 2 1 5 4

Explanation:
Testcase 1: Since, k = 4. So, we have to reverse everty group of two elements. Modified linked list is as 4, 2, 2, 1, 8, 7, 6, 5.
'''
class node:
    def __init__(self,data):
        self.data = data
        self.next = None
    def __str__(self):
        return str(self.data)

class single_ll:
    def __init__(self):
        self.head = None
        self.tail = None
    def add_end(self,data):
        new_node = node(data)
        if not self.head:
            self.head = new_node
            self.tail = new_node
        else:
            current_node = self.head
            while current_node.next:
                current_node = current_node.next
            current_node.next = new_node
            self.tail = new_node
    def add_beg(self,data):
        new_node = node(data)
        if not self.head:
            self.head = new_node
            self.tail = new_node
        else:
            current_node = self.head
            new_node.next = current_node
            self.head = new_node
    def reverse(self,k,node=None):
        count = 1
        prev_node = None
        if node == None: current_node = self.head
        else: current_node = node
        while current_node and count <= k:
            temp_next_node = current_node.next
            current_node.next = prev_node
            prev_node = current_node
            current_node = temp_next_node
            count += 1
        if node == None: self.head = prev_node
        if prev_node != self.head:
            cur = self.head
            while cur.next is not None:
                cur = cur.next
            cur.next = prev_node
        node = current_node

        if node is not None:
            self.reverse(k, node)
    def traverse(self):

        current_node = self.head
        while current_node:
            print(current_node.data,end=' ')
            current_node = current_node.next



x = single_ll()

x.add_end(3)
x.add_end(7)
x.add_end(1)
x.add_end(4)
x.add_end(5)
x.add_end(9)
x.add_end(2)
x.add_end(6)
# x.add_end(8)

x.traverse()
print()

x.reverse(3)
x.traverse()

