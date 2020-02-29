# https://www.hackerrank.com/contests/monthly-test-attnu/challenges/thanos-vs-tony-stark/problem
# thanos vs tony

# Enter your code here. Read input from STDIN. Print output to STDOUT
def attack_strength(lyst):
    arr = []
    S_const = 1
    C_const = 2
    C_index = 0
    C_val = 0
    
    for i in range(len(lyst)):
        if lyst[i] =='C':
            C_index += 1
            C_val = C_const**C_index
            arr.append(0)
        if lyst[i] == 'S':
            if C_val == 0:
                S_val = S_const
                arr.append(S_val)
            else:
                S_val = C_val * S_const
                arr.append(S_val)
    return sum(arr)
def hack(lyst,D,count=0):
    lyst_rev = lyst[::-1]
    for i in range(len(lyst_rev)):
        if lyst_rev[i] == 'S' and lyst_rev[i+1] == 'C':
            temp = lyst_rev[i]
            lyst_rev[i] = lyst_rev[i+1]
            lyst_rev[i+1] = temp
        lyst = lyst_rev[::-1]
        attack = attack_strength(lyst)
        if attack <= D:
            return lyst,count
        else:
            count += 1
            if count == len(lyst):
                return lyst,count
            hack(lyst,D,count)

test_cases = int(input())
inp = list(list(map(str,input().split())) for i in range(test_cases))
for i in range(test_cases):
    inp[i][0] =int(inp[i][0])
    inp[i][1] = [x for x in inp[i][1]]
for i in range(test_cases):
    S = inp[i][1]
    attack = attack_strength(S)
    if inp[i][0] >= attack:
        print(0)
    else:
        lyst,count = hack(inp[i][1],inp[i][0])
        if count < len(inp[i][1]):
            print(count)
        else: 
            print('IMPOSSIBLE')

# https://www.hackerrank.com/contests/monthly-test-attnu/challenges/giant-numbers
# Giant Numbers

score = [int(x) for x in input().split()]
print(score[0]*score[1])

# https://www.hackerrank.com/contests/monthly-test-attnu/challenges/remove-duplicates-in-linked-list-1
# Remove Duplicates in a linked list

class node:
    def __init__(self,data):
        self.data = data
        self.next = None
    def __str__(self):
        return str(self.data)
class singly_ll:
    def __init__(self):
        self.head = None
        self.tail = None
    def add_end(self,data):
        new_node = node(data)
        if self.tail == None:
            self.head = new_node
            self.tail = new_node
        else:
            # current_node = self.head
            # while current_node.next:
            #     current_node = current_node.next
            # current_node.next = new_node
            self.tail.next = new_node
            self.tail = new_node
    def traverse(self):
        current_node = self.head
        while current_node:
            print(current_node.data,end=' ')
            current_node = current_node.next
    def remDup(self):
        if self.head == None:
            print('linked list is empty')
        else:
            current_node = self.head
            while current_node.next:
                if current_node.data == current_node.next.data:
                    temp_node = current_node.next.next
                    current_node.next = None
                    current_node.next = temp_node
                else: current_node = current_node.next

sll = singly_ll()
# sll.add_end(1)
# sll.add_end(2)
# sll.add_end(3)
# sll.add_end(4)
# sll.add_end(4)
# sll.add_end(4)
# sll.add_end(6)
# sll.add_end(7)
# sll.add_end(7)
lyst = list(map(int,input().rstrip().split()))
for i in lyst:
    sll.add_end(i)

# sll.traverse()
sll.remDup()
sll.traverse()

# https://www.hackerrank.com/contests/monthly-test-attnu/challenges/world-war-3-1
# World_war_3

l = list(map(int, input().rstrip().split()))
s = []
t = []
u = []
b = 0
for i in range(len(l)):
    a = l[i]
    
    for j in range(i+1,len(l)):
        if l[i] <= l[j]:
            a += l[i]
        else: break
    s.append((a)*600)
# print(s)
m = l[::-1]
for i in range(len(m)):
    b = 0
    for j in range(i+1,len(m)):
        if m[i] <= m[j]:
            b += m[i]
        else: break
    t.append(b*600)
# print(t[::-1])
v = t[::-1]
for i,j in zip(s,v):
    u.append(i+j)

# print(u)
print(max(u))

# https://www.hackerrank.com/contests/monthly-test-attnu/challenges/all-the-built-ins
# All_the_built_ins

stryng = input()
t = []
if stryng == 'list':
    l = list(map(str,input().rstrip().split()))
    s = []
    for i in range(5):
        s.append(list(map(str,input().rstrip().split())))
    for i in range(5):
        if s[i][0] == 'append':
            m = l[:]
            m.append(int(s[i][1]))
            print(*m)
        if s[i][0] == 'insert':
            m = l[:]
            m.insert(int(s[i][1]),int(s[i][2]))
            print(*m)
        if s[i][0] == 'sort':
            m = l[:]
            n = sorted(m)
            print(*n)
        if s[i][0:2] == ['separate','using']:
            m = l[:]
            print(s[i][2].join([str(i) for i in m]))
        if s[i][0] == 'reverse':
            m = l[:]
            n = m[::-1]
            print(*n)
elif stryng == 'string':
    a = input()
    for i in range(5):
        t.append(list(map(str,input().rstrip().split())))
    for i in range(5):
        if t[i][0:2] == ['all','caps']:
            print(a.upper())
        if t[i][0] == 'reverse':
            print(a[::-1])
        if t[i][0] == 'sort':
            res = ''.join(sorted(a, key=lambda v: v.upper()))
            print(res)
        if t[i][0] == 'isdigit':
            print(a.isdigit())
        if t[i][0] == 'find':
            print(a.find(t[i][1]))


# https://www.hackerrank.com/contests/monthly-test-attnu/challenges/college-library-in-trouble
# College_Library_Problem

'''
Couldn't get an idea to solve it with_in time
'''
